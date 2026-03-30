import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-y-0.5",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-b-2 border-t-0 border-l-0 border-r-0 border-input bg-transparent hover:bg-accent/5 hover:border-accent text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent/5 text-foreground hover:text-accent",
        link: "text-primary underline-offset-4 hover:underline",
        premium: "bg-gradient-teal text-white shadow-accent-glow hover:shadow-accent border-0",
        minimal: "bg-transparent text-foreground hover:bg-accent/5 border-0",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90",
        custom: "transition-all",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
        xl: "h-14 px-10 text-base",
      },
      withBorder: {
        true: "border",
        false: "border-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      withBorder: true,
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, withBorder, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, withBorder, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

