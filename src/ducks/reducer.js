import axios from 'axios';

const initialState = {
    user: {},
    gallery: [],
    cart: {},
    prints: []
}

const GET_USER_INFO = "GET_USER_INFO";
const GET_GALLERY = "GET_GALLERY";
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

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload})  
        case GET_GALLERY + '_FULFILLED':
            return Object.assign({}, state, {gallery: action.payload})
        case GET_CART + '_FULFILLED':
            return Object.assign({}, state, {cart: action.payload})    
        case GET_PRINTS + '_FULFILLED':
            return Object.assign({}, state, {prints: action.payload})      
        default:
            return state;
    }
}