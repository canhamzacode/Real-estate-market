import { useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const data = {
  address: {
    long: 4.668083280212159,
    lat: 8.477843173808651,
  },
  type: "fdfiurw",
  price: "kkjdffjkdfj",
  size: "klfgkgfkjgf",
  bedrooms: "42",
  amenities: "skdffdkj",
  description: "ofoioreior",
  email: "kfdkdfk",
  pictures: [
    "https://example.com/picture1.jpg",
    "https://example.com/picture2.jpg",
    "https://example.com/picture3.jpg",
  ],
};

function ProductMap() {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 8,
  });

  useEffect(() => {
    setViewport({
      latitude: data.address.lat,
      longitude: data.address.long,
      zoom: 8,
    });
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {viewport.latitude && viewport.longitude && (
        <Map
          {...viewport}
          onMove={(event) => setViewport(event.viewState)}
          style={{ width: "100%", height: 300 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken={import.meta.env.VITE_MAP_API}
          dragPan={false}
        >
          <Marker
            longitude={viewport.longitude}
            latitude={viewport.latitude}
            draggable={false}
          />
        </Map>
      )}
    </div>
  );
}

export default ProductMap;
