import { Paper, Typography, withStyles } from '@material-ui/core'
import React from 'react'
import Cars from './Cars'

const styles = (theme) => ({
    paper: {
        margin: `${theme.spacing(3)}px auto`,
        padding: theme.spacing(3),
        maxWidth: 600,
    },
    title: {
        textAlign: 'center'
    }
})

const ProductList = (props) => {
    const {classes} = props
    return (
        <Paper className={classes.paper}>
            <Typography className={classes.title} variant='h4'>
                Products                
            </Typography>
            <Cars
                cars={props.cars}
                incrementCarPrice={props.incrementCarPrice}
                decrementCarPrice={props.decrementCarPrice}
            />
            {/* <Electronics/> */}
            {/* <Clothes/> */}
        </Paper>
    )
}

export default withStyles(styles)(ProductList)
