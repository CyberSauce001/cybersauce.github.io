import { blogType } from '@/app/utils/blog/display'
import Image from 'next/image'
import React from 'react'
import styles from './blogCard.module.scss'
import Link from 'next/link'

function BlogCard({title, date, description, tag, thumbnail, slug}: blogType) {
  return (
    <div className={styles.wrapper}>
      <Link href={`/blog/${slug}`} className={styles.link}>
        <div className={styles.image}>
          <Image
            src={`/images/thumbnails/${thumbnail}`}
            alt={`${title} thumbnail image.`}
            fill
          />
          <span className={styles.tag}>{tag}</span>
        </div>
        <div className={styles.cont}>
          <h2>{title}</h2>
          <span>{date}</span>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  )
}

export default BlogCard