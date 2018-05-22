import React from 'react';
import propTypes from 'prop-types';
import LoginLink from './LoginLink';
import './Header.css';

const Header = ({currentUser}) => {

    return (
        <nav className="navbar navbar-light bg-light sticky-top Header">
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
