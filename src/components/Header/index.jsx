import styles from "./Header.module.css";

const Header = ({ icon, title }) => (
  <header>
    <div className={styles.headerContainer}>
      {icon ? <img src={icon} alt="Icon" /> : null}
      <h1>{title}</h1>
    </div>
    <hr className={styles.divider} />
  </header>
);

export default Header;
