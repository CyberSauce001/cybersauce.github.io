'use client'

import React, { useState } from 'react'
import styles from './navigation.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import LogoIcon from '../../icons/logoIcon'
import MenuIcon from '../../icons/menuIcon'
import Link from 'next/link'
import { variants, variantsMenu, variantsPerspective } from './variations'
import { links } from './links'
import XIcon from '../../icons/xIcon'

function Navigation() {
  const [active, setActive] = useState(false)

  return (
    <>
      <div 
        className={styles.nav}
      >
        <Link href={'/'} onClick={() => setActive(false)} className={styles.logo}>
          <LogoIcon className={`size-20 ${active && styles.change}`} />
        </Link>
        <motion.div 
          variants={variants}
          initial={'close'}
          animate={active === true ? 'open' : 'close'}
          className={styles.links}
        >
          <AnimatePresence mode='wait'>
            {active &&
              <nav className={styles.cont}>
                <div className={styles.body}>
                  {links.map((link, i) => (
                    <div onClick={() => setActive(false)} key={i} className={styles.cc}>
                      <motion.div
                        custom={i}
                        variants={variantsPerspective}
                        initial={'initial'}
                        animate={'animate'}
                        exit={'exit'}
                      >
                        <Link 
                          href={link.link}
                          className={styles.indie}
                        >
                          {link.title}
                        </Link>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </nav>
            }
          </AnimatePresence>
        </motion.div>
        <motion.div 
          variants={variantsMenu}
          initial={'close'}
          animate={active === true ? 'open' : 'close'}
          onClick={() => setActive(!active)}
          className={styles.menu}
        >
          { active === false ?
            <MenuIcon className='m-3'/>
          :
            <XIcon className='m-4'/>
          }
        </motion.div>
      </div>
      <div className={styles.border1}></div>
      <div className={styles.border2}></div>
    </>
  )
}

export default Navigation