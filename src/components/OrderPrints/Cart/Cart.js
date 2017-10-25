import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Cart.css';
import { checkout } from './../../../ducks/reducer.js';
import { Prints } from './../Prints/Prints.js'
import StripeCheckout from 'react-stripe-checkout';
import pub_key from './stripeKey.js';
// import { removeFromCart } from './../../../ducks/reducer.js';
// import { addToCart } from './../../../ducks/reducer.js';

class Cart extends Component {

  render() {
    const cart = this.props.cart;
    const cartTotal = cart.reduce( ( total, { price } ) => total + price, 0 );
    

    return (
      <div>
      <div className="cart">
      <a href='http://localhost:3005/auth/logout' className="loginbuttons"><button>Log Out</button></a>
                <a href='http://localhost:3005/auth' className="loginbuttons"><button>Log In</button></a>
        {cart.map((item, i) => {
          return (
            
            <div className="itemInCart" key={i}> 
              <img alt='photos' src={item.print_url} />
              <p>{item.print_name}</p>
              <p>Price - ${item.price}</p>
            </div>
          
            
          )
          
        })}
        <div className="carttotal">
             Cart Total = ${cartTotal}
             <StripeCheckout className="paybutton"
                    token={this.onToken}
                    stripeKey={pub_key}
                    amount={cartTotal}
                />
            </div>
      </div>
      </div>
      
    )
  }
}

function mapStateToProps(state) {
  return {cart: state.cart};
}

export default connect(mapStateToProps)(Cart);
                