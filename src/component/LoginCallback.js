import _ from 'lodash';
import PropTypes from 'prop-types';
import qs from 'qs';
import {withRouter} from 'react-router-dom';

const LoginCallback = (props) => {
    const { location } = props;
    const token = qs.parse(location.search.substring(1)).token;
    if (token) {
        _.invoke(props, 'onReceiveToken', token);
    }
    return null;
};

LoginCallback.propTypes = {
    onReceiveToken: PropTypes.func.isRequired
};

export default withRouter(LoginCallback);