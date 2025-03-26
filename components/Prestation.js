import styles from "../styles/Prestation.module.css";
import Header from "./Header";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import Image from "next/image";
import prestations from "../utils/prestation";
import Formule from "./Formule";
import ScrollAnimation from "react-animate-on-scroll";
import Footer from "./Footer";

function Prestation() {
  const [formule, setFormule] = useState(false);
  const [formuleName, setFormuleName] = useState(null);

  const prestation = prestations.map((data, i) => {
    const isScrollAnimationNeeded = prestations.indexOf(data) >= 6;
    return (
      <div key={i} className={styles.container}>
        {isScrollAnimationNeeded ? (
          <div>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOnce={true}
              delay={100}
            >
              <Image
                src={data.source}
                alt={`photo ${data.name}`}
                width={800}
                height={1200}
                layout="intrinsic"
                loading="lazy"
              />
              <button
                className={styles.button}
                onClick={() => handleFormule(data.name)}
              >
                {data.name}
              </button>
            </ScrollAnimation>
          </div>
        ) : (
          <div className={styles.image}>
            <Image
              src={data.source}
              alt={`photo ${data.name}`}
              width={800}
              height={1200}
              layout="intrinsic"
              loading="lazy"
            />
            <button
              className={styles.button}
              onClick={() => handleFormule(data.name)}
            >
              {data.name}
            </button>
          </div>
        )}
      </div>
    );
  });

  const handleFormule = (name) => {
    setFormule(true);
    setFormuleName(name);
    //permet d'arriver en haut de page
    scrollTo(0, 0);
  };

  const handlePresta = () => {
    setFormule(false);
  };

  return (
    <div>
      <Head>
        <title>Solène Doux Photographie</title>
        <meta
          name="description"
          content="Photographe dans la région Toulousaine spécialisée dans les moments forts de la vie, mariage, maternité, famille, etc."
        />
      </Head>
      <Header />
      <main>
        {!formule && (
          <div>
            <div className={styles.allContainer}>{prestation}</div>
              <Footer />
          </div>
        )}
        {formule && (
          <div className={styles.formuleContainer}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={() => handlePresta()}
              className={styles.chevron}
              aria-label="Flèche"
              role="Retour en arrière"
            />
            <Formule name={formuleName} />
          </div>
        )}
      </main>
    </div>
  );
}

export default Prestation;
