import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import style from './signIn.module.scss';
import axios from 'axios';


const SignInPage = () => {

    const [value, setValue] = useState({ email: '', password: '' })

    function getInpValue(e) {
        setValue({ ...value, [e.target.id]: e.target.value })
    }

    function send() {
        console.log(value);
    }

    async function authUser() {
        const res = await axios.post('http://localhost:3001/user/auth', value);
        console.log(res);
    }

    return (
        <div>
            <Header></Header>

            <div className={style.wrapper}>
                <h1>Sign In</h1>
                <p>Log in to access your account or create one. Verify your email for seamless access.</p>
            </div>

            <div className={style.wrapperInp}>
                <input id='email' placeholder='Your email' onChange={getInpValue}></input>
                <input id='password' placeholder='Must be at least 8 characters.' onChange={getInpValue}></input>
            </div>

            <div className={style.btn} onClick={authUser}>Continue</div>

        </div>
    );
}

export default SignInPage;
