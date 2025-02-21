import styles from "../styles/Formule.module.css";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

function Formule(props) {
  let formules;
  if (props.name === "Mariage") {
    formules = (
      <div>
        <div style={{ textAlign: "center", fontFamily: "serif" }}>
          <h1>Séance Mariage</h1>
          <p className={styles.présentation}>
            Célébrez l’un des moments les plus précieux de votre vie, en créant
            un souvenir intemporel de cette période unique.
            <br /> Mon objectif étant de capturer la beauté et la magie de votre
            grossesse, tout en vous mettant à l’aise. <br />
            Accompagnés de conseils sur les tenues et les poses, je vous
            guiderai tout au long du processus pour obtenir des photos
            naturelles et à votre image. <br />
            Chaque cliché est pensé pour mettre en valeur votre ventre rond et
            l’amour qui grandit à l’intérieur. <br />
            Cette séance se fait en extérieur ou chez vous, votre cocon.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src="/Mariage/mariage14.jpg"
              alt="photo Mariage"
              width={3510}
              height={5270}
              loading="lazy"
            />
          </div>
          <div className={styles.description}>
            <div>
              <h1 className={styles.formulaTitle}>Formule Instants</h1>
              <h2 className={styles.h2}>Durée total : 2h</h2>
              <span className={styles.price}>650 €</span>
              <p className={styles.p}>
                Cérémonie / Photos de groupe / Photos de couple / Début du vin
                d'honneur
              </p>
            </div>
            <div>
              <Link href="/contact">
                <p style={{ textAlign: "center" }}>
                  Pour plus d'informations{" "}
                  <span
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    Contactez-moi
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.description}>
              <div>
                <h1 className={styles.formulaTitle}>Formule Douceur</h1>
                <h2 className={styles.h2}>Durée total : 7h</h2>
                <span className={styles.price}>1500 €</span>
                <p className={styles.p}>
                  Préparatifs des mariés / Cérémonie / Photos de groupe / Photos
                  de couple / Vin d'honneur
                </p>
              </div>
              <div>
                <Link href="/contact">
                  <p className={styles.contact} style={{ textAlign: "center" }}>
                    Pour plus d'informations{" "}
                    <span
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Contactez-moi
                    </span>
                  </p>
                </Link>
              </div>
            </div>
            <div className={styles.image}>
              <Image
                src="/Mariage/mariage8.jpg"
                alt="photo Mariage"
                width={3510}
                height={5270}
                loading="lazy"
              />
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.image}>
              <Image
                src="/Mariage/mariage1.jpg"
                alt="photo Mariage"
                width={3510}
                height={5270}
                loading="lazy"
              />
            </div>
            <div className={styles.description}>
              <div>
                <h1 className={styles.formulaTitle}>Formule Prestige</h1>
                <h2 className={styles.h2}>Durée total : 10h</h2>
                <span className={styles.price}>2100 €</span>
                <p className={styles.p}>
                  Préparatifs des mariés / Cérémonie / Photos de groupe / Photos
                  de couple / Vin d'honneur / Jusqu'au gâteau (00h00 max)
                </p>
              </div>
              <div>
                <Link href="/contact">
                  <p style={{ textAlign: "center" }}>
                    Pour plus d'informations{" "}
                    <span
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Contactez-moi
                    </span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  } else if (props.name === "Allaitement") {
    formules = (
      <div>
        <div style={{ textAlign: "center", fontFamily: "serif" }}>
          <h1>Séance Allaitement</h1>
          <p className={styles.presentation}>
            Célébrez l’un des moments les plus précieux de votre vie, en créant
            un souvenir intemporel de cette période unique.
            <br /> Mon objectif étant de capturer la beauté et la magie de votre
            grossesse, tout en vous mettant à l’aise. <br />
            Accompagnés de conseils sur les tenues et les poses, je vous
            guiderai tout au long du processus pour obtenir des photos
            naturelles et à votre image. <br />
            Chaque cliché est pensé pour mettre en valeur votre ventre rond et
            l’amour qui grandit à l’intérieur. <br />
            Cette séance se fait en extérieur ou chez vous, votre cocon.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src="/Allaitement/allaitement1.jpg"
              alt="photo Allaitement"
              width={3510}
              height={5270}
              loading="lazy"
            />
          </div>
          <div className={styles.description}>
            <div>
              <h1 className={styles.formulaTitle}>Formule Instants</h1>
              <h2 className={styles.h2}>Séance de 30 min</h2>
              <span className={styles.price}>150 €</span>
              <p className={styles.p}>
                Galerie complète envoyée (environ 50 photos)
              </p>
            </div>

            <div>
              <Link href="/contact">
                <p style={{ textAlign: "center" }}>
                  Pour plus d'informations{" "}
                  <span
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    Contactez-moi
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.description}>
              <div>
                <h1 className={styles.formulaTitle}>Formule Douceur</h1>
                <h2 className={styles.h2}>Séance de 45 min</h2>
                <span className={styles.price}>200 €</span>
                <p className={styles.p}>
                  Galerie complète envoyée (environ 80 photos)
                </p>
              </div>
              <div>
                <Link href="/contact">
                  <p style={{ textAlign: "center" }}>
                    Pour plus d'informations{" "}
                    <span
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Contactez-moi
                    </span>
                  </p>
                </Link>
              </div>
            </div>
            <div className={styles.image}>
              <Image
                src="/Allaitement/allaitement2.jpg"
                alt="photo Allaitement"
                width={3510}
                height={5270}
                loading="lazy"
              />
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.image}>
              <Image
                src="/Allaitement/allaitement3.jpg"
                alt="photo Allaitement"
                width={3510}
                height={5270}
                loading="lazy"
              />
            </div>
            <div className={styles.description}>
              <div>
                <h1 className={styles.formulaTitle}>Formule Prestige</h1>
                <h2 className={styles.h2}>Séance d'1h</h2>
                <span className={styles.price}>250 €</span>
                <p className={styles.p}>
                  Galerie complète envoyée (environ 100 photos)
                </p>
              </div>
              <div>
                <Link href="/contact">
                  <p style={{ textAlign: "center" }}>
                    Pour plus d'informations{" "}
                    <span
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Contactez-moi
                    </span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  } else if (props.name === "Couple") {
    formules = (
      <div>
        <div style={{ textAlign: "center", fontFamily: "serif" }}>
          <h1>Séance Couple</h1>
          <p className={styles.présentation}>
            Célébrez l’un des moments les plus précieux de votre vie, en créant
            un souvenir intemporel de cette période unique.
            <br /> Mon objectif étant de capturer la beauté et la magie de votre
            grossesse, tout en vous mettant à l’aise. <br />
            Accompagnés de conseils sur les tenues et les poses, je vous
            guiderai tout au long du processus pour obtenir des photos
            naturelles et à votre image. <br />
            Chaque cliché est pensé pour mettre en valeur votre ventre rond et
            l’amour qui grandit à l’intérieur. <br />
            Cette séance se fait en extérieur ou chez vous, votre cocon.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src="/Couple/couple3.jpg"
              alt="photo Couple"
              width={3510}
              height={5270}
              loading="lazy"
            />
          </div>
          <div className={styles.description}>
            <div>
              <h1 className={styles.formulaTitle}>Formule Instants</h1>
              <h2 className={styles.h2}>Séance de 30 min</h2>
              <span className={styles.price}>150 €</span>
              <p className={styles.p}>
                Galerie complète envoyée (environ 50 photos)
              </p>
            </div>

            <div>
              <Link href="/contact">
                <p style={{ textAlign: "center" }}>
                  Pour plus d'informations{" "}
                  <span
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    Contactez-moi
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.description}>
              <div>
                <h1 className={styles.formulaTitle}>Formule Douceur</h1>
                <h2 className={styles.h2}>Séance de 45 min</h2>
                <span className={styles.price}>200 €</span>
                <p className={styles.p}>
                  Galerie complète envoyée (environ 80 photos)
                </p>
              </div>
              <div>
                <Link href="/contact">
                  <p style={{ textAlign: "center" }}>
                    Pour plus d'informations{" "}
                    <span
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Contactez-moi
                    </span>
                  </p>
                </Link>
              </div>
            </div>
            <div className={styles.image}>
              <Image
                src="/Couple/couple5.jpg"
                alt="photo Couple"
                width={3510}
                height={5270}
                loading="lazy"
              />
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.image}>
              <Image
                src="/Couple/couple7.jpg"
                alt="photo Couple"
                width={3510}
                height={5270}
                loading="lazy"
              />
            </div>
            <div className={styles.description}>
              <div>
                <h1 className={styles.formulaTitle}>Formule Prestige</h1>
                <h2 className={styles.h2}>Séance d'1h</h2>
                <span className={styles.price}>250 €</span>
                <p className={styles.p}>
                  Galerie complète envoyée (environ 100 photos)
                </p>
              </div>
              <div>
                <Link href="/contact">
                  <p style={{ textAlign: "center" }}>
                    Pour plus d'informations{" "}
                    <span
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Contactez-moi
                    </span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  } else if (props.name === `Décoration d'intérieur`) {
    formules = (
      <div>
        <div style={{ textAlign: "center", fontFamily: "serif" }}>
          <h1>Séance Décoration d'intérieur</h1>
          <p className={styles.présentation}>
            Célébrez l’un des moments les plus précieux de votre vie, en créant
            un souvenir intemporel de cette période unique.
            <br /> Mon objectif étant de capturer la beauté et la magie de votre
            grossesse, tout en vous mettant à l’aise. <br />
            Accompagnés de conseils sur les tenues et les poses, je vous
            guiderai tout au long du processus pour obtenir des photos
            naturelles et à votre image. <br />
            Chaque cliché est pensé pour mettre en valeur votre ventre rond et
            l’amour qui grandit à l’intérieur. <br />
            Cette séance se fait en extérieur ou chez vous, votre cocon.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src="/Deco/deco10.jpg"
              alt="photo Décoration d'intérieur"
              width={3510}
              height={5270}
              loading="lazy"
            />
          </div>
          <div className={styles.description}>
            <div>
              <h1 className={styles.formulaTitle}>Formule Instants</h1>
              <h2 className={styles.h2}>Séance de 30 min</h2>
              <span className={styles.price}>150 €</span>
              <p className={styles.p}>
                Galerie complète envoyée (environ 50 photos)
              </p>
            </div>

            <div>
              <Link href="/contact">
                <p style={{ textAlign: "center" }}>
                  Pour plus d'informations{" "}
                  <span
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    Contactez-moi
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.description}>
              <div>
                <h1 className={styles.formulaTitle}>Formule Douceur</h1>
                <h2 className={styles.h2}>Séance de 45 min</h2>
                <span className={styles.price}>200 €</span>
                <p className={styles.p}>
                  Galerie complète envoyée (environ 80 photos)
                </p>
              </div>
              <div>
                <Link href="/contact">
                  <p style={{ textAlign: "center" }}>
                    Pour plus d'informations{" "}
                    <span
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Contactez-moi
                    </span>
                  </p>
                </Link>
              </div>
            </div>
            <div className={styles.image}>
              <Image
                src="/Deco/deco5.jpg"
                alt="photo Décoration d'intérieur"
                width={3510}
                height={5270}
                loading="lazy"
              />
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.image}>
              <Image
                src="/Deco/deco3.jpg"
                alt="photo Décoration d'intérieur"
                width={3510}
                height={5270}
                loading="lazy"
              />
            </div>
            <div className={styles.description}>
              <div>
                <h1 className={styles.formulaTitle}>Formule Prestige</h1>
                <h2 className={styles.h2}>Séance d'1h</h2>
                <span className={styles.price}>250 €</span>
                <p className={styles.p}>
                  Galerie complète envoyée (environ 100 photos)
                </p>
              </div>
              <div>
                <Link href="/contact">
                  <p style={{ textAlign: "center" }}>
                    Pour plus d'informations{" "}
                    <span
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Contactez-moi
                    </span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  } else if (props.name === "EVJF") {
    formules = (
      <div>
        <div style={{ textAlign: "center", fontFamily: "serif" }}>
          <h1>Séance EVJF</h1>
          <p className={styles.présentation}>
            Célébrez l’un des moments les plus précieux de votre vie, en créant
            un souvenir intemporel de cette période unique.
            <br /> Mon objectif étant de capturer la beauté et la magie de votre
            grossesse, tout en vous mettant à l’aise. <br />
            Accompagnés de conseils sur les tenues et les poses, je vous
            guiderai tout au long du processus pour obtenir des photos
            naturelles et à votre image. <br />
            Chaque cliché est pensé pour mettre en valeur votre ventre rond et
            l’amour qui grandit à l’intérieur. <br />
            Cette séance se fait en extérieur ou chez vous, votre cocon.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src="/EVJF/evjf1.jpg"
              alt="photo EVJF"
              width={3510}
              height={5270}
              loading="lazy"
            />
          </div>
          <div className={styles.description}>
            <div>
              <h1 className={styles.formulaTitle}>EVJF</h1>
              <h2 className={styles.h2}>Séance d'1h</h2>
              <span className={styles.price}>300 €</span>
              <p className={styles.p}>
                Galerie complète envoyée (environ 100 photos)
                <br />
                En extérieur et/ou en intérieur
                <br />
                Dress code et accessoires recommandés
                <br />
                (lunettes, ballons, bulles, coupes de champagne)
              </p>
            </div>

            <div>
              <Link href="/contact">
                <p style={{ textAlign: "center" }}>
                  Pour plus d'informations{" "}
                  <span
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    Contactez-moi
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.name === "Famille") {
    formules = (
      <div>
        <div style={{ textAlign: "center", fontFamily: "serif" }}>
          <h1>Séance Famille</h1>
          <p className={styles.présentation}>
            Célébrez l’un des moments les plus précieux de votre vie, en créant
            un souvenir intemporel de cette période unique.
            <br /> Mon objectif étant de capturer la beauté et la magie de votre
            grossesse, tout en vous mettant à l’aise. <br />
            Accompagnés de conseils sur les tenues et les poses, je vous
            guiderai tout au long du processus pour obtenir des photos
            naturelles et à votre image. <br />
            Chaque cliché est pensé pour mettre en valeur votre ventre rond et
            l’amour qui grandit à l’intérieur. <br />
            Cette séance se fait en extérieur ou chez vous, votre cocon.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src="/Famille/famille2.jpg"
              alt="photo Famille"
              width={3510}
              height={5270}
              loading="lazy"
            />
          </div>
          <div className={styles.description}>
            <div>
              <h1 className={styles.formulaTitle}>Formule Instants</h1>
              <h2 className={styles.h2}>Séance de 30 min</h2>
              <span className={styles.price}>150 €</span>
              <p className={styles.p}>
                Galerie complète envoyée (environ 50 photos)
              </p>
            </div>

            <div>
              <Link href="/contact">
                <p style={{ textAlign: "center" }}>
                  Pour plus d'informations{" "}
                  <span
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    Contactez-moi
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.description}>
              <div>
                <h1 className={styles.formulaTitle}>Formule Douceur</h1>
                <h2 className={styles.h2}>Séance de 45 min</h2>
                <span className={styles.price}>200 €</span>
                <p className={styles.p}>
                  Galerie complète envoyée (environ 80 photos)
                </p>
              </div>
              <div>
                <Link href="/contact">
                  <p style={{ textAlign: "center" }}>
                    Pour plus d'informations{" "}
                    <span
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Contactez-moi
                    </span>
                  </p>
                </Link>
              </div>
            </div>
            <div className={styles.image}>
              <Image
                src="/Famille/famille6.jpg"
                alt="photo Famille"
                width={3510}
                height={5270}
                loading="lazy"
              />
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.image}>
              <Image
                src="/Famille/famille5.jpg"
                alt="photo Famille"
                width={3510}
                height={5270}
                loading="lazy"
              />
            </div>
            <div className={styles.description}>
              <div>
                <h1 className={styles.formulaTitle}>Formule Prestige</h1>
                <h2 className={styles.h2}>Séance d'1h</h2>
                <span className={styles.price}>250 €</span>
                <p className={styles.p}>
                  Galerie complète envoyée (environ 100 photos)
                </p>
              </div>
              <div>
                <Link href="/contact">
                  <p style={{ textAlign: "center" }}>
                    Pour plus d'informations{" "}
                    <span
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Contactez-moi
                    </span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  } else if (props.name === "Grossesse") {
    formules = (
      <div>
        <div style={{ textAlign: "center", fontFamily: "serif" }}>
          <h1>Séance Grossesse</h1>
          <p className={styles.présentation}>
            Célébrez l’un des moments les plus précieux de votre vie, en créant
            un souvenir intemporel de cette période unique.
            <br /> Mon objectif étant de capturer la beauté et la magie de votre
            grossesse, tout en vous mettant à l’aise. <br />
            Accompagnés de conseils sur les tenues et les poses, je vous
            guiderai tout au long du processus pour obtenir des photos
            naturelles et à votre image. <br />
            Chaque cliché est pensé pour mettre en valeur votre ventre rond et
            l’amour qui grandit à l’intérieur. <br />
            Cette séance se fait en extérieur ou chez vous, votre cocon.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src="/Grossesse/grossesse9.jpg"
              alt="photo Grossesse"
              width={3510}
              height={5270}
              loading="lazy"
            />
          </div>
          <div className={styles.description}>
            <div>
              <h1 className={styles.formulaTitle}>Formule Instants</h1>
              <h2 className={styles.h2}>Séance de 30 min</h2>
              <span className={styles.price}>150 €</span>
              <p className={styles.p}>
                Galerie complète envoyée (environ 50 photos)
              </p>
            </div>

            <div>
              <Link href="/contact">
                <p style={{ textAlign: "center" }}>
                  Pour plus d'informations{" "}
                  <span
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    Contactez-moi
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.description}>
              <div>
                <h1 className={styles.formulaTitle}>Formule Douceur</h1>
                <h2 className={styles.h2}>Séance de 45 min</h2>
                <span className={styles.price}>200 €</span>
                <p className={styles.p}>
                  Galerie complète envoyée (environ 80 photos)
                </p>
              </div>
              <div>
                <Link href="/contact">
                  <p style={{ textAlign: "center" }}>
                    Pour plus d'informations{" "}
                    <span
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Contactez-moi
                    </span>
                  </p>
                </Link>
              </div>
            </div>
            <div className={styles.image}>
              <Image
                src="/Grossesse/grossesse7.jpg"
                alt="photo Grossesse"
                width={3510}
                height={5270}
                loading="lazy"
              />
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.image}>
              <Image
                src="/Grossesse/grossesse10.jpg"
                alt="photo Grossesse"
                width={3510}
                height={5270}
                loading="lazy"
              />
            </div>
            <div className={styles.description}>
              <div>
                <h1 className={styles.formulaTitle}>Formule Prestige</h1>
                <h2 className={styles.h2}>Séance d'1h</h2>
                <span className={styles.price}>250 €</span>
                <p className={styles.p}>
                  Galerie complète envoyée (environ 100 photos)
                </p>
              </div>
              <div>
                <Link href="/contact">
                  <p style={{ textAlign: "center" }}>
                    Pour plus d'informations{" "}
                    <span
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Contactez-moi
                    </span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  } else if (props.name === "Naissance") {
    formules = (
      <div>
        <div style={{ textAlign: "center", fontFamily: "serif" }}>
          <h1>Séance Naissance</h1>
          <p className={styles.présentation}>
            La séance photo naissance est un moment magique où je capture les
            premiers jours de vie de votre bébé, dans toute sa douceur et sa
            fragilité.
            <br /> Immortalisée dans les 30 premiers jours, cette séance permet
            de photographier votre tout-petit dans des poses naturelles et
            sécurisées, en mettant l’accent sur les détails précieux. <br />
            Elle se déroulera à domicile, pour que chaque photo soit réalisée
            dans le respect du bien-être de votre nouveau-né, tout en étant dans
            votre univers, pour des souvenirs tendres et intemporels.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src="/Naissance/naissance1.jpg"
              alt="photo Naissance"
              width={3510}
              height={5270}
              loading="lazy"
            />
          </div>
          <div className={styles.description}>
            <div>
              <h1 className={styles.formulaTitle}>Formule Instants</h1>
              <h2 className={styles.h2}>Séance de 30 min</h2>
              <span className={styles.price}>150 €</span>
              <p className={styles.p}>
                Galerie complète envoyée (environ 50 photos)
              </p>
            </div>

            <div>
              <Link href="/contact">
                <p style={{ textAlign: "center" }}>
                  Pour plus d'informations{" "}
                  <span
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    Contactez-moi
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.description}>
              <div>
                <h1 className={styles.formulaTitle}>Formule Douceur</h1>
                <h2 className={styles.h2}>Séance de 45 min</h2>
                <span className={styles.price}>200 €</span>
                <p className={styles.p}>
                  Galerie complète envoyée (environ 80 photos)
                </p>
              </div>
              <div>
                <Link href="/contact">
                  <p style={{ textAlign: "center" }}>
                    Pour plus d'informations{" "}
                    <span
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Contactez-moi
                    </span>
                  </p>
                </Link>
              </div>
            </div>
            <div className={styles.image}>
              <Image
                src="/Naissance/naissance7.jpg"
                alt="photo Naissance"
                width={3510}
                height={5270}
                loading="lazy"
              />
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.image}>
              <Image
                src="/Naissance/naissance2.jpg"
                alt="photo Naissance"
                width={3510}
                height={5270}
                loading="lazy"
              />
            </div>
            <div className={styles.description}>
              <div>
                <h1 className={styles.formulaTitle}>Formule Prestige</h1>
                <h2 className={styles.h2}>Séance d'1h</h2>
                <span className={styles.price}>250 €</span>
                <p className={styles.p}>
                  Galerie complète envoyée (environ 100 photos)
                </p>
              </div>
              <div>
                <Link href="/contact">
                  <p style={{ textAlign: "center" }}>
                    Pour plus d'informations{" "}
                    <span
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Contactez-moi
                    </span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  } else if (props.name === "Professionnels - Marques") {
    formules = (
      <div>
        <div style={{ textAlign: "center", fontFamily: "serif" }}>
          <h1>Séance Professionnels - Marques</h1>
          <p className={styles.présentation}>
            Célébrez l’un des moments les plus précieux de votre vie, en créant
            un souvenir intemporel de cette période unique.
            <br /> Mon objectif étant de capturer la beauté et la magie de votre
            grossesse, tout en vous mettant à l’aise. <br />
            Accompagnés de conseils sur les tenues et les poses, je vous
            guiderai tout au long du processus pour obtenir des photos
            naturelles et à votre image. <br />
            Chaque cliché est pensé pour mettre en valeur votre ventre rond et
            l’amour qui grandit à l’intérieur. <br />
            Cette séance se fait en extérieur ou chez vous, votre cocon.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src="/Professionnels_marques/professionnels_marques2.jpg"
              alt="photo Professionnels - Marques"
              width={3510}
              height={5270}
              loading="lazy"
            />
          </div>
          <div className={styles.description}>
            <div>
              <h1 className={styles.formulaTitle}>Formule Instants</h1>
              <h2 className={styles.h2}>Séance de 30 min</h2>
              <span className={styles.price}>150 €</span>
              <p className={styles.p}>
                Galerie complète envoyée (environ 50 photos)
              </p>
            </div>

            <div>
              <Link href="/contact">
                <p style={{ textAlign: "center" }}>
                  Pour plus d'informations{" "}
                  <span
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    Contactez-moi
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.description}>
              <div>
                <h1 className={styles.formulaTitle}>Formule Douceur</h1>
                <h2 className={styles.h2}>Séance de 45 min</h2>
                <span className={styles.price}>200 €</span>
                <p className={styles.p}>
                  Galerie complète envoyée (environ 80 photos)
                </p>
              </div>
              <div>
                <Link href="/contact">
                  <p style={{ textAlign: "center" }}>
                    Pour plus d'informations{" "}
                    <span
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Contactez-moi
                    </span>
                  </p>
                </Link>
              </div>
            </div>
            <div className={styles.image}>
              <Image
                src="/Professionnels_marques/professionnels_marques12.jpg"
                alt="photo Professionnels - Marques"
                width={3510}
                height={5270}
                loading="lazy"
              />
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.image}>
              <Image
                src="/Professionnels_marques/professionnels_marques17.jpg"
                alt="photo Professionnels - Marques"
                width={3510}
                height={5270}
                loading="lazy"
              />
            </div>
            <div className={styles.description}>
              <div>
                <h1 className={styles.formulaTitle}>Formule Prestige</h1>
                <h2 className={styles.h2}>Séance d'1h</h2>
                <span className={styles.price}>250 €</span>
                <p className={styles.p}>
                  Galerie complète envoyée (environ 100 photos)
                </p>
              </div>
              <div>
                <Link href="/contact">
                  <p style={{ textAlign: "center" }}>
                    Pour plus d'informations{" "}
                    <span
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Contactez-moi
                    </span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  } else if (props.name === "Solo - Confiance en soi") {
    formules = (
      <div>
        <div style={{ textAlign: "center", fontFamily: "serif" }}>
          <h1>Séance Solo - Confiance en soi</h1>
          <p className={styles.présentation}>
            Célébrez l’un des moments les plus précieux de votre vie, en créant
            un souvenir intemporel de cette période unique.
            <br /> Mon objectif étant de capturer la beauté et la magie de votre
            grossesse, tout en vous mettant à l’aise. <br />
            Accompagnés de conseils sur les tenues et les poses, je vous
            guiderai tout au long du processus pour obtenir des photos
            naturelles et à votre image. <br />
            Chaque cliché est pensé pour mettre en valeur votre ventre rond et
            l’amour qui grandit à l’intérieur. <br />
            Cette séance se fait en extérieur ou chez vous, votre cocon.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src="/Solo_confiance_en_soi/solo_confiance10.jpg"
              alt="photo Solo - Confiance en soi"
              width={3510}
              height={5270}
              loading="lazy"
            />
          </div>
          <div className={styles.description}>
            <div>
              <h1 className={styles.formulaTitle}>Formule Instants</h1>
              <h2 className={styles.h2}>Séance de 30 min</h2>
              <span className={styles.price}>150 €</span>
              <p className={styles.p}>
                Galerie complète envoyée (environ 50 photos)
              </p>
            </div>

            <div>
              <Link href="/contact">
                <p style={{ textAlign: "center" }}>
                  Pour plus d'informations{" "}
                  <span
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    Contactez-moi
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.description}>
              <div>
                <h1 className={styles.formulaTitle}>Formule Douceur</h1>
                <h2 className={styles.h2}>Séance de 45 min</h2>
                <span className={styles.price}>200 €</span>
                <p className={styles.p}>
                  Galerie complète envoyée (environ 80 photos)
                </p>
              </div>
              <div>
                <Link href="/contact">
                  <p style={{ textAlign: "center" }}>
                    Pour plus d'informations{" "}
                    <span
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Contactez-moi
                    </span>
                  </p>
                </Link>
              </div>
            </div>
            <div className={styles.image}>
              <Image
                src="/Solo_confiance_en_soi/solo_confiance4.jpg"
                alt="photo Solo - Confiance en soi"
                width={3510}
                height={5270}
                loading="lazy"
              />
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.image}>
              <Image
                src="/Solo_confiance_en_soi/solo_confiance1.jpg"
                alt="photo Solo - Confiance en soi"
                width={3510}
                height={5270}
                loading="lazy"
              />
            </div>
            <div className={styles.description}>
              <div>
                <h1 className={styles.formulaTitle}>Formule Prestige</h1>
                <h2 className={styles.h2}>Séance d'1h</h2>
                <span className={styles.price}>250 €</span>
                <p className={styles.p}>
                  Galerie complète envoyée (environ 100 photos)
                </p>
              </div>
              <div>
                <Link href="/contact">
                  <p style={{ textAlign: "center" }}>
                    Pour plus d'informations{" "}
                    <span
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Contactez-moi
                    </span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  } else if (props.name === "TBB") {
    formules = (
      <div>
        <div style={{ textAlign: "center", fontFamily: "serif" }}>
          <h1>Séance TBB</h1>
          <p className={styles.présentation}>
            Célébrez l’un des moments les plus précieux de votre vie, en créant
            un souvenir intemporel de cette période unique.
            <br /> Mon objectif étant de capturer la beauté et la magie de votre
            grossesse, tout en vous mettant à l’aise. <br />
            Accompagnés de conseils sur les tenues et les poses, je vous
            guiderai tout au long du processus pour obtenir des photos
            naturelles et à votre image. <br />
            Chaque cliché est pensé pour mettre en valeur votre ventre rond et
            l’amour qui grandit à l’intérieur. <br />
            Cette séance se fait en extérieur ou chez vous, votre cocon.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src="/TBB/tbb4.jpg"
              alt="photo TBB"
              width={3510}
              height={5270}
              loading="lazy"
            />
          </div>
          <div className={styles.description}>
            <div>
              <h1 className={styles.formulaTitle}>Formule Instants</h1>
              <h2 className={styles.h2}>Séance de 30 min</h2>
              <span className={styles.price}>150 €</span>
              <p className={styles.p}>
                Galerie complète envoyée (environ 50 photos)
              </p>
            </div>

            <div>
              <Link href="/contact">
                <p style={{ textAlign: "center" }}>
                  Pour plus d'informations{" "}
                  <span
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    Contactez-moi
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.description}>
              <div>
                <h1 className={styles.formulaTitle}>Formule Douceur</h1>
                <h2 className={styles.h2}>Séance de 45 min</h2>
                <span className={styles.price}>200 €</span>
                <p className={styles.p}>
                  Galerie complète envoyée (environ 80 photos)
                </p>
              </div>
              <div>
                <Link href="/contact">
                  <p style={{ textAlign: "center" }}>
                    Pour plus d'informations{" "}
                    <span
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Contactez-moi
                    </span>
                  </p>
                </Link>
              </div>
            </div>
            <div className={styles.image}>
              <Image
                src="/TBB/tbb2.jpg"
                alt="photo TBB"
                width={3510}
                height={5270}
                loading="lazy"
              />
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.image}>
              <Image
                src="/TBB/tbb9.jpg"
                alt="photo TBB"
                width={3510}
                height={5270}
                loading="lazy"
              />
            </div>
            <div className={styles.description}>
              <div>
                <h1 className={styles.formulaTitle}>Formule Prestige</h1>
                <h2 className={styles.h2}>Séance d'1h</h2>
                <span className={styles.price}>250 €</span>
                <p className={styles.p}>
                  Galerie complète envoyée (environ 100 photos)
                </p>
              </div>
              <div>
                <Link href="/contact">
                  <p style={{ textAlign: "center" }}>
                    Pour plus d'informations{" "}
                    <span
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Contactez-moi
                    </span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  } else if (props.name === "Grossesse - Naissance") {
    formules = (
      <div>
        <div style={{ textAlign: "center", fontFamily: "serif" }}>
          <h1>Pack Duo Grossesse - Naissance</h1>
          <p className={styles.présentation}>
            Célébrez l’un des moments les plus précieux de votre vie, en créant
            un souvenir intemporel de cette période unique.
            <br /> Mon objectif étant de capturer la beauté et la magie de votre
            grossesse, tout en vous mettant à l’aise. <br />
            Accompagnés de conseils sur les tenues et les poses, je vous
            guiderai tout au long du processus pour obtenir des photos
            naturelles et à votre image. <br />
            Chaque cliché est pensé pour mettre en valeur votre ventre rond et
            l’amour qui grandit à l’intérieur. <br />
            Cette séance se fait en extérieur ou chez vous, votre cocon.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src="/TBB/tbb4.jpg"
              alt="photo TBB"
              width={3510}
              height={5270}
              loading="lazy"
            />
          </div>
          <div className={styles.description}>
            <div>
              <h1 className={styles.formulaTitle}>Formule Instants</h1>
              <h2 className={styles.h2}> 2 Séances de 30 min</h2>
              <span className={styles.price}>250 €</span>
              <p className={styles.p}>
                Galerie complète envoyée (environ 50 photos par galerie)
              </p>
            </div>

            <div>
              <Link href="/contact">
                <p style={{ textAlign: "center" }}>
                  Pour plus d'informations{" "}
                  <span
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    Contactez-moi
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.description}>
              <div>
                <h1 className={styles.formulaTitle}>Formule Douceur</h1>
                <h2 className={styles.h2}>2 Séances de 45 min</h2>
                <span className={styles.price}>350 €</span>
                <p className={styles.p}>
                  Galerie complète envoyée (environ 80 photos par galerie)
                </p>
              </div>
              <div>
                <Link href="/contact">
                  <p style={{ textAlign: "center" }}>
                    Pour plus d'informations{" "}
                    <span
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Contactez-moi
                    </span>
                  </p>
                </Link>
              </div>
            </div>
            <div className={styles.image}>
              <Image
                src="/TBB/tbb2.jpg"
                alt="photo TBB"
                width={3510}
                height={5270}
                loading="lazy"
              />
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={1 * 100}>
          <div className={styles.container}>
            <div className={styles.image}>
              <Image
                src="/TBB/tbb9.jpg"
                alt="photo TBB"
                width={3510}
                height={5270}
                loading="lazy"
              />
            </div>
            <div className={styles.description}>
              <div>
                <h1 className={styles.formulaTitle}>Formule Prestige</h1>
                <h2 className={styles.h2}>2 Séances d'1h</h2>
                <span className={styles.price}>450 €</span>
                <p className={styles.p}>
                  Galerie complète envoyée (environ 100 photos par galerie)
                </p>
              </div>
              <div>
                <Link href="/contact">
                  <p style={{ textAlign: "center" }}>
                    Pour plus d'informations{" "}
                    <span
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Contactez-moi
                    </span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  } else if (props.name === "Baptême") {
    formules = (
      <div>
        <div style={{ textAlign: "center", fontFamily: "serif" }}>
          <h1>Séance Baptême</h1>
          <p className={styles.présentation}>
            Célébrez l’un des moments les plus précieux de votre vie, en créant
            un souvenir intemporel de cette période unique.
            <br /> Mon objectif étant de capturer la beauté et la magie de votre
            grossesse, tout en vous mettant à l’aise. <br />
            Accompagnés de conseils sur les tenues et les poses, je vous
            guiderai tout au long du processus pour obtenir des photos
            naturelles et à votre image. <br />
            Chaque cliché est pensé pour mettre en valeur votre ventre rond et
            l’amour qui grandit à l’intérieur. <br />
            Cette séance se fait en extérieur ou chez vous, votre cocon.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src="/TBB/tbb4.jpg"
              alt="photo TBB"
              width={3510}
              height={5270}
              loading="lazy"
            />
          </div>
          <div className={styles.description}>
            <div>
              <h2 className={styles.h2}>Séance de 2h</h2>
              <span className={styles.price}>450 €</span>
              <p className={styles.p}>
                Galerie complète envoyée sur galerie en ligne (environ 180 photos)<br/>
                Cérémonie mairie ou église <br/>
                Photos grand groupe <br/>
                Photos petits groupes (Parents / Parrain / Marraine / Grands-parents / Amis) <br/>
                Début du vin d'honner / Apérétif / Gouter / Repas
              </p>
            </div>

            <div>
              <Link href="/contact">
                <p style={{ textAlign: "center" }}>
                  Pour plus d'informations{" "}
                  <span
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    Contactez-moi
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div>{formules}</div>;
}

export default Formule;
