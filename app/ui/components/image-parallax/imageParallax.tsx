'use client'

import React, { useRef } from 'react'
import styles from './imageParallax.module.scss'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

function ImageParallax({ imagesArray }: { imagesArray: string[] }) {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  const sm = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const finalArray = [
    {
      src: imagesArray[0],
      y: 0,
    },
    {
      src: imagesArray[1],
      y: sm,
    },
    {
      src: imagesArray[2],
      y: md,
    },
  ]

  return (
    <div
      ref={container}
      className={styles.cont}
    >
      {finalArray.map(({src, y}, i) => (
        <motion.div
          key={i}
          style={{y}} 
          className={styles.images}
        >
          <Image 
            src={`/images/about/${src}`}
            alt='img'
            fill
          />
        </motion.div>
      ))}
    </div>
  )
}

export default ImageParallax