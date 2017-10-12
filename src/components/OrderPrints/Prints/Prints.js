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
                    <img src='https://photos-4.dropbox.com/t/2/AADx7nJksVxYfroQrIDEgloMDfIyMW7x7i1X8Bcxn2eVIA/12/148812236/jpeg/32x32/3/1507849200/0/2/DSC_0141.jpg/EOCF53EYwjMgAigC/2yf2nCkyPmZ_5Oq_lgmy7xnPFkSpv6m95UxeRClku54%2CFhxh9KqgKMN4boUf0M72jhFGd9axshvSPn50gNkgDOs%2C7d89hXJ8BolDeJ6qN8gQ4YDgFeURj00glZsWYb7ko1g%2Cfj8Zq4lteHTNSBFYUACStnyJraQ8GU-8DUCbpymvws4%2CfHMi5NfcqFL1NzcSC0mv6a9B9SrypnGLrYjY8l_2ZBA%2CWjKzwAC8HNHmEkPLXvyvDLcy9d35MDwqFVO7E3hk-wA%2CDH-dAMSMToT9Ab2jhAXyeXtzvWFgfYl6QwMH68LGiLQ?dl=0&size=2048x1536&size_mode=3' height='600px' width='800px' />
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