import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import iconMarker from './marker.svg';

const markers = [
  {position: { lat: 37.7135994, lng: -122.0986296 }},
  {position: { lat: 37.8119992, lng: -122.2436687 }}
];

const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBFAFILkeB76hNERneb_-hFSzOB2gRxk5s&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '500px' }} />,
    mapElement: <div style={{ height: '100%' }} />
  }),
  withScriptjs,
  withGoogleMap)(props => (
    <GoogleMap defaultZoom={18} defaultCenter={{ lat: 37.7135961, lng: -122.0986033 }}>
      {props.isMarkerShow && (
        markers.map((marker, index) => (<Marker key={index} position={marker.position} icon={ iconMarker } />))
      )}
    </GoogleMap>
  ));

export default MapComponent;
