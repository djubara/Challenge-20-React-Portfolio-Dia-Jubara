import IconLink from "./IconLink";
import GitHubSVG from "../assets/svg/github.svg";
import LinkedInSVG from "../assets/svg/linkedin.svg";

function Footer() {
    return (
        <div className="d-flex justify-content-center align-items-center gap-2 bg-body-secondary">
            {/* github link */}
            <IconLink link="https://github.com/djubar" icon={GitHubSVG} alt="github" />

            {/* linkedin link */}

            <IconLink link="https://www.linkedin.com/in/applicationarchitect/" icon={LinkedInSVG} alt="linkedin" />
        </div>
    )
}

export default Footer;