import { useState, useEffect } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Button from "./Button";

function MyMap({ onPrev, formData, onFormChange }) {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 6,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [locationInfo, setLocationInfo] = useState("");

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  useEffect(() => {
    const fetchCurrentLocation = async () => {
      try {
        const position = await getCurrentPosition();

        setViewport({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          zoom: 12,
        });

        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${
            position.coords.longitude
          },${position.coords.latitude}.json?access_token=${
            import.meta.env.VITE_MAP_API
          }`
        );
        const data = await response.json();

        if (data.features.length > 0) {
          const locationName = data.features[0].place_name;

          setLocationInfo(
            `Location: ${locationName}, ${position.coords.latitude}, ${position.coords.longitude}`
          );
        } else {
          setLocationInfo("Location not found");
        }
      } catch (error) {
        console.error("Error fetching current location:", error);
      }
    };

    fetchCurrentLocation();
  }, []);

  const handleMarkerDrag = (event) => {
    const newViewport = {
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
    };
    setViewport(newViewport);

    setLocationInfo(
      `Location: ${newViewport.latitude.toFixed(
        6
      )}, ${newViewport.longitude.toFixed(6)}`
    );

    onFormChange("address", {
      long: newViewport.longitude,
      lat: newViewport.latitude,
    });
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery}.json?access_token=${
          import.meta.env.VITE_MAP_API
        }`
      );
      const data = await response.json();

      if (data.features.length > 0) {
        const newViewport = {
          latitude: data.features[0].geometry.coordinates[1],
          longitude: data.features[0].geometry.coordinates[0],
        };
        setViewport(newViewport);

        const locationName = data.features[0].place_name;
        setLocationInfo(
          `Location: ${locationName}, ${newViewport.latitude}, ${newViewport.longitude}`
        );

        onFormChange("address", {
          long: newViewport.longitude,
          lat: newViewport.latitude,
        });
      } else {
        setLocationInfo("Location not found");
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  useEffect(() => {
    onFormChange("address", {
      long: viewport.longitude,
      lat: viewport.latitude,
    });
  }, [viewport]);

  useEffect(() => {
    if (searchQuery) {
      handleSearch();
    }
  }, [searchQuery]);

  return (
    <div className="mt-[40px] flex flex-col gap-2">
      <h2 className="text-2xl mb-3">Select Property Location</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search location..."
          className="border p-2 text-black placeholder:text-black"
        />
        <button
          onClick={handleSearch}
          className="bg-[#33b37b] text-white px-4 py-2"
        >
          Search
        </button>
      </div>
      <h1>{locationInfo ? locationInfo : "Location: "}</h1>
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
      <Button text="Prev" onClick={onPrev} />
    </div>
  );
}

export default MyMap;
