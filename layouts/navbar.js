
import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"


const NavbarExample = () => {
    return(
        <>
        <Navbar className="navBg" bg="primary" variant="dark" >
            <Container>
            <Navbar.Brand as={Link} to="/">Desafío React Node</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/archivo" >Archivos</Nav.Link>
                <Nav.Link as={Link} to="/credito">Creditos</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        <section>
            <Outlet></Outlet>
        </section>

        </>
    )
}

export default NavbarExample