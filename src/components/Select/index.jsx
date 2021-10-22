import { useField } from "formik";
import styles from "./Select.module.css";

const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>
        {label}
        <abbr title="Campo obligatorio">*</abbr>
      </label>
      <select className={styles.select} {...field} {...props} />
      {meta.touched && meta.error ? <div className={styles.error}>{meta.error}</div> : null}
    </div>
  );
};

export default Select;
