import _ from 'lodash';
import React, { Component } from 'react';
import withDebounceReceivedWords from './component/hoc/withDebounceReceivedWords';
import withReversedWordFrequencies from './component/hoc/withReversedWordFrequencies';
import ReceivedWordCloud from './container/ReceivedWordCloud';
import WordList from './container/WordList';
import Uppy from './component/Uppy';
import { initializeApp } from './util/app';


const ThrottleReversedFrequenciesReceivedWordCloud = _.flowRight(
    withDebounceReceivedWords,
    withReversedWordFrequencies
)(ReceivedWordCloud);

class WordNoterApp extends Component {

    componentDidMount() {
        initializeApp();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col d-flex flex-column align-items-center">
                        <Uppy />
                        <div className="align-self-stretch">
                            <ThrottleReversedFrequenciesReceivedWordCloud/>
                        </div>
                    </div>
                    <div className="col-3">
                        <WordList/>
                    </div>
                </div>
            </div>
        );
    }
}

export default WordNoterApp;