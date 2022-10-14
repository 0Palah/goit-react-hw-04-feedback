import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
  onTotalCount,
  onPositivePercentage,
  good,
  neutral,
  bad,
}) => (
  <div className={css.wrapper}>
    <span>Good: {good}</span>
    <span>Neutral: {neutral}</span>
    <span>Bad: {bad}</span>
    <span>Total: {onTotalCount}</span>
    <span>Positive feedback: {onPositivePercentage}%</span>
  </div>
);

Statistics.propTypes = {
  onTotalCount: PropTypes.number.isRequired,
  onPositivePercentage: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
export default Statistics;
