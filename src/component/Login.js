import React from 'react';
import { getLoginUrl } from '../service/auth';

const Login = () => {
    window.location = getLoginUrl();
    return null;
};

export default Login;