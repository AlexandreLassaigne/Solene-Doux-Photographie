import styles from "../styles/Prestation.module.css";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { FaInstagram } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";
import "animate.css/animate.compat.css";
import Image from "next/image";
import Formule from "./Formule";

function Prestation() {
  const [formule, setFormule] = useState(false);
  const [formuleName, setFormuleName] = useState(null);

  const prestations = [
    {
      name: "Allaitement",
      source: require("../public/Allaitement/allaitement3.jpg"),
      id: 1,
    },
    {
      name: "Baptême",
      source: require("../public/Baptême/baptême1.jpg"),
      id: 2,
    },
    {
      name: "Couple",
      source: require("../public/Couple/couple7.jpg"),
      id: 3,
    },
    {
      name: `Décoration d'intérieur`,
      source: require("../public/Deco/deco6.jpg"),
      id: 4,
    },
    {
      name: "EVJF / EVG",
      source: require("../public/EVJF/evjf12.jpg"),
      id: 5,
    },
    {
      name: "Famille",
      source: require("../public/Famille/famille4.jpg"),
      id: 6,
    },
    {
      name: "Grossesse",
      source: require("../public/Grossesse/grossesse6.jpg"),
      id: 7,
    },
    {
      name: "Grossesse - Naissance",
      source: require("../public//Grossesse/grossesse9.jpg"),
      id: 8,
    },
    {
      name: "Mariage",
      source: require("../public/Mariage/mariage16.jpg"),
      id: 9,
    },
    {
      name: "Naissance",
      source: require("../public/Naissance/naissance3.jpg"),
      id: 10,
    },
    {
      name: "Professionnels - Marques",
      source: require("../public/Professionnels_marques/professionnels_marques20.jpg"),
      id: 11,
    },
    {
      name: "Séance à thème",
      source: require("../public/Seances_theme/seance_theme1.jpg"),
      id: 12,
    },
    {
      name: "Solo - Confiance en soi",
      source: require("../public//Solo_confiance_en_soi/solo_confiance5.jpg"),
      id: 13,
    },
    {
      name: "TBB",
      source: require("../public//TBB/tbb3.jpg"),
      id: 14,
    },
  ];

  const prestation = prestations.map((data) => {
    const isScrollAnimationNeeded = prestations.indexOf(data) >= 3;
    return (
      <div className={styles.container}>
        {isScrollAnimationNeeded ? (
          <ScrollAnimation animateIn="fadeInUp" delay={1 * 100}>
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
          <div className={styles.image}>
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
      <div className={styles.head}>
        <div className={styles.headContainer}>
          <Link href="/">
            <div className={styles.logo}>
              <Image
                width={296}
                height={44}
                src="/Logo/logo_nom2.png"
                alt="Logo Solene Doux"
                style={{ backgroundColor: "transparent" }}
                loading="lazy"
              />
            </div>
          </Link>
          <div className={styles.headerRight}>
            <div className={styles.menu}>
              <Link href="/apropos">
                <span className={styles.lien}>A propos</span>
              </Link>
              <Link href="/prestation">
                <span className={styles.lien}>Prestation</span>
              </Link>
              <Link href="/portfolio">
                <span className={styles.lien}>Portfolio</span>
              </Link>
              <Link href="/contact">
                <span className={styles.lien}>Contact</span>
              </Link>
            </div>

            <a
              href="https://www.instagram.com/solenedoux_photographie/"
              className={styles.instaIcon}
              target="_blank"
            >
              <FaInstagram
                style={{ backgroundColor: "transparent" }}
                size={40}
                aria-label="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
      {!formule && (
        <div>
{/*           <div className={styles.presationTexte}>
            <p>
              Que ce soit pour capturer des instants uniques ou sublimer votre
              image, mes prestations photographiques sont conçues pour répondre
              à vos besoins spécifiques. J'offres une approche sur mesure
              pour chaque projet, en mettant l’accent sur la qualité, la
              créativité et l’émotion.
            </p>
          </div> */}
          <div className={styles.allContainer}>{prestation}</div>
        </div>
      )}
      {formule && (
        <div>
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
