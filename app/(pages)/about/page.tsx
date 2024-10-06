import React from 'react'
import styles from './about.module.scss'
import Subheading from '@/app/ui/components/subheading/subheading'
import Paragraph from '@/app/ui/components/paragraph/paragraph'
import ImageParallax from '@/app/ui/components/image-parallax/imageParallax'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About',
}

function About() {
  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.cont}>
            <h1>About</h1>
            <div className={styles.shadow9}></div>
            <div className={styles.shadow10}></div>
          </div>
          <div className={styles.img}>
            <Image 
              src={'/images/about/self/main.png'}
              alt={'The main about image.'}
              width={928}
              height={1114}
            />
            <Image 
              src={'/images/about/self/bg.png'}
              alt={'Background image.'}
              width={768}
              height={407}
              className={styles.bg}
            />
            <div className={styles.shadow21}></div>
            <div className={styles.shadow22}></div>
            <div className={styles.shadow23}></div>
            <div className={styles.cont}>
              <span>C</span>
              <span>y</span>
              <span>b</span>
              <span>e</span>
              <span>r</span>
              <span>S</span>
              <span>a</span>
              <span>u</span>
              <span>c</span>
              <span>e</span>
            </div>
          </div>
        </section>
        <article className={styles.article}>
          <Subheading>Subheading</Subheading>
          <Paragraph>
            Here goes paragraph.
          </Paragraph>
        </article>
        <section>
          {/* 
            images should be in the /public/images/about folder

            UNCOMMENT the ImageParallax component when ready for production
          */}

          {/* <ImageParallax imagesArray={['test1.png', 'test2.png', 'test3.png']}/> */}
        </section>
      </main>
      <div className={styles.end}></div>
    </div>
  )
}

export default About