import { connect } from 'react-redux';
import Header from '../component/Header';

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Header);
