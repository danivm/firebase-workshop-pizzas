import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import './index.scss'

class MyPizzas extends Component {
  render () {
    const { pizzas } = this.props
    return (
      <div className="myPizzas">
        <Typography gutterBottom variant="headline" component="h2">
          My Pizzas
        </Typography>
        {pizzas.map((pizza, i) => (
          <Card key={i} className="myPizzas-card">
            <CardMedia
              className="myPizzas-media"
              image={
                pizza.image || 'https://dribbble.com/shots/1926787-Pizza-Logo'
              }
              title="Pizza"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {pizza.name}
              </Typography>
              <Typography component="p">{pizza.desc}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }
}

export default MyPizzas
