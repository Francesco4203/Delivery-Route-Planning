import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import ScriptTag from "react-script-tag/lib/ScriptTag";

function MapBox() {
  <ScriptTag src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDb0JylAh2lmanpChp9pCFmdeA4Fpajrr4&libraries=places" />
  const [address, setAddress] = React.useState('');

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    console.log(latLng);
    setAddress(value);
  };

  return (
      <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input {...getInputProps({ placeholder: 'Type address' })} />
            <div>
              {loading ? <div>Searching...</div> : null}

              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    
  );
}

export default MapBox;