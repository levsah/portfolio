"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const projects = [
    {
      id: "Olympinomics",
      title: "Olympinomics",
      description: "Deep dive into how a Nation's GDP, Population, Geographical location influences their medal counts at the Olympics.",
      image: "https://static.vecteezy.com/system/resources/previews/022/792/120/non_2x/olympic-games-official-symbol-logo-white-abstract-design-with-black-background-free-vector.jpg",
      technologies: ["Pandas", "Sklearn", "Matplotlib"],
      category: "sports",
    },
    {
      id: "NbaPlayoffs",
      title: "NBA Playoffs Analysis",
      description: "Interactive visualization and analysis of NBA playoff performance and statistics.",
      image: "https://lh3.googleusercontent.com/HtXVFZvyWEWNN9oRf8nNxatNTg6VR96oolu2TqDJtVILKUm6vsGe3MbBhQgi7ogCd_xVNYM1iOGt=w1440-ns-nd-rj",
      technologies: ["React", "D3.js", "TensorFlow.js"],
      category: "sports",
    },
    {
      id: "stone-arch",
      title: "Liquidty Sentimental Analysis by Weekday",
      description: "Determining Liquidity as a credible metric for placing Optimal-Timed Trades by Weekday",
      image: "https://t3.ftcdn.net/jpg/10/82/96/84/360_F_1082968430_Cqf68BKUqP1Wg6ZqGZO89kJmuMvdpUbN.jpg",
      technologies: ["Python", "Sklearn", "TensorFlow"],
      category: "finance",
    },
    {
      id: "datamining-algoresearch",
      title: "Theoretical Derivation and Implementation Analysis of Data-Mining Algorithms",
      description: "Naive-Bayes, Decision Trees, Random Forest, Logistic Regression, and K-Means Clustering.",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*g3Ht6gKYF_1pUSqXFUkBAA.jpeg",
      technologies: ["Python", "Sklearn"],
      category: "ai/ml",
    },
  ]

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "sports", name: "Sports Analytics" },
    { id: "finance", name: "Finance and Trading" },
    { id: "ai/ml", name: "Data Theory" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="space-y-8">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">projects.lev</div>
        </div>
        <div className="terminal-content">
          <p className="mb-4">
            <span className="text-primary">$</span> Exhibiting all projects. Select category to filter results. More to come soon 👀
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              activeFilter === category.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  )
}
