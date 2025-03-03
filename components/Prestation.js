import styles from "../styles/Prestation.module.css";
import Header from './Header';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";
import "animate.css/animate.compat.css";
import Image from "next/image";
import Formule from "./Formule";
import prestations from "../utils/prestation";

function Prestation() {
  const [formule, setFormule] = useState(false);
  const [formuleName, setFormuleName] = useState(null);


  const prestation = prestations.map((data) => {
    const isScrollAnimationNeeded = prestations.indexOf(data) >= 3;
    return (
      <div className={styles.container}>
        {isScrollAnimationNeeded ? (
          <ScrollAnimation animateIn="fadeInUp" delay={1 * 100} key={prestations.id}>
            <div className={styles.image}>
              <Image
                src={data.source}
                alt={`photo ${data.name}`}
                width={3974}
                height={5961}
                loading="lazy"
              />
            </div>
            <button
              className={styles.button}
              onClick={() => handleFormule(data.name)}
            >
              {data.name}
            </button>
          </ScrollAnimation>
        ) : (
          <div className={styles.image} key={prestations.id}>
            <Image
              src={data.source}
              alt={`photo ${data.name}`}
              width={3974}
              height={5961}
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
        <meta
          name="description"
          content="Photographe spécialisée dans les moments forts de la vie, mariage, maternité, famille, etc."
        />
        <title>Solène Photographie</title>
      </Head>
      <Header/>
      {!formule && (
        <div>
          <div className={styles.allContainer}>{prestation}</div>
        </div>
      )}
      {formule && (
        <div style={{marginTop : "100px"}}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={() => handlePresta()}
            className={styles.chevron}
            size="2x"
            aria-label="Flèche"
            role="Retour en arrière"
          />
          <Formule name={formuleName} />
        </div>
      )}
    </div>
  );
}

export default Prestation;
