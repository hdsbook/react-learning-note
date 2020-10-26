上層組件傳 props 給下層組件
```jsx
class List extends Component {
    render() {
        return (
            <ol>
                <Item text="hello" price={100} >some content...</Item>
            </ol>
        )
    }
}
```

下層組件 Item.js 用 `this.props`、`this.props.children` 取得
```jsx
class Item extends Component {
    render() {
        return (
            <li>text: { this.props.text }</li>
            <li>price: {this.props.price}</li>
            <li>content: {this.props.children}</li>
        )
    }
}
```