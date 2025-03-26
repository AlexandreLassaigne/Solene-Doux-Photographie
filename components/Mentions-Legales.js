import Footer from "./Footer";
import Header from "./Header";
import styles from "../styles/Mentions.module.css";

export default function Mentions() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 style={{textAlign : 'center'}}>Mentions légales</h1>
        <h2 className={styles.title}>1. Éditeur du site</h2>
        <ul>
          <li>
            Le présent site est édité par : <strong>Solene Doux</strong>
          </li>
          <li>Statut juridique : Auto-entrepreneur</li>
          <li>Email : **contact@monsite.com** </li>
          <li>Téléphone : 06 28 55 35 67</li>
          <li>Numéro SIRET : **123 456 789 00000** (si entreprise)</li>
        </ul>
        <h2 className={styles.title}>2. Hébergeur du site</h2>
        <ul>
          <li>
            Hébergeur : <strong>Vercel Inc.</strong>
          </li>
          <li>
            Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis{" "}
          </li>
        </ul>
        <h2 className={styles.title}>3. Propriété intellectuelle</h2>
        <p style={{textAlign:'center'}}> 
          Le contenu du site Solene Doux Photographie (textes, images, logos,
          etc.) est protégé par les lois françaises sur la propriété
          intellectuelle et est la propriété exclusive de Solene Doux. Toute
          reproduction, distribution ou utilisation non autorisée de ce contenu
          est interdite sans le consentement préalable de l’auteur.
        </p>
        <h2 className={styles.title}>4. Données personnelles</h2>
        <p style={{textAlign:'center'}}>
          Conformément à la loi Informatique et Libertés du 6 janvier 1978
          modifiée, ainsi qu’au règlement général sur la protection des données
          (RGPD), nous vous informons que vos données personnelles collectées
          via le formulaire de contact ne sont utilisées que pour répondre à vos
          demandes. Ces informations ne sont ni stockées dans une base de
          données ni partagées avec des tiers. Les données sont conservées
          pendant 1 an maximum. Vous disposez des droits d'accès, de
          rectification et de suppression de vos données personnelles. Pour
          exercer ces droits, vous pouvez nous contacter à l'adresse suivante :
          ✉️ **contact@monsite.com**
        </p>
        <h2 className={styles.title}>5. Cookies</h2>
        <p style={{textAlign:'center'}}>
          Ce site ne collecte aucun cookie et ne suit pas l’activité de ses
          utilisateurs. Aucune donnée personnelle n'est récoltée via des
          cookies.
        </p>
        <h2 className={styles.title}>6. Responsabilité</h2>
        <p style={{textAlign:'center'}}>
          Solene Doux Photographie ne peut être tenu responsable des erreurs
          techniques, de la non-accessibilité du site ou des éventuels dommages
          causés par l’utilisation du site. L’utilisateur est seul responsable
          de l’utilisation qu’il fait des informations présentes sur ce site.
        </p>
        <h2 className={styles.title}>7. Modifications des mentions légales</h2>
        <p style={{textAlign:'center'}}>
          Nous nous réservons le droit de modifier ces mentions légales à tout
          moment, afin de nous conformer aux évolutions légales et
          réglementaires. Les utilisateurs sont donc invités à consulter cette
          page régulièrement.
        </p>
        <h2 className={styles.title}>8. Contact</h2>
        <p style={{textAlign:'center'}}>
          Pour toute question, vous pouvez nous contacter à : ✉️
          **contact@monsite.com**
        </p>
      </div>
      <Footer />
    </div>
  );
}
