import * as Yup from "yup";

const validationSchema = Yup.object({
  imagen: Yup.string()
    .max(100, "100 caracteres o menos")
    .required("Ingresa el link de una imagen."),
  nombre: Yup.string()
    .min(3, "3 caracteres o más.")
    .max(60, "60 caracteres o menos.")
    .required("Ingresa un nombre."),
  peso: Yup.number().max(12, "12 caracteres o menos").required("Ingresa el peso."),
  epocaDeRecoleccion: Yup.string().required("Selecciona una época de recolección."),
  cantidad: Yup.number()
    .max(12, "12 caracteres o menos.")
    .required("Ingresa la cantidad del producto."),
  proteina: Yup.number().max(12, "12 caracteres o menos."),
  lignina: Yup.number().max(12, "12 caracteres o menos."),
  hemicelulosa: Yup.number().max(12, "12 caracteres o menos."),
  descripcion: Yup.string()
    .min(10, "10 caracteres o más.")
    .max(100, "100 caracteres o menos.")
    .required("Ingresa una descripción."),
});

export default validationSchema;
