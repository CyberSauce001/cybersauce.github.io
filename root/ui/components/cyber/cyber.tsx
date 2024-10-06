import React from 'react'
import styles from './cyber.module.scss'
import CyberLeftIcon from '../../icons/cyberLeftIcon'
import CyberRightIcon from '../../icons/cyberRightIcon'

function Cyber() {
  return (
    <div className={styles.root}>
      <div className={styles.cyber}>
        <div className={styles.one}>
          <CyberLeftIcon className={styles.left}/>
          <div className={styles.shadow7}></div>
        </div>
        <div className={styles.two}>
          <CyberRightIcon className={styles.right}/>
          <div className={styles.shadow8}></div>
        </div>
      </div>
    </div>
  )
}

export default Cyber