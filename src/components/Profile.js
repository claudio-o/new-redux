import React from 'react'
import {useSelector } from 'react-redux';

export const Profile = () => {
    const user = useSelector(state => state.user.value);
    const valor = useSelector(state => state.user.count)
    return (
        <div>
            <h2> Profile Page</h2>
            <p>Name: {user.name} </p>
            <p>Age: {user.age} </p>
            <p>Email: {user.email} </p>
            <p>Valor:  {valor} </p>
        </div>
    )
};
export default Profile;
