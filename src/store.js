import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import cheeseReducer from './reducers/cheese';

const store = createStore(
    combineReducers({
        cheeseReducer
    }),
    applyMiddleware(thunk)
);


export default store;