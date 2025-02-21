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
import { FaInstagram } from "react-icons/fa";
import emailjs from "emailjs-com";
import Image from "next/image";

function Contact() {
  const [open, setOpen] = useState(false);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [prestation, setPrestation] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongTel, setWrongTel] = useState(false);
  const [emptyFields, setEmptyFields] = useState(false);

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

  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const TEL_REGEX =
    /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;

  const handleOnSubmit = (e) => {
    //empêche la page de se recharger lors de la soumission du formulaire
    e.preventDefault();
    if (!email || !nom || !prenom || !tel || !prestation || !message) {
      setEmptyFields(true);
      setMessageError("Veuillez saisir tous les champs");
    } else {
      setEmptyFields(false);
      if (!EMAIL_REGEX.test(email)) {
        setWrongEmail(true);
        setMessageError("Veuillez saisir un email au bon format");
      } else {
        setWrongEmail(false);
      }
      if (!TEL_REGEX.test(tel)) {
        setWrongTel(true);
        setMessageError("Veuillez saisir un numéro de téléphone au bon format");
      } else {
        setWrongTel(false);
      }
      if (!wrongEmail && !wrongTel && !emptyFields) {
        //envoie le formulaire via l'API EmailJS, en utilisant les paramètres
        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            e.target,
            process.env.NEXT_PUBLIC_PUBLIC_KEY
          )
          .then(
            (result) => {
              alert("Message envoyé");
            },
            (error) => {
              alert("Désolé, il y a eu une erreur veuillez recommencer");
            }
          );
        setEmail("");
        setMessage("");
        setNom("");
        setPrenom("");
        setPrestation("");
        setTel("");
        setMessageError("");
        e.target.reset();
      }
    }
  };

  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Photographe spécialisée dans les moments forts de la vie, mariage, maternité, famille, etc."
        />
        <title>Solène Photographie</title>
      </Head>
      <div className={styles.head}>
        <div className={styles.headContainer}>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => handleOpen(true)}
            className={styles.icon}
            size="2x"
            aria-label="Menu"
            role="Boutton"
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
                alt="Logo Solene Doux"
                style={{ backgroundColor: "transparent" }}
                layout="intrinsic"
                priority
              />
            </div>
          </Link>
          <a
            href="https://www.instagram.com/solenedoux_photographie/"
            className={styles.instaIcon}
            target="_blank"
          >
            <FaInstagram
              style={{ backgroundColor: "transparent" }}
              size={40}
              aria-label="Instagram"
            />
          </a>
        </div>
      </div>
        <h2 className={styles.text}>Parlez moi de votre projet</h2>
      <div className={styles.form}>
        <form className={styles.inputContainer} onSubmit={handleOnSubmit}>
          <div className={styles.nom}>
            <input
              type="text"
              placeholder="Nom"
              className={styles.input}
              onChange={(e) => setNom(e.target.value)}
              value={nom}
              name="nom"
              id="nom"
            />
            <input
              type="text"
              placeholder="Prénom"
              className={styles.input}
              onChange={(e) => setPrenom(e.target.value)}
              value={prenom}
              name="prenom"
              id="prenom"
            />
          </div>
          <div className={styles.coordonees}>
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              id="email"
            />
            <input
              type="tel"
              placeholder="Téléphone"
              className={styles.input}
              onChange={(e) => setTel(e.target.value)}
              value={tel}
              name="telephone"
              id="telephone"
            />
          </div>
          <div className={styles.prestation}>
            <input
              type="text"
              placeholder="Prestation"
              className={styles.input}
              onChange={(e) => setPrestation(e.target.value)}
              value={prestation}
              name="prestation"
              id="prestation"
            />
          </div>
          <div className={styles.message}>
            <textarea
              type="text"
              placeholder="Décrivez-moi votre projet"
              className={styles.projet}
              rows={8}
              cols={30}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.messageError}>{messageError}</div>
            <button className={styles.button} type="submit">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
