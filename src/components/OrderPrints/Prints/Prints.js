import React, { Component } from 'react';
import './Prints.css';
import Cart from './../Cart/Cart.js'
import { getPrints } from './../../../ducks/reducer.js';
import { connect } from 'react-redux';
import ImageZoom from 'react-medium-image-zoom';
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


    render() {
        console.log(this.props.prints)
        const tableOfPrints = this.props.prints.map((print, i) => {
            return (
                <div key={i} className="prints">
                    <ImageZoom image={{
                        className: '',
                        src: print.print_url,
                        alt: ''
                    }} />
                    <span>{print.print_name}</span><br></br>
                    <span>Price is ${print.price}</span>
                    <div className="addToCart" onClick={() => this.addToCart(print)}>Add To Cart</div>
                </div>
            )
        })
        return (
            <div>
                <div>
                    <h1 className="printsheader">Prints</h1>
                    <p className="printsubtitle">All prints come in a 16x20 size with a Matte finish.  If you would like a different size or would like it on a canvas material, please contact me via email.  My email information is located on the Contact Page. Thank you!</p>
                    <Cart className='cartview' />
                </div>
                <div>
                {/* <a href='/auth/logout' className="loginbuttons"><button>Log Out</button></a>
                <a href='/auth' className="loginbuttons"><button>Log In</button></a> */}
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
        prints: state.prints,
        cart: state.cart
    }
}

export default connect(mapStateToProps, { getPrints, addPrintToCart, setOnePrintOnRedux })(Prints);