# shouldComponentUpdate

用來控制組件要不要更新

觸發時機：

```jsx
shouldComponentUpdate(nextProps, nextState) {
    return true; // 函式預設回傳 true
}
```

```jsx
shouldComponentUpdate(nextProps, nextState) {
    // 上層傳來的毫秒算成秒數與目前的秒數不同的話才更新
    return (
        parseInt(nextProps.ms / 1000, 10) !==
        parseInt(this.props.ms / 1000, 10)
    );
}
```

## PureComponent 等於內建了以下的 shouldComponentUpdate

```jsx
shouldComponentUpdate(nextProps, nextState) {
    // shallow compare 只比較一層
    return Object.keys(nextProps).some(key =>
        this.props[key] !== nextProps[key]
    );
}
```