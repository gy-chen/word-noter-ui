import { getLoginUrl } from '../service/authApi';

const Login = () => {
    window.location = getLoginUrl();
    return null;
};

export default Login;