import React from 'react'
import Markers from './markers'
import { Map, Scene } from 'react-arcgis';



export default class CustomMap extends React.Component {
    render() {
        return (
            <div style={{ width: '100%', height: 400 }}>
                <Map
                    viewProperties={{
                        center: [-1.554717, 52.37777],
                        zoom: 6
                    }}
                >
                    <Markers pubs={this.props.pubs} />
                </Map>
            </div>
        )
    }
}