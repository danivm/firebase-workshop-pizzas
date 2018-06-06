import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import PizzaIcon from '@material-ui/icons/LocalPizza'
import Typography from '@material-ui/core/Typography'

import './index.scss'

class AddPizza extends Component {
  state = {
    name: '',
    desc: ''
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  render () {
    return (
      <div className="addPizza">
        <Typography gutterBottom variant="headline" component="h5">
          Add a new pizza!
        </Typography>
        <form className="addPizza-form">
          <TextField
            id="name"
            className="addPizza-form-input addPizza-form-name"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <TextField
            id="desc"
            className="addPizza-form addPizza-form-desc"
            label="Description"
            value={this.state.desc}
            onChange={this.handleChange('desc')}
            margin="normal"
          />
          <Button variant="contained" color="primary">
            Save
            <PizzaIcon />
          </Button>
        </form>
      </div>
    )
  }
}

export default AddPizza
