import type React from "react"
import fs from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

// Define the frontmatter type
export interface Frontmatter {
  title: string
  description: string
  date: string
  author: string
  category: string
  tags: string[]
  image?: string
  published: boolean
}

// Define the blog post type
export interface BlogPost {
  slug: string
  frontmatter: Frontmatter
  content: React.ReactElement
}

// Path to the blog posts
const postsDirectory = path.join(process.cwd(), "content/blog")

// Get all blog posts
export async function getAllPosts(): Promise<BlogPost[]> {
  // Check if the directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const filenames = fs.readdirSync(postsDirectory)
  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename)
      const fileContents = fs.readFileSync(filePath, "utf8")

      const slug = filename.replace(/\.mdx$/, "")

      const { frontmatter, content } = await compileMDX<Frontmatter>({
        source: fileContents,
        options: {
          parseFrontmatter: true,
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [
                rehypePrettyCode,
                {
                  theme: "github-dark",
                  onVisitLine(node: any) {
                    // Prevent lines from collapsing in `display: grid` mode, and
                    // allow empty lines to be copy/pasted
                    if (node.children.length === 0) {
                      node.children = [{ type: "text", value: " " }]
                    }
                  },
                  onVisitHighlightedLine(node: any) {
                    node.properties.className.push("line--highlighted")
                  },
                  onVisitHighlightedWord(node: any) {
                    node.properties.className = ["word--highlighted"]
                  },
                },
              ],
            ],
          },
        },
      })

      return {
        slug,
        frontmatter,
        content,
      }
    }),
  )

  // Sort posts by date (newest first)
  return posts.sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  })
}

// Get a single blog post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(filePath, "utf8")

    const { frontmatter, content } = await compileMDX<Frontmatter>({
      source: fileContents,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypePrettyCode,
              {
                theme: "github-dark",
                onVisitLine(node: any) {
                  if (node.children.length === 0) {
                    node.children = [{ type: "text", value: " " }]
                  }
                },
                onVisitHighlightedLine(node: any) {
                  node.properties.className.push("line--highlighted")
                },
                onVisitHighlightedWord(node: any) {
                  node.properties.className = ["word--highlighted"]
                },
              },
            ],
          ],
        },
      },
    })

    return {
      slug,
      frontmatter,
      content,
    }
  } catch (error) {
    console.error(`Error getting post by slug: ${slug}`, error)
    return null
  }
}

