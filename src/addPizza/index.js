import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import PizzaIcon from '@material-ui/icons/LocalPizza'
import Typography from '@material-ui/core/Typography'

import './index.scss'

class AddPizza extends Component {
  state = {
    name: '',
    desc: '',
    image: null
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const pizza = this.state
    this.props.addPizza(pizza)
    this.setState({ name: '', desc: '', image: null })
  }

  render () {
    return (
      <div className="addPizza">
        <Typography
          gutterBottom
          variant="headline"
          component="h2"
          align="center"
        >
          Add a new pizza!
        </Typography>
        <form className="addPizza-form" onSubmit={this.handleSubmit}>
          <input type="file" onChange={this.handleChange('image')} />
          <TextField
            id="name"
            className="addPizza-form-input addPizza-form-name"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            id="desc"
            className="addPizza-form addPizza-form-desc"
            onChange={this.handleChange('desc')}
            label="Description"
            value={this.state.desc}
            multiline
            rows="6"
            margin="normal"
            fullWidth
          />
          <br />
          <Button variant="contained" color="primary" type="submit">
            YUM!
            <PizzaIcon />
          </Button>
        </form>
      </div>
    )
  }
}

export default AddPizza
