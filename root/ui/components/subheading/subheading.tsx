import React, { ReactNode } from 'react'
import styles from './subheading.module.scss'

function Subheading({ children }: { children: ReactNode }) {
  return (
    <h2 className={styles.subheading}>
      {children}
    </h2>
  )
}

export default Subheading