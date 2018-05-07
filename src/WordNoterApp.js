import _ from 'lodash';
import React from 'react';
import withThrottleReceivedWords from './component/hoc/withThrottleReceivedWords';
import withReversedWordFrequencies from './component/hoc/withReversedWordFrequencies';
import ReceivedWordCloud from './container/ReceivedWordCloud';
import WordList from './container/WordList';

const ThrottleReversedFrequenciesReceivedWordCloud = _.flowRight(
    withThrottleReceivedWords,
    withReversedWordFrequencies
)(ReceivedWordCloud);

const WordNoterApp = () => (
    <div>
        <ThrottleReversedFrequenciesReceivedWordCloud />
        <WordList />
    </div>
);

export default WordNoterApp;