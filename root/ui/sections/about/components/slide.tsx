'use client'

import CircleIcon from '@/app/ui/icons/circleIcon';
import HexagonIcon from '@/app/ui/icons/hexagonIcon';
import SquareIcon from '@/app/ui/icons/squareIcon';
import { useTransform, motion } from 'framer-motion';
import styles from './slide.module.scss'
import React, { ReactNode } from 'react'

export const Slide = (props: any) => {
  const direction = props.direction === 'left' ? -1 : 1;
  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])

  return (
    <motion.div style={{x: translateX, left: props.left}} className={styles.slide}>
      <Phrase src={props.src}>
        {props.text}
      </Phrase>
      <Phrase src={props.src}>
        {props.text}
      </Phrase>
      <Phrase src={props.src}>
        {props.text}
      </Phrase>
      <Phrase src={props.src}>
        {props.text}
      </Phrase>
    </motion.div>
  )
}

const Phrase = ({src, children}: {src: string, children: ReactNode}) => {
  return (
    <div className={styles.phrase}>
      <h2 className={styles.text}>{children}</h2>
      <span className={styles.span}>
          {src === 'circle' && 
            <CircleIcon  className={styles.circle}/>
          }
          {src === 'square' && 
            <SquareIcon  className={styles.square}/>
          }
          {src === 'hexagon' && 
            <HexagonIcon  className={styles.hexagon}/>
          }
      </span>
    </div>
  )
}

