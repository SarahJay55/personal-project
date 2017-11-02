import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Cart.css';
import axios from 'axios';
import { checkout, removeFromCart } from './../../../ducks/reducer.js';
import StripeCheckout from 'react-stripe-checkout';
import pub_key from './stripeKey.js';


class Cart extends Component {

  onToken = (token) => {
    const cart = this.props.cart;
    const email = token.email;
    this.props.checkout()
    
    token.card = void 0;
    axios.post('/api/payment', { token, amount: 100 })
        .then(response => {
            this.props.checkout()
            alert("Payment Received")
            axios.post('/api/order', { cart, email })
        })

}

  render() {
    const cart = this.props.cart;
    const cartTotal = cart.reduce((total, { price }) => total + price, 0);

    return (
      <div>
        <div className="cart">
          {/* <div className="loginbuttons">
          <a href='/auth'><button>Log In</button></a>
          <a href='/auth/logout'><button>Log Out</button></a>
          
          </div> */}
          {cart.map((item, i) => {
            return (

              <div className="itemInCart" key={i}>
                <img alt='photos' src={item.print_url} />
                <p>{item.print_name}</p>
                <p>Price - ${item.price}</p>
                <div className="removeFromCart" onClick={() => this.props.removeFromCart(i)}>Remove</div>

              </div>
            )
          })}
          <div className="carttotal">
            Cart Total = ${cartTotal}
            <StripeCheckout className="paybutton"
              token={this.onToken}
              stripeKey={pub_key}
              amount={cartTotal * 100}
            />
          </div>
        </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return { cart: state.cart };
}

export default connect(mapStateToProps, { checkout, removeFromCart })(Cart);
