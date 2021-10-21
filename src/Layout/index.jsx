import styles from "./Layout.module.css";

const Layout = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.content}>
      <header></header>
      <>{children}</>
      <footer></footer>
    </div>
  </div>
);

export default Layout;
