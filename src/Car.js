import { Box, Button, Typography, withStyles } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import React from 'react'

const styles = (theme) => ({
    car: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        padding: theme.spacing(2),
        justifyContent: 'space-between'
    }
})

const Car = (props) => {
    const {classes} = props
    return (
        <Box className={classes.car} component='div'>
            <Typography variant='h6'>
                {props.name}
            </Typography>
            <Typography>
                {props.price}
            </Typography>
            <Box component='div'>
                <Button color='secondary' variant='contained' onClick={props.incrementPrice}>
                    <AddCircleOutlineIcon/>
                </Button>
                <Button color='primary' variant='contained' onClick={props.decrementPrice}>
                    <RemoveCircleOutlineIcon/>
                </Button>
            </Box>
        </Box>
    )
}

export default withStyles(styles)(Car)
