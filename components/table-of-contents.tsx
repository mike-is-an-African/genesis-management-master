"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeHeading, setActiveHeading] = useState("")

  // Extract headings from content
  useEffect(() => {
    const headingRegex = /<h([2-3])\s+id="([^"]+)"[^>]*>([^<]+)<\/h\1>/g
    const matches = [...content.matchAll(headingRegex)]

    const extractedHeadings = matches.map((match) => {
      const level = Number.parseInt(match[1])
      const id = match[2]
      const text = match[3]

      return { id, text, level }
    })

    setHeadings(extractedHeadings)
  }, [content])

  // Set up intersection observer for headings
  useEffect(() => {
    if (headings.length > 0 && typeof window !== "undefined") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveHeading(entry.target.id)
            }
          })
        },
        {
          rootMargin: "0px 0px -80% 0px",
          threshold: 0.1,
        },
      )

      // Observe all heading elements
      document.querySelectorAll("h2, h3").forEach((element) => {
        observer.observe(element)
      })

      return () => {
        document.querySelectorAll("h2, h3").forEach((element) => {
          observer.unobserve(element)
        })
      }
    }
  }, [headings])

  if (headings.length === 0) {
    return null
  }

  return (
    <div className="bg-zinc-50 p-5 rounded-md shadow-subtle">
      <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500 mb-4 border-l-2 border-accent pl-3">
        Table of Contents
      </h3>
      <nav>
        <ul className="space-y-2 text-sm">
          {headings.map((heading) => (
            <li key={heading.id} className={`transition-colors ${heading.level === 2 ? "ml-0" : "ml-4"}`}>
              <a
                href={`#${heading.id}`}
                className={cn(
                  "block py-1 hover:text-accent transition-colors",
                  activeHeading === heading.id ? "text-accent font-medium" : "text-muted-foreground",
                )}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

