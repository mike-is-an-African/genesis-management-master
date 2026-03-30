"use client"

import React from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

interface Article {
  title: string
  description: string
  image: string
  category: string
  link: string
}

const articles: Article[] = [
  {
    title: "Navigating Market Shifts with Data-Driven Strategy",
    description: "How Genesis helped a Fortune 500 financial services company identify emerging market trends and adjust their investment strategy to achieve a 32% increase in returns.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Financial Services",
    link: "/case-studies/market-shifts",
  },
  {
    title: "Supply Chain Transformation in Post-Pandemic Markets",
    description: "Genesis Management Consultancy's approach to rebuilding resilient supply chains that can withstand global disruptions while maintaining efficiency and cost-effectiveness.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    category: "Supply Chain",
    link: "/case-studies/supply-chain",
  },
  {
    title: "Sustainable Business Practices That Drive Growth",
    description: "How our ESG advisory services helped a manufacturing client reduce carbon emissions by 45% while increasing operational efficiency and meeting stringent regulatory requirements.",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Sustainability",
    link: "/case-studies/sustainable-growth",
  },
]

export default function AlternatingArticles() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-playfair tracking-tight mb-6 text-foreground relative">
            <span className="relative z-10">
              Case Studies 
              <div className="absolute -bottom-1 left-0 w-1/4 h-1 bg-accent/60"></div>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl border-l-2 border-accent/40 pl-6">
            Learn how Genesis Management Consultancy has helped organizations across industries navigate complex challenges, identify opportunities, and achieve extraordinary results.
          </p>
        </div>

        <div className="space-y-28">
          {articles.map((article, index) => (
            <ArticleItem key={index} article={article} index={index} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button asChild variant="outline" className="group relative text-base">
            <Link href="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function ArticleItem({ article, index }: { article: Article; index: number }) {
  const isEven = index % 2 === 0
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative",
        inView ? "opacity-100" : "opacity-0",
        inView && isEven ? "animate-fade-in" : "",
        inView && !isEven ? "animate-fade-in" : "",
        "transition-all duration-1000"
      )}
    >
      {/* Decorative elements */}
      <div 
        className={cn(
          "absolute -z-10",
          isEven 
            ? "-right-5 top-5 w-64 h-64 rounded-full border border-accent/10 animate-rotate-slow opacity-30" 
            : "-left-5 top-5 w-64 h-64 rounded-full border border-accent/10 animate-rotate-slow opacity-30"
        )}
      ></div>
      
      {/* Image */}
      <div 
        className={cn(
          "order-2", 
          isEven ? "lg:order-2" : "lg:order-1"
        )}
      >
        <div className="relative h-full overflow-hidden">
          <div className="aspect-[4/3] relative overflow-hidden bg-zinc-100 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-accent/20 mix-blend-multiply z-10 transition-opacity duration-700 opacity-0 group-hover:opacity-100"></div>
            
            <img
              src={article.image}
              alt={article.title}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className={cn(
              "absolute top-6 px-4 py-2 text-xs uppercase tracking-wider font-medium backdrop-blur-md z-20",
              isEven ? "right-6 bg-accent/90 text-white" : "left-6 border-l-2 border-accent bg-white/80 text-accent"
            )}>
              {article.category}
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div 
        className={cn(
          "order-1 flex items-center",
          isEven ? "lg:order-1 lg:text-right lg:items-end" : "lg:order-2 lg:text-left"
        )}
      >
        <div className="max-w-xl mx-auto lg:mx-0 flex flex-col h-full">
          <div className={cn(
            "space-y-6",
            isEven ? "lg:ml-auto lg:items-end" : ""
          )}>
            <h3 className={cn(
              "text-2xl lg:text-3xl xl:text-4xl font-playfair tracking-tight",
              isEven ? "border-r-2 border-accent/40 pr-6 lg:text-right" : "border-l-2 border-accent/40 pl-6",
            )}>
              {article.title}
            </h3>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              {article.description}
            </p>
            
            <div className={cn("pt-4", isEven ? "text-right" : "text-left")}>
              <Button 
                asChild 
                variant={isEven ? "minimal" : "minimal"} 
                className={cn(
                  "group text-accent hover:text-accent hover:bg-transparent px-0 font-medium text-base",
                  isEven ? "flex ml-auto" : ""
                )}
              >
                <Link href={article.link}>
                  <span>Read Case Study</span>
                  <ArrowRight 
                    className={cn(
                      "inline-block transition-transform duration-300 group-hover:translate-x-2",
                      isEven ? "ml-2 h-5 w-5" : "ml-2 h-5 w-5"
                    )} 
                  />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

