import { connect } from 'react-redux';
import ReceivedWordCloud from '../component/ReceivedWordCloud';
import { putWordRequest } from '../action/word';

const mapDispatchToProps = {
  onWordClick: putWordRequest
};

export default connect(null, mapDispatchToProps)(ReceivedWordCloud);
