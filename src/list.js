import React, { Fragment } from 'react'
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Icon from 'material-ui/Icon';
import Divider from 'material-ui/Divider';

export default class PubList extends React.Component {
    render() {
        return (
            <List style={styles.main}>
                {this.props.pubs.map((pub, i) => (
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