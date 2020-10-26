## jsx 與 HTML 的不同

1. must close (不管是 self closing 還是加 closing tag，就是要close)
2. 所有 tag 均可 self close，如：`<div/>`
3. class => className，如：`<div className="card" />`
4. for => htmlFor，如：`<label htmlFor="email">Email:</label>`
5. camelCase 命名，如：`onClick`, `onChange`…
6. 可以用一個 {} 括住一個值或是一個表達示，如：`{ onClick=this.onClick }`