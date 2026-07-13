import styles from './Buttons.module.css';

const Buttons = ({ buttonText }: { buttonText?: string }) => {
  return (
      <button className={styles.macButton}>
        {buttonText || 'Primary Button'}
      </button>
  );
};

export default Buttons;