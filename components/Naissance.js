import styles from "../styles/Naissance.module.css";
import Link from "next/link";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { Footer } from "flowbite-react";
import { FaInstagram } from "react-icons/fa";
import "typeface-poppins";

function Naissance() {
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
          <Drawer open={open} onClose={() => handleOpen(false)}>
            {drawerList}
          </Drawer>
          <Link href="/">
            <h1 className={styles.title}>Solène Photographie</h1>
          </Link>
        </div>
      </div>
      <div>
        <div className={styles.container}>
          <img src="/naissance.jpeg" className={styles.image} />
          <div className={styles.textContainer}>
            <h2>Forfait "Premiers Souvenirs" – 350€</h2>
            <p className={styles.text}>
              Le forfait Premiers Souvenirs est parfait pour ceux qui souhaitent
              saisir les tout premiers instants de la vie de leur bébé dans une
              ambiance douce et intime. Un shooting simple, mais rempli de
              tendresse, pour capturer les moments qui comptent.
              <br /> Séance photo de 1 à 1,5 heure : Un moment de douceur pour
              photographier votre bébé dans ses premiers jours.
              <br /> Lieu au choix : À domicile pour un cadre chaleureux et
              naturel, ou en studio pour une ambiance plus professionnelle.
              <br /> 10 photos retouchées : Une sélection des plus belles
              images, retouchées avec soin pour un rendu doux et naturel.
              <br /> Galerie en ligne privée : Un accès à votre galerie en ligne
              pour visionner et télécharger vos photos.
              <br />
              Option famille : Vous pouvez ajouter des photos de famille, avec
              les parents et les frères et sœurs si vous le souhaitez.
            </p>
          </div>
        </div>
        <div className={styles.container}>
          <img src="/naissance.jpeg" className={styles.image} />
          <div className={styles.textContainer}>
            <h2>Forfait "Bébé en Douceur" – 550€</h2>
            <p className={styles.text}>
              Le forfait Bébé en Douceur est l’idéal pour les parents qui
              veulent immortaliser des moments plus variés et profiter de
              différentes ambiances. Cette séance permet de prendre des photos
              tendres et naturelles tout en prenant le temps de capturer chaque
              petit détail de votre bébé.
              <br /> Séance photo de 2 à 2,5 heures : Plus de temps pour
              photographier votre bébé sous plusieurs angles et capturer
              différentes expressions et postures.
              <br /> Lieu au choix : Séance à domicile pour garder l’intimité de
              votre foyer, ou en studio pour un cadre soigné.
              <br /> 25 photos retouchées : Sélection des meilleures images,
              retouchées avec une attention particulière aux détails pour un
              rendu élégant et doux.
              <br /> Galerie en ligne privée + Option téléchargement : Partagez
              et téléchargez vos photos en toute confidentialité via une galerie
              privée.
              <br /> Mise en scène personnalisée : Possibilité d’ajouter des
              accessoires, des tenues spéciales pour bébé, ou des décors qui
              correspondent à vos goûts et à l’ambiance de la séance.
              <br /> Option famille : Des photos de famille avec les parents et
              frères et sœurs, dans une atmosphère détendue et naturelle.
            </p>
          </div>
        </div>
        <div className={styles.container}>
          <img src="/naissance.jpeg" className={styles.image} />
          <div className={styles.textContainer}>
            <h2>Forfait "Tout en Douceur" – 850€</h2>
            <p className={styles.text}>
              Le forfait Tout en Douceur est l’expérience complète pour capturer
              chaque instant précieux de l’arrivée de votre bébé. C’est l’option
              idéale pour les parents qui souhaitent avoir des souvenirs
              détaillés et une couverture complète des premières semaines de vie
              de leur enfant.
              <br /> Séance photo de 3 à 3,5 heures : Une séance plus longue
              pour varier les poses, les décors et les ambiances, avec des
              moments plus détaillés, tout en restant dans un esprit naturel.
              <br /> Lieu au choix + Séance en studio + Séance à domicile : Une
              séance mixte, à la fois en studio (pour des photos soignées et
              épurées) et à domicile (pour capturer l’intimité du moment).
              <br /> 40 photos retouchées : Un choix plus large de photos,
              sélectionnées et retouchées pour un résultat à la fois tendre,
              professionnel et intemporel.
              <br /> Galerie en ligne privée + Application mobile : Accédez à
              une galerie privée pour visualiser et partager vos photos, et
              profitez d’une application mobile personnalisée pour garder vos
              souvenirs à portée de main.
              <br /> Séance famille complète : Photos avec les parents et
              frères/sœurs, capturant la complicité et l’amour familial autour
              de ce nouveau-né.
              <br /> Accessoires et mise en scène personnalisée : Des
              accessoires et des décors spéciaux peuvent être ajoutés pour
              personnaliser encore plus votre séance (par exemple, couvertures,
              paniers, petits vêtements mignons…).
              <br /> Album photo luxe (format 20x20) : Un album haut de gamme,
              soigneusement créé avec les plus belles photos de la séance, pour
              garder un souvenir tangible de ces premiers moments.
            </p>
          </div>
        </div>
      </div>
      <Footer className={styles.footerContainer}>
        <div className={styles.footer}>
          <a
            href="https://www.instagram.com/"
            className={styles.footerIcon}
            target="_blank"
          >
            <FaInstagram className={styles.footerIcon} size={40} />
          </a>
          <div className={styles.coordoneesContainer}>
            <p className={styles.texteCoordonnees}>(+33)6.54.28.97.60</p>
            <p className={styles.texteCoordonnees}>solenephoto@gmail.com</p>
          </div>
        </div>
      </Footer>
    </div>
  );
}

export default Naissance;
