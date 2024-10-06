import React from 'react'
import styles from './sourceWidget.module.scss'
import Link from 'next/link'
import FolderIcon from '../../icons/folderIcon'
import SmallArrowIcon from '../../icons/smallArrowIcon'

interface SourceWidgetProps {
  href: string
  blueT: string
  grayT: string
  target?: string
}

function SourceWidget({href, blueT, grayT, target}: SourceWidgetProps) {
  return (
    <div className={styles.wrapper}>
      <Link href={href} target={target}>
        <div className={styles.cont}>
          <FolderIcon />
          <span className={styles.blue}>{blueT}</span>
          <span className={styles.gray}>{grayT}</span>
        </div>
        <SmallArrowIcon />
      </Link>
    </div>
  )
}

export default SourceWidget