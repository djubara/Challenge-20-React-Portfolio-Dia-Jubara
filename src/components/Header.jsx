import { Container, Navbar, Nav } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import theme from "../assets/theme";

function Header() {
    return (
        <Navbar expand="sm" className="bg-body-secondary px-3">
            <Container fluid>
                <Navbar.Brand href="/" style={{ fontWeight: "bold" }}>Dia Jubara</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">About Me</Nav.Link>
                        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link href="/resume">Resume</Nav.Link>
                    </Nav>

                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Change Theme
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={theme.forceLight}>☀️ Light</Dropdown.Item>
                            <Dropdown.Item onClick={theme.forceDark}>🌑 Dark</Dropdown.Item>
                            <Dropdown.Item onClick={theme.matchSystem}>🌗 System</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Header;
