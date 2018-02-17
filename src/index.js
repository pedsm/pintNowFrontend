import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Map from './map'
import List from './list'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

class App extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            "pubs": [{ "name": "Anchor Inn", "address": "Upper Street, Stratford St Mary, COLCHESTER, Essex", "postcode": "CO7 6LW", "latitude": "51.970390", "longitude": "0.979328" },
            { "name": "Angel Inn", "address": "Egremont Street, Glemsford, SUDBURY, Suffolk", "postcode": "CO10 7SA", "latitude": "52.094427", "longitude": "0.668408" },
            { "name": "Black Boy Hotel", "address": "7 Market Hill, SUDBURY, Suffolk", "postcode": "CO10 2EA", "latitude": "52.038683", "longitude": "0.730226" },
            { "name": "Black Horse", "address": "Lower Street, Stratford St Mary, COLCHESTER, Essex", "postcode": "CO7 6JS", "latitude": "51.966211", "longitude": "0.972091" },
            { "name": "Angel Inn", "address": "Egremont Street, Glemsford, SUDBURY, Suffolk", "postcode": "CO10 7SA", "latitude": "52.094427", "longitude": "0.668408" },
            { "name": "Black Boy Hotel", "address": "7 Market Hill, SUDBURY, Suffolk", "postcode": "CO10 2EA", "latitude": "52.038683", "longitude": "0.730226" },
            { "name": "Black Horse", "address": "Lower Street, Stratford St Mary, COLCHESTER, Essex", "postcode": "CO7 6JS", "latitude": "51.966211", "longitude": "0.972091" }, ]
        }
    }
    render() {
        return (
            <Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <h1>PintNow</h1>
                    </Toolbar>
                </AppBar>
                <Map pubs={this.state.pubs} />
                <List pubs={this.state.pubs}/>
            </Fragment>
        )
    }
}

ReactDOM.render( <App/>, document.getElementById('app'));


if('serviceWorker' in navigator) {
    window.addEventListener('load', () =>
    navigator.serviceWorker.register('serviceWorker.js')
      .then(registration => console.log('Service Worker registered'))
      .catch(err => 'SW registration failed'));
}