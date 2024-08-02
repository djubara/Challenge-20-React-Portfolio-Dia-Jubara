const htmlEl = document.querySelector('html')

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => e.matches && theme.forceDark())
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", e => e.matches && theme.forceLight())

const theme = {
    apply: () => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme) {
            htmlEl.setAttribute("data-bs-theme", storedTheme)
        } else {
            theme.matchSystem()
        }
    },
    forceDark: () => {
        localStorage.setItem("theme", "dark")
        theme.apply()
    },

    forceLight: () => {
        localStorage.setItem("theme", "light")
        theme.apply()
    },

    matchSystem: () => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            theme.forceDark()
        } else {
            theme.forceLight()
        }
        localStorage.removeItem("theme")

    }
}

theme.apply()

export default theme