import React, { Fragment } from 'react'
import { withGoogleMap, GoogleMap, Marker, MarkerClusterer } from 'react-google-maps'
import { compose, withHandlers, withProps } from 'recompose'
import Button from 'material-ui/Button';
import * as R from 'rambda'

export default class CustomMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
        }
    }

    shouldComponentUpdate(nextProps, nextState) { return !R.equals(this.props.pubs, nextProps.pubs) }
    openModal(pub) { this.setState(prev => Object.assign(() => {showModal: true, pub})) }
    closeModal() { this.setState(prev => Object.assign(prev, {showModal:false})) }


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
                        onClick={(item) => {
                            this.props.show(pub)
                        }}
                        position={objPos}
                        title={pub.name}
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