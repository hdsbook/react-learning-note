```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myInput = React.createRef();
  }
  componentDidMount() {
    this.refs.myInput.focus()
  }
  render() {
    return <input ref={this.myInput} />;
  }
}
```


```jsx
class MyComponent extends React.Component {
  initFocus = (input) => {
    input.focus()
  }
  render() {
    return <input ref={this.initFocus} />;
  }
}
```