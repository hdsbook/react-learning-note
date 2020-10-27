# getDerivedStateFromProps

從新的 props 去和舊的 state 比較，取得新的 state

執行時機：
1. constructor 剛掛載完時 (before componentDidMount)
2. 每次組件更新時 (before componentDidUpdate)

特點：
1. 為一靜態函式 (沒有 this 可用)
2. 效能比 componentDidMount 好一些，因為是在 render 之前執行
3. 需要立即回傳新的 state，不能在其中做非同步(async)的操作，如ajax
4. 若 state 不需要變更，回傳 null

範例：

```jsx
getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.items !== prevState.items) {
        return {
            items: nextProps.items
            count: nextProps.items.length
        }
    }
    return null;
}
```