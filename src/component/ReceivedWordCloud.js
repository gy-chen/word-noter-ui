import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import WordCloud from './WordCloud';

/**
 * ReceivedWordCloud
 *
 * This component is meant to used with withReceivedWords hoc. This component
 * will convert the words received from withReceivedWords hoc to WordCloud acceptable
 * shape and finally pass converted words to WordCloud component.
 */
const ReceivedWordCloud = props => {
  const { words } = props;
  const wordObjects = _.toPairs(words).map(word => ({
    text: word[0],
    frequence: word[1]
  }));

  return <WordCloud {...props} words={wordObjects} />;
};

ReceivedWordCloud.propTypes = {
  words: PropTypes.object.isRequired
};

export default ReceivedWordCloud;
