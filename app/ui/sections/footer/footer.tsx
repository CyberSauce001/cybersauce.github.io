import React from 'react'
import styles from './footer.module.scss'
import Link from 'next/link'
import DiscordIcon from '../../icons/discordIcon'
import InstagramIcon from '../../icons/instagramIcon'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.heading}>
        <h2>Geti in touch</h2>
      </div>
      <div className={styles.links}>
        <div className={styles.cont}>
          <Link href={'mailto:name@example.com'} className={styles.link1}>name@example.com</Link>
          <Link href={'https://discord.com'} target='_blank' className={styles.link2}>
            <DiscordIcon />
            @ksauce01
          </Link>
          <Link href={'https://instagram.com'} target='_blank' className={styles.link3}>
          <InstagramIcon />
            @ksauce001
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer