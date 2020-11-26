import React, { Component } from 'react'
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {CssBaseline, Typography} from '@material-ui/core'
import { blueGrey, deepOrange } from '@material-ui/core/colors'
import ProductList from './ProductList'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[500]
    },
    secondary: {
      main: deepOrange[500]
    }
  }
})

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cars: {
        car01: {
          name: 'Toyota',
          price: 500
        },
        car02: {
          name: 'Honda',
          price: 400
        },
        car03: {
          name: 'Nissan',
          price: 300
        },
      }
    }
    this.incrementCarPrice = this.incrementCarPrice.bind(this)
    this.decrementCarPrice = this.decrementCarPrice.bind(this)
  }

  incrementCarPrice(id) {
    // const tmp = Object.assign({}, this.state.cars)
    const tmp = {...this.state.cars}
    tmp[id].price = tmp[id].price + 10
    this.setState({
      cars: tmp
    })
  }
  decrementCarPrice(id) {
    // const tmp = Object.assign({}, this.state.cars)
    const tmp = {...this.state.cars}
    tmp[id].price = tmp[id].price - 10
    this.setState({
      cars: tmp
    })
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Typography variant='h3' component='h1' style={{textAlign:'center', marginTop:15}}>
          Product App
        </Typography>
        <ProductList
          cars={this.state.cars}
          incrementCarPrice={this.incrementCarPrice}
          decrementCarPrice={this.decrementCarPrice}
          />
      </ThemeProvider>
    )
  }
}
