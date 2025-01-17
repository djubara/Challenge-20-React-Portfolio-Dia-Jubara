import "./assets/portfolio.css";
import { projects } from "./assets/projectsDesc";
import Project from "./components/Project";


export default function PortfolioGallery() {
    return (
        <div className="">
            <h1 className="pb-4">Portfolio</h1>
            <div className="d-flex justify-content-center">
                <div id="project-container" className="d-flex flex-wrap justify-content-center align-items-center">
                    {projects.map((project) => <Project project={project} key={project.urlName} />)}
                </div>
            </div>
        </div>
    );
}