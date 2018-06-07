import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import materialApp from './materialApp'
import MyPizzas from './myPizzas'
import AddPizza from './addPizza'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  }
}

class App extends Component {
  state = {
    user: null,
    create: false,
    pizzas: {},
    page: 'list'
  }

  addPizza = newPizza => {
    const { pizzas } = this.state
    const id = Date.now()
    pizzas[id] = newPizza
    this.setState({ pizzas })
  }

  deletePizza = id => {
    const { pizzas } = this.state
    delete pizzas[id]
    this.setState({ pizzas })
  }

  handleClickCreate = () => {
    this.setState({ page: 'create' })
  }

  render () {
    const { pizzas, page } = this.state
    const { classes } = this.props
    return (
      <div className="appContainer">
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Firebase Pizza
            </Typography>
            <Button
              color="inherit"
              onClick={() => {
                this.setState({ page: 'list' })
              }}
            >
              List
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                this.setState({ page: 'create' })
              }}
            >
              Create
            </Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        {page === 'list' ? (
          <MyPizzas pizzas={pizzas} deletePizza={this.deletePizza} />
        ) : (
          <AddPizza addPizza={this.addPizza} />
        )}
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default materialApp(withStyles(styles)(App))
