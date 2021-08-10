import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

export default function Map({ data }) {
  console.log(data)

  const containerStyle = {
    width: '100%',
    height: '400px',
  }

  const defaultCenter = {
    lat: Number(data.lat),
    lng: Number(data.lng),
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.MAPS_API_KEY,
  })

  return isLoaded ? (
    <GoogleMap center={defaultCenter} mapContainerStyle={containerStyle} zoom={9}>
      <Marker position={defaultCenter} />
    </GoogleMap>
  ) : null
}
