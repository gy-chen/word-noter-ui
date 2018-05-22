import Types from './type';

export const logout = () => {
  return {
    type: Types.AUTH_LOGOUT
  };
};

export const setToken = token => {
  return {
    type: Types.AUTH_SET_TOKEN,
    token
  };
};

export const setCurrentUser = currentUser => {
  return {
    type: Types.AUTH_SET_CURRENT_USER,
    currentUser
  };
};
