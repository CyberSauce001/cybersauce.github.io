'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './about.module.scss'
import Link from 'next/link'
import { Slide } from './components/slide'
import { useScroll } from 'framer-motion';
import gsap from 'gsap'
import { motion } from 'framer-motion'
import { scaleAnimationPopUp } from '@/app/utils/animations'

function About() {
  const [active, setActive] = useState(false)

  const container = useRef(null);
  const target = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  let xMoveCursor = useRef<any>();
  let yMoveCursor = useRef<any>();

  useEffect( () => {
    xMoveCursor.current = gsap.quickTo(target.current, "left", {duration: 0.5, ease: "power3"})
    yMoveCursor.current = gsap.quickTo(target.current, "top", {duration: 0.5, ease: "power3"})
  }, [])

  const moveItems = (x: any, y: any) => {
    xMoveCursor.current(x)
    yMoveCursor.current(y)
  }

  return (
    <>
      <section
        onMouseMove={(e) => {moveItems(e.clientX, e.clientY)}}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        className={styles.about}
      >
        <div ref={container} className="overflow-hidden">
          <Slide src={'circle'} text='Hacker' direction={'left'} left={"-10%"} progress={scrollYProgress}/>
          <Slide src={'square'} text='Forensics' direction={'right'} left={"-25%"} progress={scrollYProgress}/>
          <Slide src={'hexagon'} text='Pentesting' direction={'left'}  left={"-65%"} progress={scrollYProgress}/>
        </div>
        <Link href={'/about'} className={styles.shadow4}></Link>
        <Link href={'/about'} className={styles.shadow5}></Link>
      </section>
      <motion.div 
        variants={scaleAnimationPopUp}
        initial={'initial'}
        animate={active ? 'open' : 'close'}
        ref={target}
        className={styles.target}
      >
        About
      </motion.div>
    </>
  )
}

export default About