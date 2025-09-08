import styles from "../styles/Portfolio.module.css";
import Header from "./Header";
import { useState } from "react";
import Head from "next/head";
import image from "../utils/image";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";
import "animate.css/animate.compat.css";
import Footer from "./Footer";

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

  const imagePath = image.map((data, i) => {
    const portrait = data.width < data.height;
    return (
      <div
        className={`${styles.imageContainer} ${
          portrait ? styles.portrait : ""
        }`}
        key={i}
      >
        {/*         <ScrollAnimation animateIn="fadeInUp" animateOnce={true}> */}
        <Image
          src={data.image}
          alt={data.name}
          width={data.width}
          height={data.height}
          onClick={() => handleImageClick(data.image)}
          loading="lazy"
          quality={75}
          className={styles.image}
        />
        {/*         </ScrollAnimation> */}
      </div>
    );
  });

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
      <main>
        <div>
          <div className={styles.lienPDF}>
            <p>
              Découvrez mon portfolio dédié aux mariages et plongez dans mon
              univers doux et chaleureux pour des souvenirs uniques :{" "}
              <a
                href="/portfolio_mariage.pdf"
                target="_blank"
                style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
              >
                Portfolio Mariage
              </a>
            </p>
          </div>
          <div className={styles.imagesContainer}>{imagePath}</div>
        </div>
        {imageOpen && (
          <div
            className={styles.fullscreenModal}
            onClick={closeModal}
            aria-hidden={imageOpen}
          >
            <div className={styles.fullscreenImageContainer}>
              <Image
                src={selectedImage}
                alt="Fullscreen Image"
                layout="fill"
                objectFit="contain"
                className={styles.fullscreenImage}
              />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Portfolio;
