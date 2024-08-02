import { Image } from 'react-bootstrap';
import profilePic from '../assets/img/profile-pic.png';

export default function AboutMePage() {
    return (
        <div>

            <Image style={{ width: "150px" }} roundedCircle src={profilePic} alt="Profile Picture" />
            <br />
            <br />
            <h1>About Me</h1>
            <br />

            <p>
                Results-driven, hands-on IT professional with extensive experience in Solution Architecture and Enterprise Architecture, specializing in Healthcare (Clinical, Claims, Provider, and Members) and Financial (Retail Banking, Trust Operations, Treasury and Brokerage, Mortgage, Compliance, AML, and Fraud) sectors. Demonstrated expertise in delivering effective solutions to complex IT challenges and bringing alignment between IT and Business. Architectural skills that are complemented by thought leadership, effective collaboration skills, excellent documentation, and presentation capabilities. Proven track record in facilitative leadership, C-level presentations, and visualization, with a passion for continuous research and learning to deliver value to the Enterprise.
            </p>

            <section>
                <p>Check out my Github or LinkedIn profile today!</p>
            </section>
        </div>
    );
}