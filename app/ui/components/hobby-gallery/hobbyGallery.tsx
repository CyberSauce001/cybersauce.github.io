'use client'

import React, { useState } from 'react'
import styles from './hobbyGallery.module.scss'
import { hobbyData } from '@/app/utils/hobby/content'

function HobbyGallery() {
  const [model, setModel] = useState(false)
  const [temp, setTemp] = useState('')
  const [num, setNum] = useState(0)

  const handleClickOpen = (src: string, num: number) => {
    setModel(true)
    setTemp(src)
    setNum(num)
  }

  const handleClickClose = () => {
    setModel(false)
  }

  return (
    <section className={styles.gallery}>
      <div className={model ? `${styles.model} ${styles.opne}` : `${styles.model}` } onClick={() => handleClickClose()}>
        <img src={`/images/hobby/${temp}`}/>
        <p>{hobbyData[num]?.caption || 'No caption available'}</p>
      </div>
      {hobbyData.map((data, i) => (
        <div key={i} className={styles.image} onClick={() => handleClickOpen(data.src, i)}>
          <img
            src={`/images/hobby/${data.src}`}
            alt={data.alt}
          />
        </div>
      ))}
    </section>
  )
}

export default HobbyGallery