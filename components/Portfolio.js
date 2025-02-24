import styles from "../styles/Portfolio.module.css";
import Link from "next/link";
import { useState } from "react";
import Head from "next/head";
import { FaInstagram } from "react-icons/fa";
import image from "../utils/image";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";
import "animate.css/animate.compat.css";

function Portfolio() {
  const [imageOpen, setImageOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(""); //Stocke l'URL de l'image

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setImageOpen(true);
  };

  const closeModal = () => {
    setImageOpen(false);
    setSelectedImage("");
  };

  const imagePath = image.map((data) => {
    return (
      <ScrollAnimation animateIn="fadeInUp" className={styles.image}>
        <Image
          src={data.image}
          alt={data.name}
          width={data.width}
          height={data.height}
          onClick={() => handleImageClick(data.image)}
          style={{ cursor: "pointer" }}
          loading="lazy"
        />
      </ScrollAnimation>
    );
  });

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
          <Link href="/">
            <div className={styles.logo}>
              <Image
                width={296}
                height={44}
                src="/Logo/logo_nom2.png"
                alt="Logo Solene Doux"
                style={{ backgroundColor: "transparent" }}
                loading="lazy"
              />
            </div>
          </Link>
          <div className={styles.headerRight}>
            <div className={styles.menu}>
              <Link href="/apropos">
                <span className={styles.lien}>A propos</span>
              </Link>
              <Link href="/prestation">
                <span className={styles.lien}>Prestation</span>
              </Link>
              <Link href="/portfolio">
                <span className={styles.lien}>Portfolio</span>
              </Link>
              <Link href="/contact">
                <span className={styles.lien}>Contact</span>
              </Link>
            </div>

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
      </div>
      <div className={styles.imageContainer}>{imagePath}</div>
      {imageOpen && (
        <div className={styles.fullscreenModal} onClick={closeModal}>
          <div className={styles.fullscreenImageContainer}>
            <img
              src={selectedImage}
              alt="Fullscreen Image"
              className={styles.fullscreenImage}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
