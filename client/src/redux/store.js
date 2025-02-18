import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import { getProductDetailsReducer, getProductReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';

//this is a react redux centralized database 
//ham is app.js me pages ko wrap kren ge for using


const reducer = combineReducers ({
    getProducts: getProductReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;