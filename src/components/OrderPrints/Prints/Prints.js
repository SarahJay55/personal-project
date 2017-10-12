import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import pub_key from './stripeKey.js';
import './Prints.css';
import axios from 'axios';
import { getPrints } from './../../../ducks/reducer.js';

class Prints extends Component {
    constructor() {
        super()

        this.state = {
            prints: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/prints/' + this.props.printsId)
    }

    
    onToken = (token) => {
        token.card = void 0;
        axios.post('http://localhost:3000/api/payment', { token, amount: 100} )
            .then(response => {
                alert("Payment Received")
            })
    }
    render() {
        return (
            <div>
            <div>
                <h1>Prints page</h1>
                <a href='http://localhost:3005/auth'><button>Log in</button></a>
                <a href='http://localhost:3005/auth/logout'><button>Log out</button></a>
            </div>
            <StripeCheckout
                token={this.onToken}
                stripeKey={pub_key}
                amount={1000}
            />
            </div>
        )
    }
}

export default Prints;