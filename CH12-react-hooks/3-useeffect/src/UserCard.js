import { useEffect, useState } from 'react';

const UserCard = () => {

    const [ user, setUser ] = useState({})

    /**
    * useEffect 做4件事情
    * 1. 判斷第二參數的陣列和上次輸入的是否一樣，如果不一樣，才執行
    * 2. 執行上一次存下來的清理函式
    * 3. 執行裡面的內容
    * 4. 把所 return 的清理函式存起來，以便下次使用
    */
    useEffect(() => {
        fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(res => {
            setUser(res.results[0])
        })
    }, [])
    // 當 useEffect 的第二個參數傳入空陣列，其作用相當於 componentDidMount

    return (
        <div>
            <img src={ user.picture ? user.picture.large : '' } alt=""/>
            <ul>
                <li>Name: { user.name ? `${user.name.first} ${user.name.last}` : '' }</li>
                <li>Gender: { user.gender }</li>
                <li>Email: { user.email }</li>
                <li>Phone: { user.phone }</li>
            </ul>
        </div>
    );
}

export default UserCard;