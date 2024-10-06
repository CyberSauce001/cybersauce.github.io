'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './resources.module.scss'
import Column from './column/column'
import { useScroll, useTransform } from 'framer-motion';
import { images } from '@/app/utils/resources/images'
import CircleDarkIcon from '../../icons/circleDarkIcon';
import Link from 'next/link';
import gsap from 'gsap';
import { scaleAnimationPopUp } from '@/app/utils/animations';
import { motion } from 'framer-motion';

function Resources() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })

  const { height } = dimension;

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])
  
  useEffect( () => {
    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  const inTarget = useRef(null)
  const [active, setActive] = useState(false)

  let xMoveCursor = useRef<any>();
  let yMoveCursor = useRef<any>();

  useEffect( () => {
    xMoveCursor.current = gsap.quickTo(inTarget.current, "left", {duration: 0.5, ease: "power3"})
    yMoveCursor.current = gsap.quickTo(inTarget.current, "top", {duration: 0.5, ease: "power3"})
  }, [])

  const moveItems = (x: any, y: any) => {
    xMoveCursor.current(x)
    yMoveCursor.current(y)
  }

  return (
    <section className={styles.main}>
      <Link 
        onMouseMove={(e) => {moveItems(e.clientX, e.clientY)}}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        href={'/resources'} 
        ref={gallery} 
        className={styles.gallery}
      >
        <Column images={[images[0], images[1], images[2]]} y={y}/>
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} y={y3}/>
        <Column images={[images[9], images[10], images[11]]} y={y4}/>
        <div className={styles.indicador}>
          <CircleDarkIcon />
        </div>
        <div className={styles.mask}>Resouces</div>
      </Link>
      <motion.div 
        variants={scaleAnimationPopUp}
        initial={'initial'}
        animate={active ? 'open' : 'close'}
        ref={inTarget}
        className={styles.target}
      >
        SRCs
      </motion.div>
    </section>
  )
}

export default Resources