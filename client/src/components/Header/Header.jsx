import React from 'react';
import style from './Header.module.scss'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
                <div className={style.headerNav}>
                    <div className={style.signInBtn}>
                        <Link to={'/'}>Sign In</Link>
                    </div>

                    <div className={style.signUpBtn}>
                        <Link to={'/signup'}>Sign Up</ Link>
                    </div>
                </div>
        </>
    );
}

export default Header;
