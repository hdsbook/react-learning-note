# Portal

portal 是在 react-dom 底下的一個工具，可以用來指定組件 render 到畫面上的特定元素上

如：

```jsx
import React, { Component } from 'react';
import { createPortal from } 'react-dom'

class Modal extends Component {
    render() {
        return createPortal(
            <div>Modal content ...</div>,
            document.getElementById('modal')
        );
    }
}
```

則不管此組件在其它地方如何被加入，render時，此組件的內容都會被 render 到 #modal 中