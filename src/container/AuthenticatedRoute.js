import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

/**
 * Make component only authenticated user can access to.
 *
 * @param component
 * @param unauthenticatedRedirectPath
 */
const AuthenticatedRoute = ({
  component: Component,
  unauthenticatedRedirectPath = '/login',
  ...rest
}) => {
  const mapStateToProps = state => ({
    currentUser: state.auth.currentUser
  });

  const AuthenticatedRouteComponent = props => {
    const { currentUser } = props;

    return (
      <Route
        {...rest}
        render={() =>
          currentUser ? (
            <Component {...props} />
          ) : (
            <Redirect to={unauthenticatedRedirectPath} />
          )
        }
      />
    );
  };

  const AuthenticatedRouteContainer = connect(mapStateToProps)(
    AuthenticatedRouteComponent
  );
  return <AuthenticatedRouteContainer />;
};

export default AuthenticatedRoute;
