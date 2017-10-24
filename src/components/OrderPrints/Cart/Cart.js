import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Cart.css';
// import { removeFromCart } from './../../../ducks/reducer.js';
// import { addToCart } from './../../../ducks/reducer.js';

class Cart extends Component {

  render() {
    const cart = this.props.cart;

    return (
      <div className="cart">
        {cart.map((item, i) => {
          return (
            <div className="itemInCart" key={i}> 
              <img alt='photos' src={item.print_url} />
              <p>{item.print_name}</p>
              <p>${item.price}</p>
            </div>
          )
        })}
      </div>
      
    )
  }
}

function mapStateToProps(state) {
  return {cart: state.cart};
}

export default connect(mapStateToProps)(Cart);
                