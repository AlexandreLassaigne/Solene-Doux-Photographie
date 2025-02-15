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
import { FaInstagram } from "react-icons/fa";
import "typeface-poppins";

function Formule(props) {
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

  let formule;

   if (props.name === "mariage") {
    formule =
      <div>
        <div>
          <h1>Formule Instants</h1>
          <span>650 €</span>
          <p>
            Cérémonie / Photos de groupe / Photo Couple / Début vin d'honneur
            (2h)
          </p>
        </div>
        <div>
          <h1>Formule Douceur</h1>
          <span>1500 €</span>
          <p>
            Préparatifs des mariés/ Cérémonie / Photos de groupe / Photo Couple / Vin d'honneur
            (7h)
          </p>
        </div>
        <div>
          <h1>Formule Prestige</h1>
          <span>2100 €</span>
          <p>
          Préparatifs des mariés/ Cérémonie / Photos de groupe / Photo Couple / Vin d'honneur / Jusqu'au gateau (00h00 MAX)
          (10h)
          </p>
        </div>
      </div>
    ;
  } else {
    formule = 
      <div>
        <div>
          <h1>Formule Instants</h1>
          <h2>Séance de 30 min</h2>
          <span>150 €</span>
          <p>
            Galerie complète envoyée (environ 50 photos)
          </p>
        </div>
        <div>
          <h1>Formule Douceur</h1>
          <h2>Séance de 45 min</h2>
          <span>200 €</span>
          <p>
          Galerie complète envoyée (environ 80 photos)
          </p>
        </div>
        <div>
          <h1>Formule Prestige</h1>
          <h2>Séance d'1h</h2>
          <span>250 €</span>
          <p>
          Galerie complète envoyée (environ 100 photos)
          </p>
        </div>
      </div>
  
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
      <div>
        <div className={styles.container}>{formule}</div>
      </div>
    </div>
  );
}

export default Formule;
