import styles from "../styles/Prestation.module.css";
import Link from "next/link";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { FaInstagram } from "react-icons/fa";
import "typeface-poppins";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";
import "animate.css/animate.compat.css";
import Image from "next/image";
import Formule from "./Formule";

function Prestation() {
  const [open, setOpen] = useState(false);
  const [formule, setFormule] = useState(false);
  const [formuleName, setFormuleName] = useState(null);

  const prestations = [
    {
      name: "Allaitement",
      source: require("../public/Allaitement/allaitement2.jpg"),
      id: 1,
    },
    {
      name: "Couple",
      source: require("../public/Couple/couple2.jpg"),
      id: 2,
    },
    {
      name: `Décoration d'intérieur`,
      source: require("../public/Deco/deco4.jpg"),
      id: 3,
    },
    {
      name: "EVJF",
      source: require("../public/EVJF/evjf10.jpg"),
      id: 4,
    },
    {
      name: "Famille",
      source: require("../public/Famille/famille4.jpg"),
      id: 5,
    },
    {
      name: "Grossesse",
      source: require("../public/Grossesse/grossesse6.jpg"),
      id: 6,
    },
    {
      name: "Mariage",
      source: require("../public/Mariage/mariage4.jpg"),
      id: 7,
    },
    {
      name: "Naissance",
      source: require("../public/Naissance/naissance4.jpg"),
      id: 8,
    },
    {
      name: "Professionnels - Marques",
      source: require("../public/Professionnels_marques/professionnels_marques7.jpg"),
      id: 9,
    },
    {
      name: "Solo - Confiance en soi",
      source: require("../public//Solo_confiance_en_soi/solo_confiance3.jpg"),
      id: 10,
    },
    {
      name: "TBB",
      source: require("../public//TBB/tbb7.jpg"),
      id: 11,
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

  const handleOpen = (newOpen) => {
    setOpen(newOpen);
  };

  const drawerList = (
    <Box
      sx={{ width: 250, height: "100vh", fontSize: 34 }}
      className={styles.box}
      role="presentation"
      onClick={() => handleOpen(false)}
    >
      <List>
        <ListItem className={styles.list} disablePadding>
          <Link href="/apropos" onClick={handlePresta}>
            <span className={styles.lien}>Mon parcours</span>
          </Link>
          <Link href="/prestation">
            <span className={styles.lien}>Prestation</span>
          </Link>
          <Link href="/portfolio">
            <span className={styles.lien}>Portfolio</span>
          </Link>
          <Link href="/">
            <span className={styles.lien}>Galerie privée</span>
          </Link>
          <Link href="/contact">
            <span className={styles.lien}>Contact</span>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

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
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => handleOpen(true)}
            className={styles.icon}
            size="2x"
            aria-label="Menu"
            role="Boutton"
          />
          <Drawer
            open={open}
            onClose={() => handleOpen(false)}
            sx={{ backgroundColor: "transparent" }}
          >
            {drawerList}
          </Drawer>
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
      {!formule && (
        <div>
          <div className={styles.presationTexte}>
            <p>
              Que ce soit pour capturer des instants uniques ou sublimer votre
              image, nos prestations photographiques sont conçues pour répondre
              à vos besoins spécifiques. Nous offrons une approche sur mesure
              pour chaque projet, en mettant l’accent sur la qualité, la
              créativité et l’émotion.
            </p>
          </div>
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
