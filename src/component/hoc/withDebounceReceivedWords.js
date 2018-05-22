import React from 'react';
import Rx from 'rxjs';
import withReceivedWords from './withReceivedWords';

/**
 * Provided received words from word noter server with throttile in specified time.
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
function withDebounceReceivedWords(Component, debounceTime = 2000) {
  class WithDebounceReceivedWords extends React.Component {
    constructor(props) {
      super(props);

      this._observer = null;
      this._observable = null;
      this.state = {
        words: props.words
      };

      this._onSubscribe = this._onSubscribe.bind(this);
    }

    componentDidMount() {
      this._observable = Rx.Observable.create(observer => {
        observer.next(this.state.words);
        this._observer = observer;
      }).debounceTime(debounceTime);
      this._observable.subscribe(this._onSubscribe);
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevProps.words !== this.props.words) {
        this._observer.next(this.props.words);
      }
    }

    _onSubscribe(value) {
      this.setState({
        words: value
      });
    }

    render() {
      return <Component {...this.props} words={this.state.words} />;
    }
  }

  return withReceivedWords(WithDebounceReceivedWords);
}

export default withDebounceReceivedWords;
