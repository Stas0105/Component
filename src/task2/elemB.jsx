import React from 'react';
import C from './elemC.jsx'
import A from './elemA.jsx'

class B extends React.Component {
  state = {
    name: (Math.random())
  };

  render() {
    return (
      <div>
        <p>B: {this.state.name}</p>
        <A name={this.state.name} />
        <C name={this.state.name  * 1000} />
      </div>
    )
  }
}

export default B;