import styles from "./Card.module.css";
import editIcon from "./edit.svg";
import deleteIcon from "./delete.svg";

const Card = ({ editable, link, title, description, onClickEdit, onClickDelete }) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        {editable ? (
          <>
            <img
              className={`${styles.edit} ${styles.icon}`}
              src={editIcon}
              alt="edit"
              onClick={onClickEdit}
              title="Editar post"
            />
            <img
              className={`${styles.delete} ${styles.icon}`}
              src={deleteIcon}
              alt="delete"
              onClick={onClickDelete}
              title="Eliminar post"
            />
          </>
        ) : null}
        <img className={styles.image} src={link} alt="" />
      </div>
      <h6 className={styles.title}>{title}</h6>
      <p className={styles.description}>{description}</p>
    </article>
  );
};

export default Card;
