import React from 'react';
import PropTypes from 'prop-types';

const Word = props => {
    const { name, date } = props;

    return (
        <div>
            <p>Word: {name}</p>
            <p>Date: {date}</p>
        </div>
    )
};

Word.propTypes = {
    name: PropTypes.string,
    date: PropTypes.string
}

export default Word;
