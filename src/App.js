import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Bio from './components/Bio/Bio.js';
import Contact from './components/Contact/Contact.js';
import Gallery from './components/Gallery/Gallery.js';
import Home from './components/Home/Home.js';
import NavBar from './components/NavBar/NavBar.js';
import Prints from './components/OrderPrints/Prints/Prints.js';
import Cart from './components/OrderPrints/Cart/Cart.js';
import Details from './components/OrderPrints/Details/Details.js';


class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <NavBar />
        <Route component={ Home } path='/' exact />
        <Route component={ Gallery } path='/gallery' />
        <Route component={ Prints } path='/prints' />
        <Route component={ Bio } path='/bio' />
        <Route component={ Contact } path='/contact' />
        <Route component={ Details } path='/orderprints/details/:printid' />
        <Route component={ Cart } path='/orderprints/cart' />        
      </div>
      </HashRouter>
      
    );
  }
}

export default App;
