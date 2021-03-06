import {
    FETCH_CHEESE_REQUEST,
    FETCH_CHEESE_SUCCESS,
    FETCH_CHEESE_ERROR,
    ADD_CHEESE
  } from '../actions/cheese';
  
  const initialState = {
      cheeses: [],
      loading: false,
      error: null
  }
  
  const cheeseReducer = (state =  initialState, action) => {
  
    if (action.type === FETCH_CHEESE_REQUEST) {
      return Object.assign({}, state, {
        loading: true,
        error: null 
      });
    }
    if (action.type === FETCH_CHEESE_SUCCESS) {
      console.log('REDUCERS', action.cheeses)
      return Object.assign({}, state, {
        cheeses: action.cheeses,
        loading: false,
        error:null
      });
    }
    if (action.type === FETCH_CHEESE_ERROR) {
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      });
    }
    if(action.type === ADD_CHEESE) {
      return Object.assign({}, state, {
        cheeses: [...state.cheeses, action.cheese]
      })
    }
    return state
  }
  
  export default cheeseReducer