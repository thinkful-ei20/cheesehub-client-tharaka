import React from 'react';

import { connect } from 'react-redux';

import { addCheeseStart } from '../actions/cheese';


export class AddCheese extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    // if (this.props.onMakeGuess) {
      const value = this.input.value;
      this.props.dispatch(addCheeseStart(value));
    // }
    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="text"
          name="cheesename"
          id="userGuess"
          className="text"
          aria-labelledby="feedback"
          ref={input => (this.input = input)}
          required
        />
        <button 
          type="submit"
          name="submit"
          id="cheeseButton" 
          className="button"
        >
          Add
        </button>
      </form>
    );
  }
}

export default connect ()(AddCheese);