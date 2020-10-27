# componentDidUpdate

組件更新之後(state, props 改變)，會呼叫此生命週期函式

- 記得一定要做 condition 判斷，否則任何 state, props 一但有更新，就會觸發

```jsx
componentDidUpdate(prevProps, prevState) {
    // condition
    if (prevProps.userID !== this.props.userID) {
        this.fetchUser(this.props.userID);
    }
}
```