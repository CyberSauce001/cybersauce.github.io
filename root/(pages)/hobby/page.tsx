import React from 'react'
import styles from './hobby.module.scss'
import HobbyGallery from '@/app/ui/components/hobby-gallery/hobbyGallery'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hobby',
}

function Hobby() {
  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <div className={styles.cont}>
          <h1>Hobby</h1>
          <div className={styles.shadow15}></div>
          <div className={styles.shadow16}></div>
        </div>
        {/* update hobbydata in the /app/utils/hobby/content.ts file */}
        <HobbyGallery />
      </main>
    </div>
  )
}

export default Hobby