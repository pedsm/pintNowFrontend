import React from 'react'

export default class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "pubs": [{ "name": "Anchor Inn", "address": "Upper Street, Stratford St Mary, COLCHESTER, Essex", "postcode": "CO7 6LW", "latitude": "51.970390", "longitude": "0.979328" },
            { "name": "Angel Inn", "address": "Egremont Street, Glemsford, SUDBURY, Suffolk", "postcode": "CO10 7SA", "latitude": "52.094427", "longitude": "0.668408" },
            { "name": "Black Boy Hotel", "address": "7 Market Hill, SUDBURY, Suffolk", "postcode": "CO10 2EA", "latitude": "52.038683", "longitude": "0.730226" },
            { "name": "Black Horse", "address": "Lower Street, Stratford St Mary, COLCHESTER, Essex", "postcode": "CO7 6JS", "latitude": "51.966211", "longitude": "0.972091" },
            { "name": "Angel Inn", "address": "Egremont Street, Glemsford, SUDBURY, Suffolk", "postcode": "CO10 7SA", "latitude": "52.094427", "longitude": "0.668408" },
            { "name": "Black Boy Hotel", "address": "7 Market Hill, SUDBURY, Suffolk", "postcode": "CO10 2EA", "latitude": "52.038683", "longitude": "0.730226" },
            { "name": "Black Horse", "address": "Lower Street, Stratford St Mary, COLCHESTER, Essex", "postcode": "CO7 6JS", "latitude": "51.966211", "longitude": "0.972091" },
            ]
        }
    }

    render() {
        return (
            <div style={styles.main}>
                {this.state.pubs.map((pub, i) => (
                    <div key={i} style={styles.pubListing}>
                        <h3>{pub.name}</h3>
                        <p style={{float:'right'}}>£2</p>
                        <p>{pub.address}</p>
                        <p>{pub.postcode}</p>
                    </div>
                ))}
            </div>
        )
    }
}

const styles = {
    main: {
        maxHeight: 300,
        overflow: 'scroll'
    },
    pubListing: {
        margin: 0,
        padding: 10,
        borderTop: '1px lightgrey solid',
    }
}