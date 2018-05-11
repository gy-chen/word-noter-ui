import _ from 'lodash';
import React, { Component } from 'react';
import withThrottleReceivedWords from './component/hoc/withThrottleReceivedWords';
import withReversedWordFrequencies from './component/hoc/withReversedWordFrequencies';
import ReceivedWordCloud from './container/ReceivedWordCloud';
import WordList from './container/WordList';
import Uppy from './component/Uppy';
import { initializeApp } from './util/app';


const ThrottleReversedFrequenciesReceivedWordCloud = _.flowRight(
    withThrottleReceivedWords,
    withReversedWordFrequencies
)(ReceivedWordCloud);

class WordNoterApp extends Component {

    componentDidMount() {
        initializeApp();
    }

    render() {
        return (
            <div>
                <Uppy />
                <ThrottleReversedFrequenciesReceivedWordCloud/>
                <WordList/>
            </div>
        );
    }
}

export default WordNoterApp;