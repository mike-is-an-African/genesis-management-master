import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-20 bg-white dark:bg-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-zinc-50 dark:bg-zinc-800 p-8 md:p-12 rounded-md shadow-nyc">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium mb-4 nyc-heading text-balance">
                Ready to Transform Your Business?
              </h2>
              <p className="text-muted-foreground mb-6 text-sm text-pretty">
                Schedule a consultation with our expert team and discover how Genesis can help you achieve your business
                goals.
              </p>
              <Button
                asChild
                variant="custom"
                className="px-6 py-2 h-auto bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white border border-sky-400/30 shadow-lg hover:shadow-xl rounded-md group"
              >
                <Link href="/contact" className="flex items-center">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-zinc-200 animate-pulse-subtle opacity-70 rounded-sm dark:bg-zinc-700"></div>
                  <div className="w-48 h-48 bg-zinc-100 animate-pulse-subtle opacity-50 absolute rounded-sm dark:bg-zinc-600"></div>
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-zinc-900 flex items-center justify-center shadow-premium rounded-sm dark:bg-white">
                    <ExternalLink className="h-8 w-8 text-white dark:text-zinc-900" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

