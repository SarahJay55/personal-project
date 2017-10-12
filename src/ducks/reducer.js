import axios from 'axios';

const initialState = {
    user: {},
    cart: {},
    prints: {}
}

const GET_USER_INFO = "GET_USER_INFO";
const GET_CART = "GET_CART";
const GET_PRINTS = "GET_PRINTS";

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

export function getPrints() {
    const printData = axios.get('/api/prints')
        .then(res => {
            return res.data
        })
        return {
            type: GET_PRINTS,
            payload: printData
        }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload})  
        case GET_CART + '_FULFILLED':
            return Object.assign({}, state, {cart: action.payload})    
        case GET_PRINTS + '_FULFILLED':
            return Object.assing({}, state, {prints: action.payload})      
        default:
            return state;
    }
}