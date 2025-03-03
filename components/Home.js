import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import { Carousel } from "nuka-carousel";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import Image from "next/image";
import Header from "./Header";

function Home() {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Photographe spécialisée dans les moments forts de la vie, mariage, maternité, famille, etc."
        />
        <title>Solène Photographie</title>
      </Head>
      <div>
        <Header />
        <div className={styles.carouselContainer}>
          <Carousel
            autoplay={true}
            autoplayInterval={3000}
            wrapAround={true}
            wrapMode="wrap"
          >
            <img
              src="/Accueil/accueil3.jpg"
              alt="Photo acceuil couple"
              className={styles.imageHead1}
            />
            <img
              src="/Accueil/accueil4.jpg"
              alt="Photo acceuil couple"
              className={styles.imageHead1}
            />
            <img
              src="/Accueil/accueil1.jpeg"
              alt="Photo acceuil grossesse"
              className={styles.imageHead1}
            />
            <img
              src="/Accueil/accueil2.jpeg"
              alt="Photo acceuil naissance"
              className={styles.imageHead1}
            />
          </Carousel>
        </div>
      </div>
      <div className={styles.allContainer}>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.image}>
              <Image
                src="/Solene/solene4.jpg"
                alt="photo de Solene"
                width={3510}
                height={5270}
                loading="lazy"
              />
            </div>
            <div className={styles.description}>
              <p>
                Photographe passionnée et spécialisée dans les moments forts de
                la vie, mon objectif : capturer les émotions authentiques et
                sublimer chaque instant avec sensibilité et professionnalisme{" "}
                <br />
                <br />
                Que ce soit pour un mariage, une séance maternité, des photos de
                famille ou encore un shooting pour des professionnels, je
                m'efforce de créer des images intemporelles qui racontent votre
                histoire. Chaque projet est unique, et j'aime m'adapter à vos
                envies et besoins pour queles souvenirs que vous conserverez
                soient à la hauteur de vos attentes.
              </p>
              <Link href="/apropos">
                <button className={styles.button}>A propos</button>
              </Link>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.description}>
              <p>
                J'offres une gamme complète de services pour capturer les
                moments qui comptent. <br />
                Que ce soit pour des événements privés, des projets
                professionnels ou des créations artistiques, chaque séance est
                pensée sur mesure pour répondre à vos besoins.
              </p>
              <Link href="/prestation">
                <button className={styles.buttonPrestation}>
                  Mes prestations
                </button>
              </Link>
            </div>
            <div className={styles.image}>
              <Image
                src="/Couple/couple8.jpg"
                alt="photo de couple"
                width={4160}
                height={6240}
                loading="lazy"
              />
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.image}>
              <Image
                src="/Solo_confiance_en_soi/solo_confiance12.jpg"
                alt="photo EVJF"
                width={4160}
                height={6240}
                loading="lazy"
              />
            </div>
            <div className={styles.description}>
              <p>
                Découvrez mon portfolio, un espace où chaque projet reflète ma
                passion et mon approche de cet art qu’est la photographie.
                Plongez dans mon univers et n’hésitez pas à me contacter afin de
                me partager vos projets et vos envies.
              </p>
              <Link href="/portfolio">
                <button className={styles.button}>Mon portfolio</button>
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Home;
