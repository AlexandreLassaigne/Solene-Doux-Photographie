import styles from "../styles/Contact.module.css";
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
import emailjs from "emailjs-com";

const SERVICE_ID = "service_g0noway";
const TEMPLATE_ID = "template_u2k7z4r";
const PUBLIC_KEY = "EyXreh7zUmW7qIajw";

function Contact() {
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

  const handleOnSubmit = (e) => {
    //empêche la page de se recharger lors de la soumission du formulaire
    e.preventDefault();
    //envoie le formulaire via l'API EmailJS, en utilisant les paramètres
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        alert("Message envoyé");
      },
      (error) => {
        alert("Désolé, il y a eu une erreur veuillez recommencer");
      }
    );
    e.target.reset();
  };

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
      <div className={styles.titreContainer}>
        <p className={styles.text}>Parlez moi de votre projet</p>
      </div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form className={styles.inputContainer} onSubmit={handleOnSubmit}>
          <div className={styles.nom}>
            <input
              type="text"
              placeholder="Nom"
              className={styles.input}
              required
              name="nom"
              id="nom"
            />
            <input
              type="text"
              placeholder="Prénom"
              className={styles.input}
              required
              name="prenom"
              id="prenom"
            />
          </div>
          <div className={styles.coordonees}>
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
              required
              name="email"
              id="email"
            />
            <input
              type="téléphone"
              placeholder="Téléphone"
              className={styles.input}
              required
              name="telephone"
              id="telephone"
            />
          </div>
          <label className={styles.prestation}>
             <select className={styles.choice}>
              <option>Prestation</option>
              <option value="Mariage" name="Mariage">
                Mariage
              </option>
              <option value="Naissance" name="Naissance">
                Naissance
              </option>
              <option value="Grossesse" name="Grossesse">
                Grossesse
              </option>
              <option value="Famille" name="Famille">
                Famille
              </option>
            </select> 
          </label>
          <div className={styles.message}>
            <textarea
              type="text"
              placeholder="Décrivez-moi votre projet"
              className={styles.projet}
              rows={8}
              cols={30}
              name="message"
              required
            />
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button} type="submit">
              Envoyer
            </button>
          </div>
        </form>
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
            <p className={styles.texteCoordonnees}>(+33)654289760</p>
            <p className={styles.texteCoordonnees}>solenephoto@gmail.com</p>
          </div>
        </div>
      </Footer>
    </div>
  );
}

export default Contact;
