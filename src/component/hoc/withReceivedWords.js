import _ from 'lodash';
import React from 'react';
import socket from '../../service/socket';


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
function withReceivedWords(Component) {

    return class extends React.Component {

        constructor(props) {
            super(props);

            this._onmessage = this._onmessage.bind(this);
            this._updateWordFrequence = this._updateWordFrequence.bind(this);
            this._initializeSocketIO = this._initializeSocketIO.bind(this);
            this.state = {
                words: {}
            };

            this._socket = socket;
            this._initializeSocketIO();
        }

        _initializeSocketIO() {
            this._socket.on('word', this._onmessage);
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
