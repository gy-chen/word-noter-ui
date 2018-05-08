import { connect } from 'react-redux';
import LoginCallback from '../component/LoginCallback';
import { setToken } from '../action/auth';

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser
});

const mapDispatchToProps = {
    onReceiveToken: setToken
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginCallback);