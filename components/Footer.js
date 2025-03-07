import styles from "../styles/Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.name}>
        © {new Date().getFullYear()} Alexandre Lassaigne
      </p>
        <Link href="/mentions-legales" style={{ backgroundColor: "transparent" }}>
          <span className={styles.lien}>Mentions legales</span>
        </Link>
        <Link href="/politique-confidentialite" style={{ backgroundColor: "transparent" }}>
          <span className={styles.lien}>Politiques de confidentialite</span>
        </Link>
    </div>
  );
}
export default Footer;
