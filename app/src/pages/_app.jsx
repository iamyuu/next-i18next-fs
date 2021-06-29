import Head from 'next/head'
import {appWithTranslation} from 'next-i18next'
import '../styles/globals.css'

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name='description' content='Next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp)
