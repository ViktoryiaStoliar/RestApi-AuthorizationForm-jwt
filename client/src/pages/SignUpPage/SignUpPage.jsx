import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import style from './signUp.module.scss';
import axios from "axios"

const SignUpPage = () => {

    const [inpValue, setInpValue] = useState({ name: '', surname: '', email: '', password: '' })

    function getInpValue(e) {
        setInpValue({ ...inpValue, [e.target.id]: e.target.value })
    }

    async function sendForm() {
        const res = await axios.post('http://localhost:3001/user', inpValue)
    }

    return (
        <div>
            <Header />

            <div className={style.wrapper}>
                <h1>Welcome, let's create an account</h1>
                <p>Create an account to keep track of your customers, and contributors. Once your account has been created then don’t forget to verify your account through mail.</p>
            </div>

            <div className={style.wrapperInp}>
                <input id="name" placeholder='Your name' onChange={getInpValue}></input>
                <input id="surname" placeholder='Your surname' onChange={getInpValue}></input>
            </div>

            <div className={style.regInp}>
                <input id="email" placeholder='Your email' onChange={getInpValue}></input>
                <input id="password" placeholder='Must be at least 8 characters.' onChange={getInpValue}></input>
            </div>

            <div className={style.btn} onClick={sendForm}>Continue</div>

        </div>
    );
}

export default SignUpPage;
