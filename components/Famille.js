import styles from "../styles/Famille.module.css";
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
import Modal from "@mui/material/Modal";

function Famille() {
  const [open, setOpen] = useState(false);
  const [isModal1Visible, setIsModal1Visible] = useState(false);
  const [isModal2Visible, setIsModal2Visible] = useState(false);
  const [isModal3Visible, setIsModal3Visible] = useState(false);

  const handleOpen = (newOpen) => {
    setOpen(newOpen);
  };

  const showModal1 = () => {
    setIsModal1Visible(true);
  };

  const handleClose1 = () => {
    setIsModal1Visible(false);
  };

  const showModal2 = () => {
    setIsModal2Visible(true);
  };

  const handleClose2 = () => {
    setIsModal2Visible(false);
  };

  const showModal3 = () => {
    setIsModal3Visible(true);
  };

  const handleClose3 = () => {
    setIsModal3Visible(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    boxShadow: 24,
    p: 4,
  };

  const titleStyle = { cursor: "pointer" };

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
          <img src="/famille.jpeg" className={styles.image} />
          <div className={styles.textContainer}>
            <h2 onClick={showModal1} style={titleStyle}>
              Forfait "Famille Nature" – 350€
            </h2>
            <p className={styles.text}>
              Le forfait Famille Nature est parfait pour les familles qui
              souhaitent capturer des moments simples et authentiques, dans une
              ambiance décontractée et naturelle. C’est l’option idéale pour
              ceux qui préfèrent des photos spontanées, prises sur le vif.
            </p>
            {isModal1Visible && (
              <div>
                <Modal
                  open={isModal1Visible}
                  onClose={handleClose1}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <p className={styles.text}>
                      <br /> Séance photo de 1 à 1,5 heure : Un moment de
                      détente où nous capturons des instants naturels, des
                      sourires et des câlins.
                      <br /> Lieu au choix : À domicile pour des photos
                      familiales chaleureuses ou en extérieur pour des photos
                      plus naturelles (parc, plage, forêt, etc.).
                      <br /> 15 photos retouchées : Une sélection des moments
                      les plus spontanés et tendres, avec un traitement doux et
                      naturel.
                      <br /> Galerie en ligne privée : Un accès privé à une
                      galerie où vous pourrez visionner, partager et télécharger
                      vos photos.
                      <br />
                      Option famille élargie : Vous pouvez inclure des photos
                      avec les grands-parents, oncles, tantes, etc., pour un
                      souvenir de famille complet.
                    </p>
                  </Box>
                </Modal>
              </div>
            )}
          </div>
        </div>
        <div className={styles.container}>
          <img src="/famille.jpeg" className={styles.image} />
          <div className={styles.textContainer}>
            <h2 onClick={showModal2} style={titleStyle}>
              Forfait "Famille Lifestyle" – 550€
            </h2>
            <p className={styles.text}>
              Le forfait Famille Lifestyle est conçu pour capturer des moments
              authentiques, mais avec un peu plus de structure. Il s’agit d’une
              séance photo détendue, mais un peu plus travaillée, avec une
              attention particulière à l’esthétique des images et des
              compositions créatives.
            </p>
            {isModal2Visible && (
              <div>
                <Modal
                  open={isModal2Visible}
                  onClose={handleClose2}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <p className={styles.text}>
                      <br /> Séance photo de 2 heures : Un shooting plus long
                      pour inclure plusieurs moments : portraits de famille,
                      photos de groupe, mais aussi des moments plus intimes
                      (rire, câlins, jeux).
                      <br /> Lieu au choix : À domicile pour une ambiance cosy
                      et intime, ou en extérieur pour une approche plus
                      dynamique et naturelle.
                      <br /> 25 photos retouchées : Une sélection de photos
                      créatives et soignées, avec une retouche professionnelle
                      pour un rendu à la fois naturel et élégant.
                      <br /> Galerie en ligne privée + Option téléchargement :
                      Vous pourrez accéder à votre galerie pour visualiser,
                      partager et télécharger vos photos en toute
                      confidentialité.
                      <br /> Option photos de couple : Si vous le souhaitez,
                      nous pouvons inclure quelques photos en couple, juste pour
                      les parents, pour capturer l’essence de votre complicité.
                      <br /> Accessoires et décors personnalisés : En fonction
                      du lieu choisi, des accessoires comme des couvertures, des
                      jouets ou des éléments de décoration peuvent être ajoutés
                      pour personnaliser la séance.
                    </p>
                  </Box>
                </Modal>
              </div>
            )}
          </div>
        </div>
        <div className={styles.container}>
          <img src="/famille.jpeg" className={styles.image} />
          <div className={styles.textContainer}>
            <h2 onClick={showModal3} style={titleStyle}>
              Forfait "Famille Élégance" – 850€
            </h2>
            <p className={styles.text}>
              Le forfait Famille Élégance est la formule premium pour les
              familles qui souhaitent une séance photo plus sophistiquée, avec
              une couverture complète et des photos de grande qualité. Ce
              forfait permet de capturer des souvenirs à la fois élégants et
              intemporels, avec un soin particulier apporté à chaque détail.
            </p>
            {isModal3Visible && (
              <div>
                <Modal
                  open={isModal3Visible}
                  onClose={handleClose3}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    {" "}
                    <p className={styles.text}>
                      <br /> Séance photo de 3 heures : Une séance plus longue
                      qui permet de prendre le temps de photographier chaque
                      membre de la famille, mais aussi de varier les ambiances
                      et les décors (intérieur, extérieur, portraits
                      individuels).
                      <br /> Lieu au choix + Studio en option : À domicile pour
                      un cadre intime, en extérieur pour une ambiance plus
                      décontractée, ou en studio pour des photos
                      professionnelles avec un éclairage travaillé.
                      <br /> 40 photos retouchées : Une sélection soignée de
                      photos élégantes et intemporelles, avec des retouches
                      professionnelles qui apportent finesse et harmonie à
                      chaque image.
                      <br /> Galerie en ligne privée + Application mobile :
                      Accédez à votre galerie en ligne et à une application
                      mobile dédiée, vous permettant de visualiser et partager
                      facilement vos photos avec vos proches.
                      <br /> Album photo haut de gamme (format 30x30) : Un album
                      de luxe, entièrement personnalisé, contenant les meilleurs
                      moments de votre séance. Un souvenir tangible et élégant
                      pour la famille.
                      <br /> Séance photos de groupe et portraits individuels :
                      Des portraits individuels pour chaque membre de la famille
                      ainsi que des photos en groupe, en capturant à la fois des
                      instants spontanés et des poses plus travaillées.
                      <br /> Option maquillage et coiffure : Si vous le
                      souhaitez, nous pouvons proposer une prestation de
                      maquillage et coiffure pour les parents afin que tout le
                      monde soit à son meilleur lors de la séance.
                    </p>
                  </Box>
                </Modal>
              </div>
            )}
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

export default Famille;
