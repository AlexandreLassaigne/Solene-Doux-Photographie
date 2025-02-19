import '../styles/globals.css';
import Head from 'next/head';
/* import dotenv from 'dotenv';
dotenv.config(); */

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Photographie Solène</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
