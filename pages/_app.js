import "../styles/globals.css";
import Head from "next/head";
import "animate.css";
import "animate.css/animate.compat.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Solène Doux Photographie</title>
        <meta
          name="description"
          content="Photographe dans la région Toulousaine spécialisée dans les moments forts de la vie, mariage, maternité, famille, etc."
        />
        <link
          rel="icon"
          href="/favicon.ico"
          alt="logo site solene doux photographie"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
