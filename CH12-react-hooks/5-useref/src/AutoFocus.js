import React, { useRef, useEffect } from 'react';

const AutoFocus = () => {

    // useRef 與 createRef 的差別：
    // 由於 functional component 相當於將所有內容寫在 render 函式中，所以每次 render
    // createRef 都會回傳一個新的 ref
    // 但 useRef 會回傳先前建立好的那個ref
    const ref = useRef();

    useEffect(() => {
        ref.current.focus();
    }, [])

    return (
        <div>
            <h1>AutoFocus:</h1>
            <input type="text" ref={ref}/>
        </div>
    );
}

export default AutoFocus;
