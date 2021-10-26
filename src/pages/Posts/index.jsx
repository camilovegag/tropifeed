import { collection, onSnapshot, query, orderBy } from "@firebase/firestore";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import db from "../../firebase";
import Header from "../../components/Header";
import newPost from "./newPost.svg";
import styles from "./Posts.module.css";
import homeStyles from "../Home/Home.module.css";
import { editPost } from "./editPost";
import { deletePost } from "./deletePost";

const Posts = () => {
  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, orderBy("horaCreacion", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setUserPosts(snapshot.docs.map((post) => ({ ...post.data(), id: post.id })));
    });
    return unsubscribe;
  }, []);

  return (
    <main>
      <Header title="Mis posts" />
      <section className={homeStyles.cards}>
        {userPosts.length === 0 ? (
          <Link className={styles.link} to="/create">
            <Button text="Crear post" icon={newPost} />
          </Link>
        ) : (
          userPosts.map((userPost) => (
            <Card
              key={userPost.id}
              link={userPost.imagen}
              title={userPost.nombre}
              description={userPost.descripcion}
              onClickEdit={() => editPost(userPost.id)}
              onClickDelete={() => deletePost(userPost.id)}
              editable={true}
            />
          ))
        )}
      </section>
    </main>
  );
};

export default Posts;
