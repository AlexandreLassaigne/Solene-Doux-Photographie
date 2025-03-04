import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import Image from "next/image";
import Header from "./Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    lazyLoad: "ondemand", // Lazy load des images
  };

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
        <Slider {...settings}>
          <Image
            src="/Accueil/accueil3.webp"
            alt="Photo acceuil couple"
            width={6239}
            height={3818}
            className={styles.imageHead}
            priority
          />
          <Image
            src="/Accueil/accueil1.webp"
            alt="Photo acceuil grossesse"
            width={4070}
            height={2713}
            className={styles.imageHead}
          />
          <Image
            src="/Accueil/accueil4.webp"
            alt="Photo acceuil couple"
            width={6240}
            height={4160}
            className={styles.imageHead}
          />
          <Image
            src="/Accueil/accueil2.webp"
            alt="Photo acceuil naissance"
            width={4156}
            height={2550}
            className={styles.imageHead}
          />
        </Slider>
      </div>
      <div>
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
