export interface blogType {
  title?: string
  date?: string
  description?: string
  tag?: string
  thumbnail?: string
  slug: string
}

export interface blogTypeModal {
  title: string
  thumbnail: string
  color: string
  link: string
}

/*
  Title: match the title with the metadata in the .mdx post in the /content/post folder
  Images: /public/images/thumbnails
  Color: custom
  Link: match the link with the name of the post in the /content/post folder
*/

export const blogDisplay = [
  {
    title: "",
    thumbnail: "",
    color: "",
    link: "",
  },
]

export const reversedBlogDisplay = blogDisplay.reverse()

export const reversedBlogDisplayLimitFour = reversedBlogDisplay.slice(0, 4)