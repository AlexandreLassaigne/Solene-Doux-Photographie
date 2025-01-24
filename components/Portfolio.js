import styles from "../styles/Portfolio.module.css";
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

function Portfolio() {
  const [allIsVisible, setAllIsVisible] = useState(true);
  const [mariageIsVisible, setMariageIsVisible] = useState(false);
  const [grossesseIsVisible, setGrossesseIsVible] = useState(false);
  const [naissanceIsVisible, setNaisanceIsVisible] = useState(false);

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
          <Link href="/">
            <span className={styles.lien}>Acceuil</span>
          </Link>
          <Link href="/apropos">
            <span className={styles.lien}>A propos</span>
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
  const handleMariage = () => {
    setMariageIsVisible(true);
    setGrossesseIsVible(false);
    setNaisanceIsVisible(false);
    setAllIsVisible(false);
  };

  const handleGrossesse = () => {
    setGrossesseIsVible(true);
    setMariageIsVisible(false);
    setNaisanceIsVisible(false);
    setAllIsVisible(false);
  };

  const handleNaissance = () => {
    setNaisanceIsVisible(true);
    setAllIsVisible(false);
    setMariageIsVisible(false);
    setGrossesseIsVible(false);
  };

  const handleAll = () => {
    setAllIsVisible(true);
    setGrossesseIsVible(false);
    setMariageIsVisible(false);
    setNaisanceIsVisible(false);
  };

  const image = [];

  for (let i = 0; i < 20; i++) {
    image.push(<img className={styles.image} src="/home.jpg" />);
  }

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
          <p className={styles.texte} onClick={handleAll}>
            Tout
          </p>
          <p className={styles.texte} onClick={handleMariage}>
            Mariages
          </p>
          <p className={styles.texte} onClick={handleGrossesse}>
            Grossesses
          </p>
          <p className={styles.texte} onClick={handleNaissance}>
            Naissance
          </p>
        </div>
        {allIsVisible && <div className={styles.imageContainer}>{image}</div>}
      </div>
      {mariageIsVisible && (
        <div>
          <p>Mariages</p>
        </div>
      )}
      {grossesseIsVisible && (
        <div>
          <p>Grossesses</p>
        </div>
      )}
      {naissanceIsVisible && (
        <div>
          <p>Naissance</p>
        </div>
      )}
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

export default Portfolio;
