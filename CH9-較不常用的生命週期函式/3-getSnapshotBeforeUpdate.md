# getSnapshotBeforeUpdate

在頁面上的元素實際變動之前觸發，用來紀錄一些 update 之前頁面上的 dom 的狀態

如： scrollHeight 等這些不在 state 當中的 dom 元素狀態

範例：

```javascript
class Log extends Component {
    ref = createRef();
    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevProps.items.length !== this.props.items.length) {
            const list = this.ref.current;
            return list.scrollHeight - list.scrollTop;
        }
        return null
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot) {
            const list = this.ref.current;
            list.scrollTop = list.scrollHeight - snapshot;
        }
    }
    render() {
        const { items } = this.props;
        return (
            <div>{ items.map(item => /*...*/) }</div>
        )
    }
}
```