import { applyMiddleware, createStore } from 'redux'
//import CakeReducer from './cakeReducer';
import { UserReducer } from './user/UserReducer';
import thunk from 'redux-thunk';
//import { applyMiddleware } from 'redux';
const store= createStore(UserReducer,applyMiddleware(thunk));

export default store