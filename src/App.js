import React, { Component } from 'react'
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {CssBaseline, Typography} from '@material-ui/core'
import { blueGrey, deepOrange } from '@material-ui/core/colors'
import ProductList from './ProductList'
import MyProvider from './MyProvider'

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

  render() {
    return (
      <MyProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Typography variant='h3' component='h1' style={{textAlign:'center', marginTop:15}}>
            Product App
          </Typography>
          <ProductList/>
        </ThemeProvider>
      </MyProvider>
    )
  }
}
