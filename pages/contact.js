import Contact from '../components/Contact';
import Head from 'next/head';

function Contacts() {
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
        type="image/png"
        href="/logo.png"
        alt="logo site solene doux photographie"
      />
    </Head>
    <Contact />
  </>
  );
}

export default Contacts;
