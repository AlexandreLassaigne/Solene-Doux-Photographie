import styles from "../styles/Grossesse.module.css";
import Link from "next/link";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { FaInstagram } from "react-icons/fa";
import "typeface-poppins";

function Grossesse() {
  const [open, setOpen] = useState(false);

  const handleOpen = (newOpen) => {
    setOpen(newOpen);
  };

  const drawerList = (
    <Box
      sx={{ width: 250, height: "100vh", fontSize: 34 }}
      role="presentation"
      onClick={() => handleOpen(false)}
    >
      <List>
        <ListItem className={styles.list} disablePadding>
          <Link href="/apropos">
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
        <title>Solène Photographie</title>
      </Head>
      <div className={styles.head}>
        <div className={styles.headContainer}>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => handleOpen(true)}
            className={styles.icon}
            size="2x"
          />
          <Drawer
            open={open}
            onClose={() => handleOpen(false)}
            sx={{ backgroundColor: "transparent" }}
          >
            {drawerList}
          </Drawer>
          <Link href="/">
            <img src="/Logo/logo_nom2.png" className={styles.logo} />
          </Link>
          <a
            href="https://www.instagram.com/solenedoux_photographie/"
            className={styles.instaIcon}
            target="_blank"
          >
            <FaInstagram style={{ backgroundColor: "transparent" }} size={40} />
          </a>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.containerTarif}>
          <img src="/grossesse.jpeg" className={styles.image} />
          <div className={styles.textContainer}>
            <h2>Forfait "Basiq" – 299€</h2>
            <p className={styles.text}>
              Le forfait Basiq est idéal pour les futures mamans qui souhaitent
              garder un souvenir intime et simple de leur grossesse, sans
              fioritures, mais avec des photos de qualité pour immortaliser ce
              moment magique.
              <br /> Séance photo de 1 heure : Un shooting rapide et efficace,
              avec des poses naturelles et des clichés doux.
              <br /> Lieu au choix : À domicile, en extérieur ou en studio. Vous
              pouvez choisir le lieu où vous vous sentez le mieux.
              <br /> 15 photos retouchées : Une sélection des meilleurs clichés,
              soigneusement retouchés pour un rendu lumineux et naturel
              <br /> Galerie en ligne privée : Un accès à une galerie en ligne
              où vous pourrez visionner et télécharger vos photos.
              <br />
              Option partenaire : Le papa peut également être inclus dans
              certaines photos pour capturer votre complicité.
            </p>
          </div>
        </div>
        <div className={styles.containerTarif}>
          <img src="/grossesse.jpeg" className={styles.image} />
          <div className={styles.textContainer}>
            <h2>Forfait "Duo" – 499€</h2>
            <p className={styles.text}>
              Le forfait Duo est parfait pour les couples qui veulent célébrer
              ensemble cette belle aventure. Il permet d’avoir une séance plus
              personnalisée et plus de moments partagés pour capturer
              l’évolution de votre grossesse dans un cadre intime et doux.
              <br /> Séance photo de 2 heures : Plus de temps pour capturer
              différentes poses, moments complices et des photos de couple.
              <br /> Lieu au choix : En studio, à domicile ou en extérieur, nous
              créons une ambiance chaleureuse selon vos envies.
              <br /> 30 photos retouchées : Une sélection variée de photos, avec
              un traitement professionnel pour sublimer chaque instant.
              <br /> Galerie en ligne privée : Partagez et téléchargez vos
              photos en toute confidentialité.
              <br /> Option partenaire : Des photos en duo avec le futur papa,
              ou même en famille avec d'autres enfants si vous le souhaitez.
              <br /> Séance lifestyle : Vous pourrez choisir d'inclure des
              moments plus naturels et spontanés, avec des photos en interaction
              (câlins, sourires, moments tendres).
            </p>
          </div>
        </div>
        <div className={styles.containerTarif}>
          <img src="/grossesse.jpeg" className={styles.image} />
          <div className={styles.textContainer}>
            <h2>Forfait "Bébé en route" – 799€</h2>
            <p className={styles.text}>
              Le forfait Bébé en route est l’option complète pour les mamans qui
              souhaitent créer un véritable album souvenir de leur grossesse. Ce
              forfait est parfait pour capturer des photos dans différents
              styles et créer une belle mémoire de cette période unique, avant
              l’arrivée du bébé.
              <br /> Séance photo de 3 heures : Une séance longue pour varier
              les poses et les ambiances (en studio, à domicile, en extérieur,
              ou un mix des trois).
              <br /> Lieu au choix + 2 ambiances différentes : Vous pouvez
              choisir deux lieux différents ou alterner des ambiances en
              intérieur et extérieur pour diversifier vos photos.
              <br /> 40 photos retouchées : Un travail de retouche détaillé pour
              donner à chaque photo un aspect doux et élégant.
              <br /> Galerie en ligne privée + application mobile : Visualisez
              et partagez vos photos en ligne, et créez une application
              personnalisée pour garder vos souvenirs à portée de main.
              <br /> Séance avec le futur papa et/ou aînés : Idéale pour des
              photos de couple et des clichés familiaux, parfaits pour annoncer
              l’arrivée du bébé.
              <br /> Album photo luxe (format 30x30) : Un album haut de gamme
              avec vos plus belles photos, pour conserver ce moment magique de
              façon tangible.
              <br /> Option maquillage et coiffure : Si vous le souhaitez, nous
              pouvons ajouter une prestation de maquillage et coiffure pour vous
              sublimer avant la séance photo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grossesse;
