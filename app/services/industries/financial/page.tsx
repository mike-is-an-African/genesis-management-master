import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	LineChart,
	Briefcase,
	Building,
	Shield,
	CheckCircle2,
	TrendingUp,
	BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
	title: "Financial Services Industry | Genesis Management",
	description:
		"Strategic consulting for banks, insurance companies, investment firms, and fintech startups to navigate regulatory challenges, digital transformation, and evolving customer expectations.",
};

export default function FinancialServicesPage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative overflow-hidden">
				{/* Background Image with Overlay */}
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-genesis-navy/70 z-10 mix-blend-multiply"></div>
					<img
						src="https://images.unsplash.com/photo-1562016600-ece13e8ba570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
						alt="Financial services in Africa"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
					<div className="max-w-3xl">
						<div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
							Industries We Serve
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
							Financial Services
						</h1>
						<div className="h-1 w-24 bg-genesis-gold mb-8"></div>
						<p className="text-xl text-white/90 mb-8 font-montserrat">
							Navigating complexity with confidence: Strategic
							solutions for financial institutions to drive
							growth, optimize operations, and deliver exceptional
							customer experiences in a rapidly evolving
							landscape.
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
								Strategic Solutions for Financial Excellence
							</h2>

							{/* Financial Services Overview Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Building className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Financial Services Industry Overview
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									The financial services industry is
									navigating a period of unprecedented
									transformation, driven by technological
									innovation, changing customer expectations,
									regulatory evolution, and market volatility.
								</p>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									At Genesis Management, we partner with
									banks, insurance companies, investment
									firms, wealth managers, and fintech startups
									to navigate these complex challenges and
									capitalize on emerging opportunities. Our
									team of financial services experts combines
									deep industry knowledge with strategic
									insight to deliver practical solutions that
									drive sustainable growth and competitive
									advantage.
								</p>

								<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold mb-12">
									<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
										Industry Challenges
									</h4>
									<ul className="space-y-3 text-zinc-600 font-montserrat">
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Digital transformation and
												legacy system modernization
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Evolving regulatory requirements
												and compliance
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Fintech disruption and changing
												customer expectations
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Cybersecurity threats and data
												privacy concerns
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Cost pressures and operational
												efficiency demands
											</span>
										</li>
									</ul>
								</div>
							</div>

							{/* Strategic Transformation Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<LineChart className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Strategic Transformation
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help financial institutions develop and
									implement strategies that position them for
									success in a rapidly changing landscape. Our
									strategic transformation services combine
									rigorous analysis with practical
									implementation support to drive meaningful
									change.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Enterprise Strategy
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Develop comprehensive strategies
											that address market challenges and
											capitalize on emerging
											opportunities. We help you assess
											your competitive position, identify
											strategic priorities, and create
											implementation roadmaps that align
											your organization around a
											compelling vision for the future.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Business Model Innovation
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Create innovative business models
											that address changing customer needs
											and market dynamics. We help you
											evaluate alternative models, develop
											value propositions, design pricing
											strategies, and create
											implementation plans that balance
											innovation with operational
											feasibility.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Merger & Acquisition Support
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Navigate complex integration
											processes to realize the full value
											of financial services combinations.
											We provide comprehensive M&A
											support, from target identification
											and due diligence to integration
											planning and post-merger
											optimization, ensuring smooth
											transitions and accelerated synergy
											capture.
										</p>
									</div>
								</div>
							</div>

							{/* Digital Transformation Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<BarChart3 className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Digital Transformation
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help financial institutions leverage
									technology to transform customer
									experiences, operational processes, and
									business models. Our digital transformation
									experts combine financial services knowledge
									with technology expertise to deliver
									practical solutions that drive measurable
									results.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Digital Strategy & Roadmap
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Develop comprehensive digital
											strategies that align with your
											business objectives and customer
											needs. We help you assess your
											digital maturity, identify
											opportunities for innovation,
											prioritize initiatives, and create
											implementation roadmaps that drive
											digital transformation across your
											organization.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Technology Modernization
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Transform legacy systems into
											modern, flexible technology
											platforms that support innovation
											and growth. We help you assess your
											current architecture, develop target
											state designs, evaluate technology
											options, and create implementation
											plans that minimize risk while
											accelerating transformation.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Data & Analytics Strategy
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Harness the power of data to drive
											better decisions, enhance customer
											experiences, and optimize
											operations. We help you develop data
											strategies, implement analytics
											capabilities, establish data
											governance frameworks, and create
											insights-driven cultures that
											leverage information as a strategic
											asset.
										</p>
									</div>
								</div>
							</div>

							{/* Customer Experience Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<TrendingUp className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Customer Experience & Growth
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help financial institutions design and
									deliver exceptional customer experiences
									that drive acquisition, retention, and
									growth. Our customer experience experts
									bring deep knowledge of financial services
									customer journeys, preferences, and pain
									points.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Customer Journey Design
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Create seamless, engaging customer
											journeys across channels and
											touchpoints. We help you map current
											experiences, identify pain points,
											design future state journeys, and
											implement changes that enhance
											satisfaction, reduce effort, and
											drive loyalty across the customer
											lifecycle.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Digital Channel Optimization
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Enhance the effectiveness of your
											digital channels to drive engagement
											and conversion. We help you optimize
											mobile and online experiences,
											implement personalization
											strategies, enhance self-service
											capabilities, and create omnichannel
											experiences that meet customer
											expectations.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Marketing & Growth Strategy
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Develop effective approaches to
											customer acquisition, cross-selling,
											and retention. We help you segment
											customers, develop value
											propositions, optimize marketing
											campaigns, enhance sales
											effectiveness, and implement
											data-driven approaches to customer
											relationship management.
										</p>
									</div>
								</div>
							</div>

							{/* Risk & Compliance Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Shield className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Risk & Compliance
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help financial institutions develop
									effective approaches to managing risk and
									ensuring regulatory compliance. Our risk and
									compliance experts bring deep knowledge of
									financial services regulations, risk
									management frameworks, and governance best
									practices.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Enterprise Risk Management
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Develop comprehensive approaches to
											identifying, assessing, and managing
											risks across your organization. We
											help you establish risk governance
											frameworks, implement risk
											assessment methodologies, enhance
											risk reporting, and build risk-aware
											cultures that balance opportunity
											with prudent risk management.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Regulatory Compliance
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Navigate complex regulatory
											requirements efficiently and
											effectively. We help you assess
											compliance needs, develop policies
											and procedures, implement monitoring
											systems, respond to regulatory
											changes, and establish compliance
											programs that satisfy regulatory
											expectations while supporting
											business objectives.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Cybersecurity & Data Privacy
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Protect sensitive financial
											information and maintain customer
											trust through effective security
											measures. We help you assess cyber
											risks, implement security controls,
											develop incident response
											capabilities, and establish data
											privacy programs that safeguard
											information while enabling business
											innovation.
										</p>
									</div>
								</div>
							</div>

							{/* Operational Excellence Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Briefcase className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Operational Excellence
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help financial institutions enhance
									operational efficiency, quality, and
									flexibility to support growth and improve
									financial performance. Our operations
									experts bring deep knowledge of financial
									services processes, technologies, and best
									practices.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Process Optimization
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Enhance efficiency, quality, and
											customer experience through
											streamlined processes. We help you
											map current processes, identify
											improvement opportunities, redesign
											workflows, and implement changes
											that reduce costs, minimize errors,
											and improve turnaround times.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Cost Transformation
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Improve financial performance
											through strategic cost management.
											We help you analyze cost structures,
											identify reduction opportunities,
											implement sustainable savings
											initiatives, and establish cost
											management disciplines that balance
											efficiency with customer experience
											and growth objectives.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Operating Model Design
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Create organizational structures and
											governance frameworks that support
											your strategy. We help you design
											target operating models, align
											organizational structures with
											business priorities, clarify roles
											and responsibilities, and implement
											governance mechanisms that enhance
											decision-making and execution.
										</p>
									</div>
								</div>
							</div>

							{/* Case Study Section */}
							<div className="bg-zinc-50 p-8 rounded-sm mb-12">
								<h3 className="text-xl md:text-2xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
									Success Story: Regional Bank Transformation
								</h3>
								<p className="text-lg text-zinc-600 mb-4 font-montserrat">
									We partnered with a mid-sized regional bank
									facing challenges with digital capabilities,
									customer experience, and operational
									efficiency. Our team implemented a
									comprehensive transformation strategy that
									included:
								</p>
								<ul className="list-disc pl-6 mb-6 text-zinc-600 font-montserrat space-y-2">
									<li>
										Developing a customer-centered digital
										strategy and technology roadmap
									</li>
									<li>
										Redesigning key customer journeys to
										enhance satisfaction and reduce effort
									</li>
									<li>
										Implementing process improvements that
										reduced loan processing time by 40%
									</li>
									<li>
										Establishing data analytics capabilities
										that improved cross-selling
										effectiveness by 35%
									</li>
								</ul>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									The result was a significant improvement in
									customer satisfaction, a 28% increase in
									digital adoption, and a 22% reduction in
									operating costs, positioning the bank for
									sustained growth and competitiveness.
								</p>
							</div>

							{/* CTA Box */}
							<div className="bg-genesis-navy p-8 rounded-sm text-white">
								<h3 className="text-xl font-medium mb-4 font-playfair">
									Ready to Transform Your Financial
									Institution?
								</h3>
								<p className="mb-6 font-montserrat">
									Our team of financial services experts is
									ready to help you navigate industry
									challenges, optimize operations, enhance
									customer experiences, and build sustainable
									competitive advantage.
								</p>
								<Button className="bg-genesis-gold hover:bg-genesis-gold/90 text-genesis-navy">
									<Link
										href="/contact"
										className="flex items-center"
									>
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
									Industries We Serve
								</h3>
								<nav className="space-y-2 mb-8">
									{[
										{
											name: "Financial Services",
											href: "/services/industries/financial",
											current: true,
										},
										{
											name: "Technology & IT",
											href: "/services/industries/technology",
											current: false,
										},
										{
											name: "Healthcare",
											href: "/services/industries/healthcare",
											current: false,
										},
										{
											name: "Agriculture",
											href: "/services/industries/agriculture",
											current: false,
										},
										{
											name: "Consumer Goods",
											href: "/services/industries/consumer-goods",
											current: false,
										},
										{
											name: "Education",
											href: "/services/industries/education",
											current: false,
										},
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
									Our Financial Services Expertise
								</h3>
								<ul className="space-y-3 mb-8">
									{[
										"Strategic Transformation",
										"Digital Banking & Fintech",
										"Risk Management & Compliance",
										"Customer Experience Design",
										"Operational Excellence",
										"Data & Analytics Strategy",
									].map((service, index) => (
										<li
											key={index}
											className="flex items-center"
										>
											<CheckCircle2 className="text-genesis-gold mr-2 h-5 w-5 flex-shrink-0" />
											<span className="text-zinc-700">
												{service}
											</span>
										</li>
									))}
								</ul>

								<h3 className="text-lg font-medium mb-4 font-playfair text-genesis-navy">
									Client Testimonial
								</h3>
								<div className="bg-zinc-50 p-4 rounded-sm mb-6">
									<p className="text-zinc-600 italic mb-4 font-montserrat text-sm">
										"Genesis Management has been an
										invaluable partner in our digital
										transformation journey. Their deep
										understanding of financial services,
										combined with their practical approach
										to implementation, helped us navigate
										complex challenges and deliver
										meaningful improvements for our
										customers and employees."
									</p>
									<p className="text-genesis-navy font-medium text-sm">
										— COO, Regional Financial Institution
									</p>
								</div>

								<div className="border-t border-zinc-200 pt-6">
									<h3 className="text-lg font-medium mb-4 font-playfair text-genesis-navy">
										Related Solutions
									</h3>
									<ul className="space-y-4">
										<li>
											<Link
												href="/services/solutions/corporate-finance"
												className="group"
											>
												<p className="text-sm text-genesis-navy font-medium group-hover:text-genesis-gold transition-colors">
													Corporate Finance
												</p>
												<p className="text-xs text-zinc-500">
													Financial optimization for
													institutions
												</p>
											</Link>
										</li>
										<li>
											<Link
												href="/services/solutions/marketing-growth-sales"
												className="group"
											>
												<p className="text-sm text-genesis-navy font-medium group-hover:text-genesis-gold transition-colors">
													Marketing, Growth & Sales
												</p>
												<p className="text-xs text-zinc-500">
													Customer acquisition and
													retention strategies
												</p>
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
