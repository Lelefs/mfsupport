import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta
          name="description"
          content="Assistência Técnica e soluções em TI. Realizamos desde a manutenção
        de Notebooks até administração de usuários e redes de grandes
        empresas no ABC e grande SP."
        />
        <link rel="canonical" href="https://mfsupport.com.br" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="keywords"
          content="Suporte Técnico, Redes, Computador, Notebook, Celular, Tablet,
        Televisões, Monitores, Vídeo Games, Nobreak, Estabilizadores,
        Venda de computador gamer, Formatação, Reparo de placa de vídeo, Pc gamer, Reparo de placa"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mfsupport.com.br/" />
        <meta property="og:title" content="MF Support Informática" />
        <meta
          property="og:description"
          content="Assistência Técnica e soluções em TI. Realizamos desde a manutenção de Notebooks até administração de usuários e redes de grandes empresas no ABC e grande SP."
        />
        <meta
          property="og:image"
          content="https://imgs-readme.s3.sa-east-1.amazonaws.com/mfsupport.jpeg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mfsupport.com.br/" />
        <meta property="twitter:title" content="MF Support Informática" />
        <meta
          property="twitter:description"
          content="Assistência Técnica e soluções em TI. Realizamos desde a manutenção de Notebooks até administração de usuários e redes de grandes empresas no ABC e grande SP."
        />
        <meta
          property="twitter:image"
          content="https://imgs-readme.s3.sa-east-1.amazonaws.com/mfsupport.jpeg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
