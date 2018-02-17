import React from 'react'
import ReactDOM from 'react-dom'
import Map from './map'
import List from './list'

class App extends React.Component { 
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <header>
                    <h1>PintNow</h1>
                </header>
                <Map />
                <List data={[]}/>
            </div>
        )
    }
}

ReactDOM.render( <App/>, document.getElementById('app'));