/* @flow */
import React, {Component,PropTypes} from 'react';

var Greeter = React.createClass({
  render() {
    return <div>Hello {this.props.name}</div>
  }
});

export class App extends Component {
  render():React.Element {
    return (
      <div>
        <Greeter/>
      </div>
    );
  }
}