import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';


const Friends = () => {
    const [users,setUser] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    return (
        <div>
            <h3> friends info</h3>
            <h1> my all friends{users.length}</h1>
            {
                users.map(user => <Friend key={user.key}
                user={user}
                ></Friend>)
            }
            
        </div>
    );
};

export default Friends;