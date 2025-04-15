import ClientBlogPost from "./ClientBlogPost"

interface BlogPostProps {
  post: {
    title: string
    date: string
    readingTime: string
    content: string
  }
}

export default function BlogPost({ post }: BlogPostProps) {
  return <ClientBlogPost post={post} />
} 