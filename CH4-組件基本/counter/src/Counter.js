import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    constructor(props) {
        super(props); // super 表示執行父類別的建構函式

        this.state = {
            count: props.initCount,
            step: 1,
        }
    }
    addCount = () => {
        const {count, step} = this.state;
        this.setState({
            count: count + step,
            step: step + 1,
        });
    }
    render() {
        const {count, step} = this.state;
        return (
            <div>
                <h1>{ count }</h1>
                <button onClick={ this.addCount }>+{ step }</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    initCount: 10
}

Counter.propTypes = {
    initCount: PropTypes.number
}

export default Counter;
