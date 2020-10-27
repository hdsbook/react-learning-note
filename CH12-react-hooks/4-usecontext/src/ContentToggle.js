import React, { useContext } from 'react';
import context from './context';

const ContentToggle = () => {

    const contextValue = useContext(context);
    const {open, toggle} = contextValue;
    return (
        <button onClick={ toggle }>{ open ? 'Close' : 'Open'}</button>
    );
}

export default ContentToggle;
