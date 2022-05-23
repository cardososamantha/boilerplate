import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title> Boilerplate</title>
        <link rel="shortcut icon" href="/img/star-icon.png" />
        <link rel="apple-touch-icon" href="/img/star-icon.png" />
        <meta
          name="description"
          content="A simple project starter to work with Typescrit, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
