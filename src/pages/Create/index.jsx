import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Formik, Form } from "formik";
import { useHistory } from "react-router";
import Button from "../../components/Button";
import db from "../../firebase";
import Header from "../../components/Header";
import Select from "../../components/Select";
import styles from "./Create.module.css";
import Textfield from "../../components/Textfield";
import validationSchema from "./validationSchema";

// firestore
const createPost = async (values) => {
  const collectionRef = collection(db, "posts");
  const payload = values;
  await addDoc(collectionRef, payload);
};

const Create = () => {
  let history = useHistory();
  return (
    <main>
      <Header title="Publicar" />
      <Formik
        initialValues={{
          imagen: "",
          nombre: "",
          peso: "",
          epocaDeRecoleccion: "",
          cantidad: "",
          proteina: "",
          lignina: "",
          hemicelulosa: "",
          descripcion: "",
          horaCreacion: serverTimestamp(),
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            createPost(values);
            setSubmitting(false);
            alert("Post creado exitosamente");
            history.push("/posts");
          }, 400);
        }}
      >
        <Form className={styles.form}>
          <Textfield
            label="Link imagen"
            name="imagen"
            type="text"
            placeholder="https://images.unsplash.com/photo..."
            required={true}
          />
          <Textfield
            label="Nombre"
            name="nombre"
            type="text"
            placeholder="Aguacate"
            required={true}
          />
          <Textfield label="Peso en kg" name="peso" type="tel" placeholder="0.7" required={true} />
          <Select label="Época de recolección" name="epocaDeRecoleccion">
            <option value="">Elige una opción</option>
            <option value="lluvia">Lluvia</option>
            <option value="sequia">Sequía</option>
            <option value="lluvia-a-sequia">Transición de lluvia a sequía</option>
            <option value="sequia-a-lluvia">Transición de sequía a lluvia</option>
          </Select>
          <Textfield label="Cantidad" name="cantidad" type="tel" placeholder="15" required={true} />
          <Textfield label="Proteina en gramos" name="proteina" type="tel" placeholder="2" />
          <Textfield label="Lignina en gramos" name="lignina" type="tel" placeholder="1" />
          <Textfield
            label="Hemicelulosa en gramos"
            name="hemicelulosa"
            type="tel"
            placeholder="0.4"
          />
          <Textfield
            textarea={true}
            label="Descripción"
            name="descripcion"
            type="text"
            placeholder="Escribe una descripción aquí..."
            required={true}
          />

          <Button text="Publicar" type="submit" />
        </Form>
      </Formik>
    </main>
  );
};

export default Create;
