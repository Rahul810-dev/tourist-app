import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Mynavbar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#1E3A8A"}}
>
      <Container fluid>
        <Navbar.Brand href="#home" className='custom-head'>Tourist Safety App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex justify-content w-20 custom-nav">
            <Nav.Link href="/">Weather</Nav.Link>
            <Nav.Link href="/map">View Map</Nav.Link>
            <Nav.Link href="/request-help">Request-Help</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mynavbar;