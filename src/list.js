import React, { Fragment } from 'react'
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Icon from 'material-ui/Icon';
import Divider from 'material-ui/Divider';
import { prettyPrice } from './utils'

export default class PubList extends React.Component {
    chooseIcon(distance) {
        if(distance < 1.5) {
            return "directions_run"
        }else if(distance < 3.0){
            return "directions_bus"
        }else if(distance < 10.0){
            return "directions_car"
        }
        return "airplanemode_active"
    }
    render() {
        return (
            <List style={styles.main}>
                {this.props.pubs.length > 0 ? this.props.pubs.map((pub, i) => (
                    <Fragment key={i}>
                        <ListItem button onClick={() => {this.props.show(pub)}}>
                            <Avatar>
                                <Icon style={{ fontSize: 30 }}>{this.chooseIcon(pub.distance)}</Icon>
                            </Avatar>
                            <ListItemText primary={pub.name} secondary={prettyPrice(pub.pricePence)} />
                        </ListItem>
                        <Divider inset component="li" />
                    </Fragment>
                )): <span>Loading...</span>}
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