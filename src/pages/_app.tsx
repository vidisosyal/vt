import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Viditablet – Göz Tembelliğine Akıllı Çözüm</title>
        <meta name="description" content="Viditablet çocuklarda göz tembelliğine özel geliştirilmiş bir terapi tabletidir." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Viditablet – Göz Tembelliğine Akıllı Çözüm" />
        <meta property="og:description" content="Çocuklarda göz tembelliği tedavisinde devrim yaratan dijital tablet." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://viditablet.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Viditablet" />
        <meta name="twitter:description" content="Göz tembelliği için geliştirilen çocuklara özel akıllı terapi tableti." />
        <meta name="twitter:image" content="/og-image.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default appWithTranslation(MyApp);