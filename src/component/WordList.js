import React from 'react';
import PropTypes from 'prop-types';
import Word from './Word';
import './WordList.css';

const WordList = props => {
  const { words } = props;
  return (
    <div className="sticky-top WordList">
      {words.map(word => <Word key={word.id} word={word} />)}
    </div>
  );
}

WordList.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    date: PropTypes.string.isRequired
  }))
};

export default WordList;
