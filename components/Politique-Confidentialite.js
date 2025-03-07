import Header from "./Header";
import Footer from "./Footer";
import styles from '../styles/Politiques.module.css'

export default function Politique() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 style={{textAlign : 'center'}}>Politique de confidentialité</h1>
        <h2>1. Introduction</h2>
        <p>
          La protection de vos données personnelles est importante pour moi.
          Cette politique de confidentialité explique comment je collectes et
          utilises vos informations personnelles lorsque vous utilisez mon site,
          notamment en remplissant mon formulaire de contact.
        </p>

        <h2>2. Données collectées</h2>
        <p>
          Je collectes uniquement les informations que vous fournissez
          volontairement via mon formulaire de contact, telles que :
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Message (contenu de votre demande)</li>
          </ul>
          Ces informations sont nécessaires pour que je puisses répondre à vos
          demandes et vous fournir des informations relatives à mes services.
        </p>

        <h2>3. Finalité de la collecte des données</h2>
        <p>
          Les données collectées via le formulaire de contact sont utilisées
          uniquement pour :
          <ul>
            <li>Répondre à vos questions ou demandes de renseignements.</li>
            <li>Échanger avec vous concernant vos projets de photographie.</li>
          </ul>
          Je ne stockes pas vos informations dans une base de données ni ne
          les partages avec des tiers.
        </p>

        <h2>
          4. Conservation des données
        </h2>
        <p>
          Les données collectées via le formulaire de contact ne sont pas
          conservées sur notre site. Je ne gardes les informations que le
          temps nécessaire pour répondre à votre demande. Une fois votre demande
          traitée, ces informations sont supprimées.
        </p>

        <h2>5. Sécurité des données</h2>
        <p>
          Je m'engages à protéger vos informations personnelles.
          Cependant, comme aucune donnée n'est stockée dans une base de données,
          la protection des informations est limitée à la gestion de vos
          échanges par email ou via mon formulaire de contact.
        </p>

        <h2>6. Vos droits</h2>
        <p>
          Conformément au RGPD, vous avez le droit d’accéder à vos
          informations, de les rectifier ou de demander leur suppression. Vous
          pouvez également vous opposer à tout traitement de vos données
          personnelles.
          <br />
          Pour exercer vos droits, veuillez me contacter par email à
          **contact@monsite.com**.
        </p>

        <h2>7. Cookies</h2>
        <p>
          Ce site ne collecte pas de cookies. Aucun suivi de votre
          navigation n’est effectué à des fins commerciales ou analytiques.
        </p>

        <h2>8. Contact</h2>
        <p>
          Si vous avez des questions concernant cette politique de
          confidentialité ou si vous souhaitez exercer vos droits, veuillez me
          contacter à l'adresse suivante : ✉️ **contact@monsite.com**
        </p>
      </div>
      <Footer />
    </div>
  );
}
