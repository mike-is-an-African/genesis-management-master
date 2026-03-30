import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Operational Excellence | Genesis Management",
  description: "Optimize your business processes to enhance efficiency and drive superior performance with Genesis Management's operational excellence services.",
};

export default function OperationalExcellencePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-genesis-navy/70 z-10 mix-blend-multiply"></div>
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="Operational Excellence"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
              Our Expertise
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
              Operational Excellence
            </h1>
            <div className="h-1 w-24 bg-genesis-gold mb-8"></div>
            <p className="text-xl text-white/90 mb-8 font-montserrat">
              Optimize your business processes to enhance efficiency, reduce waste, and drive superior operational performance across your organization.
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
                Transforming Operations for Peak Performance
              </h2>
              <p className="text-lg text-zinc-600 mb-6 font-montserrat">
                In today's competitive environment, operational excellence is a critical differentiator that enables organizations to deliver superior value to customers while optimizing resource utilization. 
                Our operational excellence services help you identify inefficiencies, streamline processes, and implement continuous improvement systems that drive sustainable performance gains.
              </p>
              <p className="text-lg text-zinc-600 mb-8 font-montserrat">
                At Genesis Management, we combine proven methodologies like Lean, Six Sigma, and Agile with industry-specific expertise to develop customized solutions that address your unique operational challenges.
              </p>

              <h3 className="text-xl md:text-2xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
                Our Operational Excellence Approach
              </h3>
              <div className="space-y-4 mb-12">
                {[
                  {
                    title: "Operational Assessment",
                    description: "Comprehensive evaluation of current processes, systems, and capabilities to identify improvement opportunities."
                  },
                  {
                    title: "Process Optimization",
                    description: "Redesigning workflows to eliminate waste, reduce variability, and enhance value delivery."
                  },
                  {
                    title: "Performance Management",
                    description: "Implementing metrics and KPIs that align operational activities with strategic objectives."
                  },
                  {
                    title: "Continuous Improvement",
                    description: "Building capabilities and systems that enable ongoing operational enhancements and adaptation."
                  },
                  {
                    title: "Technology Integration",
                    description: "Leveraging digital tools and automation to streamline operations and improve decision-making."
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
                Key Benefits
              </h3>
              <ul className="list-disc list-inside space-y-3 mb-12 text-zinc-600 font-montserrat">
                <li>Increased productivity and operational efficiency</li>
                <li>Reduced costs and optimized resource utilization</li>
                <li>Enhanced quality and customer satisfaction</li>
                <li>Improved process consistency and predictability</li>
                <li>Accelerated cycle times and responsiveness</li>
                <li>Sustainable culture of continuous improvement</li>
              </ul>

              <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-sm">
                <h3 className="text-xl font-medium mb-4 font-playfair text-genesis-navy">Ready to Transform Your Operations?</h3>
                <p className="text-zinc-600 mb-6 font-montserrat">
                  Our operational excellence experts are ready to help you optimize your processes and drive sustainable performance improvements across your organization.
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
                    { name: "Strategic Planning", href: "/services/strategic-planning", current: false },
                    { name: "Operational Excellence", href: "/services/operational-excellence", current: true },
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
                    "Working with Genesis Management to optimize our operations resulted in a 28% reduction in process waste and a 15% improvement in customer satisfaction scores, significantly enhancing our competitive position."
                  </p>
                  <p className="text-genesis-navy font-medium text-sm">
                    — COO, Manufacturing Enterprise
                  </p>
                </div>

                <div className="border-t border-zinc-200 pt-6">
                  <h3 className="text-lg font-medium mb-4 font-playfair text-genesis-navy">
                    Related Insights
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/insights/latest" className="group">
                        <p className="text-sm text-genesis-navy font-medium group-hover:text-genesis-gold transition-colors">
                          Lean and Agile: The Perfect Partnership
                        </p>
                        <p className="text-xs text-zinc-500">How combining methodologies drives superior results</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/insights/latest" className="group">
                        <p className="text-sm text-genesis-navy font-medium group-hover:text-genesis-gold transition-colors">
                          Operational Excellence in the Digital Age
                        </p>
                        <p className="text-xs text-zinc-500">Leveraging technology for process optimization</p>
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