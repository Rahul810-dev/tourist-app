import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer
      className="text-white py-4"
      style={{ backgroundColor: "#1E3A8A", marginTop: "0" }}
    >
      <Container>
        {/* Top Section */}
        <Row className="justify-content-between align-items-start">
          {/* Quick Links */}
          <Col xs={12} md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled m-0">
              <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#about" className="text-white text-decoration-none">About</a></li>
              <li><a href="#features" className="text-white text-decoration-none">Features</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          <Col xs={12} md={4} className="mb-3">
            <h5>Contact</h5>
            <p className="mb-1">📍 India</p>
            <p className="mb-1">📧 support@touristsafetyapp.com</p>
            <p className="mb-0">☎️ +91 98765 43210</p>
          </Col>

          <Col
            md={4}
            className="d-none d-md-flex flex-column align-items-end mb-3"
          >
            <h5>Follow Us</h5>
            <div>
              <a href="#" className="text-white text-decoration-none me-3">🌐 Twitter</a>
              <a href="#" className="text-white text-decoration-none me-3">🔗 LinkedIn</a>
              <a href="#" className="text-white text-decoration-none">💻 GitHub</a>
            </div>
          </Col>
        </Row>

        <Row className="d-flex d-md-none text-center mt-3">
          <Col>
            <h5>Follow Us</h5>
            <div>
              <a href="#" className="text-white text-decoration-none me-3">🌐 Twitter</a>
              <a href="#" className="text-white text-decoration-none me-3">🔗 LinkedIn</a>
              <a href="#" className="text-white text-decoration-none">💻 GitHub</a>
            </div>
          </Col>
        </Row>

        <hr className="border-light" />

        <Row>
          <Col className="text-center">
            <small>
              © {new Date().getFullYear()} Smart Tourist Safety System. All Rights Reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
