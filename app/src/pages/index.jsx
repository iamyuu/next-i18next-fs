import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
// @ts-ignore
import styles from '../styles/Home.module.css'

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['index'])),
    },
  }
}

const grid = [
  {
    transKey: 'documentation',
    link: 'https://nextjs.org/docs',
  },
  {
    transKey: 'learn',
    link: 'https://nextjs.org/learn',
  },
  {
    transKey: 'examples',
    link: 'https://github.com/vercel/next.js/tree/master/examples',
  },
  {
    transKey: 'deploy',
    link: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
  },
]

function Loading() {
  return <h1 className={styles.title}>...</h1>
}

export function Loadable(props) {
  if (typeof window === 'undefined') {
    return <Loading />
  }

  return <React.Suspense fallback={<Loading />}>{props.children}</React.Suspense>
}

export default function Home() {
  const router = useRouter()
  const {t} = useTranslation('index')

  return (
    <div className={styles.container}>
      <Loadable>
        <main className={styles.main}>
          <h1 className={styles.title}>
            {t('welcome')} <Link href='/about'>Go to about</Link>
          </h1>

          <Link passHref href='/' locale={router.locale === 'en' ? 'id' : 'en'}>
            <button className={`${styles.description} ${styles.button}`}>{t('change-locale')}</button>
          </Link>

          <div className={styles.grid}>
            {grid.map(({transKey, link}) => (
              <a key={transKey} href={link} className={styles.card}>
                <h2>{t(`${transKey}.title`)} &rarr;</h2>
                <p>{t(`${transKey}.message`)}</p>
              </a>
            ))}
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            {t('powered-by')} {` `}
            <span className={styles.logo}>
              <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
            </span>
          </a>
        </footer>
      </Loadable>
    </div>
  )
}
