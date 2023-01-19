import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script type="application/ld+json" data-test="jsonld">
          {JSON.stringify(
            {
              "@context": "http://schema.org",
              "@type": "WebSite",
              name: "Theo Dammaretz",
              url: "https://dammaretz.fr",
            },
            null,
            2
          )}
        </script>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Theo Dammaretz online business card and resume homemade website and portfolio" />
        <meta name="keywords" content="resume, CV, Theo, Dammaretz, software, engineer, international, developper, developer" />
        <meta name="author" content="Theo Dammaretz" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#282A36" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:title" content="Theo Dammaretz, Full Stack Engineer" />
        <meta property="og:type" content="profile" />
        <meta property="og:profile:first_name" content="Dammaretz" />
        <meta property="og:profile:last_name" content="Theo" />
        <meta property="og:url" content="https://dammaretz.fr" />
        <meta property="og:description" content="Theo Dammaretz online business card and resume" />
        <meta property="og:site_name" content="Theo Dammaretz, Full Stack Engineer" />
        <meta name="robots" content="index, follow" />
        <meta name="humans" content="/humans.txt" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/xicon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
