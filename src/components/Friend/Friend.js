import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = ({user}) => {
    const {id, name}=user;
    const navigate = useNavigate()
    const handleInfo= ()=>{
        const path = `/friend/${id}`
        navigate(path)
    }
    return (
        <div>
            <h4>{name}</h4>
            <button onClick={handleInfo}>info</button>
        </div>
    );
};

export default Friend;