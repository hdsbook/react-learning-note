## constructor 建構函式

一般做兩件事

1. 指定 state (請勿在 constructor 中執行 setState！)
    - constructor 也是組件中唯一可以直接指定 state 的地方
2. bind 函式
    - 生命週期函式都會自動 bind context(this) 為組件
    - 其它函式的context要視如何執行該函式而定 (若用箭頭函式宣告，就不用在constructor中bind了)

- 三不要
  1. 勿在 constructor 中執行 setState！
  2. 勿將 props 中的變數指定給 state 中的變數 (除非該props只用於初始值的作用)
  3. 勿在 constructor 進行 fetch 等 ajax 取資料的動作