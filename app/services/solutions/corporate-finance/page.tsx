import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, FileText, BarChart2, CheckCircle2, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Finance | Genesis Management",
  description: "Empower your growth journey with strategic financial mastery at Genesis Management Consultancy, specializing in business accounting, tax management, and financial strategy.",
};

export default function CorporateFinancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-genesis-navy/70 z-10 mix-blend-multiply"></div>
          <img
            src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
            alt="Corporate Finance"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
              Our Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
              Corporate Finance
            </h1>
            <div className="h-1 w-24 bg-genesis-gold mb-8"></div>
            <p className="text-xl text-white/90 mb-8 font-montserrat">
              Empower your growth journey with strategic financial mastery
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
                Financial Excellence For Your Business
              </h2>

              {/* Business Accounting Section */}
              <div className="mb-16">
                <div className="flex items-center mb-4">
                  <Building className="h-6 w-6 text-genesis-gold mr-3" />
                  <h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
                    Business Accounting
                  </h3>
                </div>
                <p className="text-lg text-zinc-600 mb-6 font-montserrat">
                  Streamline your financial processes with expert bookkeeping, insightful financial reporting, and customized accounting systems development.
                </p>
                <p className="text-lg text-zinc-600 mb-8 font-montserrat">
                  Elevate your financial management with our comprehensive suite of services. From precise bookkeeping ensuring regulatory compliance, to insightful financial reporting guiding strategic decisions, and bespoke accounting systems development for efficient data analysis—we empower your business with tailored solutions, optimizing financial operations and fostering sustainable growth.
                </p>

                <div className="space-y-8 mb-12">
                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Bookkeeping</h4>
                    <p className="text-zinc-600 font-montserrat">
                      We know that accurate financial records are crucial for making informed decisions, managing cash flow, and ensuring compliance with regulatory requirements. We offer comprehensive bookkeeping services to help you maintain a clear and organized financial picture, allowing you to focus on what you do best – growing your business.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Financial Reporting</h4>
                    <p className="text-zinc-600 font-montserrat">
                      The significance of meaningful financial reporting for your business can not be overlooked. Clear and comprehensive financial reports provide valuable insights into your company's performance, help you make informed decisions, and demonstrate transparency to stakeholders. Our financial reporting services are designed to ensure that your financial information is presented in a clear, concise, and compliant manner.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Accounting Systems Development</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Accounting systems ought to be efficient as the organization engages in collecting, recording, and analyzing financial data within a business. We offer Accounting Systems Development services to help businesses establish robust and tailored systems that enable them to harness the power of comprehensive financial data. Setting up systems, digital or otherwise, to ensure that all accounting data is recorded and utilized for the business' benefit. And because payments are an integral part of the business, we ensure that client businesses establish local and international payment structures that are low cost and accessible to their specific customer base.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tax Management Section */}
              <div className="mb-16">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-genesis-gold mr-3" />
                  <h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
                    Tax Management
                  </h3>
                </div>
                <p className="text-lg text-zinc-600 mb-6 font-montserrat">
                  Navigate tax complexities seamlessly with our experts. From registration to compliance, we optimize strategies, ensuring efficiency and compliance with tax laws.
                </p>
                <p className="text-lg text-zinc-600 mb-8 font-montserrat">
                  Navigating the complexities of tax regulations can be overwhelming, and that's where our comprehensive tax management services come in. Our team of experienced tax professionals is dedicated to helping you optimize your tax strategy, minimize tax liabilities, and ensure compliance with the ever-changing tax laws. We offer a range of tailored tax management services designed to meet the unique needs of your business.
                </p>

                <div className="space-y-8 mb-12">
                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Tax Registration</h4>
                    <p className="text-zinc-600 font-montserrat">
                      We offer tax registration services to assist businesses in fulfilling their registration obligations with the Zimbabwe Revenue Authority (ZIMRA) and other relevant authorities or parties. We understand that complying with tax registration requirements is a crucial step in establishing your business's legal and tax status. Our experienced professionals can guide you through the process and ensure that you meet all necessary obligations.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Tax Accounting</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Our tax accounting services encompass tax planning and strategy as well as calculation and internal reporting. Tax accounting requires a strong understanding of tax laws, accounting principles, and financial reporting standards. Your business can safely rely on the expertise of our tax accountants to ensure accurate tax reporting and maximize tax efficiency while mitigating risk.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Tax Compliance</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Genesis Management Consultancy is your trusted intermediary for comprehensive Tax Compliance services. We handle tax return preparation, filing, and communication with tax regulators. Our experienced professionals ensure compliance with tax laws, monitor regulatory changes, and keep you informed. We streamline the process, saving you time and effort. Plus, we provide support during compliance reviews and audits, representing your interests. With our services, focus on your business while we take care of your tax compliance needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Strategy & Investment Section */}
              <div className="mb-16">
                <div className="flex items-center mb-4">
                  <BarChart2 className="h-6 w-6 text-genesis-gold mr-3" />
                  <h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
                    Strategy & Investment
                  </h3>
                </div>
                <p className="text-lg text-zinc-600 mb-6 font-montserrat">
                  From financing strategies to cashflow management, we craft solutions for financial success and sustainable growth.
                </p>
                <p className="text-lg text-zinc-600 mb-8 font-montserrat">
                  Secure growth capital through expert financial analysis, funding strategies, and negotiation assistance. Ensure optimal cashflow with our monitoring and budgeting solutions, providing real-time visibility and empowering informed decision-making. Achieve financial success through strategic analysis, goal setting, risk assessment, and long-term planning.
                </p>

                <div className="space-y-8 mb-12">
                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Capital</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Genesis Management Consultancy offers comprehensive business financing services to help you secure the capital you need for growth and success. With a focus on capital structuring and business financing, our experts provide financial analysis, develop funding strategies, and assist in loan packaging and negotiation. We assess your financial situation, create accurate projections, and explore various financing options to find the best fit for your business. With our assistance, you can optimize your capital structure and present a compelling case to lenders or investors. Trust us to guide you through the financing process, from analyzing your needs to securing the funding that propels your business forward.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Cashflow Management</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Ensure optimal cashflow for your business with Genesis Management Consultancy's comprehensive Cashflow Management services. Our experts help you plan and monitor cashflow, track expenses, and implement effective budgets. By providing real-time visibility into your financial position, we empower you to make informed decisions and seize opportunities. Our customized reporting and analysis enable you to proactively manage cashflow, identify cost-saving measures, and drive financial stability. Trust us to guide you in optimizing your cashflow, enhancing your business's financial health, and achieving sustainable growth.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Strategy & Planning</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Gain a clear understanding of your business's financial landscape and chart a path towards financial success. Our expertise in strategic financial analysis, goal setting, forecasting, risk assessment, and longterm planning ensures that you have the necessary tools and insights to make sound financial decisions and achieve your business objectives.
                    </p>
                  </div>
                </div>
              </div>

              {/* Audit & Risk Management Section */}
              <div className="mb-16">
                <div className="flex items-center mb-4">
                  <DollarSign className="h-6 w-6 text-genesis-gold mr-3" />
                  <h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
                    Audit & Risk Management
                  </h3>
                </div>
                <p className="text-lg text-zinc-600 mb-6 font-montserrat">
                  Gain confidence in financial accuracy with our expert audits, risk assessments, and regulatory compliance support.
                </p>
                <p className="text-lg text-zinc-600 mb-8 font-montserrat">
                  With Genesis Management Consultancy's Audit and Risk Management services, you can gain confidence in the accuracy of your financial records, identify and address potential risks, and ensure compliance with regulatory requirements. Our expertise in controls audit, financial audit, risk assessment, compliance audit, and internal audit support enables you to proactively manage risks and safeguard your business's financial well-being.
                </p>

                <div className="space-y-8 mb-12">
                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Audits</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Our experts conduct thorough controls audits, ensuring the strength and reliability of your internal processes. With our meticulous financial audits, we verify the accuracy of your statements and provide an independent assessment. We also perform compliance audits to ensure adherence to regulations and identify areas for improvement. Our support in establishing internal audit functions and risk assessment helps you proactively manage risks and enhance governance. Trust us to safeguard your business, maintain compliance, and fortify your financial operations.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-sm">
                <h3 className="text-xl font-medium mb-4 font-playfair text-genesis-navy">Ready to Strengthen Your Financial Foundation?</h3>
                <p className="text-zinc-600 mb-6 font-montserrat">
                  Our corporate finance experts are ready to help you optimize your financial operations, minimize tax liabilities, secure growth capital, and protect your business through effective risk management.
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
                    { name: "Corporate Finance", href: "/services/solutions/corporate-finance", current: true },
                    { name: "Marketing, Growth & Sales", href: "/services/solutions/marketing-growth-sales", current: false },
                    { name: "Company Registration", href: "/services/solutions/company-registration", current: false },
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
                    { name: "Business Accounting", icon: <Building className="h-4 w-4" /> },
                    { name: "Tax Management", icon: <FileText className="h-4 w-4" /> },
                    { name: "Strategy & Investment", icon: <BarChart2 className="h-4 w-4" /> },
                    { name: "Audit & Risk Management", icon: <DollarSign className="h-4 w-4" /> },
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
                    "Genesis Management helped us streamline our financial operations and optimize our tax strategy, resulting in a 27% reduction in overhead costs and significant tax savings. Their strategic guidance has been invaluable to our growth."
                  </p>
                  <p className="text-genesis-navy font-medium text-sm">
                    — CFO, Technology Startup
                  </p>
                </div>

                <div className="border-t border-zinc-200 pt-6">
                  <h3 className="text-lg font-medium mb-4 font-playfair text-genesis-navy">
                    Related Insights
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/insights/tax-planning-strategies" className="group">
                        <p className="text-sm text-genesis-navy font-medium group-hover:text-genesis-gold transition-colors">
                          Effective Tax Planning Strategies
                        </p>
                        <p className="text-xs text-zinc-500">Key approaches to optimize your tax position</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/insights/cash-flow-management" className="group">
                        <p className="text-sm text-genesis-navy font-medium group-hover:text-genesis-gold transition-colors">
                          Cash Flow Management Essentials
                        </p>
                        <p className="text-xs text-zinc-500">Strategies to maintain healthy business finances</p>
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