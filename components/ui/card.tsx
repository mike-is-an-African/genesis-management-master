import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "bordered" | "editorial" | "accent" | "diagonal" | "minimal" | "mdx"
  }
>(({ className, variant = "default", children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-sm bg-card text-card-foreground shadow-subtle transition-all duration-300 overflow-hidden",
      {
        "border-none": variant === "minimal",
        "border-b-0 border-r-0 border-t-0 border-l-2 border-accent": variant === "accent",
        "border border-border": variant === "bordered" || variant === "default",
        "shadow-diagonal bg-white": variant === "diagonal",
        "p-0 border-0 border-b-2 border-border": variant === "editorial",
        "border border-zinc-200/80 my-8 px-6 py-6 bg-white/50 backdrop-blur-sm hover:shadow-premium hover:-translate-y-1": variant === "mdx"
      },
      className
    )}
    {...props}
  >
    {children}
  </div>
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-playfair leading-tight tracking-tight text-foreground",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

