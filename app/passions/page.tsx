import { BlogCard } from "@/components/blog-card"

export default function BlogPage() {
  const posts = [
    {
      id: "future-treble-winners",
      title: "FC Barcelona",
      excerpt: "Why Hansi Flick's Next-Gen Barcelona Squad will dominate for the next decade.",
      date: "2025-04-12",
      readingTime: "5 min read",
    },
    {
      id: "superbowl26-champs",
      title: "Minnesota Vikings",
      excerpt: "JJ McCarthy. Justin Jefferson. Jordan Addison. Need I say more?",
      date: "2025-04-12",
      readingTime: "4 min read",
    },
    {
      id: "cybersecurity-tips",
      title: "Essential Cybersecurity Tips for Developers",
      excerpt: "Practical security measures every developer should implement to protect their applications.",
      date: "2023-03-10",
      readingTime: "6 min read",
    },
    {
      id: "react-performance",
      title: "Optimizing React Performance",
      excerpt: "Advanced techniques to improve the performance of your React applications.",
      date: "2023-02-18",
      readingTime: "8 min read",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">my_interests.ls</div>
        </div>
        <div className="terminal-content">
          <p className="mb-4">
            <span className="text-primary">$</span> ls -fav /interests
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  )
}
