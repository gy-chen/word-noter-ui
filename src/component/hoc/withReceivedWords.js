import _ from 'lodash';
import React from 'react';
import WebSocket from '../WebSocket';

/**
 * Provided received words from word noter server
 *
 * This HOC will provided received words as prop named words. The shape of words will be:
 *   {
 *      "word1": frequenceOfWord1,
 *      "word2": frequenceOfWord2,
 *      ...
 *   }
 *
 * @param Component
 */
// TODO put url setting into separate module
function withReceivedWords(Component, url="ws://127.0.0.1:4413") {

    return class extends React.Component {

        constructor(props) {
            super(props);

            this._onmessage = this._onmessage.bind(this);
            this._updateWordFrequence = this._updateWordFrequence.bind(this);
            this.state = {
                words: {}
            };
        }

        _onmessage(word) {
            this.setState({
                words: this._updateWordFrequence(this.state.words, word)
            });
        }

        _updateWordFrequence(words, targetWord) {
            return {
                ...words,
                [targetWord]: _.get(words, targetWord, 0) + 1
            };
        }

        render() {
            return (
                <div>
                    <WebSocket
                        url={url}
                        onmessage={this._onmessage}
                        />
                    <Component
                        words={this.state.words}
                        {...this.props}
                    />
                </div>
            );
        }
    };
}

export default withReceivedWords;
