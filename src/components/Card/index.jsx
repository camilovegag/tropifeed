import styles from "./Card.module.css";

const Card = ({ imgLink, title, description }) => {
  return (
    <article className={styles.card}>
      <img className={styles.image} src={imgLink} alt="test" />
      <h6 className={styles.title}>{title}</h6>
      <p className={styles.description}>{description}</p>
    </article>
  );
};

export default Card;
