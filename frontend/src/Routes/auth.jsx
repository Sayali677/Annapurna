import React, { useState } from 'react';
import './Auth.css'; // Assuming you will create a CSS file for styling

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin((prev) => !prev);
    };

    return (
        <div className="auth-card">
            {isLogin ? (
                <LoginForm />
            ) : (
                <RegisterForm />
            )}
            <button onClick={toggleForm}>
                {isLogin ? 'Switch to Register' : 'Switch to Login'}
            </button>
        </div>
    );
};

const LoginForm = () => {
    return (
        <form>
            <h2>Login</h2>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
};

const RegisterForm = () => {
    return (
        <form>
            <h2>Register</h2>
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Register</button>
        </form>
    );
};

export default Auth;
