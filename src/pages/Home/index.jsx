import { useEffect, useState } from "react";
import { collection, onSnapshot } from "@firebase/firestore";
import db from "../../firebase";
import Card from "../../components/Card";
import Header from "../../components/Header";
import styles from "./Home.module.css";

const Home = () => {
  const [posts, setPosts] = useState([<Card />, <Card />]);

  // firestore
  useEffect(
    () =>
      onSnapshot(collection(db, "posts"), (snapshot) => {
        setPosts(snapshot.docs.map((post) => ({ ...post.data(), id: post.id })));
      }),
    []
  );

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
              link={post.imagen}
              title={post.nombre}
              description={post.descripcion}
            />
          ))
        )}
      </section>
    </main>
  );
};

export default Home;
