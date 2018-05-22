import React from 'react';
import PropTypes from 'prop-types';
import { reverseWordFrequencies } from '../../util/words';

function withReversedWordFrequencies(Component) {
  const WithReversedWordFrequencies = props => {
    const { words } = props;

    return <Component {...props} words={reverseWordFrequencies(words)} />;
  };

  WithReversedWordFrequencies.propTypes = {
    words: PropTypes.object.isRequired
  };

  return WithReversedWordFrequencies;
}

export default withReversedWordFrequencies;
