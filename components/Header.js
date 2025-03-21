import styles from "../styles/Header.module.css";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.head}>
      <div className={styles.headContainer}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo}>
            <Image
              width={296}
              height={44}
              src="/Logo/logo_nom2.webp"
              alt="Logo Solene Doux"
              className={styles.logo}
              priority
            />
          </Link>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.menu}>
            <Link href="/apropos" className={styles.lien}>
             A propos
            </Link>
            <Link href="/prestation" className={styles.lien}>
              Prestations
            </Link>
            <Link href="/portfolio" className={styles.lien}>
              Portfolio
            </Link>
            <Link href="/contact" className={styles.lien}>
             Contact
            </Link>
            <Link href="https://solenedouxphotographie31.pixieset.com/" target="_blank" className={styles.lien}>
                Gallerie privee
            </Link>
          </div>
          <div className={styles.instaIcon}>
            <a
              href="https://www.instagram.com/solenedoux_photographie/"
              target="_blank"
              style={{backgroundColor : "transparent", color : "#000000"}}
            >
              <FaInstagram
                style={{ backgroundColor: "transparent" }}
                aria-label="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
