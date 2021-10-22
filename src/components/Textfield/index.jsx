import { useField } from "formik";
import styles from "./Textfield.module.css";

const Textfield = ({ required, textarea, label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>
        {label} {required ? <abbr title="Campo obligatorio">*</abbr> : null}
      </label>
      {textarea ? (
        <textarea className={`${styles.input} ${styles.textarea}`} {...field} {...props} />
      ) : (
        <input className={styles.input} {...field} {...props} />
      )}
      {meta.touched && meta.error ? <div className={styles.error}>{meta.error}</div> : null}
    </>
  );
};

export default Textfield;
