import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Nature, night, and macro — quiet moments turned into bold art. Photography by Lorenzo LDS, Brazil." />
        <meta name="keywords" content="photography, nature photography, macro photography, night photography, wildlife, Brazil, fine art prints" />
        <meta name="author" content="Lorenzo LDS" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="TheGrandHub | Nature, Night & Macro Photography" />
        <meta property="og:description" content="Nature, night, and macro — quiet moments turned into bold art." />
        <meta property="og:site_name" content="TheGrandHub" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TheGrandHub | Nature, Night & Macro Photography" />
        <meta name="twitter:description" content="Nature, night, and macro — quiet moments turned into bold art." />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
