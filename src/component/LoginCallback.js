import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import { withRouter, Redirect } from 'react-router-dom';
import Loading from './Loading';

const LoginCallback = props => {
  const { location, currentUser } = props;
  const token = qs.parse(location.search.substring(1)).token;
  if (currentUser) {
    return <Redirect to="/" />;
  }
  if (token) {
    _.invoke(props, 'onReceiveToken', token);
  }
  return <Loading />;
};

LoginCallback.propTypes = {
  onReceiveToken: PropTypes.func.isRequired
};

export default withRouter(LoginCallback);
