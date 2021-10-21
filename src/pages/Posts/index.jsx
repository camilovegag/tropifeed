import Button from "../../components/Button";
import Header from "../../components/Header";
import styles from "./Posts.module.css";
import newPost from "./newPost.svg";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <main>
      <Header title="Mis posts" />
      <Link className={styles.link} to="/create">
        <Button text="Crear post" icon={newPost} />
      </Link>
    </main>
  );
};

export default Posts;
