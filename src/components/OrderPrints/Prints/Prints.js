import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import { createStore, combineReducers } from 'redux';
// import StripeCheckout from 'react-stripe-checkout';
// import pub_key from './stripeKey.js';
import './Prints.css';
import Cart from './../Cart/Cart.js'
import axios from 'axios';
import { getPrints } from './../../../ducks/reducer.js';
import { connect } from 'react-redux';
import ImageZoom from 'react-medium-image-zoom';
import { checkout } from './../../../ducks/reducer.js';
// import { Link } from 'react-router-dom';
import { setOnePrintOnRedux, addPrintToCart } from './../../../ducks/reducer.js';



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

    addToCart(print) {
        this.props.addPrintToCart(print);
    }

    // checkoutAndRedirect() {
	// 	checkout();
	// }


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
                    {/* <Link to={`/orderprints/details/${print.id}`} > */}
                    <ImageZoom image={{
                        className: '',
                        src: print.print_url,
                        alt: ''
                    }} />
                    {/* <img src={print.print_url} alt='photos' height='400px' width='600px' /> */}
                    <span>{print.print_name}</span><br></br>
                    <span>Price is ${print.price}</span>
                    <div className="addToCart" onClick={() => this.addToCart(print)}>Add To Cart</div>
                    {/* </Link> */}
                </div>
            )
        })
        return (
            <div>
                <div>
                    <h1 className="printsheader">Prints</h1>
                    <p className="printsubtitle">All prints come in a 16x20 size with a Matte finish.  If you would like a different size or would like it on a canvas material, please contact me via email.  My email information is located on the Contact Page. Thank you!</p>
                    <Cart className='cartview' />

                    {/* <button className="cart__checkout" onClick={ checkout }>Checkout</button> */}
                </div>
                <div>
                {/* <a href='http://localhost:3005/auth/logout' className="loginbuttons"><button>Log Out</button></a>
                <a href='http://localhost:3005/auth' className="loginbuttons"><button>Log In</button></a> */}
                {/* <StripeCheckout className="paybutton"
                    token={this.onToken}
                    stripeKey={pub_key}
                    amount={5555}
                /> */}
                </div>
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

export default connect(mapStateToProps, { getPrints, addPrintToCart, setOnePrintOnRedux })(Prints);