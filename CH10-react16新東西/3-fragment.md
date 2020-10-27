# Fragment

類似 Vue 的 template (渲染出來時，不會多一個外容器)

範例：
```javascript
import React, { Component, Fragment } from 'react';

class MyComponent extends Component {
    render() {
        return {
            <Router>
                <Fragment>
                    <Page1 />
                    <Page2 />
                    <Page3 />
                </Fragment>
            </Router>
        }
    }
}
```