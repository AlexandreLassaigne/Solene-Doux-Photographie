import styles from "../styles/Header.module.css";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
    return (
        <div className={styles.head}>
        <div className={styles.headContainer}>
          <Link href="/">
            <div className={styles.logo}>
              <Image
                width={296}
                height={44}
                src="/Logo/logo_nom2.png"
                alt="Logo Solene Doux"
                style={{ backgroundColor: "transparent" }}
              />
            </div>
          </Link>
          <div className={styles.headerRight}>
            <div className={styles.menu}>
              <Link href="/apropos">
                <span className={styles.lien}>A propos</span>
              </Link>
              <Link href="/prestation">
                <span className={styles.lien}>Prestations</span>
              </Link>
              <Link href="/portfolio">
                <span className={styles.lien}>Portfolio</span>
              </Link>
              <Link href="/contact">
                <span className={styles.lien}>Contact</span>
              </Link>
              <a
                href="https://solenedouxphotographie31.pixieset.com/"
                target="_blank"
                style={{
                  backgroundColor: "transparent",
                  textDecoration: "none",
                }}
              >
                <span className={styles.lienGallerie}>Gallerie privee</span>
              </a>
            </div>
            <a
              href="https://www.instagram.com/solenedoux_photographie/"
              className={styles.instaIcon}
              target="_blank"
            >
              <FaInstagram
                style={{ backgroundColor: "transparent" }}
                aria-label="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
    )
}