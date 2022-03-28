import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendInfo = () => {
    const {id} = useParams()
    const [user,setUser]= useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))

    },[])
    return (
        <div>
            <h1>this is about friend id:{id}</h1>
            <h2>name: {user.name}</h2>
            <h3>email:{user.email}</h3>
            <h4>address :{user.address?.city}</h4>
        </div>
    );
};

export default FriendInfo;