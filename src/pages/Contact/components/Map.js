import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import locationIcon from "../../../assets/icons/placeholder.png";
import L from "leaflet";
//import map styles
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";

function Map() {
  const { contactDetails } = useSelector((state) => state.contactDetails);
  console.log(contactDetails);
  const position = [
    contactDetails?.address_long || 41.3159168,
    contactDetails?.address_long || 69.291544,
  ];
  const customIcon = L.icon({
    iconUrl: locationIcon,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
  });

  return (
    <MapContainer
      className="h-full z-0"
      center={position}
      zoom={17}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>{contactDetails?.address || "Loading"}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
