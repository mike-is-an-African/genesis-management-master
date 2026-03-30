import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Strategic Planning | Genesis Management",
  description: "Develop comprehensive strategies aligned with your business objectives with Genesis Management's strategic planning services.",
};

export default function StrategicPlanningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-genesis-navy/70 z-10 mix-blend-multiply"></div>
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Strategic Planning"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
              Our Expertise
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
              Strategic Planning
            </h1>
            <div className="h-1 w-24 bg-genesis-gold mb-8"></div>
            <p className="text-xl text-white/90 mb-8 font-montserrat">
              Develop comprehensive strategies aligned with your business objectives to achieve sustainable growth and competitive advantage.
            </p>
            <Button className="bg-genesis-gold hover:bg-genesis-gold/90 text-genesis-navy">
              <Link href="/contact" className="flex items-center">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-medium mb-8 font-playfair tracking-tight text-genesis-navy border-l-2 border-genesis-gold pl-6">
                Why Strategic Planning Matters
              </h2>
              <p className="text-lg text-zinc-600 mb-6 font-montserrat">
                In today's rapidly evolving business landscape, a well-crafted strategic plan is essential for navigating uncertainty and capitalizing on opportunities. 
                Our strategic planning services help you develop a clear vision, define measurable goals, and implement actionable roadmaps that drive your organization toward success.
              </p>
              <p className="text-lg text-zinc-600 mb-8 font-montserrat">
                At Genesis Management, we believe effective strategic planning is not just about setting long-term goals but creating flexible frameworks that can adapt to changing market conditions while maintaining focus on your core objectives.
              </p>

              <h3 className="text-xl md:text-2xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
                Our Strategic Planning Approach
              </h3>
              <div className="space-y-4 mb-12">
                {[
                  {
                    title: "Situation Analysis",
                    description: "Comprehensive assessment of your current market position, competitive landscape, and internal capabilities."
                  },
                  {
                    title: "Vision & Goal Setting",
                    description: "Defining clear, aspirational yet achievable objectives aligned with your organization's purpose."
                  },
                  {
                    title: "Strategy Development",
                    description: "Crafting tailored strategies that leverage your unique strengths and address key challenges."
                  },
                  {
                    title: "Implementation Planning",
                    description: "Creating detailed roadmaps with specific milestones, responsibilities, and resource allocation."
                  },
                  {
                    title: "Performance Monitoring",
                    description: "Establishing metrics and feedback mechanisms to track progress and enable continuous improvement."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-genesis-gold mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-genesis-navy font-playfair">{item.title}</h4>
                      <p className="text-zinc-600 font-montserrat">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl md:text-2xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
                Expected Outcomes
              </h3>
              <ul className="list-disc list-inside space-y-3 mb-12 text-zinc-600 font-montserrat">
                <li>Clear organizational direction with defined strategic priorities</li>
                <li>Improved resource allocation aligned with business objectives</li>
                <li>Enhanced decision-making processes across all levels</li>
                <li>Greater organizational agility and adaptability</li>
                <li>Increased stakeholder alignment and engagement</li>
                <li>Measurable performance improvements tied to strategic initiatives</li>
              </ul>

              <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-sm">
                <h3 className="text-xl font-medium mb-4 font-playfair text-genesis-navy">Ready to Develop Your Strategic Plan?</h3>
                <p className="text-zinc-600 mb-6 font-montserrat">
                  Our team of experienced consultants is ready to help you create a strategic plan that drives sustainable growth and competitive advantage.
                </p>
                <Button className="bg-genesis-gold hover:bg-genesis-gold/90 text-genesis-navy">
                  <Link href="/contact" className="flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Sidebar */}
            <div>
              <div className="bg-white border border-zinc-200 rounded-sm p-6 shadow-subtle sticky top-24">
                <h3 className="text-lg font-medium mb-6 font-playfair text-genesis-navy border-l-2 border-genesis-gold pl-4">
                  Our Services
                </h3>
                <nav className="space-y-2 mb-8">
                  {[
                    { name: "Strategic Planning", href: "/services/strategic-planning", current: true },
                    { name: "Operational Excellence", href: "/services/operational-excellence", current: false },
                    { name: "Digital Transformation", href: "/services/digital-transformation", current: false },
                    { name: "Risk Management", href: "/services/risk-management", current: false },
                    { name: "Market Analysis", href: "/services/market-analysis", current: false },
                    { name: "Leadership Development", href: "/services/leadership-development", current: false },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block py-2 px-3 rounded-sm transition-colors ${
                        item.current
                          ? "bg-genesis-gold/10 text-genesis-navy font-medium border-l-2 border-genesis-gold"
                          : "text-zinc-600 hover:text-genesis-navy hover:bg-zinc-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <h3 className="text-lg font-medium mb-4 font-playfair text-genesis-navy">
                  Client Success Story
                </h3>
                <div className="bg-zinc-50 p-4 rounded-sm mb-6">
                  <p className="text-zinc-600 italic mb-4 font-montserrat text-sm">
                    "Genesis Management helped us develop a comprehensive strategic plan that transformed our approach to market expansion. Within 18 months, we achieved a 32% growth in revenue while improving operational efficiency."
                  </p>
                  <p className="text-genesis-navy font-medium text-sm">
                    — CEO, Global Technology Corporation
                  </p>
                </div>

                <div className="border-t border-zinc-200 pt-6">
                  <h3 className="text-lg font-medium mb-4 font-playfair text-genesis-navy">
                    Related Insights
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/insights/strategic-planning-essentials" className="group">
                        <p className="text-sm text-genesis-navy font-medium group-hover:text-genesis-gold transition-colors">
                          Strategic Planning Essentials
                        </p>
                        <p className="text-xs text-zinc-500">Learn the fundamental principles for effective strategic planning</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/insights/latest" className="group">
                        <p className="text-sm text-genesis-navy font-medium group-hover:text-genesis-gold transition-colors">
                          Future-Proofing Your Business Strategy
                        </p>
                        <p className="text-xs text-zinc-500">How to build resilience into your strategic planning</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 