import { connect } from 'react-redux';
import WordList from '../component/WordList';

const mapStateToProps = state => ({
  words: state.words
});

export default connect(mapStateToProps)(WordList);
