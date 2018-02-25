import _ from 'lodash';
import React from 'react';
import WordCloud from './WordCloud';

const ReceivedWordCloud = props => {
  const { words } = props;
  const wordObjects = _.toPairs(words).map(word => ({ text: word[0], frequence: word[1] }));
  
  return (
    <WordCloud
      {...props}
      words={wordObjects}
    />
  );
};

export default ReceivedWordCloud;
