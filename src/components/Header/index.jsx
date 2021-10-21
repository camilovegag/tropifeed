import styles from "./Header.module.css";

const Header = ({ title }) => (
  <header>
    <h1>{title}</h1>
    <hr className={styles.divider} />
  </header>
);

export default Header;
