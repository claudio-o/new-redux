import React from 'react';
import { useDispatch } from 'react-redux';
import {login, sumar} from '../features/user';

export const Login = () => {
    const dispatch = useDispatch();

    const setear = _ => {
        dispatch(login( {name:"Simona", age:1, email:"simona@gmail.com"} )); 
        dispatch(sumar()) 
    }

    return (
        <div>
            <button 
                onClick={() => { setear() } } >
                 
                Login
            </button>
        </div>
    )
};
export default Login;
