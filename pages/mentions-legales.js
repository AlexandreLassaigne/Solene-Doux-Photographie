import Mentions from "../components/Mentions-Legales"
import Head from "next/head";

export default function MentionsLegales(){
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
        <Mentions />
      </>
      );
}