/* @flow */
import React from 'react';

//
// Example from http://flowtype.org/docs/react.html
// getInitialState defines allowable fields and types.
//
const Counter = React.createClass({
  getInitialState() {
    return {
      value: 0
    };
  },
  increment() {
    this.setState({
      value: this.state.value + 'oops!'
    });
  },
  decrement() {
    this.setState({
      valu: this.state.value - 1
    });
  },
  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <input type="text" size="2" value={this.state.value} />
        <button onClick={this.decrement}>-</button>
      </div>
    );
  },
});