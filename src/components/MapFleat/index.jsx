import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function MapFleat({ location }) {
  const position = [location.latitude || 51.505, location.longitude || -0.09]

  return (
    <MapContainer center={position} id="mapid" scrollWheelZoom={false} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
