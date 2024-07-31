import { Container, Navbar, Nav } from "react-bootstrap";

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Dia Jubara</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">About Me</Nav.Link>
                        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link href="/resume">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Header;
