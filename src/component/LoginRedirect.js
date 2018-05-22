import { getLoginUrl } from '../service/authApi';

const LoginRedirect = () => {
  window.location = getLoginUrl();
  return null;
};

export default LoginRedirect;
