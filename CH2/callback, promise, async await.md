```javascript
// callback
callSomeApi(function (result) {
    console.log(result);
})

// promise
callSomeApi
.then(res => {
    console.log(result);
})

// async/await
const start = async () => {
    const result = await callSomeApi(); // callSomeApi 必須回傳一個 Promise
}
```