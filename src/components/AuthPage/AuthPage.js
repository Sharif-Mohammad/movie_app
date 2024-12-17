import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function AuthPage({ type }) {
    return (
        <div className="auth-page">
            {type === 'login' ? <LoginForm /> : <RegisterForm />}
        </div>
    );
}

export default AuthPage;
