import { useState } from 'react';

const PracticeB = () => {
    const [ state, setState ] = useState({
        count: 0,
    });

    // useState 改變值時，要傳入完整值，不可以傳 partial state
    const addCount = () => {
        setState({
            ...state,
            count: state.count + 1,
        })
    }
    const changeText = e => {
        setState({
            ...state,
            text: e.target.value,
        })
    }

    return (
        <div>
            <h1>Practice B</h1>

            <h3>{ state.count }</h3>
            <button onClick={ addCount }>+1</button>
            <hr />

            <h3>Text: { state.text }</h3>
            <input type="text"
                onChange={ changeText }
            />
        </div>
    );

}

export default PracticeB;
