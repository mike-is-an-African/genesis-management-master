import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Transformation | Genesis Management",
  description: "Navigate the digital landscape with tailored solutions that drive innovation and growth with Genesis Management's digital transformation services.",
};

export default function DigitalTransformationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-genesis-navy/70 z-10 mix-blend-multiply"></div>
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Digital Transformation"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
              Our Expertise
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
              Digital Transformation
            </h1>
            <div className="h-1 w-24 bg-genesis-gold mb-8"></div>
            <p className="text-xl text-white/90 mb-8 font-montserrat">
              Navigate the digital landscape with tailored solutions that drive innovation, enhance customer experiences, and create sustainable competitive advantage.
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
                Driving Business Value Through Digital Innovation
              </h2>
              <p className="text-lg text-zinc-600 mb-6 font-montserrat">
                In the rapidly evolving digital landscape, organizations need strategic partners who can help them navigate complexity and harness technology as a competitive advantage. 
                Our digital transformation services combine deep business acumen with technological expertise to help you reimagine processes, experiences, and business models.
              </p>
              <p className="text-lg text-zinc-600 mb-8 font-montserrat">
                At Genesis Management, we believe effective digital transformation is not just about implementing new technologies but rethinking how you deliver value to customers and operate your business in the digital age.
              </p>

              <h3 className="text-xl md:text-2xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
                Our Digital Transformation Approach
              </h3>
              <div className="space-y-4 mb-12">
                {[
                  {
                    title: "Digital Strategy Development",
                    description: "Creating a clear vision and roadmap for leveraging digital technologies to achieve business objectives."
                  },
                  {
                    title: "Customer Experience Design",
                    description: "Reimagining customer journeys to deliver seamless, personalized experiences across channels."
                  },
                  {
                    title: "Process Digitization",
                    description: "Automating and enhancing workflows to improve efficiency, quality, and decision-making."
                  },
                  {
                    title: "Data & Analytics",
                    description: "Unlocking the value of data through advanced analytics and AI-powered insights."
                  },
                  {
                    title: "Technology Architecture",
                    description: "Designing scalable, secure, and integrated technology ecosystems to support digital initiatives."
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
                Transformation Outcomes
              </h3>
              <ul className="list-disc list-inside space-y-3 mb-12 text-zinc-600 font-montserrat">
                <li>Enhanced customer engagement and loyalty</li>
                <li>Accelerated innovation and time-to-market</li>
                <li>Improved operational agility and efficiency</li>
                <li>New digital products and revenue streams</li>
                <li>Data-driven decision making capabilities</li>
                <li>Scalable and future-ready technology foundation</li>
              </ul>

              <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-sm">
                <h3 className="text-xl font-medium mb-4 font-playfair text-genesis-navy">Ready to Begin Your Digital Journey?</h3>
                <p className="text-zinc-600 mb-6 font-montserrat">
                  Our digital transformation experts are ready to help you navigate the complexities of the digital landscape and unlock new opportunities for growth and innovation.
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
                    { name: "Operational Excellence", href: "/services/operational-excellence", current: false },
                    { name: "Digital Transformation", href: "/services/digital-transformation", current: true },
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
                    "Genesis Management guided us through a comprehensive digital transformation that revolutionized our customer experience and internal operations. Our digital initiatives have delivered 42% revenue growth and significantly improved customer retention."
                  </p>
                  <p className="text-genesis-navy font-medium text-sm">
                    — CIO, Financial Services Company
                  </p>
                </div>

                <div className="border-t border-zinc-200 pt-6">
                  <h3 className="text-lg font-medium mb-4 font-playfair text-genesis-navy">
                    Related Insights
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/insights/digital-transformation-strategies" className="group">
                        <p className="text-sm text-genesis-navy font-medium group-hover:text-genesis-gold transition-colors">
                          Digital Transformation Strategies
                        </p>
                        <p className="text-xs text-zinc-500">Implementing effective strategies for digital initiatives</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/insights/latest" className="group">
                        <p className="text-sm text-genesis-navy font-medium group-hover:text-genesis-gold transition-colors">
                          AI in Business: Beyond the Hype
                        </p>
                        <p className="text-xs text-zinc-500">Practical applications of AI in business transformation</p>
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