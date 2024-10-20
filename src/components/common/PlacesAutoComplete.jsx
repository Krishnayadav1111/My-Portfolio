import React, { useEffect, useRef } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import CustomTextField from '../common/TextField'

const PlacesAutoComplete = (props) => {
    const isLoaded = props.isLoaded;
    const autocompleteRef = useRef(null);

  useEffect(() => {
    if (isLoaded && !autocompleteRef.current) {
      autocompleteRef.current = new google.maps.places.Autocomplete(
        document.getElementById(props.id)
      );

      autocompleteRef?.current?.addListener('place_changed', () => {
        const place = autocompleteRef.current.getPlace();
        props.onPlaceSelect({ place });
      });
    }
  }, [isLoaded, props.onPlaceSelect])

  return isLoaded ? (
    <CustomTextField
      id={props.id}
      label={props.label}
      placeholder={props.placeholder ?? 'Search location'}
      name={props.name}
      onChange={() => {}}
      size = "small"
      sx={{ backgroundColor: 'white' }}
      
    />
  ) : <p>Loading...</p>;
};

export default PlacesAutoComplete;
