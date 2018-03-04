import _ from 'lodash';
import React, { Component } from 'react';
import withThrottleReceivedWords from './component/hoc/withThrottleReceivedWords';
import withReversedWordFrequencies from './component/hoc/withReversedWordFrequencies';
import ReceivedWordCloud from './container/ReceivedWordCloud';
import WordList from './container/WordList';
import './App.css'

const RecivedWordCloudContainer = _.flowRight(
    withThrottleReceivedWords,
    withReversedWordFrequencies
)(ReceivedWordCloud);

class App extends Component {
  render() {
    return (
      <div className="App">
        <RecivedWordCloudContainer />
        <WordList />
      </div>
    );
  }
}

export default App;
