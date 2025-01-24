import styles from "../styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";
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

function Home() {
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
          <h1 className={styles.title}>Solène Photographie</h1>
        </div>
        <img src="/home.jpg" className={styles.imageHead} />
      </div>
      <div className={styles.allContainer}>
        <div className={styles.container}>
          <img
            src="/portrait.jpg"
            className={styles.image}
            alt="photo portrait"
          />
          <div className={styles.description}>
            <p>
              Solène Doux photographe passionné, spécialisé dans le portrait et
              le paysage. <br />
              Mon travail se distingue par une utilisation subtile de la lumière
              naturelle et une approche minimaliste.
              <br /> Je cherche à capturer des moments authentiques, souvent
              empreints d’émotion.
              <br />
              Exposé dans plusieurs galeries, je collabore également avec des
              magazines et des entreprises.
            </p>
            <Link href="/apropos">
              <button className={styles.button}>Mon parcours</button>
            </Link>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.description}>
            <p>
              J'offres une gamme complète de services pour capturer les moments
              qui comptent. <br />
              Que ce soit pour des événements privés, des projets professionnels
              ou des créations artistiques, chaque séance est pensée sur mesure
              pour répondre à vos besoins.
            </p>
            <Link href="/prestation">
              <button className={styles.buttonPrestation}>
                Mes prestations
              </button>
            </Link>
          </div>
          <img src="/prestation.jpg" className={styles.image} alt="photo"/>
        </div>
        <div className={styles.container}>
          <img src="/prestation.jpg" className={styles.image} alt="photo"/>
          <div className={styles.description}>
            <p>
              Envie de découvrir mon travail ? Cliquez ici pour explorer mon
              portfolio et voir comment chaque image raconte une histoire
              unique. À bientôt !
            </p>
            <Link href="/portfolio">
              <button className={styles.button}>Mon portfolio</button>
            </Link>
          </div>
        </div>
        <div className={styles.contactDescription}>
          <p className={styles.contactText}>
            Vous avez un projet en tête ou des questions ?<br /> N’hésitez pas à
            me contacter, je serai ravi d’échanger avec vous et de créer
            ensemble des images uniques !{" "}
          </p>
          <Link href="/contact">
            <button className={styles.buttonContact}>Contact</button>
          </Link>
        </div>
      </div>
      <Footer className={styles.footerContainer}>
        <div className={styles.footer}>
          <a
            href="https://www.instagram.com/"
            className={styles.footerIcon}
            target="_blank"
          >
            <FaInstagram className={styles.footerIcon} size={40}/>
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

export default Home;
