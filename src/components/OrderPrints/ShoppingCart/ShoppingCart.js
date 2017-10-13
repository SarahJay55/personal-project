import React, { Component } from 'react';
import './ShoppingCart.css';
import { removeFromCart } from './../../../ducks/reducer.js';
import { addToCart } from './../../../ducks/reducer.js';
import { getCart } from './../../../ducks/reducer.js'
import { connect } from 'react-redux';

class ShoppingCart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cart: []
        }
    }

    componentDidMount() {
        this.props.getCart();
    }

    render() {
        const myCart = this.props.cart.map((items, i) => {
            return (
                <div key={i}>
                    {/* <button onClick={}><span>{cart.cart}</span></button> */}
                    </div>
            )
        })
        return (
            <div>
                <h1>Cart</h1>
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, { getCart })(ShoppingCart);
                