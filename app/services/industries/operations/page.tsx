import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	Settings,
	CheckCircle2,
	ClipboardList,
	TrendingUp,
	Truck,
	DollarSign,
} from "lucide-react";

export const metadata: Metadata = {
	title: "Operations Management | Genesis Management",
	description:
		"Optimize your operations for peak efficiency and competitive advantage with Genesis Management's operations consulting services.",
};

export default function OperationsPage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative overflow-hidden">
				{/* Background Image with Overlay */}
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-genesis-navy/70 z-10 mix-blend-multiply"></div>
					<img
						src="https://images.unsplash.com/photo-1627561553367-345e345391fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
						alt="Operations Management in Africa"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
					<div className="max-w-3xl">
						<div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
							Industries We Serve
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
							Operations Management
						</h1>
						<div className="h-1 w-24 bg-genesis-gold mb-8"></div>
						<p className="text-xl text-white/90 mb-8 font-montserrat">
							Drive operational excellence and unlock sustainable
							competitive advantage through strategic process
							optimization and efficiency improvements.
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
								Operations Excellence in Modern Business
							</h2>

							{/* Operations Management Overview Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Settings className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Industry Overview
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									In today's competitive landscape,
									operational excellence is not merely a
									goal—it's a critical requirement for
									sustainable success. Organizations across
									industries face mounting pressure to deliver
									superior products and services while
									managing costs, mitigating risks, and
									adapting to evolving market dynamics.
								</p>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									At Genesis Management, we partner with
									clients to transform their operations,
									enhance efficiency, and build resilient,
									agile processes that drive competitive
									advantage. Our team of operations experts
									combines deep industry knowledge with proven
									methodologies to deliver practical solutions
									that generate tangible results.
								</p>

								<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold mb-12">
									<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
										Key Challenges
									</h4>
									<ul className="space-y-3 text-zinc-600 font-montserrat">
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Improving efficiency and
												reducing operational costs
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Enhancing supply chain
												resilience and agility
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Optimizing inventory management
												and reducing waste
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Implementing effective quality
												management systems
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Leveraging data and analytics
												for operational insights
											</span>
										</li>
									</ul>
								</div>
							</div>

							{/* Process Optimization Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<ClipboardList className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Process Optimization & Efficiency
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help organizations streamline their
									processes, eliminate waste, and improve
									overall operational efficiency. Our experts
									employ proven methodologies such as Lean Six
									Sigma to identify improvement opportunities
									and implement sustainable changes.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Value Stream Mapping & Analysis
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Identify and eliminate
											non-value-added activities through
											comprehensive value stream mapping
											and analysis. We help you visualize
											your current state processes,
											identify bottlenecks and
											inefficiencies, and design future
											state processes that optimize flow
											and reduce lead times.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Lean Six Sigma Implementation
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Implement Lean Six Sigma principles
											and tools to drive continuous
											improvement, reduce defects, and
											enhance quality. We provide
											training, coaching, and project
											support to help you build a culture
											of operational excellence and
											achieve measurable results.
										</p>
									</div>
								</div>
							</div>

							{/* Case Study Section */}
							<div className="bg-zinc-50 p-8 rounded-sm mb-12">
								<h3 className="text-xl md:text-2xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
									Success Story: Streamlining Manufacturing
									Operations
								</h3>
								<p className="text-lg text-zinc-600 mb-4 font-montserrat">
									We partnered with a global manufacturing
									company to optimize its production processes
									and reduce operational costs. Our team
									implemented a comprehensive strategy that
									included:
								</p>
								<ul className="list-disc pl-6 mb-6 text-zinc-600 font-montserrat space-y-2">
									<li>
										Conducting a detailed value stream
										analysis to identify inefficiencies
									</li>
									<li>
										Implementing Lean manufacturing
										principles to reduce waste and improve
										flow
									</li>
									<li>
										Optimizing inventory management to
										reduce holding costs and stockouts
									</li>
									<li>
										Developing a continuous improvement
										culture through training and coaching
									</li>
								</ul>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									The result was a 37% reduction in lead
									times, a 28% increase in production
									throughput, and a 15% decrease in
									operational costs, significantly enhancing
									the company's competitiveness and
									profitability.
								</p>
							</div>

							{/* CTA Box */}
							<div className="bg-genesis-navy p-8 rounded-sm text-white">
								<h3 className="text-xl font-medium mb-4 font-playfair">
									Ready to Optimize Your Operations?
								</h3>
								<p className="mb-6 font-montserrat">
									Our team of operations management experts is
									ready to help you streamline processes,
									enhance efficiency, and build a resilient,
									agile operation that drives sustainable
									growth.
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
										{
											name: "Energy & Mining",
											href: "/services/industries/energy",
											current: false,
										},
										{
											name: "Engineering & Infrastructure",
											href: "/services/industries/engineering",
											current: false,
										},
										{
											name: "Financial Services",
											href: "/services/industries/financial-services",
											current: false,
										},
										{
											name: "Healthcare",
											href: "/services/industries/healthcare",
											current: false,
										},
										{
											name: "Manufacturing",
											href: "/services/industries/manufacturing",
											current: false,
										},
										{
											name: "Operations Management",
											href: "/services/industries/operations",
											current: true,
										},
										{
											name: "Public Sector",
											href: "/services/industries/public",
											current: false,
										},
										{
											name: "Retail",
											href: "/services/industries/retail",
											current: false,
										},
										{
											name: "Security",
											href: "/services/industries/security",
											current: false,
										},
										{
											name: "Services Sector",
											href: "/services/industries/services-sector",
											current: false,
										},
										{
											name: "Technology",
											href: "/services/industries/technology",
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
									Our Operations Management Expertise
								</h3>
								<ul className="space-y-3 mb-8">
									{[
										"Process Optimization & Efficiency",
										"Supply Chain Management",
										"Inventory Optimization",
										"Lean Six Sigma Implementation",
										"Quality Management Systems",
										"Performance Metrics & KPIs",
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
										"Genesis Management helped us identify
										critical operational bottlenecks and
										implement targeted solutions that
										reduced our lead times by 37% and
										increased throughput by 28%. Their
										structured approach to operational
										excellence has transformed our
										business."
									</p>
									<p className="text-genesis-navy font-medium text-sm">
										— COO, Global Manufacturing Inc.
									</p>
								</div>

								<div className="border-t border-zinc-200 pt-6">
									<h3 className="text-lg font-medium mb-4 font-playfair text-genesis-navy">
										Related Solutions
									</h3>
									<ul className="space-y-4">
										<li>
											<Link
												href="/services/solutions/supply-chain-management"
												className="group"
											>
												<p className="text-sm text-genesis-navy font-medium group-hover:text-genesis-gold transition-colors">
													Supply Chain Management
												</p>
												<p className="text-xs text-zinc-500">
													Building resilient and
													efficient supply chains
												</p>
											</Link>
										</li>
										<li>
											<Link
												href="/services/solutions/process-improvement"
												className="group"
											>
												<p className="text-sm text-genesis-navy font-medium group-hover:text-genesis-gold transition-colors">
													Process Improvement
												</p>
												<p className="text-xs text-zinc-500">
													Streamlining workflows and
													enhancing productivity
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
