## render 渲染

- 取用 `this.state`、`this.props`
- 轉換調整資料
- 回傳
  1. jsx 元素
  2. array
  3. 字串
  4. 0
  5. null
  6. true/false
  7. React.createPortal

# 勿在 render 中 執行 setState，否則會產生無限渲染迴圈！！！！
# 勿在 render 中 呼叫 ajax 函式