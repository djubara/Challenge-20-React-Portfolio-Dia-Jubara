

export default function IconLink(props) {
    return (
        <>
            <a href={props.link} style={{ width: "50px", padding: "8px" }} target="_blank" className="bg-gray-200 rounded-full hover:bg-gray-300">
                <img src={props.icon} alt={props.alt} className="w-6 h-6 inline-block" />
            </a>

        </>
    )
}