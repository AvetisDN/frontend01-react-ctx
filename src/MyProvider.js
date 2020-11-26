import React, { Component } from 'react'
import MyContext from './MyContext'

export default class MyProvider extends Component {
    state = {
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
    render() {
        return (
            <MyContext.Provider
                value={{
                    cars: this.state.cars,
                    incrementCarPrice: (id) => {
                        const tmpCars = {...this.state.cars}
                        tmpCars[id].price = tmpCars[id].price + 10
                        this.setState({
                            cars: tmpCars
                        })
                    },
                    decrementCarPrice: (id) => {
                        const tmpCars = {...this.state.cars}
                        tmpCars[id].price = tmpCars[id].price - 10
                        this.setState({
                            cars: tmpCars
                        })
                    }
                }}
            >
                {this.props.children}           
            </MyContext.Provider>
        )
    }
}
