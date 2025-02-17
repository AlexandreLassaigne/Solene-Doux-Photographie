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
import { FaInstagram } from "react-icons/fa";
import "typeface-poppins";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";
import "animate.css/animate.compat.css";
import Image from "next/image";

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
          <Drawer
            open={open}
            onClose={() => handleOpen(false)}
            sx={{ backgroundColor: "transparent" }}
          >
            {drawerList}
          </Drawer>
          <Link href="/">
            <div className={styles.logo}>
              <Image
                width={296}
                height={44}
                src="/Logo/logo_nom2.png"
                style={{ backgroundColor: "transparent" }}
              />
            </div>
          </Link>
          <a
            href="https://www.instagram.com/solenedoux_photographie/"
            className={styles.instaIcon}
            target="_blank"
          >
            <FaInstagram size={40} style={{ backgroundColor: "transparent" }} />
          </a>
        </div>
      </div>
      <ScrollAnimation animateIn="fadeInUp">
        <div className={styles.presentationContainer}>
          <p className={styles.presentationTexte}>
            Enchanté,
            <br />
            <br />
            Moi c’est Solène, j’ai 30 ans et je vis dans la région Toulousaine
            depuis ma plus tendre enfance.
            <br />
            <br />
            Photographe passionnée et spécialisée dans les moments forts de la
            vie, mon objectif : capturer les émotions authentiques et sublimer
            chaque instant avec sensibilité et professionnalisme
            <br />
            <br />
            Que ce soit pour un mariage, une séance maternité, des photos de
            famille ou encore un shooting pour des professionnels, je m'efforce
            de créer des images intemporelles qui racontent votre histoire.
            Chaque projet est unique, et j'aime m'adapter à vos envies et
            besoins pour queles souvenirs que vous conserverez soient à la
            hauteur de vos attentes.
            <br />
          </p>
          <div className={styles.image}>
            <Image
              src="/Solene/solene4.jpg"
              alt="photo de portrait"
              width={3839}
              height={5758}
            />
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" delay={1 * 100}>
        <div className={styles.presentationContainer}>
          <div className={styles.image}>
            <Image
              src="/Solene/solene2.jpg"
              alt="photo de portrait"
              width={3501}
              height={5251}
            />
          </div>
          <p className={styles.presentationTexte}>
            Avec un oeil attentif aux détails et une approche naturelle, je
            cherche à immortaliser les moments les plus précieux tout en vous
            offrant une expérience conviviale et sans pression.
            <br />
            <br />
            Ma priorité est que vous vous sentiez à l’aise devant l’objectif et
            que chaque cliché reflète votre personnalité. Si vous recherchez des
            images pleines d’émotions, sincères et créatives, je serai ravie de
            vous accompagner dans cette aventure.
            <br />
            <br />
            N’hésitez pas à me contacter pour discuter de vos projets et de vos
            envies photographiques !
            <br />
          </p>
        </div>
      </ScrollAnimation>
    </div>
  );
}
