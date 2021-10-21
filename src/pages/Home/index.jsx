import { useEffect, useState } from "react";
import { collection, onSnapshot } from "@firebase/firestore";
import db from "../../firebase";
import Card from "../../components/Card";
import Header from "../../components/Header";
import styles from "./Home.module.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "posts"), (snapshot) => {
        setPosts(snapshot.docs.map((post) => ({ ...post.data(), id: post.id })));
      }),
    []
  );

  console.log(posts.length);

  return (
    <main>
      <Header title="Inicio" />
      <section className={styles.cards}>
        {posts.length === 0 ? (
          <p>No hay nada por aquí...</p>
        ) : (
          posts.map((post) => (
            <Card
              key={post.id}
              link={post.image}
              title={post.name}
              description={post.description}
            />
          ))
        )}
      </section>
    </main>
  );
};

export default Home;
