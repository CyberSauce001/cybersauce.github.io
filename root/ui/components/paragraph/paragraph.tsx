import React, { ReactNode } from 'react'
import styles from './paragraph.module.scss'

function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p className={styles.paragraph}>
      {children}
    </p>
  )
}

export default Paragraph