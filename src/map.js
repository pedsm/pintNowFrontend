import React from 'react'
import { Map, Scene } from 'react-arcgis';



export default class CustomMap extends React.Component {
    render() {
        return (
            <div style={{width:'100%', height:400}}>
                <Map/>
            </div>
        )
    }
}