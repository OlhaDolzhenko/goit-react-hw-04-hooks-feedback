import styles from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={styles.noStatistics}>{message}</p>;
};

export default Notification;
