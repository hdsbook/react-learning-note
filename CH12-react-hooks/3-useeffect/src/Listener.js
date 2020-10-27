import { useEffect } from 'react';

const Listener = () => {

    const onScroll = () => {
        console.log(window.pageYOffset);
    }

    /**
    * useEffect 做4件事情
    * 1. 判斷第二參數的陣列和上次輸入的是否一樣，如果不一樣，才執行
    * 2. 執行上一次存下來的清理函式
    * 3. 執行裡面的內容
    * 4. 把所 return 的清理函式存起來，以便下次使用
    */
    useEffect(() => {
        window.addEventListener('scroll', onScroll)

        // useEffect 回傳之函式就是清理函式，會在 componentOnWillUnmount 時執行
        return (() => {
            window.removeEventListener('scroll', onScroll)
        })
    }, [])

    /*
    useEffect 做四件事情
    1.
    */

    return (
        <div>
            <h1>Listener</h1>
            <div style={{ height: "120vh" }}></div>
        </div>
    )
}

export default Listener;
