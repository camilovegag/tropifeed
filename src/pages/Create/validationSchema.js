import * as Yup from "yup";

const validationSchema = Yup.object({
  imagen: Yup.string()
    .min(5, "5 caracteres o más")
    .max(200, "200 caracteres o menos")
    .required("Ingresa el link de una imagen."),
  nombre: Yup.string()
    .min(3, "3 caracteres o más.")
    .max(60, "60 caracteres o menos.")
    .required("Ingresa un nombre."),
  peso: Yup.number().min(0, "Ingresa un peso mayor a 0").required("Ingresa el peso."),
  epocaDeRecoleccion: Yup.string().required("Selecciona una época de recolección."),
  cantidad: Yup.number()
    .min(0, "Ingresa un peso mayor a 0")
    .required("Ingresa la cantidad del producto."),
  proteina: Yup.number().min(0, "Ingresa un valor de proteina mayor a 0"),
  lignina: Yup.number().min(0, "Ingresa un valor de lignina mayor a 0"),
  hemicelulosa: Yup.number().min(0, "Ingresa un valor de hemicelulosa mayor a 0"),
  descripcion: Yup.string()
    .min(10, "10 caracteres o más.")
    .max(180, "180 caracteres o menos.")
    .required("Ingresa una descripción."),
});

export default validationSchema;
