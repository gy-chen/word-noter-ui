import React from 'react';
import propTypes from 'prop-types';
import LoginLink from './LoginLink';

const Header = ({currentUser}) => {

    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <a className="navbar-brand" href="#">WordNoter</a>
            <div className="navbar-nav">
                {!currentUser ?
                    <LoginLink/>
                    : null
                }
            </div>
        </nav>
    );
};

Header.propTypes = {
    currentUser: propTypes.object
}

export default Header;
