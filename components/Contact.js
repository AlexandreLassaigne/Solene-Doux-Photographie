import styles from "../styles/Contact.module.css";
import { useState } from "react";
import Head from "next/head";
import emailjs from "emailjs-com";
import Faq from "react-faq-component";
import Header from "./Header";

function Contact() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [prestation, setPrestation] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [messageEnvoye, setMessageenvoye] = useState("");
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongTel, setWrongTel] = useState(false);
  const [emptyFields, setEmptyFields] = useState(false);

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
        setMessageenvoye("Message envoyé")
        e.target.reset();
      }
    }
  };

  const data = {
    title: "FAQ",
    rows: [
      {
        title: "Quand faire la séance de grossesse ?",
        content:
          "La séance grossesse est à réaliser idéalement entre le 7ème et le 8ème mois de grossesse, mais elle peut se faire avant si vous le souhaitez.",
      },
      {
        title: "Quand faire la séance naissance ?",
        content:
          "La séance naissance est à réaliser idéalement dans le premier mois du bébé, voir même dans les deux premières semaines, afin de capturer ses petits détails de nouveau-né.",
      },
      {
        title: "Comment s'habiller ?",
        content:
          "Je vous conseille toujours de vous accorder entre vous et de porter des couleurs et textures naturelles tels que : le beige, l'écru, le marron, le kaki, le gris, le jean, le lin. Evitez les couleurs vives et motifstrès colorés.",
      },
    ],
  };

  return (
    <div>
      <Head>
      <title>Solène Doux Photographie</title>
        <meta
          name="description"
          content="Photographe dans la région Toulousaine spécialisée dans les moments forts de la vie, mariage, maternité, famille, etc."
        />
      </Head>
      <Header />
      <div className={styles.faq}>
        <Faq
          data={data}
          styles={{
            rowTitleColor: "#78789a",
            rowTitlePaddingBottom: "5px",
            rowContentColor: "#48484a",
            rowContentPaddingTop: "10px",
            rowContentPaddingBottom: "10px",
            rowContentPaddingLeft: "50px",
            rowContentPaddingRight: "50px",
            rowTitleTextPaddingLeft: "30px",
            arrowColor: "black",
          }}
        />
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
            <div className={styles.messageEnvoye}>{messageEnvoye}</div>
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
