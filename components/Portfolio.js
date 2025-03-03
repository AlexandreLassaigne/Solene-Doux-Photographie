import styles from "../styles/Portfolio.module.css";
import Header from './Header'
import { useState } from "react";
import Head from "next/head";
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
          quality={75}
        />
      </ScrollAnimation>
    );
  });

  return (
    <div>
      <Head>
      <link rel="preload" href="/Logo/logo_nom2.png" as="image" />
        <meta
          name="description"
          content="Photographe spécialisée dans les moments forts de la vie, mariage, maternité, famille, etc."
        />
        <title>Solène Photographie</title>
      </Head>
      <Header/>
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
