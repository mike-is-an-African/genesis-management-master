import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Megaphone, TrendingUp, Users, LineChart, Target, BarChart3, ShoppingCart } from "lucide-react";

export const metadata: Metadata = {
  title: "Marketing, Growth & Sales | Genesis Management",
  description: "Strategic consulting services to drive revenue growth, enhance marketing effectiveness, and optimize sales performance for businesses across industries.",
};

export default function MarketingGrowthSalesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-genesis-navy/70 z-10 mix-blend-multiply"></div>
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Marketing Growth Sales"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
              Our Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
              Marketing, Growth <br />& Sales
            </h1>
            <div className="h-1 w-24 bg-genesis-gold mb-8"></div>
            <p className="text-xl text-white/90 mb-8 font-montserrat">
              Driving sustainable revenue growth through integrated marketing and sales strategies tailored to your business goals
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
                Accelerating Growth Through Strategic Marketing & Sales
              </h2>

              {/* Overview Section */}
              <div className="mb-16">
                <div className="flex items-center mb-4">
                  <Megaphone className="h-6 w-6 text-genesis-gold mr-3" />
                  <h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
                    Marketing & Growth Overview
                  </h3>
                </div>
                <p className="text-lg text-zinc-600 mb-6 font-montserrat">
                  In today's dynamic business environment, effective marketing and sales strategies are essential for sustainable growth. Companies must navigate shifting consumer preferences, emerging technologies, and evolving channels to reach and engage their target audiences.
                </p>
                <p className="text-lg text-zinc-600 mb-8 font-montserrat">
                  At Genesis Management, we help organizations develop and implement integrated marketing and sales strategies that drive measurable business results. Our approach combines deep analytical capabilities with creative thinking to identify growth opportunities and develop focused action plans that deliver results.
                </p>

                <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold mb-12">
                  <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Today's Growth Challenges</h4>
                  <ul className="space-y-3 text-zinc-600 font-montserrat">
                    <li className="flex">
                      <span className="text-genesis-gold mr-2">•</span>
                      <span>Increasing competition for customer attention across channels</span>
                    </li>
                    <li className="flex">
                      <span className="text-genesis-gold mr-2">•</span>
                      <span>Effectively leveraging data for personalized customer experiences</span>
                    </li>
                    <li className="flex">
                      <span className="text-genesis-gold mr-2">•</span>
                      <span>Aligning marketing and sales teams for seamless customer journeys</span>
                    </li>
                    <li className="flex">
                      <span className="text-genesis-gold mr-2">•</span>
                      <span>Optimizing marketing spend and demonstrating ROI</span>
                    </li>
                    <li className="flex">
                      <span className="text-genesis-gold mr-2">•</span>
                      <span>Building resilient growth strategies in unpredictable markets</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Strategy Section */}
              <div className="mb-16">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-6 w-6 text-genesis-gold mr-3" />
                  <h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
                    Growth Strategy & Planning
                  </h3>
                </div>
                <p className="text-lg text-zinc-600 mb-6 font-montserrat">
                  Create a robust growth strategy that aligns with your organizational goals and market opportunities.
                </p>
                <p className="text-lg text-zinc-600 mb-8 font-montserrat">
                  Our growth strategy experts work with leadership teams to identify and prioritize growth opportunities, develop strategies that leverage organizational strengths, and build executable plans with clear metrics for success. We move beyond generic frameworks to create tailored approaches that account for your unique market position and capabilities.
                </p>

                <div className="space-y-8 mb-12">
                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Market Opportunity Assessment</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Identify and evaluate growth opportunities through rigorous market research and analysis. We help you assess market size and trends, analyze customer needs and segments, evaluate competitive dynamics, and identify whitespace opportunities that align with your capabilities and strategic objectives.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Growth Strategy Development</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Develop a comprehensive growth strategy that integrates market insights with your organizational capabilities. We help you articulate your growth vision, prioritize opportunities, identify required capabilities, and develop actionable roadmaps that enable sustainable revenue growth across established and new markets.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Go-to-Market Strategy</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Ensure successful product and service launches with comprehensive go-to-market strategies. We help you define target segments, develop positioning and messaging, design channel strategies, establish pricing models, and create integrated marketing and sales plans that drive successful market entry.
                    </p>
                  </div>
                </div>
              </div>

              {/* Marketing Excellence Section */}
              <div className="mb-16">
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-genesis-gold mr-3" />
                  <h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
                    Marketing Excellence
                  </h3>
                </div>
                <p className="text-lg text-zinc-600 mb-6 font-montserrat">
                  Develop and implement marketing strategies that build brand strength, engage target audiences, and generate qualified leads.
                </p>
                <p className="text-lg text-zinc-600 mb-8 font-montserrat">
                  Our marketing experts help organizations enhance their marketing effectiveness through strategies that combine deep customer insights with creative execution. We focus on developing approaches that create compelling customer experiences while delivering measurable business results.
                </p>

                <div className="space-y-8 mb-12">
                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Brand Strategy & Positioning</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Develop a distinctive brand that resonates with target audiences and supports business objectives. We help you articulate brand purpose and positioning, develop compelling messaging frameworks, create visual identity systems, and build brand activation plans that build awareness and preference across touchpoints.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Digital Marketing Optimization</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Enhance the effectiveness of your digital marketing efforts to drive awareness, engagement, and conversion. We help you assess current digital performance, develop integrated digital strategies, optimize channel mix and spending, enhance content approaches, and implement measurement frameworks that enhance ROI.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Customer Experience Design</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Create seamless, compelling customer experiences that drive loyalty and advocacy. We help you map customer journeys, identify pain points and opportunities, design omnichannel experience strategies, develop personalization approaches, and build measurement frameworks that enhance customer lifetime value.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sales Performance Section */}
              <div className="mb-16">
                <div className="flex items-center mb-4">
                  <LineChart className="h-6 w-6 text-genesis-gold mr-3" />
                  <h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
                    Sales Performance Optimization
                  </h3>
                </div>
                <p className="text-lg text-zinc-600 mb-6 font-montserrat">
                  Enhance sales effectiveness and efficiency to drive revenue growth and improve customer relationships.
                </p>
                <p className="text-lg text-zinc-600 mb-8 font-montserrat">
                  Our sales experts help organizations transform their sales capabilities through strategies that align sales processes with customer buying journeys. We focus on approaches that enhance productivity while delivering superior customer experiences that drive revenue and loyalty.
                </p>

                <div className="space-y-8 mb-12">
                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Sales Strategy & Transformation</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Develop comprehensive sales strategies that drive sustainable revenue growth. We help you assess your current sales capabilities, design future-focused sales models, develop territory and account strategies, enhance sales processes, and implement enablement programs that improve win rates and average deal size.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Channel Strategy & Management</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Optimize your route-to-market approach through effective channel strategies. We help you evaluate channel performance, design channel architectures, develop partner programs, create channel enablement approaches, and implement governance frameworks that enhance channel productivity and customer coverage.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Sales Force Effectiveness</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Enhance the productivity and effectiveness of your sales organization. We help you optimize sales structures, develop role clarity and competency models, design compensation plans, implement coaching programs, and create sales enablement tools that enhance sales performance and customer engagement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Digital Commerce Section */}
              <div className="mb-16">
                <div className="flex items-center mb-4">
                  <ShoppingCart className="h-6 w-6 text-genesis-gold mr-3" />
                  <h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
                    Digital Commerce & Marketplaces
                  </h3>
                </div>
                <p className="text-lg text-zinc-600 mb-6 font-montserrat">
                  Develop and optimize digital commerce strategies to drive online sales and enhance customer experiences.
                </p>
                <p className="text-lg text-zinc-600 mb-8 font-montserrat">
                  Our digital commerce experts help organizations build and optimize online sales channels through strategies that integrate technology, operations, and customer experience. We focus on approaches that drive conversion while supporting broader omnichannel strategies.
                </p>

                <div className="space-y-8 mb-12">
                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">E-commerce Strategy</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Develop comprehensive e-commerce strategies that drive online revenue and customer satisfaction. We help you assess market opportunities, design digital commerce models, optimize site experience and conversion, develop pricing and promotion approaches, and implement fulfillment strategies that enhance customer loyalty.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Marketplace Strategy</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Optimize your approach to online marketplaces to drive visibility, sales, and brand protection. We help you evaluate marketplace opportunities, develop listing strategies, optimize content and pricing, enhance fulfillment approaches, and create advertising strategies that maximize marketplace performance.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Omnichannel Integration</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Create seamless shopping experiences across physical and digital channels. We help you develop integrated channel strategies, implement cross-channel capabilities, enhance inventory visibility, develop fulfillment models, and create measurement frameworks that support true omnichannel experiences.
                    </p>
                  </div>
                </div>
              </div>

              {/* Marketing Analytics Section */}
              <div className="mb-16">
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-6 w-6 text-genesis-gold mr-3" />
                  <h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
                    Marketing Analytics & Technology
                  </h3>
                </div>
                <p className="text-lg text-zinc-600 mb-6 font-montserrat">
                  Leverage data and technology to enhance marketing effectiveness and drive growth.
                </p>
                <p className="text-lg text-zinc-600 mb-8 font-montserrat">
                  Our marketing analytics and technology experts help organizations enhance their data-driven marketing capabilities. We develop approaches that transform raw data into actionable insights that drive improved marketing performance and customer engagement.
                </p>

                <div className="space-y-8 mb-12">
                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Marketing Performance Measurement</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Develop robust approaches to measuring and optimizing marketing performance. We help you define key performance indicators, implement marketing attribution models, develop marketing dashboards, enhance testing approaches, and create continuous improvement processes that drive ROI.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Marketing Technology Strategy</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Optimize your marketing technology stack to enhance capabilities and efficiency. We help you assess current technologies, develop future state architectures, select appropriate solutions, implement marketing automation, and create data integration approaches that enhance marketing effectiveness.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Customer Data & Insights</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Develop approaches to gathering and leveraging customer data to drive personalization and insights. We help you create customer data strategies, develop segmentation models, enhance customer analytics capabilities, implement customer data platforms, and create insight-generation processes that drive customer-centered decisions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Customer Engagement Section */}
              <div className="mb-16">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-genesis-gold mr-3" />
                  <h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
                    Customer Engagement & Loyalty
                  </h3>
                </div>
                <p className="text-lg text-zinc-600 mb-6 font-montserrat">
                  Develop strategies to enhance customer relationships, loyalty, and lifetime value.
                </p>
                <p className="text-lg text-zinc-600 mb-8 font-montserrat">
                  Our customer engagement experts help organizations build deeper relationships with customers through strategies that create meaningful value and foster emotional connection. We focus on approaches that enhance retention, increase share of wallet, and promote advocacy.
                </p>

                <div className="space-y-8 mb-12">
                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Loyalty Program Design</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Create effective loyalty programs that drive customer retention and increased spending. We help you develop program strategies, design reward structures, implement tiering approaches, enhance member communications, and create measurement frameworks that demonstrate program ROI.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Customer Retention Strategies</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Develop comprehensive approaches to reducing churn and enhancing customer lifetime value. We help you analyze retention drivers, identify at-risk customers, develop intervention strategies, enhance onboarding processes, and create proactive engagement approaches that strengthen customer relationships.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
                    <h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">Voice of Customer Programs</h4>
                    <p className="text-zinc-600 font-montserrat">
                      Create systematic approaches to gathering, analyzing, and acting on customer feedback. We help you design feedback collection methods, implement customer listening tools, develop insight generation processes, create action planning frameworks, and establish governance models that drive customer-centered improvements.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-sm">
                <h3 className="text-xl font-medium mb-4 font-playfair text-genesis-navy">Ready to Accelerate Your Growth?</h3>
                <p className="text-zinc-600 mb-6 font-montserrat">
                  Our marketing and sales experts are ready to help you develop and implement strategies that drive sustainable revenue growth and enhance customer relationships.
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
                    { name: "Strategy & Operations", href: "/services/solutions/strategy-operations", current: false },
                    { name: "Corporate Finance", href: "/services/solutions/corporate-finance", current: false },
                    { name: "Marketing, Growth & Sales", href: "/services/solutions/marketing-growth-sales", current: true },
                    { name: "Digital & Technology", href: "/services/solutions/digital-technology", current: false },
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

                <h3 className="text-lg font-medium mb-6 font-playfair text-genesis-navy border-l-2 border-genesis-gold pl-4">
                  Our Industries
                </h3>
                <nav className="space-y-2 mb-8">
                  {[
                    { name: "Agriculture", href: "/services/industries/agriculture", current: false },
                    { name: "Consumer Goods", href: "/services/industries/consumer-goods", current: false },
                    { name: "Education", href: "/services/industries/education", current: false },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block py-2 px-3 rounded-sm transition-colors text-zinc-600 hover:text-genesis-navy hover:bg-zinc-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <h3 className="text-lg font-medium mb-4 font-playfair text-genesis-navy">
                  Our Approach
                </h3>
                <p className="text-zinc-600 mb-6 font-montserrat text-sm">
                  We combine deep industry expertise with proven methodologies to develop marketing and sales strategies that drive sustainable growth. Our collaborative approach ensures solutions that are both innovative and practical for your unique business context.
                </p>

                <div className="bg-zinc-50 p-4 rounded-sm mb-6">
                  <h4 className="text-sm font-medium mb-2 text-genesis-navy">Featured Case Study</h4>
                  <p className="text-zinc-600 mb-3 font-montserrat text-sm">
                    Learn how we helped a consumer goods company increase digital marketing ROI by 35% while improving customer acquisition costs through an integrated channel strategy.
                  </p>
                  <Link href="/case-studies/digital-marketing-transformation" className="text-sm text-genesis-gold font-medium hover:underline">
                    Read Case Study →
                  </Link>
                </div>

                <div className="border-t border-zinc-200 pt-6">
                  <h3 className="text-lg font-medium mb-4 font-playfair text-genesis-navy">
                    Featured Insights
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/insights/data-driven-marketing" className="group">
                        <p className="text-sm text-genesis-navy font-medium group-hover:text-genesis-gold transition-colors">
                          Data-Driven Marketing Excellence
                        </p>
                        <p className="text-xs text-zinc-500">Leveraging analytics to enhance marketing performance</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/insights/sales-transformation" className="group">
                        <p className="text-sm text-genesis-navy font-medium group-hover:text-genesis-gold transition-colors">
                          Sales Transformation in the Digital Age
                        </p>
                        <p className="text-xs text-zinc-500">Building high-performing sales organizations</p>
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