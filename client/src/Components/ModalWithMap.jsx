import { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function ModalWithMap() {
  const [showModal, setShowModal] = useState(false);
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 3.5,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: viewport.zoom,
      });
    });

    // Initialize Mapbox GL instance when the modal is opened
    if (showModal) {
      const map = new mapboxgl.Map({
        container: "mapboxgl-map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [viewport.longitude, viewport.latitude],
        zoom: viewport.zoom,
      });

      // Add a marker at the user's location
      const marker = new mapboxgl.Marker();
      marker.setLngLat([viewport.longitude, viewport.latitude]);
      marker.addTo(map);
    }
  }, [showModal, viewport]);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div
              className="mapboxgl-map"
              style={{ width: "700px", height: "300px" }}
              id="mapboxgl-map"
            ></div>
          </div>
          <button onClick={() => setShowModal(false)}>Close Modal</button>
        </div>
      )}
    </div>
  );
}

export default ModalWithMap;
