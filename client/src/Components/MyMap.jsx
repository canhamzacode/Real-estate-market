import { useState, useEffect } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Button from "./Button";

function MyMap() {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 6,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport((prevViewport) => ({
        ...prevViewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      }));
    });
  }, []);

  const handleMarkerDrag = (event) => {
    setViewport({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
    });
  };
  useEffect(() => {
    console.log(viewport);
  }, [viewport]);
  return (
    <div className="mt-[40px] flex flex-col gap-2">
      <h2 className="text-2xl mb-3"> Select Property Location</h2>
      {viewport.latitude && viewport.longitude && (
        <Map
          {...viewport}
          onMove={(event) => setViewport(event.viewState)}
          style={{ width: "100%", height: 500 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken={import.meta.env.VITE_MAP_API}
        >
          <Marker
            longitude={viewport.longitude}
            latitude={viewport.latitude}
            onDrag={handleMarkerDrag}
          />
        </Map>
      )}
      <Button text="Next" />
      <Button text="Prev" />
    </div>
  );
}

export default MyMap;
