import React from 'react'
import styles from './latestProject.module.scss'
import CircleDimmIcon from '@/app/ui/icons/circleDimmIcon'
import Link from 'next/link'

interface importProps {
  i: number
  title: string
  setModal: any
  link: string
}

function LatestBlog({i, title, setModal, link}: importProps) {
  return (
    <Link href={`/blog/${link}`} className={styles.cont} onMouseEnter={() => setModal({active: true, index: i})} onMouseLeave={() => setModal({active: false, index: i})}>
      <h2>{title}</h2>
      <CircleDimmIcon />
    </Link>
  )
}

export default LatestBlog