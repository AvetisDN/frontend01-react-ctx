import { Typography, withStyles } from '@material-ui/core'
import React from 'react'
import Car from './Car'

const styles = (theme) => ({
    title: {
        color: theme.palette.primary.main
    }
})

const Cars = (props) => {
    const {classes} = props
    return (
        <div>
            <Typography className={classes.title} variant='h5'>
                Cars:
            </Typography>
            {Object.keys(props.cars).map(carID => (
                <Car
                    key={carID}
                    name={props.cars[carID].name}
                    price={props.cars[carID].price}
                    incrementPrice = {() => {props.incrementCarPrice(carID)}}
                    decrementPrice = {() => {props.decrementCarPrice(carID)}}
                />
            ))}
        </div>
    )
}

export default withStyles(styles)(Cars)
