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
import { FaInstagram } from "react-icons/fa";
import "typeface-poppins";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";
import "animate.css/animate.compat.css";
import Image from "next/image";

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
      <div className={styles.presationTexte}>
        <p>
          Que ce soit pour capturer des instants uniques ou sublimer votre
          image, nos prestations photographiques sont conçues pour répondre à
          vos besoins spécifiques. Nous offrons une approche sur mesure pour
          chaque projet, en mettant l’accent sur la qualité, la créativité et
          l’émotion.
        </p>
      </div>
      <ScrollAnimation
        animateIn="fadeInUp"
        className={styles.allContainer}
      >
        <div className={styles.container}>
          <Image
            src="/Allaitement/allaitement2.jpg"
            alt="photo d'allaitement"
            width={3974}
            height={5961}
          />
          <Link href="/formule">
            <span className={styles.button}>Allaitement</span>
          </Link>
        </div>
        <div className={styles.container}>
          <Image
            src="/Couple/couple2.jpg"
            alt="photo de couple"
            width={3913}
            height={5869}
          />
          <Link href="/formule">
            <span className={styles.button}>Couple</span>
          </Link>
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeInUp"
        className={styles.allContainer}
        delay={1 * 100}
      >
        <div className={styles.container}>
          <Image
            src="/Deco/deco4.jpg"
            alt="photo de décoration"
            width={3978}
            height={5967}
          />
          <Link href="/formule">
            <span className={styles.button}>Décoration d'intérieur</span>
          </Link>
        </div>
        <div className={styles.container}>
          <Image
            src="/EVJF/evjf10.jpg"
            alt="photo d'EVJF"
            width={4160}
            height={6240}
          />
          <Link href="/formule">
            <span className={styles.button}>EVJF</span>
          </Link>
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeInUp"
        className={styles.allContainer}
        delay={1 * 100}
      >
        <div className={styles.container}>
          <Image
            src="/Famille/famille4.jpg"
            alt="photo de famille"
            width={3798}
            height={5697}
          />
          <Link href="/formule">
            <span className={styles.button}>Famille</span>
          </Link>
        </div>
        <div className={styles.container}>
          <Image
            src="/Grossesse/grossesse6.jpg"
            alt="photo de grossesse"
            width={2267}
            height={3400}
          />
          <Link href="/formule">
            <span className={styles.button}>Grossesse</span>
          </Link>
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeInUp"
        className={styles.allContainer}
        delay={1 * 100}
      >
        <div className={styles.container}>
          <Image
            src="/Mariage/mariage4.jpg"
            alt="photo de mariage"
            width={3455}
            height={5183}
          />
          <Link href="/formule">
            <span className={styles.button}>Mariage</span>
          </Link>
        </div>
        <div className={styles.container}>
          <Image
            src="/Naissance/naissance4.jpg"
            alt="photo de naissance"
            width={2875}
            height={4312}
          />
          <Link href="/formule">
            <span className={styles.button}>Naissance</span>
          </Link>
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeInUp"
        className={styles.allContainer}
        delay={1 * 100}
      >
        <div className={styles.container}>
          <Image
            src="/Professionnels_marques/professionnels_marques7.jpg"
            alt="photo marques"
            width={2527}
            height={3790}
          />
          <Link href="/formule">
            <span className={styles.button}>Professionnels - Marques</span>
          </Link>
        </div>
        <div className={styles.container}>
          <Image
            src="/Solo_confiance_en_soi/solo_confiance3.jpg"
            alt="photo solo"
            width={4005}
            height={6008}
          />
          <Link href="/formule">
            <span className={styles.button}>Solo - Confiance en soi</span>
          </Link>
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeInUp"
        className={styles.allContainer}
        delay={1 * 100}
      >
        <div className={styles.container}>
          <Image
            src="/TBB/tbb7.jpg"
            alt="photo tbb"
            width={3648}
            height={5472}
          />
          <Link href="/formule">
            <span className={styles.button}>TBB</span>
          </Link>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Prestation;
