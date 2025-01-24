import styles from "../styles/Prestation.module.css";
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

function Prestation() {
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
      <div className={styles.presationTexte}>
        <p>
          Que ce soit pour capturer des instants uniques ou sublimer votre
          image, nos prestations photographiques sont conçues pour répondre à
          vos besoins spécifiques. Nous offrons une approche sur mesure pour
          chaque projet, en mettant l’accent sur la qualité, la créativité et
          l’émotion.
        </p>
      </div>
      <div className={styles.allContainer}>
        <div className={styles.container}>
          <img
            src="/portrait.jpg"
            className={styles.image}
            alt="photo de mariage"
          />
          <button className={styles.button}>Mariage</button>
        </div>
        <div className={styles.container}>
          <img
            src="/portrait.jpg"
            className={styles.image}
            alt="photo de grossesses"
          />
          <button className={styles.button}>Grossesses</button>
        </div>
        <div className={styles.container}>
          <img
            src="/portrait.jpg"
            className={styles.image}
            alt="photo de naissance"
          />
          <button className={styles.button}>Naissance</button>
        </div>
        <div className={styles.container}>
          <img
            src="/portrait.jpg"
            className={styles.image}
            alt="photo de naissance"
          />
          <button className={styles.button}>Famille</button>
        </div>
        <div className={styles.container}>
          <img
            src="/portrait.jpg"
            className={styles.image}
            alt="photo de naissance"
          />
          <button className={styles.button}>Individuel</button>
        </div>
        <div className={styles.container}>
          <img
            src="/portrait.jpg"
            className={styles.image}
            alt="photo de naissance"
          />
          <button className={styles.button}>Famille</button>
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

export default Prestation;
