import _ from 'lodash';
import React, { Component } from 'react';
import withThrottleReceivedWords from './component/hoc/withThrottleReceivedWords';
import withReversedWordFrequencies from './component/hoc/withReversedWordFrequencies';
import ReceivedWordCloud from './component/ReceivedWordCloud';
import './App.css'

const RecivedWordCloudContainer = _.flowRight(
    withThrottleReceivedWords,
    withReversedWordFrequencies
)(ReceivedWordCloud);

class App extends Component {
  render() {
    return (
      <div className="App">
        <RecivedWordCloudContainer onWordClick={word => console.log(word)} />
      </div>
    );
  }
}

export default App;
