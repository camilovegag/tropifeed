import styles from "./Button.module.css";

const Button = ({ text, icon, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    <img className={styles.icon} src={icon} alt={icon} />
    <p className={styles.text}>{text}</p>
  </button>
);

export default Button;
