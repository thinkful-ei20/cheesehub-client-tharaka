import { API_BASE_URL } from '../config';

export const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST'
export const fetchCheeseRequest = () => ({//fetchapirequest would be a better name
    type:FETCH_CHEESE_REQUEST
});

export const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS'
export const fetchCheeseSuccess = (cheeses) => ({
    type:FETCH_CHEESE_SUCCESS,
    cheeses
});

export const FETCH_CHEESE_ERROR = 'FETCH_CHEESE_ERROR'
export const fetchCheeseError = (error) => ({
    type:FETCH_CHEESE_ERROR,
    error
});


export const ADD_CHEESE = 'ADD_CHEESE'
export const addCheese = (cheese) => ({
    type:ADD_CHEESE,
    cheese
});

export const fetchCheeses = cheeses => dispatch => {
  dispatch(fetchCheeseRequest()); //tells us we've begun loading
  return fetch(`${API_BASE_URL}api/cheeses`)
      .then(res => {
          console.log(res);
        if(!res.ok) {
          return Promise.reject('something went wrong');
        }
        return res.json();
      })
      .then(cheeses => dispatch(fetchCheeseSuccess(cheeses)))
      .catch(err => dispatch(fetchCheeseError(err)));
  }

  export const addCheeseStart = cheese => dispatch => {
    dispatch(fetchCheeseRequest()); //tells us we've begun loading
    return fetch(`${API_BASE_URL}api/cheeses`, {method: "POST", body: JSON.stringify({cheese: cheese}), headers: {
        'Content-Type': 'application/json'
    }})

        .then(res => {
            console.log(res);
          if(!res.ok) {
            return Promise.reject('something went wrong');
          }
          return res.json();
        })
        .then(data => dispatch(addCheese(data.cheese)))
        .catch(err => dispatch(fetchCheeseError(err)));
    }
  