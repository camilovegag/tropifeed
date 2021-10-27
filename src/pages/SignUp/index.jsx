import { Form, Formik } from "formik";
import { signUp } from "../../firebase";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Textfield from "../../components/Textfield";
import arrowBack from "../../components/Header/arrowBack.svg";

const SignUp = () => {
  const history = useHistory();
  const createUser = async (email, password) => {
    await signUp(email, password);
  };
  return (
    <main>
      <Header icon={arrowBack} title="Crear cuenta" />
      <Formik
        initialValues={{
          correo: "",
          contraseña: "",
        }}
        validationSchema={Yup.object({
          correo: Yup.string()
            .email("Ingresa un correo electrónico válido.")
            .required("Ingresa tu correo electrónico."),
          contraseña: Yup.string()
            .min(8, "Contraseña muy débil, 8 caracteres o más.")
            .required("Ingresa tu contraseña."),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            createUser(values.correo, values.contraseña);
            setSubmitting(false);
            history.push("/signin");
            alert("Usuario creado exitosamente");
          }, 400);
        }}
      >
        <Form>
          <Textfield name="correo" type="email" placeholder="tucorreo@email.com" />
          <Textfield name="contraseña" type="password" placeholder="••••••••" />{" "}
          <Button text="Crear cuenta" type="submit" />
        </Form>
      </Formik>
    </main>
  );
};

export default SignUp;
