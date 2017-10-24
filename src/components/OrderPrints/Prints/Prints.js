import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import { createStore, combineReducers } from 'redux';
import StripeCheckout from 'react-stripe-checkout';
import pub_key from './stripeKey.js';
import './Prints.css';
import axios from 'axios';
import { getPrints } from './../../../ducks/reducer.js';
import { connect } from 'react-redux';
// import ImageZoom from 'react-medium-image-zoom';
import { Link } from 'react-router-dom';


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
        axios.post('http://localhost:3000/api/payment', { token, amount: 100 })
            .then(response => {
                alert("Payment Received")
            })
    }
    render() {
        const tableOfPrints = this.props.prints.map((print, i) => {
            return (
                <div key={i} className="prints">
                    <Link to={`/orderprints/details/${print.id}`} >
                        {/* <ImageZoom image={{
                            className: '',
                            src: print.print_url,
                            alt: ''
                        }} /> */}
                        <img src={print.print_url} alt='photos' height='400px' width='600px' />
                        <span>{print.print_name}</span>
                        <span>{print.price}</span>
                    </Link>
                </div>
            )
        })
        return (
            <div>
                <div>
                    <h1 className="printsheader">Prints page</h1>
                    <a href='http://localhost:3005/auth/logout' className="loginbuttons"><button>Log Out</button></a>
                    <a href='http://localhost:3005/auth' className="loginbuttons"><button>Log In</button></a>
                </div>
                <StripeCheckout className="paybutton"
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