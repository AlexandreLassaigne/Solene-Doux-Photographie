import styles from "../styles/Mariage.module.css";
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

function Mariage() {

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
          <img src="/mariage.jpeg" className={styles.image} />
          <div className={styles.textContainer}>
            <h2>Forfait "Essentiel" - 699€</h2>
            <p className={styles.text}>
              Pour les couples qui souhaitent capturer l'essence de leur journée
              sans se perdre dans les détails, le forfait Essentiel est une
              formule simple et complète, idéale pour immortaliser les moments
              clés de votre mariage.
              <br /> Séance photos de 4 heures : Des préparatifs à la fin de la
              cérémonie.
              <br /> Couverture de la cérémonie : Les photos des vœux, des
              échanges de bagues, et des instants de bonheur partagés.
              <br /> Photos de groupe : Photos des invités et de votre famille
              proche.
              <br /> Galerie en ligne : Accès privé à une galerie numérique où
              vous pourrez visionner et télécharger vos photos. <br />
              20 photos retouchées : Sélection des meilleurs moments avec une
              retouche professionnelle pour un rendu parfait.
            </p>
          </div>
        </div>
        <div className={styles.container}>
          <img src="/mariage.jpeg" className={styles.image}/>
          <div className={styles.textContainer}>
            <h2>Forfait "Privilège" - 1299€</h2>
            <p className={styles.text}>
              Le forfait Privilège est conçu pour les couples qui souhaitent que
              chaque détail de leur journée soit capturé, des préparatifs au
              début de la soirée. Plus de temps pour plus de souvenirs, avec une
              approche plus personnalisée.
              <br /> Séance photos de 8 heures : Couvre toute la journée, des
              préparatifs jusqu’à la réception ou la première danse.
              <br /> Cérémonie + Réception : Des photos des moments forts de
              votre mariage, y compris les discours, les premières danses et les
              animations.
              <br /> Photos de groupe et portraits : Portraits des mariés et des
              invités, photos de groupe organisées avec votre famille et amis.
              <br /> Galerie en ligne : Accès privé à une galerie numérique où
              vous pourrez visionner, partager et télécharger vos photos.
              <br /> 40 photos retouchées : Un choix plus large de photos
              soigneusement retouchées pour sublimer chaque instant.
              <br /> Album photo de luxe (format 30x30) : Un album haut de gamme
              avec les meilleures images de votre journée, créé sur mesure pour
              vous.
            </p>
          </div>
        </div>
        <div className={styles.container}>
          <img src="/mariage.jpeg" className={styles.image}/>
          <div className={styles.textContainer}>
            <h2>Forfait "Prestige" - 2199€</h2>
            <p className={styles.text}>
              Le forfait Prestige est l’option ultime pour capturer chaque
              émotion, chaque détail et chaque instant magique de votre mariage.
              Avec une couverture complète et un service VIP, c’est l’expérience
              ultime pour des souvenirs inoubliables.
              <br /> Séance photos de 12 heures : Une couverture complète, du
              matin au soir, de vos préparatifs à la soirée de mariage.
              <br /> Séance photo avant le mariage : Une séance d’engagement de
              2 heures avant le jour J (en option, peut être remplacée par une
              séance de photos en couple pendant le mariage).
              <br /> Cérémonie, portraits & réception : Photos de chaque instant
              clé, portraits en couple, de groupe et des invités.
              <br /> Second photographe : Pour ne manquer aucun moment, un
              deuxième photographe sera présent.
              <br /> Galerie en ligne + Application mobile : Accès à votre
              galerie privée en ligne avec un site dédié à votre mariage. Vous
              pouvez également créer une application mobile personnalisée pour
              partager vos photos.
              <br /> 100 photos retouchées : Sélection des plus beaux moments
              avec un traitement professionnel.
              <br /> Album photo haut de gamme + 2 albums parents : Album de
              luxe format 40x40, plus deux albums miniatures pour vos proches.
              <br /> Vidéo teaser : Un court teaser vidéo de votre journée (3-5
              minutes) pour revivre les moments forts du mariage.
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

export default Mariage;
