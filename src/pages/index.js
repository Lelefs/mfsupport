import Script from "next/script";

import BtnWhatsApp from "@/components/btnWhatsApp/btnWhatsApp";
import ImageContainer from "@/components/imageContainer";
import Menu from "@/components/menu/menu";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>MF Support Informática</title>
      </Head>

      {process.env.NODE_ENV === "production" && (
        <div className="container">
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-G161YSNSQT"
          />
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'G-G161YSNSQT');
            `}
          </Script>
        </div>
      )}

      <ImageContainer src="/Logo.png" alt="Logo" />

      <Menu />

      <ImageContainer src="/pcgamer.png" alt="PC Gamer" id="pcgamer" />

      <ImageContainer
        src="/reparoplaca.png"
        alt="Reparo de placas"
        id="reparoplaca"
      />

      <ImageContainer src="/notebook.png" alt="Notebook" id="notebook" />

      <ImageContainer src="/tv.png" alt="TV e Monitor" id="tv" />

      <ImageContainer
        src="/empresas.png"
        alt="Atendimento presencial"
        id="empresas"
      />

      <BtnWhatsApp />
    </>
  );
}
