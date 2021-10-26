import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Button from "../../components/Button";
import Header from "../../components/Header";
import styles from "./Login.module.css";
import Textfield from "../../components/Textfield";

const SignIn = () => {
  return (
    <main>
      <Header title="Iniciar sesión" />
      <Formik
        initialValues={{
          correo: "",
          contraseña: "",
        }}
        validationSchema={Yup.object({
          correo: Yup.string()
            .email("Ingresa un correo electrónico válido")
            .required("Ingresa tu correo electrónico"),
          contraseña: Yup.string()
            .min(8, "Contraseña muy débil, 8 caracteres o más")
            .required("Ingresa tu contraseña"),
        })}
      >
        <Form>
          <Textfield name="correo" type="email" placeholder="tucorreo@email.com" />
          <Textfield name="contraseña" type="password" placeholder="••••••••" />
          <Button text="Iniciar sesión" type="submit" />
          <p className={styles.signUp}>
            ¿No tienes cuenta?{" "}
            <Link className={styles.link} to="/signup" href="#">
              crea una aquí.
            </Link>
          </p>
        </Form>
      </Formik>
    </main>
  );
};

export default SignIn;
