import React from 'react';
import PropTypes from 'prop-types';

const Word = props => {
    const { word: { name, date } } = props;

    return (
        <div>
            <p>Word: {name}</p>
            <p>Date: {date}</p>
        </div>
    )
};

Word.propTypes = {
  word: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string
  })
}

export default Word;
