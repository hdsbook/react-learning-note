import React, { useState } from 'react';
import { Provider } from './context';
import ContentToggle from './ContentToggle';

const Content = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    const contextValue = { open, toggle }

    return (
        <Provider value={contextValue}>
            <div>
                <ContentToggle />
                { !open ? '' : <div>some content...</div> }
            </div>
        </Provider>
    );
}

export default Content;
