import React, { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import bg_image from "../assets/bg_image.jpg";

const Current_weather = () => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "9ec9107c56ed224dee544746cd9307ee";

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setLocation({ lat, lon });

          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          )
            .then((res) => {
              if (!res.ok) throw new Error(`API error: ${res.status}`);
              return res.json();
            })
            .then((data) => {
              setWeather(data);
              setLoading(false);
            })
            .catch((err) => {
              console.error("Error fetching weather:", err);
              setError("⚠️ Could not fetch weather data.");
              setLoading(false);
            });
        },
        (error) => {
          console.error("Error getting location:", error);
          setError("⚠️ Location access denied.");
          setLoading(false);
        }
      );
    } else {
      setError("⚠️ Geolocation is not supported by this browser.");
      setLoading(false);
    }
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bg_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        minWidth: "99vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start", 
        paddingTop: "2rem", 
      }}
    >
      <h2 className="text-center text-dark mb-4">
        🌍 Weather at Your Geo Location  
      </h2>

      {loading ? (
        <Spinner animation="border" />
      ) : error ? (
        <p className="text-light">{error}</p>
      ) : weather ? (
        <Card
          style={{
            width: "22rem",
            borderRadius: "12px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            backgroundColor: "rgba(255,255,255,0.9)",
            padding: "1rem",
          }}
        >
          <Card.Body className="d-flex flex-column gap-2">
            <Card.Title className="mb-3">
              🌤️ Weather at Your Location
            </Card.Title>
            <div className="d-flex flex-column">
              <strong>Latitude:</strong> {location?.lat ?? "N/A"}
            </div>
            <div className="d-flex flex-column">
              <strong>Longitude:</strong> {location?.lon ?? "N/A"}
            </div>
            <div className="d-flex flex-column">
              <strong>Temperature:</strong> {weather?.main?.temp ?? "N/A"} °C
            </div>
            <div className="d-flex flex-column">
              <strong>Humidity:</strong> {weather?.main?.humidity ?? "N/A"}%
            </div>
            <div className="d-flex flex-column">
              <strong>Condition:</strong>{" "}
              {weather?.weather?.[0]?.description ?? "N/A"}
            </div>
          </Card.Body>
        </Card>
      ) : (
        <p className="text-light">⚠️ No weather data available.</p>
      )}
    </div>
  );
};

export default Current_weather;
