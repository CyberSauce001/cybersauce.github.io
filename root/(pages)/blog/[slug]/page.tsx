import { notFound } from 'next/navigation'
import React from 'react'
import styles from './post.module.scss'
import { getPostBySlug } from '@/app/utils/blog/actions'
import MDXContent from '@/app/ui/components/mdx-content/mdxContent'
import Link from 'next/link'
import BackIcon from '@/app/ui/icons/backIcon'
import Image from 'next/image'

async function Post({params}: {params: {slug: string}}) {
  const {slug} = params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const {metadata, content} = post
  const { title, thumbnail, date } = metadata

  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <div className={styles.cont}>
          <h1>{title}</h1>
          <span>{date}</span>
        </div>
        <div className={styles.back}>
          <Link href={'/blog/'}>
            <BackIcon />
            Back
          </Link>
        </div>
        <div className={styles.image}>
          <Image
            src={`/images/thumbnails/${thumbnail}`}
            alt={title || 'thumbnail image.'}
            layout="responsive"
            width={800}
            height={450}
            objectFit="cover"
          />
        </div>
        <section className={`prose prose-invert prose-pre:bg-neutral-800 !max-w-[800px] ${styles.section}`}>
          <MDXContent source={content}/>
        </section>
      </main>
    </div>
  )
}

export default Post