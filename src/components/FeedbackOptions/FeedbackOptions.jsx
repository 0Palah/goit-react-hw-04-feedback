import React from 'react';
import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(el => (
      <button
        type="button"
        key={el}
        onClick={onLeaveFeedback}
        className={css.button}
      >
        {el}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackOptions;
