## 1. 用 props 指定初始 state

父組件
```jsx
<Counter initCount={10}/>
```

子組件
```jsx
class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: props.initCount,
            step: 1,
        }
    }
```

## 2. 用 defaultProps 指定預設 props

```jsx
Counter.defaultProps = {
    initCount: 10
}
```

## 3. 用 propTypes 檢查 props 型別

```jsx
Counter.propTypes = {
    initCount: PropTypes.number
}
```