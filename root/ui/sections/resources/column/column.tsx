import React from 'react'
import { motion } from 'framer-motion'
import styles from './column.module.scss'
import Image from 'next/image'

interface importProps {
  images: string[]
  y: any
}

function Column({images, y}: importProps) {
  return (
    <motion.div 
      className={styles.column}
      style={{y}}
      >
      {
        images.map((src: string, i: number) => {
          return <div key={i} className={styles.imageContainer}>
            <Image 
              src={`/images/resources/${src}`}
              alt='image'
              fill
            />
          </div>
        })
      }
    </motion.div>
  )
}

export default Column