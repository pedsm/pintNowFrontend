import React from 'react'
import Dialog, {DialogTitle, DialogContent, DialogActions, DialogContentText} from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { host } from './utils'

export default class PubForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            price: 0,
            error: false
        }
    }

    prettyDistance(distance) {
        return distance < 1 ? `${Math.round(distance * 1000)}m` : `${Math.round(distance * 100) / 100}km`
    }

    handleChange(e) {
        e.persist()
        if(e.target.value) {
            console.log(e.target.value)
            this.setState(prev => Object.assign(prev, {price: e.target.value}))
        }
    }

    async handleSubmit(e) {
        if(this.state.price <= 10 && this.state.price > 0.10) {
           try {
               const res = await fetch(`${host}/pubs/price`, {
                   method: "POST",
                   body: {
                       id: this.props.pub.id,
                       price: Math.round(this.state.price * 100)
                   }
               })
               console.log(await res.json())
               this.closeModal.bind(this)()
           } catch (e) {
                console.error(e)
           }
        } else {
            this.setState(prev => Object.assign(prev, { error: true }))
        }
    }

    closeModal() {
        this.setState(prev => Object.assign(prev, { error: false }))
        this.props.close()
    }

    render() {
        const { pub, show } = this.props
        return (
            <Dialog
                open={show}
                keepMounted
                onClose={this.closeModal.bind(this)}
            >
                <DialogTitle id="alert-dialog-slide-title" children={pub.name} />
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        You are submiting this pint price to <b>{pub.name}</b>. <br/>
                        {pub.name} is {this.prettyDistance(pub.distance)} away. <br/>
                        {this.state.error ? <span style={{color:'red'}}>The value you put in is not valid</span>: ''}
                    </DialogContentText>
                    <TextField
                        onChange={this.handleChange.bind(this)}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Price (£)"
                        type="number"
                        fullWidth
                        inputProps={{steps: 0.01, max: 10, min: 0.10}}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleSubmit.bind(this)}> Submit Pint </Button>
                </DialogActions>
            </Dialog>
        )
    }

}