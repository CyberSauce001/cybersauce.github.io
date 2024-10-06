import path from "path"
import fs from "fs"
import matter from "gray-matter"

interface Post {
  metadata: PostMetadata
  content: string
}

interface PostMetadata {
  title?: string
  date?: string
  description?: string
  tag?: string
  thumbnail?: string
  color?: string
  link?: string
  slug: string
}

// default content route
const rootDir = path.join(process.cwd(), 'content', 'post')

// get post as a website in [slug]
export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    const filePath = path.join(rootDir, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
  
    const {data, content} = matter(fileContent)
  
    return {metadata: {...data, slug}, content}
  } catch (err) {
    return null
  }
}

// get posts for display
export const getPost = async (limit?: number): Promise<PostMetadata[]> => {
  const files = fs.readdirSync(rootDir);
  const posts = files.map((file) => getPostMetadata(file));

  // if there is a limit, return just the number of posts that are the limit
  if (limit) {
    return posts.splice(0, limit)
  }

  return posts;
}

// metadata about posts in --- mdx ---
const getPostMetadata = (filepath: string): PostMetadata => {
  const slug = filepath.replace(/\.mdx/, '')
  
  const filePath = path.join(rootDir, filepath)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  
  const {data} = matter(fileContent)

  return {...data, slug}
}