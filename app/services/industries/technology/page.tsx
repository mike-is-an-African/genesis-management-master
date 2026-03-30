import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	Cpu,
	Code,
	LineChart,
	Layers,
	CheckCircle2,
	Globe,
	Lock,
} from "lucide-react";

export const metadata: Metadata = {
	title: "Technology & IT Industry | Genesis Management",
	description:
		"Strategic consulting for tech companies, startups, and IT departments to accelerate innovation, optimize operations, and drive sustainable growth in rapidly evolving markets.",
};

export default function TechnologyPage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative overflow-hidden">
				{/* Background Image with Overlay */}
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-genesis-navy/70 z-10 mix-blend-multiply"></div>
					<img
						src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
						alt="Technology in Africa"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
					<div className="max-w-3xl">
						<div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
							Industries We Serve
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
							Technology & IT
						</h1>
						<div className="h-1 w-24 bg-genesis-gold mb-8"></div>
						<p className="text-xl text-white/90 mb-8 font-montserrat">
							Driving innovation and digital transformation:
							Strategic solutions for tech companies and IT
							departments to accelerate growth, optimize
							operations, and create competitive advantage.
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
								Powering Digital Innovation and Growth
							</h2>

							{/* Technology Overview Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Cpu className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Technology Industry Overview
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									The technology landscape is evolving at an
									unprecedented pace, creating both
									opportunities and challenges for companies
									across the digital spectrum.
								</p>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									At Genesis Management, we partner with
									technology companies, startups, and IT
									departments to navigate complex digital
									transformations, accelerate innovation, and
									create sustainable competitive advantage.
									Our consultants bring deep industry
									expertise and practical experience to help
									you capitalize on emerging technologies
									while managing the risks inherent in rapid
									change.
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
												Accelerating pace of
												technological change
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Intensifying competition for
												talent and market share
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Growing cybersecurity and
												regulatory challenges
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Balancing innovation with
												operational stability
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Evolving business models and
												monetization strategies
											</span>
										</li>
									</ul>
								</div>
							</div>

							{/* Product Strategy Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Code className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Product Strategy & Development
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help technology companies develop
									innovative products that address real market
									needs and create sustainable competitive
									advantage. Our product strategy experts
									combine deep technical knowledge with market
									insights to guide successful product
									development from concept to launch.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Product Roadmap Development
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Create clear, compelling product
											roadmaps that align with your
											business strategy and market
											opportunities. We help you
											prioritize features, establish
											realistic timelines, allocate
											resources effectively, and
											communicate your vision to
											stakeholders in ways that drive
											alignment and momentum.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											User Experience Design
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Develop exceptional user experiences
											that drive adoption, engagement, and
											loyalty. We help you conduct user
											research, create intuitive
											interfaces, implement design
											thinking methodologies, and
											establish UX processes that
											consistently deliver outstanding
											digital experiences.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Product Launch & Go-to-Market
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Maximize the impact of your product
											launches with comprehensive
											go-to-market strategies. We help you
											develop positioning, create
											compelling messaging, establish
											pricing strategies, prepare sales
											teams, and coordinate
											cross-functional efforts to ensure
											successful market entry.
										</p>
									</div>
								</div>
							</div>

							{/* Growth & Scaling Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<LineChart className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Growth & Scaling
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help technology companies navigate the
									challenges of rapid growth and scale
									operations efficiently to support expansion.
									Our growth experts provide guidance on
									organizational development, funding
									strategies, and operational optimization to
									support sustainable scaling.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Customer Acquisition & Retention
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Develop effective strategies to
											acquire new customers and maximize
											lifetime value. We help you optimize
											marketing channels, improve
											conversion rates, implement
											retention programs, and leverage
											data analytics to continuously
											refine your customer growth
											strategies.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Organizational Scaling
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Build organizational structures and
											processes that support rapid growth
											without impeding innovation. We help
											you design scalable organizational
											models, implement effective talent
											acquisition and development
											strategies, and establish governance
											frameworks that maintain agility.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											International Expansion
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Accelerate global growth with
											strategic approaches to
											international markets. We help you
											assess market opportunities,
											navigate regulatory requirements,
											adapt products for local needs,
											establish regional operations, and
											build partnerships that support
											successful global expansion.
										</p>
									</div>
								</div>
							</div>

							{/* Digital Transformation Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Layers className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Digital Transformation
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help organizations across industries
									leverage technology to transform their
									operations, customer experiences, and
									business models. Our digital transformation
									experts combine strategic vision with
									practical implementation expertise to drive
									meaningful change.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Technology Strategy & Architecture
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Develop comprehensive technology
											strategies and architectures that
											support business objectives. We help
											you assess your current state,
											define future technology visions,
											create architectural blueprints, and
											build implementation roadmaps that
											drive digital maturity.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Cloud Transformation
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Accelerate your move to the cloud
											with strategies that maximize
											benefits while managing risks. We
											help you develop cloud migration
											plans, select appropriate platforms,
											design secure architectures,
											optimize costs, and establish cloud
											governance frameworks.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											AI & Data Strategy
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Harness the power of artificial
											intelligence and data to drive
											business value. We help you develop
											data strategies, implement AI use
											cases, establish data governance
											frameworks, and build capabilities
											that turn information into strategic
											advantage.
										</p>
									</div>
								</div>
							</div>

							{/* Cybersecurity Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Lock className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Cybersecurity & Risk Management
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help technology companies and IT
									departments implement comprehensive
									cybersecurity strategies that protect
									critical assets while enabling innovation
									and growth. Our security experts bring deep
									expertise in risk management, compliance,
									and security operations.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Security Strategy & Governance
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Build comprehensive security
											programs that align with business
											objectives and risk tolerance. We
											help you develop security
											strategies, establish governance
											frameworks, implement policies and
											standards, and create security
											awareness programs that foster a
											culture of security.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Security Operations
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Enhance your ability to detect and
											respond to security threats
											effectively. We help you design
											security operations centers,
											implement security monitoring
											solutions, develop incident response
											capabilities, and establish
											continuous improvement processes
											that strengthen your security
											posture.
										</p>
									</div>
								</div>
							</div>

							{/* Case Study Section */}
							<div className="bg-zinc-50 p-8 rounded-sm mb-12">
								<h3 className="text-xl md:text-2xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
									Success Story: SaaS Platform Transformation
								</h3>
								<p className="text-lg text-zinc-600 mb-4 font-montserrat">
									We partnered with a rapidly growing SaaS
									company facing challenges with scalability,
									market positioning, and organizational
									alignment. Our team implemented a
									comprehensive transformation strategy that
									included:
								</p>
								<ul className="list-disc pl-6 mb-6 text-zinc-600 font-montserrat space-y-2">
									<li>
										Refining product strategy and roadmap to
										address emerging market opportunities
									</li>
									<li>
										Implementing cloud architecture
										improvements that increased system
										reliability by 99.9%
									</li>
									<li>
										Developing a customer success program
										that reduced churn by 45%
									</li>
									<li>
										Creating a scalable organizational
										structure that supported 3x growth in
										two years
									</li>
								</ul>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									The result was a 150% increase in annual
									recurring revenue and successful positioning
									for a Series C funding round that valued the
									company at five times its previous
									valuation.
								</p>
							</div>

							{/* CTA Box */}
							<div className="bg-genesis-navy p-8 rounded-sm text-white">
								<h3 className="text-xl font-medium mb-4 font-playfair">
									Ready to Accelerate Your Technology Success?
								</h3>
								<p className="mb-6 font-montserrat">
									Our team of technology experts is ready to
									help you optimize your operations,
									accelerate innovation, and build sustainable
									competitive advantage in rapidly evolving
									markets.
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
											name: "Technology & IT",
											href: "/services/industries/technology",
											current: true,
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
									Our Technology Expertise
								</h3>
								<ul className="space-y-3 mb-8">
									{[
										"Product Strategy & Development",
										"Growth & Scaling",
										"Digital Transformation",
										"Cloud Architecture",
										"Cybersecurity & Risk Management",
										"Data & AI Strategy",
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
										"Genesis Management provided the
										strategic clarity and operational
										expertise we needed to scale our
										technology company. Their guidance
										helped us navigate complex market
										dynamics, refine our product strategy,
										and build an organization capable of
										sustainable growth."
									</p>
									<p className="text-genesis-navy font-medium text-sm">
										— CTO, Enterprise SaaS Platform
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
													Funding strategies for
													technology ventures
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
													Go-to-market strategies for
													technology products
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
