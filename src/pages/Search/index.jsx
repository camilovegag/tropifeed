import { Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Textfield from "../../components/Textfield";
import styles from "./Search.module.css";
import search from "./search.svg";

const Search = () => {
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
      >
        <Form className={styles.searchBar}>
          <Textfield name="buscar" type="text" placeholder="Escribe algo..." />
          <Button icon={search} text="Buscar" />
        </Form>
      </Formik>
    </main>
  );
};

export default Search;
