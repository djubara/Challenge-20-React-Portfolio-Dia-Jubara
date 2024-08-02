
export default function ProjectPage(props) {
    return (
        < div >
            <h2>{props.project.name}</h2>
            <p>{props.project.description}</p>
            <h4>Technical Specification</h4>
            <ul>
                {props.project.specification.map((spec, index) => <li key={index}>{spec}</li>)}
            </ul>
        </div >
    )
}