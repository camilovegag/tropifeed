import styles from "./Button.module.css";

const Button = ({ text, icon, onClick, type, ...props }) => (
  <button className={styles.button} onClick={onClick} type={type} {...props} >
    {icon ? <img className={styles.icon} src={icon} alt={icon} /> : null}
    <p className={styles.text}>{text}</p>
  </button>
);

export default Button;
