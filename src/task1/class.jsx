import React, { Component } from 'react';
import FunckComp from './funck.jsx'
class Class extends Component{
    state = {
        text: ""
    }
    getInputValue = (e) => {
        let value = e.target.value;
        this.setState({
            text: value
        })
    }

    render() {
        return (
            <div>
                <input
                    onChange={this.getInputValue}
                    value={this.state.text}
                    placeholder="Введи текст"
                />

                <FunckComp
                    value={this.state.text}
                />
            </div>

        );
    }
}

export default Class;