import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CalendarIcon, Clock } from "lucide-react"
import styles from "./blog-post.module.css"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const { id } = params

  // This would typically come from an API or database
  const posts = {
    "future-of-ai": {
      title: "The Future of AI Development",
      date: "2023-05-15",
      readingTime: "5 min read",
      content: `
        <p>Artificial Intelligence has come a long way since its inception. From rule-based systems to machine learning algorithms that can learn from data, the field has seen tremendous growth and innovation.</p>
        
        <p>Today, we stand at the precipice of a new era in AI development. Large language models like GPT-4 have demonstrated capabilities that were once thought to be uniquely human, such as creative writing, problem-solving, and even coding.</p>
        
        <h2>Ethical Considerations</h2>
        
        <p>As AI systems become more powerful and integrated into our daily lives, ethical considerations become increasingly important. Questions about bias, fairness, transparency, and accountability need to be addressed.</p>
        
        <p>Developers have a responsibility to ensure that AI systems are designed with ethical principles in mind. This includes being aware of potential biases in training data, ensuring transparency in how AI systems make decisions, and establishing mechanisms for accountability when things go wrong.</p>
        
        <h2>Technological Advancements</h2>
        
        <p>On the technological front, we're seeing advancements in several areas:</p>
        
        <ul>
          <li>Multimodal AI systems that can process and generate different types of data (text, images, audio)</li>
          <li>Reinforcement learning from human feedback (RLHF) to align AI systems with human values</li>
          <li>Federated learning to train models across multiple devices while preserving privacy</li>
          <li>Neuromorphic computing to create more efficient AI hardware</li>
        </ul>
        
        <h2>The Road Ahead</h2>
        
        <p>The future of AI development is both exciting and challenging. As we continue to push the boundaries of what's possible, we must also be mindful of the potential risks and ensure that AI systems are developed and deployed responsibly.</p>
        
        <p>By fostering collaboration between researchers, developers, policymakers, and the public, we can work towards a future where AI benefits humanity while minimizing potential harms.</p>
      `,
    },
    "web3-revolution": {
      title: "The Web3 Revolution",
      date: "2023-04-22",
      readingTime: "7 min read",
      content: `
        <p>Web3 represents a paradigm shift in how we interact with the internet. Unlike Web2, which is dominated by centralized platforms that control user data and monetization, Web3 aims to create a more decentralized and user-centric internet.</p>
        
        <h2>Key Components of Web3</h2>
        
        <p>At its core, Web3 is built on several key technologies and concepts:</p>
        
        <ul>
          <li>Blockchain: Distributed ledgers that enable trustless transactions and record-keeping</li>
          <li>Cryptocurrencies: Digital assets that facilitate value exchange without intermediaries</li>
          <li>Smart Contracts: Self-executing code that automates agreements and transactions</li>
          <li>Decentralized Applications (dApps): Applications that run on peer-to-peer networks</li>
          <li>Non-Fungible Tokens (NFTs): Unique digital assets that represent ownership of specific items</li>
        </ul>
        
        <h2>Changing Ownership Models</h2>
        
        <p>One of the most significant aspects of Web3 is how it's changing our understanding of digital ownership. In the Web2 era, users rarely truly owned their digital assets or data. Platforms could change terms of service, restrict access, or even delete content at will.</p>
        
        <p>With Web3, ownership is cryptographically secured on the blockchain. NFTs, for example, allow creators to sell unique digital assets directly to collectors, with provable scarcity and authenticity.</p>
        
        <h2>Challenges and Opportunities</h2>
        
        <p>Despite its promise, Web3 faces several challenges:</p>
        
        <ul>
          <li>Scalability: Current blockchain networks often struggle with high transaction volumes</li>
          <li>User Experience: Web3 applications can be complex and intimidating for average users</li>
          <li>Regulatory Uncertainty: Governments worldwide are still figuring out how to approach this new paradigm</li>
          <li>Environmental Concerns: Some blockchain networks consume significant energy</li>
        </ul>
        
        <p>However, these challenges also present opportunities for innovation. Layer 2 solutions are addressing scalability, while improved interfaces are making Web3 more accessible. As the ecosystem matures, we can expect to see more user-friendly and efficient solutions emerge.</p>
      `,
    },
    "cybersecurity-tips": {
      title: "Essential Cybersecurity Tips for Developers",
      date: "2023-03-10",
      readingTime: "6 min read",
      content: `
        <p>In today's interconnected world, cybersecurity is more important than ever. As developers, we have a responsibility to ensure that the applications we build are secure and protect user data. Here are some essential cybersecurity tips that every developer should follow.</p>
        
        <h2>1. Keep Dependencies Updated</h2>
        
        <p>Outdated dependencies can contain known vulnerabilities that attackers can exploit. Regularly update your dependencies and use tools like npm audit, Dependabot, or Snyk to automatically identify and fix vulnerable dependencies.</p>
        
        <h2>2. Implement Proper Authentication</h2>
        
        <p>Authentication is the first line of defense for your application. Implement strong password policies, multi-factor authentication, and consider using OAuth or OpenID Connect for federated authentication.</p>
        
        <h2>3. Validate and Sanitize Input</h2>
        
        <p>Never trust user input. Always validate and sanitize input on both the client and server sides to prevent injection attacks like SQL injection, XSS, and CSRF.</p>
        
        <h2>4. Use HTTPS Everywhere</h2>
        
        <p>HTTPS encrypts data in transit, protecting it from eavesdropping and man-in-the-middle attacks. Always use HTTPS for your applications, even during development.</p>
        
        <h2>5. Implement Proper Error Handling</h2>
        
        <p>Detailed error messages can reveal sensitive information about your application's architecture. Implement proper error handling that provides useful information to users without exposing internal details.</p>
        
        <h2>6. Follow the Principle of Least Privilege</h2>
        
        <p>Only grant the minimum permissions necessary for a user or system to perform its function. This limits the potential damage if an account is compromised.</p>
        
        <h2>7. Secure Your API</h2>
        
        <p>Implement rate limiting, use API keys or tokens for authentication, and validate all API requests to prevent abuse and unauthorized access.</p>
        
        <h2>8. Keep Security in Mind from the Start</h2>
        
        <p>Security should not be an afterthought. Incorporate security considerations into your design and development process from the beginning.</p>
        
        <p>By following these tips, you can significantly improve the security of your applications and protect your users' data. Remember, security is an ongoing process, not a one-time task.</p>
      `,
    },
    "react-performance": {
      title: "Optimizing React Performance",
      date: "2023-02-18",
      readingTime: "8 min read",
      content: `
        <p>React is known for its virtual DOM and efficient rendering, but as applications grow in complexity, performance can become an issue. Here are some advanced techniques to optimize the performance of your React applications.</p>
        
        <h2>1. Use React.memo for Component Memoization</h2>
        
        <p>React.memo is a higher-order component that memoizes the result of a component render. It performs a shallow comparison of props and only re-renders if the props have changed.</p>
        
        <pre><code>
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});
        </code></pre>
        
        <h2>2. Optimize useEffect Dependencies</h2>
        
        <p>Be careful with the dependency array in useEffect. Including unnecessary dependencies can cause the effect to run more often than needed.</p>
        
        <pre><code>
useEffect(() => {
  // This effect will only run when count changes
}, [count]);
        </code></pre>
        
        <h2>3. Use useMemo and useCallback</h2>
        
        <p>useMemo memoizes the result of a computation, while useCallback memoizes a function. Both can prevent unnecessary recalculations or function recreations.</p>
        
        <pre><code>
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
        </code></pre>
        
        <h2>4. Virtualize Long Lists</h2>
        
        <p>For long lists, use virtualization libraries like react-window or react-virtualized to only render items that are currently visible in the viewport.</p>
        
        <h2>5. Code Splitting with React.lazy</h2>
        
        <p>Split your code into smaller chunks that are loaded on demand using React.lazy and Suspense.</p>
        
        <pre><code>
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function MyComponent() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
}
        </code></pre>
        
        <h2>6. Use Production Builds</h2>
        
        <p>Always use production builds for deployment. Development builds include extra warnings and development tools that slow down your application.</p>
        
        <h2>7. Avoid Inline Functions in Renders</h2>
        
        <p>Inline functions in renders create new function instances on each render, which can lead to unnecessary re-renders of child components.</p>
        
        <h2>8. Profile and Measure</h2>
        
        <p>Use the React DevTools Profiler to identify performance bottlenecks in your application. Measure the impact of your optimizations to ensure they're actually improving performance.</p>
        
        <p>By applying these techniques, you can significantly improve the performance of your React applications, providing a better user experience and reducing resource usage.</p>
      `,
    },
    "future-treble-winners": {
      title: "FC Barcelona is the best team in Europe right now",
      date: "2025-04-12",
      readingTime: "5 min read",
      content: `
    <p>FC Barcelona has been on an incredible journey this season, showing why they are currently the best team in Europe. Under the guidance of Hansi Flick, the team has transformed their playing style and mentality, resulting in a series of impressive performances against top European opposition and and casually delivering brutal thumpings to their banter club rivals Real Madrid every now and then.</p>
    
    <h2>The Return to Tiki-Taka</h2>
    
    <p>Barcelona has returned to their roots with a modern interpretation of the tiki-taka style that made them famous. Their possession-based football, combined with quick transitions and high pressing, has made them nearly impossible to defend against. The statistics speak for themselves: over 65% average possession across all competitions and a passing accuracy exceeding 90%.</p>
    
    <h2>Young Talent Flourishing</h2>
    
    <p>The integration of La Masia graduates alongside strategic signings has created a perfect blend of youth and experience. Lamine Yamal, Pedri, and Gavi have shown maturity beyond their years, while veterans provide the leadership needed in crucial moments.</p>
    
    <p>The team's attacking trio of Lamine Yamal, Raphinha, and Robert Lewandowski has been particularly impressive, contributing to over 80 goals across all competitions this season. Their fluid movement and understanding have torn apart even the most organized defenses in Europe, bringing back nostalgia to top flight spanish football since Lionel Messi's departure and the glorious days of the Messi, Suarez, and Neymar era </p>
    
    <h2>Defensive Solidity</h2>
    
    <p>While Barcelona has always been known for their attacking prowess, their defensive improvement this season has been remarkable. They've conceded the fewest goals in La Liga and have kept clean sheets in crucial Champions League matches.</p>
    
    <h2>On Track for the Treble</h2>
    
    <p>With their current form, Barcelona is well-positioned to win the treble this season. They sit comfortably at the top of La Liga, have reached the Copa del Rey final, and are among the favorites for the Champions League.</p>
    
    <p>Their comprehensive victories against Premier League and Serie A opposition in the Champions League knockout stages have sent a clear message to the rest of Europe: Barcelona is back at the pinnacle of European football.</p>
    
    <p>If they maintain this level of performance, we could be witnessing the beginning of another golden era for FC Barcelona.</p>
  `,
    },
    "superbowl26-champs": {
      title: "Minnesota Vikings",
      date: "2025-04-12",
      readingTime: "4 min read",
      content: `
    <p>The Minnesota Vikings have assembled what might be the most exciting offensive trio in the NFL. With JJ McCarthy, Justin Jefferson, and Jordan Addison, the Vikings are poised to become a dominant force in the league for years to come.</p>
    
    <h2>JJ McCarthy: The Future is Now</h2>
    
    <p>Selected in the first round of the NFL Draft, JJ McCarthy brings a winning mentality from his college days at Michigan. His combination of arm talent, mobility, and decision-making ability makes him the perfect modern NFL quarterback. McCarthy's leadership qualities and poise under pressure suggest he has all the tools to become a franchise quarterback.</p>
    
    <h2>Justin Jefferson: The Best Receiver in Football</h2>
    
    <p>Justin Jefferson has established himself as arguably the best wide receiver in the NFL. His route-running precision, exceptional hands, and ability to create separation make him a nightmare for opposing defenses. Jefferson's "Griddy" celebration has become iconic, and for good reason - he finds the end zone with remarkable consistency.</p>
    
    <p>With over 5,000 receiving yards in his first three seasons, Jefferson is on a historic pace that could rewrite the NFL record books if he maintains this level of production.</p>
    
    <h2>Jordan Addison: The Perfect Complement</h2>
    
    <p>Jordan Addison has proven to be the ideal complement to Jefferson. His speed and ability to stretch the field prevent defenses from double-teaming Jefferson consistently. Addison's route-running ability and hands have made him one of the most promising young receivers in the league.</p>
    
    <h2>Championship Potential</h2>
    
    <p>With this offensive firepower, complemented by a revamped defense under their new defensive coordinator, the Vikings have legitimate Super Bowl aspirations. The NFC North is there for the taking, and this Vikings team has the talent to go all the way.</p>
    
    <p>The combination of McCarthy's arm, Jefferson's elite skills, and Addison's complementary talents gives Minnesota one of the most dangerous offenses in the NFL. Vikings fans have every reason to be excited about the future, as this core could bring the franchise its first Super Bowl championship. A man can only dream.</p>
  `,
    },
  }

  const post = posts[id as keyof typeof posts]

  if (!post) {
    notFound()
  }

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
