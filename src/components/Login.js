import React from 'react'
import './Login.css'
import fox from './assets/amma.png'

function Login() {
    return (
        <div className='login'>
            <img src={fox} alt='logo' className='login__logo'/>
            <div className='login__signin'>
                <h4>Sign in</h4>
                <form>
                    <label>E-mail</label>
                    <input type='text' />
                    <label>Password</label>
                    <input type='text' />
                    <button>Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default Login