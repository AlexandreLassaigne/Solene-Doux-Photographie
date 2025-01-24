import styles from "../styles/Apropos.module.css";
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

export default function Apropos() {
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
      <div className={styles.presentationContainer}>
        <p className={styles.presentationTexte}>
          Jean Dupont est un photographe professionnel dont le travail se
          distingue par sa capacité à capturer l’essence des moments les plus
          authentiques.
          <br />
          Après avoir étudié les arts visuels, Jean a perfectionné son art à
          travers diverses collaborations avec des marques, des magazines, et
          des particuliers.
          <br />
          Passionné par la lumière et la composition, il aborde chaque projet
          avec une vision créative et un œil aiguisé pour les détails.
          Spécialisé dans les portraits, la photographie de mariage, et la
          photographie de mode, Jean sait saisir les émotions subtiles qui
          rendent chaque image unique.
          <br />
          Son approche est avant tout humaine : il prend le temps de comprendre
          ses sujets, afin de créer des images qui leur ressemblent, tout en
          mettant en valeur leur personnalité ou l’atmosphère d’un événement.
          <br />
          Que ce soit pour immortaliser un moment de vie intime, réaliser un
          shooting créatif ou capturer la beauté d’une scène naturelle, il met
          un point d’honneur à raconter des histoires visuelles fortes et
          sincères. À travers ses photographies, Jean cherche à partager sa
          vision du monde : un mélange d'élégance, de simplicité et de puissance
          visuelle.
          <br />
          Ses travaux ont été exposés dans plusieurs galeries et ses
          collaborations incluent des projets avec des marques de mode, des
          événements prestigieux et des clients privés.
          <br />
          Toujours en quête de nouvelles inspirations, Jean continue d'explorer
          des horizons créatifs tout en restant fidèle à sa passion de
          transmettre des émotions par l’image.
        </p>
        <img
          src="/portrait.jpg"
          alt="photo de portrait"
          className={styles.image}
        />
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
