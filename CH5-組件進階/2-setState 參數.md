## setState 第一參數：

1. 傳入物件：
```jsx
// 這種寫法若連續呼叫，只會執行一次，因為 setState 是非同步的方法
setState({
    count: this.state.count + 1
})
```

2. 傳入函式：

```jsx
// 用這種寫法就可以連續呼叫，都會執行
setState((state) => ({
    count: state.count + 1,
}))
setState((state) => ({
    count: state.count + 1,
}))
```

## setState 第二參數傳入 callback：
```jsx
setState({
    count: this.state.count + 1
}, () => {
    // do something after setState
})
```