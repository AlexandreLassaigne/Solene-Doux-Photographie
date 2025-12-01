import styles from "../styles/Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.footer}>
        <p className={styles.name}>
          © {new Date().getFullYear()} Alexandre Lassaigne
        </p>
        <Link href="/mentions-legales" className={styles.lien}>
          Mentions legales
        </Link>
        <Link href="/politique-confidentialite" className={styles.lien}>
          Politiques de confidentialite
        </Link>
    </div>
  );
}
export default Footer;
