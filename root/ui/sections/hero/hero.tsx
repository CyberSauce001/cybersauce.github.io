import React from 'react'
import styles from './hero.module.scss'
import PlusIcon from '../../icons/plusIcon'
import Image from 'next/image'
import CyberMainIcon from '../../icons/cyberMainIcon'

function Hero() {
  return (
    <div className={styles.root}>
      <section className={styles.hero}>
        <div className={styles.heading}>
          <div className={styles.h1}>
            <h1>CyberSauce</h1>
            <div className={styles.shadow1}></div>
            <div className={styles.shadow2}></div>
          </div>
          <div className={styles.p}>
            <p>Cyber security expert</p>
            <div className={styles.shadow3}></div>
          </div>
        </div>
        <div className={styles.social}>
          <div className={styles.left}>
            <div className={styles.cyber}>
              <CyberMainIcon className={styles.cimg} />
              <div className={styles.shadow6}></div>
            </div>
            <div className={styles.cont}>
              <div>
                <p className={styles.span}>4</p>
                <p>Years of</p>
                <p>Experience</p>
                <PlusIcon />
              </div>
              <div>
                <p className={styles.span}>6</p>
                <p>Official</p>
                <p>Certifications</p>
                <PlusIcon />
              </div>
              <div>
                <p className={styles.span}>3</p>
                <p>Successful</p>
                <p>CTFs</p>
                <PlusIcon />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.image}>
              <Image
                src={'/images/home/main.png'}
                alt="Main page photo."
                width={928}
                height={1114}
              />
            </div>
            <div className={styles.shadow17}></div>
            <div className={styles.shadow18}></div>
            <div className={styles.shadow19}></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero