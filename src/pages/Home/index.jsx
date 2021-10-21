import { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from "./Home.module.css";

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("data.json");
    const feedData = await response.json();
    setData(feedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <h1>Inicio</h1>
      <hr />
      <section className={styles.cards}>
        {data.map((data, idx) => (
          <Card
            key={idx}
            imgLink={data.imgLink}
            title={data.title}
            description={data.description}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
