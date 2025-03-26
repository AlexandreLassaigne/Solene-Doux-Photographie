import '../styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Solène Doux Photographie</title>
        <meta
          name="description"
          content="Photographe dans la région Toulousaine spécialisée dans les moments forts de la vie, mariage, maternité, famille, etc."
        />
        <link rel="icon" type="image/png" href="/favicon.png" alt='logo site solene doux photographie' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
