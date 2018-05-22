import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './Word.css';

const Word = props => {
  const {
    word: { name, date }
  } = props;

  const _formatDate = date => moment(date).fromNow();

  return (
    <div className="Word">
      <h4 className="name">{name}</h4>
      <p className="date">{_formatDate(date)}</p>
    </div>
  );
};

Word.propTypes = {
  word: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string
  })
};

export default Word;
