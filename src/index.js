import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Map from './map'
import List from './list'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

class App extends React.Component { 
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <h1>PintNow</h1>
                    </Toolbar>
                </AppBar>
                <Map />
                <List data={[]}/>
            </Fragment>
        )
    }
}

ReactDOM.render( <App/>, document.getElementById('app'));