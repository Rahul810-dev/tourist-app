import { Container, Row, Col, Card, Image } from "react-bootstrap";
import Gemini_Photo from "../assets/Gemini_Photo.png";

function About() {
  return (
    <div
      className="py-5 full_height"
      style={{ backgroundColor: "#f8f9fa", width: "99vw" }}
    >
      <Container>
        <h2
          className="text-center mb-4"
          style={{ fontFamily: "Arial, sans-serif", fontSize: "2.2rem" }}
        >
          About Us
        </h2>
        <Row className="align-items-stretch">
          {/* Left Column: Text */}
          <Col md={6} className="d-flex">
            <Card
              className="p-4 shadow-sm border-0 w-100 ,boxShadow:0 0 5px rgba(0,0,0,0.4)"
              style={{ height: "100%",borderRadius:"50px"}}
            >
              <Card.Body>
                <Card.Text
                  style={{
                    fontSize: "1.3rem",
                    lineHeight: "1.8",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  The <strong>Smart Tourist Safety System</strong> is
                  designed to make traveling safer and worry-free. Whether
                  you’re exploring bustling cities or remote destinations, our
                  platform ensures your journey remains smooth and secure.
                </Card.Text>

                <ul
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "1.2rem",
                    lineHeight: "1.8",
                  }}
                >
                  <li>Real-time maps with accurate location tracking</li>
                  <li>Live weather updates for your exact location</li>
                  <li>Emergency SOS & Help requests with instant alerts</li>
                  <li>Safer route suggestions to guide your travel</li>
                </ul>

                <Card.Text
                  style={{
                    fontSize: "1.2rem",
                    fontFamily: "Arial, sans-serif",
                    lineHeight: "1.8",
                  }}
                >
                  With <strong>Smart Tourist Safety System</strong>, every
                  journey becomes smarter, safer, and stress-free.  
                  <br />
                  <br />
                  <em>“Travel Smart. Travel Safe.”</em>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Column: Image */}
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={Gemini_Photo}
                alt="Smart Tourist Safety System"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50px",
                  boxShadow:"0 0 5px rgba(0,0,0,0.4)"
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
