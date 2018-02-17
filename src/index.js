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
            pubs: [], 
            position: {
                lat: 0,
                lon: 0
            }
        }
    }
    componentDidMount() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const {latitude, longitude} = position.coords
                this.setState((prev,props) => {
                    const state = Object.assign(prev)
                    state.position = {
                        lat: latitude,
                        lon: longitude
                    }
                    this.fetchPubs(latitude, longitude)
                    console.log('Updated position')
                    return state
                })
              });
        } else {
            /* geolocation IS NOT available */
        }
    }

    async fetchPubs(lat, lon) {
        const data = await fetch(`http://localhost:8080/pubs?lat=${lat}&lon=${lon}`)
        const json = await data.json()
        this.setState((prev, props) => {
            const state = Object.assign(prev)
            state.pubs = json
            console.log('Updated pubs')
            return state
        })

    }
    render() {
        return (
            <Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <h1>PintNow</h1>
                    </Toolbar>
                </AppBar>
                <Map position={this.state.position} pubs={this.state.pubs} />
                <List position={this.state.position} pubs={this.state.pubs} />
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () =>
        navigator.serviceWorker.register('serviceWorker.js')
            .then(registration => console.log('Service Worker registered'))
            .catch(err => 'SW registration failed'));
}