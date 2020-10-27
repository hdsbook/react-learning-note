```jsx
class Demo extends Component {
    state = {
        visible: true
    }

    toggle = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        const { visible } = this.state;
        const styleObj = { display: visible ? 'block' : 'none' };
        const cn = `image ${visible ? '' : 'hide'}`;

        return (
            <button onClick={this.toggle}>Toggle</button>
            { visible && <img src="..." />}
            <img src="..." style={styleObj} />
            <img src="..." className={cn} />
        )
    }
}
```