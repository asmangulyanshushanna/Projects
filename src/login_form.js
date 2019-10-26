import React from 'react';

const FormLogin = props => (
    <form onSubmit={props.loggingIn}>
        <input type="text" name="email" placeholder="Email"/>
        <input type="text" name="password" placeholder="Password"/>
        <button>Login</button>
    </form>
)

export default FormLogin;