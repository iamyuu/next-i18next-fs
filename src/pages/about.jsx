import * as React from 'react'
import Link from 'next/link'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
// @ts-ignore
import styles from '../styles/Home.module.css'
import {Loadable} from './index'

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['about'])),
    },
  }
}

export default function About() {
  const {t} = useTranslation('about')

  return (
    <div className={styles.container}>
      <Loadable>
        <main className={styles.main}>
          <h1 className={styles.title}>
            {t('title')} <Link href='/'>Go back</Link>
          </h1>

          <p className={styles.description}>{t('description')}</p>
        </main>
      </Loadable>
    </div>
  )
}
