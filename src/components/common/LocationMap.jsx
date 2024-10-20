import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import fetchAddress from './GoogleService';


const LocationMap = ({ initialPosition = { lat: 19.1991586, lng: 72.93504949999999 }, onAddressChange, children, isLoaded }) => {
  const [position, setPosition] = useState(initialPosition);
  const [markerPosition, setMarkerPosition] = useState(initialPosition);
  useEffect(() => {
    setMarkerPosition(position);
  }, []);

  useEffect(() => {
    const getAddress = async () => {
      try {
        if (position) {
          const formattedAddress = await fetchAddress(position.lat, position.lng);
          onAddressChange(formattedAddress);
        }
      } catch (error) {
        console.error('Error', error);
      }
    };
    getAddress();
  }, [position]);

  const handleMapLoad = (map) => {
    map.addListener('click', (event) => {
      const newPosition = {
        lat: event?.latLng?.lat() ?? 19.1991586,
        lng: event?.latLng?.lng() ?? 72.93504949999999,
      };
      setPosition(newPosition);
      setMarkerPosition(newPosition);
    });
  };

  const onLocationChange = (event) => {
    setPosition({
      lat: event?.latLng?.lat() ?? 19.1991586,
      lng: event?.latLng?.lng() ?? 72.93504949999999,
    });
  };

  return isLoaded ? (
    <div id="map" style={{ width: '100%', height: '100%' }}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={initialPosition}
        zoom={15}
        onLoad={handleMapLoad}
        options={{ disableDefaultUI: true }}
        onClick={onLocationChange}
      >
        <MarkerF
          position={markerPosition}
          draggable
          onDragEnd={onLocationChange}
        />
      </GoogleMap>
      {children}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default LocationMap;

