import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import pub_key from './stripeKey.js';
import './Prints.css';
import axios from 'axios';
import { getPrints } from './../../../ducks/reducer.js';
import { connect } from 'react-redux';

class Prints extends Component {
    constructor(props) {
        super(props)

        this.state = {
            prints: []
        }
    }

    componentDidMount() {
        this.props.getPrints();
    }


    onToken = (token) => {
        token.card = void 0;
        axios.post('http://localhost:3000/api/payment', { token, amount: 100} )
            .then(response => {
                alert("Payment Received")
            })
    }
    render() {
        const tableOfPrints = this.props.prints.map((print, i) => {
            return (
                <div key={i}>
                    <img src={print.print_url} alt='mountainview' height='400px' width='600px' />
                    <span>{print.print_name}</span>
                    <span>{print.price}</span>
                    </div>
            )
        })
        return (
            <div>
            <div>
                <h1>Prints page</h1>
                <a href='http://localhost:3005/auth'><button>Log In</button></a>
                <a href='http://localhost:3005/auth/logout'><button>Log Out</button></a>
            </div>
            <StripeCheckout
                token={this.onToken}
                stripeKey={pub_key}
                amount={1000}
            />
            <div>
                {tableOfPrints}
            </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        prints: state.prints
    }
}

export default connect(mapStateToProps, { getPrints })(Prints);