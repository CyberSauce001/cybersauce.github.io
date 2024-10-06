import React, { useEffect, useRef } from 'react'
import styles from './modal.module.scss'
import Image from 'next/image'
import { blogTypeModal } from '@/app/utils/blog/display'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { scaleAnimationPopUp } from '@/app/utils/animations'

interface importProps {
  modal: any
  blogs: blogTypeModal[]
}

function Modal({modal, blogs}: importProps) {
  const {active, index} = modal
  const targets = useRef(null)
  const cursor = useRef(null)

  useEffect(() => {
    const moveContainerX = gsap.quickTo(targets.current, 'left', {duration: 0.8, ease: 'power3'})
    const moveContainerY = gsap.quickTo(targets.current, 'top', {duration: 0.8, ease: 'power3'})
    
    const moveCursorX = gsap.quickTo(cursor.current, 'left', {duration: 0.45, ease: 'power2'})
    const moveCursorY = gsap.quickTo(cursor.current, 'top', {duration: 0.45, ease: 'power2'})

    window.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e
      moveContainerX(clientX)
      moveContainerY(clientY)

      moveCursorX(clientX)
      moveCursorY(clientY)
    })
  }, [])

  return (
    <>
      <motion.div 
        variants={scaleAnimationPopUp}
        initial={'initial'}
        animate={active ? 'open' : 'close'}
        ref={targets}
        className={styles.cont}
      >
        <div style={{top: index * -100 + '%'}} className={styles.slider}>
          {
            blogs.map((blog, i) => (
              <div key={i} style={{backgroundColor: blog.color}} className={styles.modal}>
                <Image
                  src={`/images/thumbnails/${blog.thumbnail}`}
                  alt={`${blog.title} blog image.`}
                  width={300}
                  height={0}
                />
              </div>
            ))
          }
        </div>
      </motion.div>
      <motion.div 
        variants={scaleAnimationPopUp}
        initial={'initial'}
        animate={active ? 'open' : 'close'}
        ref={cursor}
        className={styles.target}
      >
        Blog
      </motion.div>
    </>
  )
}

export default Modal