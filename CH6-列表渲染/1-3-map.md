1. react 不像 vue 有 v-for 語法，用的就是 js 的 Array.map 函式
2. 記得給 key 值，以提高渲染效能

```jsx
const courses = [
    { id: 1, name: 'Vue' },
    { id: 2, name: 'React' },
    { id: 3, name: 'Angular' }
];

class List extends Component {
    render() {
        return (
            <div>
                {courses.map(({id, name}, seq, array) => (
                    <Course key={id} >{seq + 1}. {courseName}</Course>
                ))}
            </div>
        )
    }
}
```