import React from 'react'
import { withGoogleMap, GoogleMap, Marker, MarkerClusterer } from 'react-google-maps'
import { compose, withHandlers, withProps } from 'recompose'

export default class CustomMap extends React.Component {
    render() {
        const { pubs, position } = this.props
        const Map = compose(
            withGoogleMap,
        )(props =>
            <GoogleMap
                defaultZoom={14}
                defaultCenter={{ lat: position.lat, lng: position.lon }}
            >
                    {pubs.map((pub, i) => {
                        const pos = pub.location.split(',').map(a => parseFloat(a))
                        const objPos = { lat: pos[0], lng: pos[1] }
                        return <Marker
                            position={objPos}
                            title={pub.name}
                            clickable={true}
                            key={i}
                        />
                    })}
                </GoogleMap>)
        return (
            <Map
                containerElement={<div id="map" style={{ width: '100%', height: 400 }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )
    }
}