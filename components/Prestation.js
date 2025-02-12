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
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

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

  const slideToUp = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: elem,
          start: "center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  };

  useEffect(() => {
    slideToUp('#box1')
  }, [])
  useEffect(() => {
    slideToUp('#box2')
  }, [])
  useEffect(() => {
    slideToUp('#box3')
  }, [])
  useEffect(() => {
    slideToUp('#box4')
  }, [])
  useEffect(() => {
    slideToUp('#box5')
  }, [])
  useEffect(() => {
    slideToUp('#box6')
  }, [])
  useEffect(() => {
    slideToUp('#box7')
  }, [])
  useEffect(() => {
    slideToUp('#box8')
  }, [])
  useEffect(() => {
    slideToUp('#box9')
  }, [])
  useEffect(() => {
    slideToUp('#box10')
  }, [])
  useEffect(() => {
    slideToUp('#box11')
  }, [])

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
            <img src="/Logo/logo_nom2.png" className={styles.logo}/>
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
        <div className={styles.container} id="box1">
          <img
            src="/Allaitement/allaitement2.jpg"
            className={styles.image}
            alt="photo d'allaitement"
          />
          <Link href="/mariage" >
            <span className={styles.button}>Allaitement</span>
          </Link>
        </div>
        <div className={styles.container} id="box2">
          <img
            src="/Couple/couple2.jpg"
            className={styles.image}
            alt="photo de couple"
          />
          <Link href="/grossesse">
            <span className={styles.button}>Couple</span>
          </Link>
        </div>
        <div className={styles.container} id="box3">
          <img
            src="/Deco/deco4.jpg"
            className={styles.image}
            alt="photo de décoration"
          />
          <Link href="/naissance">
            <span className={styles.button}>Décoration d'intérieur</span>
          </Link>
        </div>
        <div className={styles.container} id="box4">
          <img
            src="/EVJF/evjf10.jpg"
            className={styles.image}
            alt="photo d'EVJF"
          />
          <Link href="/famille">
            <span className={styles.button}>EVJF</span>
          </Link>
        </div>
        <div className={styles.container} id="box5">
          <img
            src="/Famille/famille4.jpg"
            className={styles.image}
            alt="photo de famille"
          />
          <Link href="/naissance">
            <span className={styles.button}>Famille</span>
          </Link>
        </div>
        <div className={styles.container} id="box6">
          <img
            src="/Grossesse/grossesse6.jpg"
            className={styles.image}
            alt="photo de grossesse"
          />
          <Link href="/famille">
            <span className={styles.button}>Grossesse</span>
          </Link>
        </div>
        <div className={styles.container} id="box7">
          <img
            src="/Mariage/mariage4.jpg"
            className={styles.image}
            alt="photo de mariage"
          />
          <Link href="/mariage" >
            <span className={styles.button}>Mariage</span>
          </Link>
        </div>
        <div className={styles.container} id="box8">
          <img
            src="/Naissance/naissance4.jpg"
            className={styles.image}
            alt="photo de naissance"
          />
          <Link href="/mariage" >
            <span className={styles.button}>Naissance</span>
          </Link>
        </div>
        <div className={styles.container} id="box9">
          <img
            src="/Professionnels_marques/professionnels_marques7.jpg"
            className={styles.image}
            alt="photo marques"
          />
          <Link href="/mariage" >
            <span className={styles.button}>Professionnels - Marques</span>
          </Link>
        </div>
        <div className={styles.container} id="box10">
          <img
            src="/Solo_confiance_en_soi/solo_confiance3.jpg"
            className={styles.image}
            alt="photo solo"
          />
          <Link href="/mariage" >
            <span className={styles.button}>Solo - Confiance en soi</span>
          </Link>
        </div>
        <div className={styles.container} id="box11">
          <img
            src="/TBB/tbb7.jpg"
            className={styles.image}
            alt="photo tbb"
          />
          <Link href="/mariage" >
            <span className={styles.button}>TBB</span>
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
