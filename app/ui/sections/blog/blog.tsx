'use client'

import React, { useState } from 'react'
import styles from './blog.module.scss'
import LatestBlog from './latestProject/latestBlog'
import Modal from './modal/modal'
import { reversedBlogDisplayLimitFour } from '@/app/utils/blog/display'

function Blog() {
  const [modal, setModal] = useState({active: false, index: 0})

  return (
    <div className={styles.root}>
      <section className={styles.blogs}>
        <div className={styles.slides}>
          {
            reversedBlogDisplayLimitFour.map((current, i) => (
              <LatestBlog key={i} i={i} link={current.link} title={current.title} setModal={setModal} />
            ))
          }
        </div>
        <Modal modal={modal} blogs={reversedBlogDisplayLimitFour} />
      </section>
    </div>
  )
}

export default Blog