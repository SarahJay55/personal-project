import axios from 'axios';

const initialState = {
    user: {},
    gallery: [],
    cart: [],
    prints: [],
    shoppingCart: []
}

const GET_USER_INFO = "GET_USER_INFO";
const GET_GALLERY = "GET_GALLERY";
const GET_PRINTS = "GET_PRINTS";
const GET_CART = "GET_CART";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";


export function getUserInfo() {
    const userData = axios.get('/auth/me')
        .then(res => {
            return res.data
        })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export function getGallery() {
    const galleryData = axios.get('http://localhost:3005/api/gallery')
        .then(res => {
            return res.data
        })
    return {
        type: GET_GALLERY,
        payload: galleryData
    }
}

export function getPrints() {
    const printData = axios.get('http://localhost:3005/api/prints')
        .then(res => {
            console.log(res)
            return res.data
        })
    return {
        type: GET_PRINTS,
        payload: printData
    }
}

export function getCart() {
    const cartData = axios.get('/api/cart')
        .then(res => {
            return res.data
        })
    return {
        type: GET_CART,
        payload: cartData
    }
}

export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export function removeFromCart(productIndex) {
    return {
        type: REMOVE_FROM_CART,
        payload: productIndex
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        case GET_GALLERY + '_FULFILLED':
            return Object.assign({}, state, { gallery: action.payload })
        case GET_PRINTS + '_FULFILLED':
            return Object.assign({}, state, { prints: action.payload })
        case GET_CART + '_FULFILLED':
            return Object.assign({}, state, { cart: action.payload })
        case ADD_TO_CART + '_FULFILLED':
            return Object.assign({}, state, {shoppingCart: [...state.shoppingCart, action.payload]});
        case REMOVE_FROM_CART + '_FULFILLED':
            let newArray = state.shoppingCart.slice();
            newArray.splice(action.index, 1);
            return Object.assign({}, {shoppingCart: newArray});

        default:
            return state;
    }
}