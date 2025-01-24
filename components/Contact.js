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

function Contact() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);
  const [emptyFields, setEmptyFields] = useState(false);

  const handleOpen = (newOpen) => {
    setOpen(newOpen);
  };

  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = () => {
    if (!nom || !prenom || !email || !tel || !message) {
      setWrongEmail(false);
      setEmptyFields(true);
    } else {
      setEmptyFields(false);
      if (!EMAIL_REGEX.test(email)) {
        setWrongEmail(true);
      } else {
        setWrongEmail(false);
        setEmptyFields(false);
      }
    }
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
      <form className={styles.inputContainer}>
        <div className={styles.nom}>
          <input
            type="nom"
            placeholder="Nom"
            onChange={(e) => setNom(e.target.value)}
            value={nom}
            className={styles.input}
          />
          <input
            type="prenom"
            placeholder="Prénom"
            onChange={(e) => setPrenom(e.target.value)}
            value={prenom}
            className={styles.input}
          />
        </div>
        <div className={styles.coordonees}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className={styles.input}
          />
          <input
            type="téléphone"
            placeholder="Téléphone"
            onChange={(e) => setTel(e.target.value)}
            value={tel}
            className={styles.input}
          />
        </div>
        <label className={styles.prestation}>
          <select className={styles.choice}>
            <option>Prestation</option>
            <option value="Mariage">Mariage</option>
            <option value="Naissance">Naissance</option>
            <option value="Grossesse">Grossesse</option>
          </select>
        </label>
        <div className={styles.message}>
          <textarea
            type="message"
            placeholder="Décrivez-moi votre projet"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className={styles.projet}
            rows={4}
            cols={40}
          />
        </div>
        {emptyFields && (
          <p className={styles.error}>Veuillez remplir tous les champs</p>
        )}
        {wrongEmail && (
          <p className={styles.error}>Veuillez saisir un email au bon format</p>
        )}
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={handleSubmit}>
            Envoyer
          </button>
        </div>
      </form>
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
