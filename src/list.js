import React, { Fragment } from 'react'
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Icon from 'material-ui/Icon';
import Divider from 'material-ui/Divider';

export default class PubList extends React.Component {
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
            <List style={styles.main}>
                {this.state.pubs.map((pub, i) => (
                    <Fragment key={i}>
                        <ListItem>
                            <Avatar>
                                <Icon style={{ fontSize: 30 }}>directions_run</Icon>
                            </Avatar>
                            <ListItemText primary={pub.name} secondary={'£2'} />
                        </ListItem>
                        <Divider inset component="li" />
                    </Fragment>
                ))}
            </List>
        )
    }
}

const styles = {
    main: {
        overflowY: 'scroll'
    },
    pubListing: {
        margin: 0,
        padding: 10,
        borderTop: '1px lightgrey solid',
    }
}