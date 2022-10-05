import {combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { configureStore } from '@reduxjs/toolkit'
import {productListReducer, productDetailsReducer} from './reducers/productReducers.js'
import { carReducer } from "./reducers/cartReducers.js"

const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:carReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') 
                             ? JSON.parse(localStorage.getItem('cartItems'))
                             : []

const initialState = {
    cart: {cartItems: cartItemsFromStorage},
}

const middleware = [thunk]

const store = configureStore({reducer:reducer},initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store