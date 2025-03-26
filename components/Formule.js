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
        <main>
          <div style={{ textAlign: "center", fontFamily: "Inria serif" }}>
            <h1>Séance Mariage</h1>
            <p className={styles.presentation}>
              Votre mariage est un moment unique qui mérite d’être immortalisé
              de la plus belle des manières.
              <br /> Avec mon approche artistique et douce, j’aime capturer non
              seulement les moments importants, mais aussi les petites émotions
              discrètes, les regards ou encore les gestes tendres qui font la
              beauté de cette journée.
              <br />À travers un reportage photo sur-mesure, je vous propose de
              raconter votre histoire d'amour de manière naturelle et poétique
              en créant un souvenir authentique, intemporel et chargé
              d’émotions. Chaque image est une oeuvre qui traduit la douceur de
              l'instant, à travers des lumières subtiles, des compositions
              soignées et une attention particulière portée aux détails.
            </p>
          </div>
          <div className={styles.container}>
            <Image
              src="/Mariage/mariage14.webp"
              alt="photo Mariage"
              width={400}
              height={600}
              className={styles.image}
            />
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
                <Link href="/contact" className={styles.contact}>
                  <p>
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
          <ScrollAnimation
            animateIn="fadeInRight"
            animateOnce={true}
            delay={1 * 100}
          >
            <div className={styles.container}>
              <div className={styles.description}>
                <div>
                  <h1 className={styles.formulaTitle}>Formule Douceur</h1>
                  <h2 className={styles.h2}>Durée total : 7h</h2>
                  <span className={styles.price}>1500 €</span>
                  <p className={styles.p}>
                    Préparatifs des mariés / Cérémonie / Photos de groupe /
                    Photos de couple / Vin d'honneur
                  </p>
                </div>
                <div>
                  <Link href="/contact" className={styles.contact}>
                    <p>
                      Pour plus d'informations{" "}
                      <span
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                      >
                        Contactez-moi
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
              <Image
                src="/Mariage/mariage8.webp"
                alt="photo Mariage"
                width={400}
                height={600}
                className={styles.image}
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOnce={true}
            delay={1 * 100}
          >
            <div className={styles.container}>
              <Image
                src="/Mariage/mariage1.webp"
                alt="photo Mariage"
                width={400}
                height={600}
                className={styles.image}
              />
              <div className={styles.description}>
                <div>
                  <h1 className={styles.formulaTitle}>Formule Prestige</h1>
                  <h2 className={styles.h2}>Durée total : 10h</h2>
                  <span className={styles.price}>2100 €</span>
                  <p className={styles.p}>
                    Préparatifs des mariés / Cérémonie / Photos de groupe /
                    Photos de couple / Vin d'honneur / Jusqu'au gâteau (00h00
                    max)
                  </p>
                </div>
                <div>
                  <Link href="/contact" className={styles.contact}>
                    <p>
                      Pour plus d'informations{" "}
                      <span
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                      >
                        Contactez-moi
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </main>
      </div>
    );
  } else if (props.name === "Allaitement") {
    formules = (
      <div>
        <main>
          <div style={{ textAlign: "center", fontFamily: "Inria serif" }}>
            <h1>Séance Allaitement</h1>
            <p className={styles.presentation}>
              Offrez-vous un souvenir intemporel de ce moment de complicité avec
              votre bébé. Intime et naturel, souvent rempli d’émotions et de
              tendresse, cette étape de votre maternité mérite d’être
              immortalisé à travers des images douces et authentiques pour
              mettre en valeur la beauté de votre lien avec votre enfant.
            </p>
          </div>
          <div className={styles.container}>
            <Image
              src="/Allaitement/allaitement1.webp"
              alt="photo Allaitement"
              width={400}
              height={600}
              className={styles.image}
            />
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
                <Link href="/contact" className={styles.contact}>
                  <p>
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
          <ScrollAnimation
            animateIn="fadeInRight"
            animateOnce={true}
            delay={1 * 100}
          >
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
                  <Link href="/contact" className={styles.contact}>
                    <p>
                      Pour plus d'informations{" "}
                      <span
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                      >
                        Contactez-moi
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
              <Image
                src="/Allaitement/allaitement2.webp"
                alt="photo Allaitement"
                width={400}
                height={600}
                className={styles.image}
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOnce={true}
            delay={1 * 100}
          >
            <div className={styles.container}>
              <Image
                src="/Allaitement/allaitement3.webp"
                alt="photo Allaitement"
                width={400}
                height={600}
                className={styles.image}
              />
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
                  <Link href="/contact" className={styles.contact}>
                    <p>
                      Pour plus d'informations{" "}
                      <span
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                      >
                        Contactez-moi
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </main>
      </div>
    );
  } else if (props.name === "Couple") {
    formules = (
      <div>
        <main>
          <div style={{ textAlign: "center", fontFamily: "Inria serif" }}>
            <h1>Séance Couple</h1>
            <p className={styles.presentation}>
              Immortalisez votre complicité et votre amour à travers une séance
              photo couple intime et authentique. Cette expérience unique sera
              l’occasion de capturer chaque geste, chaque sourire et chaque
              regard avec délicatesse. Que ce soit dans un cadre cosy, chez vous
              ou en extérieur, chaque instant sera capturé de manière à sublimer
              votre connexion et à raconter l’histoire de votre amour.
            </p>
          </div>
          <div className={styles.container}>
            <Image
              src="/Couple/couple2.webp"
              alt="photo Couple"
              width={400}
              height={600}
              className={styles.image}
            />
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
                <Link href="/contact" className={styles.contact}>
                  <p>
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
          <ScrollAnimation
            animateIn="fadeInRight"
            animateOnce={true}
            delay={1 * 100}
          >
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
                  <Link href="/contact" className={styles.contact}>
                    <p>
                      Pour plus d'informations{" "}
                      <span
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                      >
                        Contactez-moi
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
              <Image
                src="/Couple/couple4.webp"
                alt="photo Couple"
                width={400}
                height={600}
                className={styles.image}
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOnce={true}
            delay={1 * 100}
          >
            <div className={styles.container}>
              <Image
                src="/Couple/couple6.webp"
                alt="photo Couple"
                width={400}
                height={600}
                className={styles.image}
              />
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
                  <Link href="/contact" className={styles.contact}>
                    <p>
                      Pour plus d'informations{" "}
                      <span
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                      >
                        Contactez-moi
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </main>
      </div>
    );
  } else if (props.name === `Décoration d'intérieur`) {
    formules = (
      <div>
        <main>
          <div style={{ textAlign: "center", fontFamily: "Inria serif" }}>
            <h1>Séance Décoration d'intérieur</h1>
            <p className={styles.presentation}>
              Mettez en valeur l'élégance et le style unique de votre intérieur
              grâce à un reportage photo dédié à votre décoration d’intérieur et
              à votre home design. Que vous soyez un particulier, un designer ou
              un architecte d'intérieur, cette prestation est l’occasion
              parfaite de capturer l’essence de vos créations et de sublimer
              chaque détail de votre espace.
            </p>
          </div>
          <div className={styles.container}>
            <Image
              src="/Deco/deco10.webp"
              alt="photo Décoration d'intérieur"
              width={400}
              height={600}
              className={styles.image}
            />
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
                <Link href="/contact" className={styles.contact}>
                  <p>
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
          <ScrollAnimation
            animateIn="fadeInRight"
            animateOnce={true}
            delay={1 * 100}
          >
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
                  <Link href="/contact" className={styles.contact}>
                    <p>
                      Pour plus d'informations{" "}
                      <span
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                      >
                        Contactez-moi
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
              <Image
                src="/Deco/deco5.webp"
                alt="photo Décoration d'intérieur"
                width={400}
                height={600}
                className={styles.image}
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOnce={true}
            delay={1 * 100}
          >
            <div className={styles.container}>
              <Image
                src="/Deco/deco3.webp"
                alt="photo Décoration d'intérieur"
                width={400}
                height={600}
                className={styles.image}
              />
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
                  <Link href="/contact" className={styles.contact}>
                    <p>
                      Pour plus d'informations{" "}
                      <span
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                      >
                        Contactez-moi
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </main>
      </div>
    );
  } else if (props.name === "EVJF / EVG") {
    formules = (
      <div>
        <main>
          <div style={{ textAlign: "center", fontFamily: "Inria serif" }}>
          <h1>Séance EVJF / EVG</h1>
          <p className={styles.presentation}>
            Offrez-vous des souvenirs mémorables et fun lors d’une séance photo
            EVJF (Enterrement de Vie de Jeune Fille) / EVG (Enterrement de Vie
            de Garçon). Ce moment unique, entourée de vos ami(e)s les plus
            proches, sera l’occasion parfaite de capturer ces instants de rires
            ainsi que la complicité et l’énergie de votre groupe.
            <br /> Que vous choisissiez un cadre urbain, naturel ou plus intime,
            je vous accompagnerai dans ce moment de partage tout en créant des
            images authentiques et pleines de joie. <br />
            Mon objectif est que vous ayez des photos qui reflètent votre
            personnalité, l’ambiance de votre journée et la complicité entre
            vous et vos ami(e)s, pour des souvenirs gravés à vie.
          </p>
        </div>
        <div className={styles.container}>
          <Image
            src="/EVJF/evjf1.webp"
            alt="photo EVJF"
            width={400}
            height={600}
            className={styles.image}
          />
          <div className={styles.description}>
            <div>
              <h1 className={styles.formulaTitle}>EVJF / EVG</h1>
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
              <Link href="/contact" className={styles.contact}>
                <p>
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
        </main>
        
      </div>
    );
  } else if (props.name === "Famille") {
    formules = (
      <div>
        <main>
          <div style={{ textAlign: "center", fontFamily: "Inria serif" }}>
            <h1>Séance Famille</h1>
            <p className={styles.presentation}>
              La famille, c'est le coeur de vos souvenirs, et chaque instant
              passé ensemble mérite d’être capturé. Avec une séance photo
              famille, je vous propose de créer des images intemporelles qui
              racontent votre histoire et capturent l’amour, la complicité et la
              joie qui vous unissent.
            </p>
          </div>
          <div className={styles.container}>
            <Image
              src="/Famille/famille2.webp"
              alt="photo Famille"
              width={400}
              height={600}
              className={styles.image}
            />
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
                <Link href="/contact" className={styles.contact}>
                  <p>
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
          <ScrollAnimation
            animateIn="fadeInRight"
            animateOnce={true}
            delay={1 * 100}
          >
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
                  <Link href="/contact" className={styles.contact}>
                    <p>
                      Pour plus d'informations{" "}
                      <span
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                      >
                        Contactez-moi
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
              <Image
                src="/Famille/famille6.webp"
                alt="photo Famille"
                width={400}
                height={600}
                className={styles.image}
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOnce={true}
            delay={1 * 100}
          >
            <div className={styles.container}>
              <Image
                src="/Famille/famille5.webp"
                alt="photo Famille"
                width={400}
                height={600}
                className={styles.image}
              />
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
                  <Link href="/contact" className={styles.contact}>
                    <p>
                      Pour plus d'informations{" "}
                      <span
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                      >
                        Contactez-moi
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </main>
      </div>
    );
  } else if (props.name === "Grossesse") {
    formules = (
      <div>
        <main>
          <div style={{ textAlign: "center", fontFamily: "Inria serif" }}>
          <h1>Séance Grossesse</h1>
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
          <Image
            src="/Grossesse/grossesse9.webp"
            alt="photo Grossesse"
            width={400}
            height={600}
            className={styles.image}
          />
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
              <Link href="/contact" className={styles.contact}>
                <p>
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
        <ScrollAnimation
          animateIn="fadeInRight"
          animateOnce={true}
          delay={1 * 100}
        >
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
                <Link href="/contact" className={styles.contact}>
                  <p>
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
            <Image
              src="/Grossesse/grossesse7.webp"
              alt="photo Grossesse"
              width={400}
              height={600}
              className={styles.image}
            />
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          animateOnce={true}
          delay={1 * 100}
        >
          <div className={styles.container}>
            <Image
              src="/Grossesse/grossesse10.webp"
              alt="photo Grossesse"
              width={400}
              height={600}
              className={styles.image}
            />
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
                <Link href="/contact" className={styles.contact}>
                  <p>
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
        </main>
        
      </div>
    );
  } else if (props.name === "Naissance") {
    formules = (
      <div>
        <main>
          <div style={{ textAlign: "center", fontFamily: "Inria serif" }}>
          <h1>Séance Naissance</h1>
          <p className={styles.presentation}>
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
          <Image
            src="/Naissance/naissance1.webp"
            alt="photo Naissance"
            width={400}
            height={600}
            className={styles.image}
          />
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
              <Link href="/contact" className={styles.contact}>
                <p>
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
        <ScrollAnimation
          animateIn="fadeInRight"
          animateOnce={true}
          delay={1 * 100}
        >
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
                <Link href="/contact" className={styles.contact}>
                  <p>
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
            <Image
              src="/Naissance/naissance7.webp"
              alt="photo Naissance"
              width={400}
              height={600}
              className={styles.image}
            />
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          animateOnce={true}
          delay={1 * 100}
        >
          <div className={styles.container}>
            <Image
              src="/Naissance/naissance2.webp"
              alt="photo Naissance"
              width={400}
              height={600}
              className={styles.image}
            />
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
                <Link href="/contact" className={styles.contact}>
                  <p>
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
        </main>
        
      </div>
    );
  } else if (props.name === "Professionnels - Marques") {
    formules = (
      <div>
        <main>
          <div style={{ textAlign: "center", fontFamily: "Inria serif" }}>
          <h1>Séance Professionnels - Marques</h1>
          <p className={styles.presentation}>
            Que vous soyez un entrepreneur, un créateur, ou que vous ayez besoin
            de photos professionnelles pour votre image de marque, cette séance
            est conçue pour répondre à vos attentes. Je vous propose une
            expérience sur-mesure, que ce soit dans votre propre univers, pour
            refléter votre personnalité ou votre activité, ou bien dans un cadre
            plus “neutre” avec des fonds simples et épurés pour un rendu
            professionnel élégant.
            <br />
            Portrait, photo de profil, photo de produits, ou photo pour votre
            LinkedIn, laissez-vous guider dans un cadre détendu et créatif, où
            vous pourrez être vous- même et ou chaque image sera travaillée avec
            soin pour capturer l’essence de votre personnalité.
          </p>
        </div>
        <div className={styles.container}>
          <Image
            src="/Professionnels_marques/professionnels_marques2.webp"
            alt="photo Professionnels - Marques"
            width={400}
            height={600}
            className={styles.image}
          />
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
              <Link href="/contact" className={styles.contact}>
                <p>
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
        <ScrollAnimation
          animateIn="fadeInRight"
          animateOnce={true}
          delay={1 * 100}
        >
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
                <Link href="/contact" className={styles.contact}>
                  <p>
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
            <Image
              src="/Professionnels_marques/professionnels_marques12.webp"
              alt="photo Professionnels - Marques"
              width={400}
              height={600}
              className={styles.image}
            />
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          animateOnce={true}
          delay={1 * 100}
        >
          <div className={styles.container}>
            <Image
              src="/Professionnels_marques/professionnels_marques17.webp"
              alt="photo Professionnels - Marques"
              width={400}
              height={600}
              className={styles.image}
            />
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
                <Link href="/contact" className={styles.contact}>
                  <p>
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
        </main>
        
      </div>
    );
  } else if (props.name === "Solo - Confiance en soi") {
    formules = (
      <div>
        <main>
          <div style={{ textAlign: "center", fontFamily: "Inria serif" }}>
          <h1>Séance Solo - Confiance en soi</h1>
          <p className={styles.presentation}>
            Cette séance est bien plus qu'une simple séance photo : c'est une
            véritable aventure intérieure, conçue pour vous aider à révéler
            votre beauté unique et renforcer votre confiance en vous. <br />
            Que ce soit pour célébrer un moment de votre vie, une nouvelle étape
            ou simplement pour vous reconnecter à vous- même, cette séance vous
            permet de prendre le temps de vous regarder sous un autre angle,
            loin des jugements extérieurs.
            <br /> À travers mon objectif, je capturerai l’essence de votre
            personnalité et de votre beauté, tout en vous offrant un cadre
            bienveillant et rassurant.
          </p>
        </div>
        <div className={styles.container}>
          <Image
            src="/Solo_confiance_en_soi/solo_confiance10.webp"
            alt="photo Solo - Confiance en soi"
            width={400}
            height={600}
            className={styles.image}
          />
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
              <Link href="/contact" className={styles.contact}>
                <p>
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
        <ScrollAnimation
          animateIn="fadeInRight"
          animateOnce={true}
          delay={1 * 100}
        >
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
                <Link href="/contact" className={styles.contact}>
                  <p>
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
            <Image
              src="/Solo_confiance_en_soi/solo_confiance4.webp"
              alt="photo Solo - Confiance en soi"
              width={400}
              height={600}
              className={styles.image}
            />
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          animateOnce={true}
          delay={1 * 100}
        >
          <div className={styles.container}>
            <Image
              src="/Solo_confiance_en_soi/solo_confiance1.webp"
              alt="photo Solo - Confiance en soi"
              width={400}
              height={600}
              className={styles.image}
            />
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
                <Link href="/contact" className={styles.contact}>
                  <p>
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
        </main>
        
      </div>
    );
  } else if (props.name === "TBB") {
    formules = (
      <div>
        <main>
          <div style={{ textAlign: "center", fontFamily: "Inria serif" }}>
          <h1>Séance TBB</h1>
          <p className={styles.presentation}>
            La séance photo lors d’un TBB est une expérience exceptionnelle qui
            permet de capturer un moment rare et précieux dans la vie de votre
            bébé. <br />
            Réalisé par une infirmière puéricultrice, le bain thérapeutique
            (TBB) est un moment de bien-être, offrant à bébé relaxation et
            réconfort dans un cadre sécurisé. <br />
            Immortaliser ce moment unique avec une séance photo vous permettra
            non seulement de conserver des souvenirs inestimables, mais aussi de
            revivre ces instants de douceur et de complicité.
          </p>
        </div>
        <div className={styles.container}>
          <Image
            src="/TBB/tbb4.webp"
            alt="photo TBB"
            width={400}
            height={600}
            className={styles.image}
          />
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
              <Link href="/contact" className={styles.contact}>
                <p>
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
        <ScrollAnimation
          animateIn="fadeInRight"
          animateOnce={true}
          delay={1 * 100}
        >
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
                <Link href="/contact" className={styles.contact}>
                  <p>
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
            <Image
              src="/TBB/tbb2.webp"
              alt="photo TBB"
              width={400}
              height={600}
              className={styles.image}
            />
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          animateOnce={true}
          delay={1 * 100}
        >
          <div className={styles.container}>
            <Image
              src="/TBB/tbb9.webp"
              alt="photo TBB"
              width={400}
              height={600}
              className={styles.image}
            />
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
                <Link href="/contact" className={styles.contact}>
                  <p>
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
        </main>
        
      </div>
    );
  } else if (props.name === "Grossesse - Naissance") {
    formules = (
      <div>
        <main>
          <div style={{ textAlign: "center", fontFamily: "Inria serif" }}>
          <h1>Pack Duo Grossesse - Naissance</h1>
          <p className={styles.presentation}>
            Le pack duo grossesse-naissance vous permet de capturer deux moments
            inoubliables : la beauté de votre grossesse et les premiers instants
            de vie de votre bébé.
            <br /> En combinant ces deux séances photo, vous bénéficiez non
            seulement de souvenirs précieux, mais également d'une réduction sur
            le motant total.
            <br />
            <br />
            Séance grossesse : Mon objectif étant de capturer la beauté et la
            magie de votre grossesse, tout en vous mettant à l’aise. <br />
            Chaque cliché est pensé pour mettre en valeur votre ventre rond et
            l’amour qui grandit à l’intérieur. <br />
            Cette séance se fait en extérieur ou chez vous, votre cocon.
            <br />
            <br />
            Séance naissance : Immortalisée dans les 30 premiers jours, cette
            séance permet de photographier votre tout-petit dans des poses
            naturelles et sécurisées, en mettant l’accent sur les détails
            précieux. <br />
            Elle se déroulera à domicile, pour que chaque photo soit réalisée
            dans le respect du bien-être de votre nouveau-né, tout en étant dans
            votre univers, pour des souvenirs tendres et intemporels. <br />
          </p>
        </div>
        <div className={styles.container}>
          <Image
            src="/Duo_Grossesse_Naissance/grossesse_naissance1.webp"
            alt="photo grossesse"
            width={400}
            height={600}
            className={styles.image}
          />
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
              <Link href="/contact" className={styles.contact}>
                <p>
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
        <ScrollAnimation
          animateIn="fadeInRight"
          animateOnce={true}
          delay={1 * 100}
        >
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
                <Link href="/contact" className={styles.contact}>
                  <p>
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
            <Image
              src="/Duo_Grossesse_Naissance/grossesse_naissance4.webp"
              alt="photo naissance"
              width={400}
              height={600}
              className={styles.image}
            />
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          animateOnce={true}
          delay={1 * 100}
        >
          <div className={styles.container}>
            <Image
              src="/Duo_Grossesse_Naissance/grossesse_naissance2.webp"
              alt="photo TBB"
              width={400}
              height={600}
              className={styles.image}
            />
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
                <Link href="/contact" className={styles.contact}>
                  <p>
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
        </main>
        
      </div>
    );
  } else if (props.name === "Baptême") {
    formules = (
      <div>
        <main>
          <div style={{ textAlign: "center", fontFamily: "Inria serif" }}>
          <h1>Séance Baptême</h1>
          <p className={styles.presentation}>
            Le baptême est un moment particulier, chargé de symbolisme et
            d'émotions.
            <br /> Offrez-vous la possibilité de capturer ces instants précieux
            grâce à une séance photo sur mesure <br />
            Que ce soit lors de la cérémonie à l'église ou à la mairie, des
            moments de partage en famille ou des portraits tout en douceur, je
            vous propose une approche discrète et naturelle pour saisir
            l'authenticité de chaque instant. Mon objectif est de vous offrir
            des souvenirs émouvants, qui témoignent de la beauté et de la joie
            de ce jour spécial.
          </p>
        </div>
        <div className={styles.container}>
          <Image
            src="/Baptême/baptême2.webp"
            alt="photo baptême"
            width={400}
            height={600}
            className={styles.image}
          />
          <div className={styles.description}>
            <div>
              <h2 className={styles.h2}>Séance de 2h</h2>
              <span className={styles.price}>450 €</span>
              <p className={styles.p}>
                Galerie complète envoyée sur galerie en ligne (environ 180
                photos)
                <br />
                Cérémonie mairie ou église <br />
                Photos grand groupe <br />
                Photos petits groupes (Parents / Parrain / Marraine /
                Grands-parents / Amis) <br />
                Début du vin d'honner / Apérétif / Gouter / Repas
              </p>
            </div>

            <div>
              <Link href="/contact" className={styles.contact}>
                <p>
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
        </main>
        
      </div>
    );
  } else if (props.name === "Séance à thème") {
    formules = (
      <div>
        <main>
          <div style={{ textAlign: "center", fontFamily: "Inria serif" }}>
            <h1>Séance à thème</h1>
            <p className={styles.presentation}>
              Offrez-vous des souvenirs inoubliables avec les minis séances à
              thème ! Ces séances photo rapides et pleines de créativité sont
              l'occasion parfaite de capturer des moments spéciaux pour des
              occasions comme Noël, la fête des mères, la Saint-Valentin et bien
              d'autres encore. <br />
              Que ce soit pour immortaliser l'esprit des fêtes ou créer un
              souvenir original pour vous et vos proches, ces séances sont
              conçues pour être fun, chaleureuses et pleines d'émotions. <br />
              Chaque thème est soigneusement élaboré pour offrir une ambiance
              unique, avec des décors et accessoires adaptés à l’occasion. Ne
              manquez pas ces moments magiques et réservez dès maintenant votre
              mini séance à thème ! <br />
            </p>
          </div>
          <div className={styles.container}>
            <Image
              src="/Seances_theme/seance_theme3.webp"
              alt="photo séance à thème"
              width={400}
              height={600}
              className={styles.image}
            />
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
                <Link href="/contact" className={styles.contact}>
                  <p>
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
          <ScrollAnimation
            animateIn="fadeInRight"
            animateOnce={true}
            delay={1 * 100}
          >
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
                  <Link href="/contact" className={styles.contact}>
                    <p>
                      Pour plus d'informations{" "}
                      <span
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                      >
                        Contactez-moi
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
              <Image
                src="/Seances_theme/seance_theme5.webp"
                alt="photo séance à thème"
                width={400}
                height={600}
                className={styles.image}
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOnce={true}
            delay={1 * 100}
          >
            <div className={styles.container}>
              <Image
                src="/Seances_theme/seance_theme2.webp"
                alt="photo séance à thème"
                width={400}
                height={600}
                className={styles.image}
              />
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
                  <Link href="/contact" className={styles.contact}>
                    <p>
                      Pour plus d'informations{" "}
                      <span
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                      >
                        Contactez-moi
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </main>
      </div>
    );
  }
  return <div>{formules}</div>;
}

export default Formule;
