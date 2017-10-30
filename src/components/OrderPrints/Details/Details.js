import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setOnePrintOnRedux, addPrintToCart } from './../../../ducks/reducer.js';

class Details extends Component {

    componentDidMount() {
        const printID = this.props.match.params.printid;
       this.props.setOnePrintOnRedux(printID);
    }

    render() {
        const print = this.props.print;

        return (
            <div className="product">
                <img alt='prints' src={print.print_url} />
                <p>{print.print_name}</p>
                <p>{print.price}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {print: state.print};
}
const mapDispatchToProps = {
    setOnePrintOnRedux: setOnePrintOnRedux,
    addPrintToCart: addPrintToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);