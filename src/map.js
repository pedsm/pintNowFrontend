import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export default class CustomMap extends React.Component {
    render() {
        const Map = withGoogleMap((props) =>
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
            </GoogleMap>)
        return (
            <Map
                containerElement={<div id="map" style={{ width: '100%', height: 400 }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )
    }
}
                // googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwMLCQoQ87aUbk-r7HXxtVXnTnx0ocnuY&callback=initMap"