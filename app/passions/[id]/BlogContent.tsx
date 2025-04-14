"use client"

import Link from "next/link"
import { ArrowLeft, CalendarIcon, Clock } from "lucide-react"
import styles from "./blog-post.module.css"

interface BlogContentProps {
  post: {
    title: string
    date: string
    readingTime: string
    content: string
  }
}

export default function BlogContent({ post }: BlogContentProps) {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <Link href="/passions" className="inline-flex items-center gap-2 text-primary hover:underline">
        <ArrowLeft size={16} /> Back to passions
      </Link>

      <article>
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 glitch" data-text={post.title}>
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <CalendarIcon size={14} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>

        <div
          className={`prose prose-invert max-w-none prose-headings:text-primary prose-a:text-primary ${styles["blog-content"]}`}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  )
} 