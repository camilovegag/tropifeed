import styles from "./Card.module.css";

const Card = ({ link, title, description }) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={link} alt="Producto" />
      </div>
      <h6 className={styles.title}>{title}</h6>
      <p className={styles.description}>{description}</p>
    </article>
  );
};

export default Card;
