// src/components/FloodMap.js

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fetch the GeoJSON file
const fetchGeoJson = async () => {
  const response = await fetch("flood_clusters.geojson");
  const data = await response.json();
  return data;
};

const FloodMap = () => {
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    // Load the GeoJSON data when the component mounts
    fetchGeoJson().then(setGeojsonData);
  }, []);

  const style = (feature) => {
    const clusterId = feature.properties.cluster_id;
    // Customize the colors based on the cluster_id (e.g., flood severity)
    let color = "blue";
    if (clusterId === 0) color = "green";
    if (clusterId === 1) color = "orange";
    if (clusterId === 2) color = "red";
    return {
      color,
      weight: 1,
      opacity: 1,
      fillColor: color,
      fillOpacity: 0.5,
    };
  };

  return (
    <MapContainer
      style={{ height: "100vh", width: "100%" }}
      center={[51.505, -0.09]} // Center of the map
      zoom={5} // Adjust the zoom level as needed
    >
      {/* Tile layer for map background */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Render GeoJSON if the data is loaded */}
      {geojsonData && (
        <GeoJSON data={geojsonData} style={style} />
      )}
    </MapContainer>
  );
};

export default FloodMap;
