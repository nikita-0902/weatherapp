import { applyMiddleware, combineReducers, createStore } from 'redux';
import weatherReducer from './weatherReducer';
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    Weather: weatherReducer,


})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;