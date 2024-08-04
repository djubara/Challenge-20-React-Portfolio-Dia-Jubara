import { Image } from "react-bootstrap"

export default function ProjectPage(props) {
    return (
        <div className="gap-2">
            <Image src={props.project.thumbnail} fluid className="pb-3" width="300px" />
            <section>
                <h2>{props.project.name}</h2>
                <p>{props.project.description}</p>
            </section>

            <section>
                <h4>Tools Used on This Project</h4>
                <ul>
                    {props.project.specification.map((spec, index) => <li key={index}>{spec}</li>)}
                </ul>
            </section>
            <section>
                <h4>External Links</h4>
                <a href={props.project.repoUrl} target="_blank">GitHub Repository</a>
                {props.project.deployedUrl !== "" && (
                    <>
                        <br />
                        <a href={props.project.deployedUrl} target="_blank">Deployed Application</a>
                    </>
                )}
            </section>
        </div>
    )
}