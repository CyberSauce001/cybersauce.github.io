'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './preloader.module.scss'

const opacity = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 0.75,
    transition: {duration: 1, delay: 0.2}
  },
}

const slideUp = {
  initial: {
    top: 0
  },
  exit: {
    top: "-100vh",
    transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}
  }
}

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten Tag", "Hallo"]

function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({width: 0, height:0});

  useEffect( () => {
    setDimension({width: window.innerWidth, height: window.innerHeight})
  }, [])

  useEffect( () => {
    if(index == words.length - 1) return;
    setTimeout( () => {
        setIndex(index + 1)
    }, index == 0 ? 1000 : 150)
  }, [index])

  return (
    <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
      {dimension.width > 0 && 
        <motion.p variants={opacity} initial="initial" animate="enter">{words[index]}</motion.p>
      }
    </motion.div>
  )
}

export default Preloader