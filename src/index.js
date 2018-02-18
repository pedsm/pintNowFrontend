import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Map from './map'
import List from './list'
import Typography from 'material-ui/Typography'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu'
import { theme } from './theme'
import Icon from 'material-ui/Icon/Icon';
import PubView from './pubView'
import PubForm from './pubForm'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            online: navigator.onLine,
            location: false,
            pubs: [],
            currentPub: {
                name: ""
            },
            showForm: false,
            showModal: false,
            position: {
                lat: 0,
                lon: 0
            }
        }

        window.addEventListener('online', () => {
            this.setState(prev => Object.assign(prev, {online:true}))
        });
        window.addEventListener('offline', () => {
            this.setState(prev => Object.assign(prev, {online:false}))
        });
    }
    componentDidMount() {
        this.updateAll.bind(this)()
    }

    updateAll() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords
                this.setState((prev, props) => {
                    const state = Object.assign(prev)
                    state.position = {
                        lat: latitude,
                        lon: longitude
                    }
                    state.location = true
                    this.fetchPubs(latitude, longitude)
                    console.log('Updated position')
                    return state
                })
            });
        } 

    }

    async fetchPubs(lat, lon) {
        const data = await fetch(`http://localhost:8080/pubs?lat=${lat}&lon=${lon}&num=${50}`)
        const json = await data.json()
        this.setState((prev, props) => {
            const state = Object.assign(prev)
            state.pubs = json
            console.log('Updated pubs')
            return state
        })

    }
    showPub(pub) { this.setState(prev => Object.assign(prev, { showModal: true, currentPub: pub })) }
    closeModal() { this.setState(prev => Object.assign(prev, { showModal: false })) }

    showForm() { this.setState(prev => Object.assign(prev, { showForm: true })) }
    closeForm() { this.setState(prev => Object.assign(prev, { showForm: false })) }

    render() {
        if(this.state.location === false) {
            return (
                <div style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
                    <AppBar position="static">
                        <Toolbar>
                            <h1>PintNow</h1>
                            <div style={{ marginRight: 0, marginLeft: 'auto', display: 'flex' }}>
                                <MenuItem onClick={this.updateAll.bind(this)}><Icon style={{ color: 'white' }}>refresh</Icon></MenuItem>
                                <MenuItem disabled={!this.state.online} onClick={this.showForm.bind(this)}><Icon style={{ color: 'white' }}>add</Icon></MenuItem>
                            </div>
                        </Toolbar>
                    </AppBar>
                    <Typography style={{ margin: '40vh 20px' }}>
                        Please enable location to use the application. You may need to go into settings to do so if you have refused it
                        <br />
                        <Icon>location_off</Icon>
                    </Typography>
                </div>
            )
        }
        return (
            <Fragment>
                <PubView show={this.state.showModal} close={this.closeModal.bind(this)} pub={this.state.currentPub} />
                {this.state.pubs.length > 0 ? <PubForm show={this.state.showForm} close={this.closeForm.bind(this)} pub={this.state.pubs[0]} /> : <span />}
                <AppBar position="static">
                    <Toolbar>
                        <h1>PintNow</h1>
                        <div style={{ marginRight: 0, marginLeft: 'auto', display: 'flex' }}>
                            <MenuItem onClick={this.updateAll.bind(this)}><Icon style={{ color: 'white' }}>refresh</Icon></MenuItem>
                            <MenuItem disabled={!this.state.online} onClick={this.showForm.bind(this)}><Icon style={{ color: 'white' }}>add</Icon></MenuItem>
                        </div>
                    </Toolbar>
                </AppBar>
                {this.state.online ? <Map position={this.state.position} pubs={this.state.pubs} show={this.showPub.bind(this)} /> :
                    <div>
                        <Typography style={{ margin: '20px auto', textAlign: 'center' }}>Maps do not work offline <Icon>signal_wifi_off</Icon></Typography>
                    </div>}
                <List position={this.state.position} pubs={this.state.pubs} show={this.showPub.bind(this)} />
            </Fragment>
        )
    }
}

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('app'));


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () =>
        navigator.serviceWorker.register('serviceWorker.js')
            .then(registration => console.log('Service Worker registered'))
            .catch(err => 'SW registration failed'));
}


// Handle connection
window.addEventListener('load', function () {
    function updateOnlineStatus(event) {
        if (navigator.onLine) {
            // handle online status
            console.log('online');
        } else {
            // handle offline status
            console.log('offline');
        }
    }

  });