import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

function Header(props: IHeaderProps) {
    return (
        props.links && <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">{props.brand}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {props.links.map(link =>
                            <Nav.Link as={Link} to={link === 'Home' ? '/' : link.toLowerCase()} key={link}>{link}</Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header