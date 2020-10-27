# 為什麼使用hooks？

hooks 是 16.8 後被實作到 React 的工具，讓我們可以用函式組件而不用用類別組件

https://reactjs.org/docs/hooks-intro.html#gatsby-focus-wrapper



好處：

1. 好管理有狀態的邏輯 (比 Render Props 或 Higher-Order Components 更好管理)
    https://reactjs.org/docs/hooks-intro.html#complex-components-become-hard-to-understand


2. 把相同邏輯組織起來放在同一個地方
    https://reactjs.org/docs/hooks-intro.html#complex-components-become-hard-to-understand

    情境1：

    有時候，我們會在 componentDidMount 放監聽，在componentWillUnmount 取消該監聽

    但這兩個動作明明是針對同一件事，卻被迫放在不同的地方


    情境2:

    我們在 componentDidMount 中 放監聽 與fetch data，這兩件事明明是不同的事情，卻被迫放在同一個地方

3. 移除學習使用 class 的門檻

   https://reactjs.org/docs/hooks-intro.html#classes-confuse-both-people-and-machines