import React from 'react'
import styles from './blog.module.scss'
// import { blogDisplay } from '@/app/utils/blog/display'
import BlogCard from '@/app/ui/components/blog-card/blogCard'
import { getPost } from '@/app/utils/blog/actions'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
}

async function Blog() {
  const post = await getPost()

  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <div className={styles.cont}>
          <h1>Blog</h1>
          <div className={styles.shadow11}></div>
          <div className={styles.shadow12}></div>
        </div>
        <section className={styles.blogs}>
          {post.map((post, i) => (
            <div key={i} className={styles.post}>
              <BlogCard {...post} />
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export default Blog