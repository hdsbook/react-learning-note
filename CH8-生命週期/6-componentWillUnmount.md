# componentWillUnmount

- 取消 監聽事件
- 取消 ajax
- 取消 timer

```jsx
componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
    this.timer = setTimeout(() => this.update(), 3000);
}
componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
    clearTimeout(this.timer)
}
onScroll = () => {
    // do something
}
update = () => {
    // do something
}
```