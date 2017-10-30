import axios from 'axios';

const initialState = {
    user: {},
    gallery: [],
    cart: [],
    prints: [],
    print: {}
}

const GET_USER_INFO = "GET_USER_INFO";
const GET_GALLERY = "GET_GALLERY";
const GET_PRINTS = "GET_PRINTS";
const SET_ONE_PRINT_ON_REDUX = "SET_ONE_PRINT_ON_REDUX";
const ADD_PRINT_TO_CART = "ADD_PRINT_TO_CART";
const GET_CART = "GET_CART";
const CHECKOUT = "CHECKOUT";
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
            return res.data
        })
    return {
        type: GET_PRINTS,
        payload: printData
    }
}

export function setOnePrintOnRedux(val) {
    const printInfo = axios.get(`http://localhost:3005/api/details/${val}`)
        .then(res => {
            return res.data
        })
    return {
        type: SET_ONE_PRINT_ON_REDUX,
        payload: printInfo
    }
}

export function addPrintToCart(val) {
    return {
        type: ADD_PRINT_TO_CART,
        payload: val
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

export function checkout() {
    return { type: CHECKOUT };
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
        case SET_ONE_PRINT_ON_REDUX + '_FULFILLED':
            return Object.assign({}, state, { print: action.payload })
        case ADD_PRINT_TO_CART:
            const newCart = state.cart.slice();
            newCart.push(action.payload);
            return Object.assign({}, state, { cart: newCart })
        case GET_CART + '_FULFILLED':
            return Object.assign({}, state, { cart: action.payload })
        case REMOVE_FROM_CART:
        console.log(action.payload)
            let newArray = state.cart.slice();
            newArray.splice(action.payload, 1);
            return Object.assign({}, state, { cart: newArray });
        case CHECKOUT:
            return Object.assign(initialState);

        default:
            return state;
    }
}