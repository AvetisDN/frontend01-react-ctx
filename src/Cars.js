import { Typography, withStyles } from '@material-ui/core'
import React from 'react'
import Car from './Car'
import MyContext from './MyContext'

const styles = (theme) => ({
    title: {
        color: theme.palette.primary.main
    }
})

const Cars = (props) => {
    const {classes} = props
    return (
        <MyContext.Consumer>
            {(context) => (
                <div>
                    <Typography className={classes.title} variant='h5'>
                        Cars:
                    </Typography>
                    {Object.keys(context.cars).map(carID => (
                        <Car
                            key={carID}
                            name={context.cars[carID].name}
                            price={context.cars[carID].price}
                            incrementPrice = {() => {context.incrementCarPrice(carID)}}
                            decrementPrice = {() => {context.decrementCarPrice(carID)}}
                        />
                    ))}
                </div>
            )}
        </MyContext.Consumer>
    )
}

export default withStyles(styles)(Cars)
