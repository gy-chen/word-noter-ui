import { connect } from 'react-redux';
import LoginCallback from '../component/LoginCallback';
import { setToken } from '../action/auth';

const mapDispatchToProps = {
    onReceiveToken: setToken
};

export default connect(null, mapDispatchToProps)(LoginCallback);