import { collection, query, where, getDocs } from "@firebase/firestore";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Button from "../../components/Button";
import Card from "../../components/Card";
import db from "../../firebase";
import Header from "../../components/Header";
import homeStyles from "../Home/Home.module.css";
import search from "./search.svg";
import styles from "./Search.module.css";
import Textfield from "../../components/Textfield";

const Search = () => {
  const [results, setResults] = useState([]);

  const searchPost = async (userInputName) => {
    console.log(userInputName.buscar);
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, where("nombre", "==", userInputName.buscar));
    const snapshot = await getDocs(q);
    setResults(snapshot.docs.map((post) => ({ ...post.data(), id: post.id })));
  };

  return (
    <main>
      <Header title="Buscar" />
      <Formik
        initialValues={{
          buscar: "",
        }}
        validationSchema={Yup.object({
          buscar: Yup.string().min(3, "3 caracteres o más.").max(60, "60 caracteres o menos."),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            searchPost(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className={styles.searchBar}>
          <Textfield name="buscar" type="text" placeholder="Escribe algo..." />
          <Button icon={search} text="Buscar" type="submit" />
        </Form>
      </Formik>
      {results.map((result) => (
        <section className={homeStyles.cards}>
          <Card
            key={result.id}
            link={result.imagen}
            title={result.nombre}
            description={result.descripcion}
            id={result.id}
          />
        </section>
      ))}
    </main>
  );
};

export default Search;
