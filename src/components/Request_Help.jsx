import React, { useState, useEffect } from "react";
import { Button, Form, Spinner, Container } from "react-bootstrap";
import emailjs from "emailjs-com";

function Request_Help() {
  const [location, setLocation] = useState(null);
  const [place, setPlace] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const SERVICE_ID = "service_s7jypy9";
  const TEMPLATE_ID = "template_s9hnesn";
  const PUBLIC_KEY = "V_MXcq4sJGXaiKgja";

  useEffect(() => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        setLocation({ lat, lon });

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
          );
          const data = await res.json();
          setPlace(data.display_name || "Unknown location");
        } catch {
          setPlace("Unknown location");
        }
        setLoading(false);
      },
      () => {
        setPlace("Unable to fetch location");
        setLoading(false);
      },
      { enableHighAccuracy: true } 
    );
  }, []);

  const sendHelpRequest = () => {
    const templateParams = {
      user_name: "John",
      user_message: message || "Help! I need assistance.",
      latitude: location?.lat || "N/A",
      longitude: location?.lon || "N/A",
      place: place || "N/A",
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        alert("🚨 Help request sent successfully!");
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        alert("⚠️ Failed to send help request.");
      });
  };

  return (
    <Container className="my-5 full_height">
      <h2 className="mb-4 text-center">🚨 Request Help</h2>

      <div style={{ minHeight: "180px" }} className="cont">
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" />
            <p>Fetching your location...</p>
          </div>
        ) : (
          <>
            <p><strong>Current Latitude:</strong> {location?.lat}</p>
            <p><strong>Current Longitude:</strong> {location?.lon}</p>
            <p><strong>Current Place:</strong> {place}</p>

            <Form.Group className="mb-3">
              <Form.Label>Additional Message (optional)</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>

            <Button variant="danger" onClick={sendHelpRequest}>
              Send Help Request
            </Button>
          </>
        )}
      </div>
    </Container>
  );
}

export default Request_Help;
