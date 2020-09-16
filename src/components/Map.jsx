import React, { useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";

export default function Map() {
  const apiKey = process.env.REACT_APP_MAPBOX_KEY;
  const [viewport, setViewport] = useState({
    latitude: 45.7740009,
    longitude: 4.9736587,
    width: "1000px",
    height: "800px",
    zoom: 15,
  });
  return (
    <div>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={apiKey}
        mapStyle="mapbox://styles/amine69/ckf5hw4ck2mwu19r29ujznphp"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        <Marker key="1" longitude={4.9736587} latitude={45.7740009}>
          <button className="fcv-button">FCV-Taekwondo</button>
        </Marker>
      </ReactMapGl>
    </div>
  );
}
