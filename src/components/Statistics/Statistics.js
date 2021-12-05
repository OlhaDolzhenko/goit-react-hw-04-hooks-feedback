import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import Notification from '../Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total === 0 ? (
        <Notification message={'No feedback given'} />
      ) : (
        <div>
          <p className={styles.statisticItem}>Good: {good}</p>
          <p className={styles.statisticItem}>Neutral: {neutral}</p>
          <p className={styles.statisticItem}>Bad: {bad}</p>
          <p className={styles.statisticItem}>Total: {total}</p>
          <p className={styles.statisticItem}>
            Positive feedback: {positivePercentage}%
          </p>
        </div>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
