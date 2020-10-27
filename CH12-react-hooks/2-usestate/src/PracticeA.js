import { useState } from 'react';

const PracticeA = () => {
    // useState 盡量放在最上面，也不能放到 if 判斷式中 (react 是利用宣告的順序來建立 state，所以不能有任何會影響順序的變因存在)
    const [ count, setCount ] = useState(0);
    const [ text, setText ] = useState('');
    const addCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Practice A</h1>

            <h3>{ count }</h3>
            <button onClick={ addCount }>+1</button>
            <hr />

            <h3>Text: { text }</h3>
            <input type="text"
                onChange={ e => setText(e.target.value) }
            />
        </div>
    );

}

export default PracticeA;
