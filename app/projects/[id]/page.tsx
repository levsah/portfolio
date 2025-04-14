"use client"

import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>()
  const projects = {
    Olympinomics: {
      title: "Olympinomics",
      description:
        "Deep dive into how a Nation's GDP, Population, Geographical location influences their medal counts at the Olympics.",
      image:
        "https://static.vecteezy.com/system/resources/previews/022/792/120/non_2x/olympic-games-official-symbol-logo-white-abstract-design-with-black-background-free-vector.jpg",
      technologies: ["Pandas", "Sklearn", "Matplotlib"],
      category: "ML",
      github: "https://github.com/levsah/Olympinomics/tree/master",
      deliverable: "https://drive.google.com/file/d/11OaaYBILkGPkYjmBLTOeFvXjPDNghfCr/view?usp=sharing",
      longDescription:
        "This project explores the intersection of global economics and athletic performance by analyzing how a country's socioeconomic and geographic attributes influence its Olympic medal success. Using data from multiple Olympic Games alongside GDP and population statistics, we evaluate whether economic development or regional location better predicts Olympic outcomes. Our analysis reveals a strong correlation between GDP growth and medal counts, while regional geography shows no significant effect. These findings suggest that financial capacity and national investment are key drivers behind Olympic performance.",
    },
    NbaPlayoffs: {
      title: "NBA Playoffs Analysis",
      description: "Interactive visualization and analysis of NBA playoff performance and statistics.",
      image:
        "https://lh3.googleusercontent.com/HtXVFZvyWEWNN9oRf8nNxatNTg6VR96oolu2TqDJtVILKUm6vsGe3MbBhQgi7ogCd_xVNYM1iOGt=w1440-ns-nd-rj",
      technologies: ["Github Pages", "Svelte", "D3.js"],
      category: "Data Visualization",
      github: "https://github.com/levsah/NBA-2024-Playoffs-Analysis",
      deliverable: "https://sleng1.github.io/final_project/",
      longDescription:
        "This project provides an in-depth analysis of NBA playoff performance, focusing on key statistics and player metrics that contribute to team success. Using interactive visualizations built with D3.js and Svelte, the application allows users to explore various aspects of playoff basketball, including scoring efficiency, defensive impact, and clutch performance. The analysis reveals interesting patterns in how successful playoff teams are constructed and which statistical categories most strongly correlate with postseason advancement. This tool is valuable for basketball analysts, fans, and fantasy basketball players looking to gain deeper insights into the factors that determine playoff success in the NBA.",
    },
    "stone-arch": {
      title: "Liquidity Sentimental Analysis by Weekday",
      description: "Analyzing market sentiment and liquidity patterns in financial markets.",
      image: "https://t3.ftcdn.net/jpg/10/82/96/84/360_F_1082968430_Cqf68BKUqP1Wg6ZqGZO89kJmuMvdpUbN.jpg",
      technologies: ["Python", "Sklearn", "TensorFlow"],
      category: "Data Science",
      deliverable: "https://docs.google.com/document/d/137O_s4ALnpP-1-V-U_R7pKmAtVbvqqLwlrZMuW6YACU/edit?usp=sharing",
      longDescription:
        "The Liquidity Sentiment Analysis project applies machine learning techniques to analyze market sentiment and liquidity patterns in financial markets. By processing vast amounts of financial news, social media data, and market indicators, the system identifies correlations between public sentiment and market liquidity. This analysis helps traders and investors anticipate market movements and liquidity crunches before they occur. The project incorporates both traditional statistical methods and cutting-edge deep learning models to provide comprehensive insights into market dynamics, offering a valuable tool for risk management and trading strategy development.",
    },

    "datamining-algoresearch": {
      title: "Theoretical Derivation and Implementation Analysis of Data-Mining Algorithms",
      description:
        "Investigation various model performances and accuracies featuring Naive-Bayes, Decision Trees, Random Forest, Logistic Regression, and K-Means Clustering.",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*g3Ht6gKYF_1pUSqXFUkBAA.jpeg",
      technologies: ["Python", "Sklearn"],
      category: "Data Theory",
      deliverable: "https://drive.google.com/file/d/1LkyjUB1_D6Nc6FpUF8s-3jytElXpPdb2/view?usp=sharing",
      longDescription:
        "A comprehensive study for exploring data mining algorithms. Thoroghly derived the mathematical foundations of each modeling technique, supported the calculations with code, and explained the relationships between the two. The study features Naive-Bayes, Decision Trees, Random Forest, Logistic Regression, and K-Means Clustering.",
    },
  }

  // Normalize the ID for case-insensitive matching
  const normalizedId = id as string
  const project = projects[normalizedId as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <Link href="/projects" className="inline-flex items-center gap-2 text-primary hover:underline">
        <ArrowLeft size={16} /> Back to projects
      </Link>

      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">project_details.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-2">
            <span className="text-primary">$</span> cat {normalizedId}.json
          </p>
          <div className="mb-4">
            <p>
              <span className="text-primary">title:</span> {project.title}
            </p>
            <p>
              <span className="text-primary">category:</span> {project.category}
            </p>
            <p className="flex flex-wrap gap-2 mt-2">
              <span className="text-primary">stack:</span>
              {project.technologies.map((tech, index) => (
                <span key={index} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">
                  {tech}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-60 sm:h-80 md:h-96 lg:h-[500px] rounded-md overflow-hidden bg-black">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-contain"
          unoptimized={project.image.startsWith("http")}
        />
      </div>

      <div className="flex flex-wrap gap-4">
        {/* Only show GitHub link if the project has a github property */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-md transition-colors"
          >
            <Github size={16} /> View on GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md transition-colors border border-primary/30"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
        {project.deliverable && (
          <a
            href={project.deliverable}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md transition-colors border border-primary/30"
          >
            <ExternalLink size={16} /> View Deliverable
          </a>
        )}
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
        <p className="text-muted-foreground">{project.longDescription}</p>
      </div>
    </div>
  )
}
