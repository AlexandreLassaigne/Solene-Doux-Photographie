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
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

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
          start: "top center",
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
      <div className={styles.presentationContainer} id="box1">
        <p className={styles.presentationTexte}>
          Enchanté,
          <br /><br/>
          Moi c’est Solène, j’ai 30 ans et je vis dans larégion Toulousaine
          depuis ma plus tendre enfance.
          <br/><br/>
          Photographe passionnée et spécialiséedans les moments forts de la vie,
          monobjectif : capturer les émotionsauthentiques et sublimer chaque
          instantavec sensibilité et professionnalisme
          <br /><br/>
          Que ce soit pour un mariage, une séancematernité, des photos de
          famille ou encoreun shooting pour des professionnels, jem'efforce de
          créer des imagesintemporelles qui racontent votre histoire.Chaque
          projet est unique, et j'aimem'adapter à vos envies et besoins pour
          queles souvenirs que vous conserverez soient àla hauteur de vos
          attentes.
          <br />
        </p>
        <img
          src="/Solene/solene4.jpg"
          alt="photo de portrait"
          className={styles.image}
        />
      </div>
      <div className={styles.presentationContainer} id="box2">
        <img
          src="/Solene/solene2.jpg"
          alt="photo de portrait"
          className={styles.image}
        />
        <p className={styles.presentationTexte}>
          Avec un oeil attentif aux détails et une approche naturelle, je
          cherche à immortaliser les moments les plus précieux tout en vous
          offrant une expérience conviviale et sans pression.
          <br /><br/>
          Ma priorité est que vous vous sentiez à l’aise devant l’objectif et
          que chaque cliché reflète votre personnalité. Si vous recherchez des
          images pleines d’émotions, sincères et créatives, je serai ravie de
          vous accompagner dans cette aventure.
          <br /><br/>
          N’hésitez pas à me contacter pour discuter de vos projets et de vos
          envies photographiques !
          <br />
        </p>
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
