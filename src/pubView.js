import React from 'react'
import Dialog, {DialogTitle, DialogContent, DialogActions, DialogContentText} from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import { prettyPrice } from './utils'

export default class PubView extends React.Component {
    prettyDistance(distance) {
        return distance < 1 ? `${Math.round(distance * 1000)}m` : `${Math.round(distance * 100) / 100}km`
    }
    render() {
        const { pub, close, show } = this.props
        return (
            <Dialog
                open={show}
                keepMounted
                onClose={close}
            >
                <DialogTitle id="alert-dialog-slide-title" children={pub.name} />
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Pint price: {prettyPrice(pub.pricePence)}<br />
                        Address: {pub.address}<br />
                        Postcode: {pub.postcode}<br />
                        Distance: {this.prettyDistance(pub.distance)}<br />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={close} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        )
    }

}