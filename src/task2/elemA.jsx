import React, { Component } from 'react';

class A extends Component {
    render() {
        return (
            <div>
                <p>A: {this.props.name}</p>
            </div>
        )
    }
}
export default A;