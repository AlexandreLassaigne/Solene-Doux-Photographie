import '../styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Photographie Solène</title>
        <meta
          name="description"
          content="Photographe dans la région Toulousaine spécialisée dans les moments forts de la vie, mariage, maternité, famille, etc."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
