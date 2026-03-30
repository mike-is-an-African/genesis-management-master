import type React from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, TrendingUp, Shield, BarChart4 } from "lucide-react"

type Service = {
  title: string
  description: string
  link: string
  icon: React.ReactNode
}

const services: Service[] = [
  {
    title: "Strategic Planning",
    description: "Develop comprehensive strategies aligned with your organizational objectives and market dynamics.",
    link: "/services/strategic-planning",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "Operational Excellence",
    description: "Optimize business processes to enhance efficiency, reduce costs, and improve quality outcomes.",
    link: "/services/operational-excellence",
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    title: "Digital Transformation",
    description:
      "Navigate the digital landscape with tailored solutions that drive innovation and competitive advantage.",
    link: "/services/digital-transformation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
  {
    title: "Risk Management",
    description: "Identify, assess, and mitigate risks to protect your organization's assets and reputation.",
    link: "/services/risk-management",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    title: "Market Analysis",
    description: "Gain actionable insights through comprehensive market research and competitive intelligence.",
    link: "/services/market-analysis",
    icon: <BarChart4 className="h-5 w-5" />,
  },
  {
    title: "Leadership Development",
    description: "Cultivate high-performing leaders equipped to navigate complex business challenges.",
    link: "/services/leadership-development",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
]

export default function ServicesGrid() {
  return (
    <section className="premium-section bg-zinc-50 dark:bg-zinc-900/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30"></div>
      <div className="premium-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="premium-badge mx-auto mb-6">Our Expertise</div>
          <h2 className="text-3xl md:text-4xl font-medium mb-6 nyc-heading text-balance">
            Comprehensive consulting services
          </h2>
          <p className="text-lg text-muted-foreground nyc-subheading text-pretty">
            We provide tailored solutions to address your specific business needs and challenges.
          </p>
        </div>

        <div className="premium-grid">
          {services.map((service, index) => (
            <Card key={index} className="premium-card overflow-hidden group rounded-md">
              <CardContent className="p-6">
                <div className="mb-4 w-10 h-10 bg-zinc-100 flex items-center justify-center text-zinc-900 rounded-sm shadow-subtle dark:bg-zinc-800 dark:text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm text-pretty">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 group-hover:underline group"
                >
                  Learn More <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

