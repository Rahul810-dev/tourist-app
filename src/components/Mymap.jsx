import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const createColoredIcon = (color, size = 16, border = 2) =>
  L.divIcon({
    className: "custom-div-icon",
    html: `<span style="
      display:inline-block;
      width:${size}px;
      height:${size}px;
      background:${color};
      border:${border}px solid white;
      border-radius:50%;
      box-shadow:0 0 2px rgba(0,0,0,0.4);
      transform: translateY(-${Math.ceil(size/2)}px);
    "></span>`,
    iconSize: [size, size],
    popupAnchor: [0, -size - 6],
  });

function Recenter({ latlng, zoom }) {
  const map = useMap();
  useEffect(() => {
    if (latlng) {
      map.flyTo(latlng, zoom ?? 13, { duration: 1.2 });
    }
  }, [latlng, zoom, map]);
  return null;
}

function MyMap() {
  const defaultCenter = [20.5937, 78.9629];

  const touristPlaces = [
    { name: "Taj Mahal, Agra", coords: [27.1751, 78.0421] },
    { name: "Hawa Mahal, Jaipur", coords: [26.9239, 75.8267] },
    { name: "Qutub Minar, Delhi", coords: [28.5244, 77.1855] },
    { name: "Gateway of India, Mumbai", coords: [18.9218, 72.8347] },
    { name: "Baga Beach, Goa", coords: [15.5402, 73.7514] },
    { name: "Alleppey Backwaters, Kerala", coords: [9.4981, 76.3388] },
    { name: "Varanasi Ghats, Varanasi", coords: [25.3176, 82.9739] },
    { name: "Khajuraho Temples, Khajuraho", coords: [24.8313, 79.9196] },
  ];

  const dangerPlaces = [
    { name: "Danger Zone 1 (restricted/unsafe)", coords: [26.5, 76.7] },
    { name: "Danger Zone 2 (unsafe)", coords: [24.0, 78.5] },
    { name: "Danger Zone 3 (unsafe)", coords: [22.2, 82.1] },
    { name: "Danger Zone 4 (unsafe)", coords: [19.0, 83.0] },
    { name: "Danger Zone 5 (unsafe)", coords: [17.5, 77.9] },
  ];

  const greenIcon = createColoredIcon("#2ecc71", 14); 
  const redIcon = createColoredIcon("#e74c3c", 14);   
  const blueIcon = createColoredIcon("#3388ff", 18);  

  const [userLocation, setUserLocation] = useState(null);
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [geoError, setGeoError] = useState(null);

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setGeoError("Geolocation not available in this browser.");
      const fallback = touristPlaces[0].coords;
      setUserLocation(fallback);
      setMapCenter(fallback);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setUserLocation([lat, lng]);
        setMapCenter([lat, lng]);
      },
      (err) => {
        setGeoError(err.message || "Geolocation error");
        const fallback = touristPlaces[0].coords;
        setUserLocation(fallback);
        setMapCenter(fallback);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }, []); 

  return (
    <div className="map-wrapper " style={{margin :"50px", height:"90vh"}}>
      <MapContainer center={mapCenter} zoom={6} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {userLocation && (
          <>
            <Marker position={userLocation} icon={blueIcon}>
              <Popup>
                <strong>Your location</strong>
                <div>
                  {geoError ? (
                    <div style={{ color: "orange" }}>
                      (geolocation unavailable — showing fallback: {touristPlaces[0].name})
                    </div>
                  ) : (
                    <div>Exact location from browser geolocation</div>
                  )}
                </div>
              </Popup>
            </Marker>
            <Recenter latlng={userLocation} zoom={12} />
          </>
        )}

        {touristPlaces.map((t, idx) => (
          <Marker key={`tour-${idx}`} position={t.coords} icon={greenIcon}>
            <Popup>
              <strong>{t.name}</strong>
              <div>Famous tourist spot</div>
            </Popup>
          </Marker>
        ))}

        {dangerPlaces.map((d, idx) => (
          <Marker key={`danger-${idx}`} position={d.coords} icon={redIcon}>
            <Popup>
              <strong style={{ color: "#c0392b" }}>Danger — {d.name}</strong>
              <div>Marked as dangerous (example). Verify with local authorities before visiting.</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MyMap;
