import React, { Component } from 'react';

class Message extends Component {
    state = {
        title: 'Hello',
        count: 0,
    }

    constructor(props) {
        super(props);

        // 使組件成為 sayHi 永遠的 context (this)
        this.sayHi = this.sayHi.bind(this)
    }
    sayHi() {
        this.setState({
            title: 'Hi',
        })
    }
    addCount = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }

    render() {
        return (
            <div>
                <h1>{ this.state.title }</h1>
                <h3>{ this.state.count }</h3>
                <button onClick={ this.addCount }>add count</button>
                <button onClick={ this.sayHi }>Say Hi</button>
            </div>
        );
    }
}

export default Message;