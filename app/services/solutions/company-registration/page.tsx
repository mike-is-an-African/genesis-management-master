import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, ClipboardList, Scale, FileCheck, CheckCircle2, FileSearch } from "lucide-react";

export const metadata: Metadata = {
  title: "Company Registration | Genesis Management",
  description: "Professional company registration services to legally establish your business with expert guidance through regulatory compliance and documentation.",
};

export default function CompanyRegistrationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-genesis-navy/70 z-10 mix-blend-multiply"></div>
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt="Company Registration"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
              Our Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
              Company Registration
            </h1>
            <div className="h-1 w-24 bg-genesis-gold mb-8"></div>
            <p className="text-xl text-white/90 mb-8 font-montserrat">
              Expert guidance through the complex process of legally establishing your business
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
                Professional Company Registration Services
              </h2>

              {/* Business Entity Formation Section */}
              <div className="mb-16">
                <div className="flex items-center mb-4">
                  <Building2 className="h-6 w-6 text-genesis-gold mr-3" />
                  <h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
                    Business Entity Formation
                  </h3>
                </div>
                <p className="text-lg text-zinc-600 mb-6 font-montserrat">
                  Choose the right legal structure for your business with guidance from our expert consultants.
                </p>
                <p className="text-lg text-zinc-600 mb-8 font-montserrat">
                  Selecting the appropriate business structure is a crucial decision that affects everything from your day-to-day operations to your tax obligations and personal liability. Our experienced consultants work closely with you to understand your business goals, risk tolerance, and growth plans to recommend the optimal legal structure for your specific situation.
                </p>

                <div className="space-y-8 mb-12">
                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Private Limited Company Registration</h4>
                    <p className="text-zinc-600 font-montserrat">
                      We guide you through the process of establishing a private limited company, helping you protect your personal assets while creating a foundation for growth and investment. Our services include name reservation, preparation of incorporation documents, and guidance on share structure and capital requirements.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Partnership Formation</h4>
                    <p className="text-zinc-600 font-montserrat">
                      For businesses with multiple owners, we assist with creating formal partnership agreements that clearly define rights, responsibilities, profit-sharing arrangements, and succession plans. Our consultants help you navigate the complexities of partnership law to build a solid foundation for collaborative business success.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Sole Proprietorship Setup</h4>
                    <p className="text-zinc-600 font-montserrat">
                      For entrepreneurs starting on their own, we provide guidance on establishing a sole proprietorship with proper trade name registration and fulfillment of all legal requirements. While this is the simplest business structure, our expertise ensures you understand the implications and have the right protections in place.
                    </p>
                  </div>
                </div>
              </div>

              {/* Regulatory Compliance Section */}
              <div className="mb-16">
                <div className="flex items-center mb-4">
                  <Scale className="h-6 w-6 text-genesis-gold mr-3" />
                  <h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
                    Regulatory Compliance
                  </h3>
                </div>
                <p className="text-lg text-zinc-600 mb-6 font-montserrat">
                  Navigate complex regulatory requirements with confidence, ensuring your business starts on the right legal footing.
                </p>
                <p className="text-lg text-zinc-600 mb-8 font-montserrat">
                  Establishing a business involves compliance with numerous regulations across different government agencies. Our consultants have deep knowledge of local business laws and regulatory requirements, helping you ensure all aspects of your business registration are handled properly and efficiently.
                </p>

                <div className="space-y-8 mb-12">
                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Business Licensing</h4>
                    <p className="text-zinc-600 font-montserrat">
                      We help you identify and obtain all necessary licenses and permits required for your specific industry and location. From general business licenses to specialized industry permits, our team ensures your business operates legally from day one, avoiding potential penalties and disruptions.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Tax Registration</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Our consultants assist with registering your business for appropriate tax obligations, including income tax, VAT/sales tax, and employer taxes. We ensure you understand your tax responsibilities and help set up proper accounting systems to maintain compliance as your business grows.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Industry-Specific Compliance</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Different industries face unique regulatory requirements. Whether you're in financial services, healthcare, food service, or manufacturing, our consultants provide specialized guidance on industry-specific regulations and compliance standards that apply to your business.
                    </p>
                  </div>
                </div>
              </div>

              {/* Documentation & Legal Support Section */}
              <div className="mb-16">
                <div className="flex items-center mb-4">
                  <ClipboardList className="h-6 w-6 text-genesis-gold mr-3" />
                  <h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
                    Documentation & Legal Support
                  </h3>
                </div>
                <p className="text-lg text-zinc-600 mb-6 font-montserrat">
                  Expert preparation and filing of all necessary documentation to establish your business legally.
                </p>
                <p className="text-lg text-zinc-600 mb-8 font-montserrat">
                  Proper documentation is essential for establishing your business on a solid legal foundation. Our team provides comprehensive support in preparing, reviewing, and filing all necessary documents, ensuring accuracy and compliance with current regulations.
                </p>

                <div className="space-y-8 mb-12">
                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Articles of Incorporation/Organization</h4>
                    <p className="text-zinc-600 font-montserrat">
                      We prepare and file these foundational documents that formally establish your business entity with the government. Our experts ensure these documents accurately reflect your business structure, management approach, and operational needs while meeting all legal requirements.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Corporate Bylaws & Operating Agreements</h4>
                    <p className="text-zinc-600 font-montserrat">
                      These internal documents govern how your business operates. Our consultants help draft comprehensive bylaws or operating agreements that clearly define management structures, decision-making processes, owner rights and responsibilities, and succession planning to prevent future disputes.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Business Contracts & Agreements</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Starting a business often requires various contracts with suppliers, customers, employees, and partners. We provide guidance on essential business contracts, helping you understand key terms and ensuring your interests are protected as you begin operations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Post-Registration Support Section */}
              <div className="mb-16">
                <div className="flex items-center mb-4">
                  <FileCheck className="h-6 w-6 text-genesis-gold mr-3" />
                  <h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
                    Post-Registration Support
                  </h3>
                </div>
                <p className="text-lg text-zinc-600 mb-6 font-montserrat">
                  Comprehensive support to help your business thrive after the registration process is complete.
                </p>
                <p className="text-lg text-zinc-600 mb-8 font-montserrat">
                  Our relationship doesn't end once your business is registered. We provide ongoing support to help you establish proper governance practices, maintain compliance, and set your business up for long-term success.
                </p>

                <div className="space-y-8 mb-12">
                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Corporate Governance</h4>
                    <p className="text-zinc-600 font-montserrat">
                      We help establish effective corporate governance practices, including board structure, meeting procedures, record-keeping systems, and compliance calendars to ensure your business maintains good standing and operates according to legal requirements.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Compliance Management</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Our team assists with setting up systems and procedures to track and fulfill ongoing compliance obligations, including annual filings, license renewals, and regulatory reporting to prevent penalties and maintain your business's legal status.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Business Advisory Services</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Beyond registration, we offer ongoing advisory services to help your new business navigate early challenges, capitalize on opportunities, and build a foundation for growth. Our consultants become trusted advisors as your business evolves and faces new situations.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-sm">
                <h3 className="text-xl font-medium mb-4 font-playfair text-genesis-navy">Ready to Establish Your Business?</h3>
                <p className="text-zinc-600 mb-6 font-montserrat">
                  Our company registration experts are ready to guide you through every step of establishing your business legally, efficiently, and with the right foundation for future growth.
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
                  Our Solutions
                </h3>
                <nav className="space-y-2 mb-8">
                  {[
                    { name: "Corporate Finance", href: "/services/solutions/corporate-finance", current: false },
                    { name: "Marketing, Growth & Sales", href: "/services/solutions/marketing-growth-sales", current: false },
                    { name: "Company Registration", href: "/services/solutions/company-registration", current: true },
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
                  Services Offered
                </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    { name: "Business Entity Formation", icon: <Building2 className="h-4 w-4" /> },
                    { name: "Regulatory Compliance", icon: <Scale className="h-4 w-4" /> },
                    { name: "Documentation & Legal Support", icon: <ClipboardList className="h-4 w-4" /> },
                    { name: "Post-Registration Support", icon: <FileCheck className="h-4 w-4" /> },
                  ].map((service, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="text-genesis-gold mr-2 h-5 w-5 flex-shrink-0" />
                      <div className="flex items-center text-zinc-700">
                        <span className="text-genesis-gold mr-2">{service.icon}</span>
                        {service.name}
                      </div>
                    </li>
                  ))}
                </ul>

                <h3 className="text-lg font-medium mb-4 font-playfair text-genesis-navy">
                  Client Success Story
                </h3>
                <div className="bg-zinc-50 p-4 rounded-sm mb-6">
                  <p className="text-zinc-600 italic mb-4 font-montserrat text-sm">
                    "Genesis Management guided us through the entire company registration process with remarkable efficiency. Their expertise saved us valuable time and helped us avoid common pitfalls. Within weeks, our business was fully registered and operational, allowing us to focus on growth."
                  </p>
                  <p className="text-genesis-navy font-medium text-sm">
                    — Founder, Technology Startup
                  </p>
                </div>

                <div className="border-t border-zinc-200 pt-6">
                  <h3 className="text-lg font-medium mb-4 font-playfair text-genesis-navy">
                    Related Insights
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/insights/choosing-business-structure" className="group">
                        <p className="text-sm text-genesis-navy font-medium group-hover:text-genesis-gold transition-colors">
                          Choosing the Right Business Structure
                        </p>
                        <p className="text-xs text-zinc-500">Key considerations when selecting your legal entity</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/insights/business-compliance-guide" className="group">
                        <p className="text-sm text-genesis-navy font-medium group-hover:text-genesis-gold transition-colors">
                          Business Compliance Guide
                        </p>
                        <p className="text-xs text-zinc-500">Essential compliance requirements for new businesses</p>
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