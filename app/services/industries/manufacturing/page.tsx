import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	Factory,
	LineChart,
	Settings,
	Truck,
	CheckCircle2,
	Recycle,
	BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
	title: "Manufacturing Industry | Genesis Management",
	description:
		"Strategic consulting services for manufacturing companies seeking to optimize operations, embrace digital transformation, and develop innovative strategies for sustainable growth.",
};

export default function ManufacturingPage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative overflow-hidden">
				{/* Background Image with Overlay */}
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-genesis-navy/70 z-10 mix-blend-multiply"></div>
					<img
						src="https://images.unsplash.com/photo-1622114849670-5e3703cca29b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
						alt="Manufacturing in Africa"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
					<div className="max-w-3xl">
						<div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
							Industries We Serve
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
							Manufacturing
						</h1>
						<div className="h-1 w-24 bg-genesis-gold mb-8"></div>
						<p className="text-xl text-white/90 mb-8 font-montserrat">
							Engineering excellence and operational innovation:
							Strategic solutions for manufacturing companies to
							optimize production, embrace digital transformation,
							and achieve sustainable growth.
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
								Transforming Manufacturing for the Future
							</h2>

							{/* Manufacturing Overview Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Factory className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Manufacturing Industry Overview
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									The manufacturing industry is experiencing
									significant transformation, driven by
									technological innovation, changing market
									demands, supply chain disruptions, and
									increasing sustainability imperatives.
								</p>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									At Genesis Management, we partner with
									manufacturers across sectors to navigate
									these challenges and capitalize on emerging
									opportunities. Our team of manufacturing
									experts combines deep industry knowledge
									with strategic insight to deliver practical
									solutions that drive operational excellence,
									innovation, and sustainable growth.
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
												Industry 4.0 implementation and
												digital transformation
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Supply chain resilience and
												optimization
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Workforce challenges and skills
												gaps
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Sustainability requirements and
												ESG pressures
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Cost pressures and global
												competition
											</span>
										</li>
									</ul>
								</div>
							</div>

							{/* Operational Excellence Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Settings className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Operational Excellence
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help manufacturing companies optimize
									their operations to improve efficiency,
									quality, and flexibility. Our manufacturing
									operations experts bring deep knowledge of
									lean principles, production systems, and
									continuous improvement methodologies to
									drive sustainable operational excellence.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Lean Manufacturing Implementation
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Improve productivity, quality, and
											lead times through effective lean
											manufacturing implementations. We
											help you assess current operations,
											identify improvement opportunities,
											implement lean tools and techniques,
											and create continuous improvement
											cultures that drive ongoing
											performance gains.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Manufacturing Process Optimization
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Enhance process efficiency,
											reliability, and flexibility to
											improve overall manufacturing
											performance. We help you analyze
											process flows, identify bottlenecks,
											optimize layouts, implement standard
											work, and develop metrics systems
											that drive continuous process
											improvement.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Quality Management Systems
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Develop robust quality management
											approaches that reduce defects and
											enhance customer satisfaction. We
											help you implement quality
											management systems, deploy
											statistical process control,
											establish effective quality metrics,
											and create problem-solving cultures
											that address root causes of quality
											issues.
										</p>
									</div>
								</div>
							</div>

							{/* Digital Transformation Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<BarChart3 className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Digital Manufacturing Transformation
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help manufacturers leverage technology to
									transform production systems, enhance
									visibility, and drive performance
									improvements. Our digital manufacturing
									experts bring deep knowledge of Industry 4.0
									technologies, systems integration, and
									implementation approaches.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Industry 4.0 Strategy
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Develop comprehensive approaches to
											implementing smart manufacturing
											technologies. We help you assess
											digital maturity, identify
											high-value opportunities, develop
											technology roadmaps, and create
											implementation plans that deliver
											tangible benefits while managing
											technological risk.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Manufacturing Systems Implementation
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Optimize your manufacturing
											technology ecosystem to enhance
											visibility and control. We help you
											evaluate technology options,
											implement manufacturing execution
											systems, integrate shop floor and
											business systems, and leverage data
											to drive continuous improvement.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Advanced Analytics & AI
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Harness the power of data to drive
											better decisions and improved
											performance. We help you develop
											analytics capabilities, implement
											predictive maintenance, optimize
											production scheduling, enhance
											quality control, and identify
											patterns that drive operational
											improvements.
										</p>
									</div>
								</div>
							</div>

							{/* Supply Chain Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Truck className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Supply Chain Optimization
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help manufacturers build resilient,
									efficient supply chains that balance cost,
									service, and risk. Our supply chain experts
									bring deep knowledge of procurement,
									logistics, inventory management, and network
									design to optimize end-to-end supply chain
									performance.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Supply Chain Strategy
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Develop comprehensive approaches to
											supply chain management that align
											with business objectives. We help
											you assess your current supply
											chain, design future state models,
											implement performance metrics, and
											create roadmaps for transformation
											that enhance competitiveness.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Inventory Optimization
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Balance inventory investment with
											service level requirements through
											effective inventory management. We
											help you analyze inventory
											performance, implement appropriate
											inventory policies, optimize safety
											stocks, enhance demand planning, and
											establish inventory controls that
											improve working capital efficiency.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Supply Chain Resilience
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Build supply chains that can
											withstand disruptions while
											maintaining efficient operations. We
											help you assess supply chain risks,
											develop mitigation strategies,
											implement early warning systems,
											enhance supplier management, and
											create contingency plans that ensure
											business continuity.
										</p>
									</div>
								</div>
							</div>

							{/* Sustainability Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Recycle className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Sustainable Manufacturing
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help manufacturers develop and implement
									sustainability strategies that reduce
									environmental impact while creating business
									value. Our sustainability experts bring deep
									knowledge of sustainable manufacturing
									practices, circular economy principles, and
									ESG reporting.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Sustainability Strategy
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Develop comprehensive approaches to
											sustainability that create
											environmental, social, and business
											value. We help you assess
											sustainability impacts, identify
											opportunities, establish goals, and
											create implementation roadmaps that
											integrate sustainability into
											business operations.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Circular Economy Implementation
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Transform linear production models
											into circular systems that reduce
											waste and create value. We help you
											assess circular opportunities,
											redesign products and processes,
											establish material recovery systems,
											and develop business models that
											capture value from circular
											approaches.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Energy & Resource Efficiency
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Reduce environmental impact and
											costs through enhanced resource
											utilization. We help you conduct
											energy and resource assessments,
											identify efficiency opportunities,
											implement improvement projects, and
											develop management systems that
											drive ongoing optimization of
											resource use.
										</p>
									</div>
								</div>
							</div>

							{/* Growth Strategy Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<LineChart className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Growth & Innovation Strategy
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help manufacturers develop strategies for
									sustainable growth through product
									innovation, market expansion, and business
									model transformation. Our strategy experts
									bring deep knowledge of manufacturing
									trends, competitive dynamics, and innovation
									approaches.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Product Innovation Strategy
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Develop approaches to product
											innovation that drive growth and
											differentiation. We help you assess
											market needs, identify innovation
											opportunities, establish innovation
											processes, and create product
											roadmaps that align with market
											trends and business objectives.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Market Expansion Strategy
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Identify and capitalize on
											opportunities to grow in new markets
											and segments. We help you assess
											market opportunities, develop entry
											strategies, build go-to-market
											approaches, and create
											implementation plans that support
											successful market expansion.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Business Model Innovation
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Transform traditional manufacturing
											business models to create new
											sources of value. We help you assess
											alternative models, develop
											service-based offers, explore
											outcome-based contracts, and
											implement approaches that enhance
											customer value while creating new
											revenue streams.
										</p>
									</div>
								</div>
							</div>

							{/* Case Study Section */}
							<div className="bg-zinc-50 p-8 rounded-sm mb-12">
								<h3 className="text-xl md:text-2xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
									Success Story: Manufacturing Digital
									Transformation
								</h3>
								<p className="text-lg text-zinc-600 mb-4 font-montserrat">
									We partnered with a mid-sized manufacturing
									company facing challenges with operational
									visibility, quality consistency, and supply
									chain reliability. Our team implemented a
									comprehensive transformation strategy that
									included:
								</p>
								<ul className="list-disc pl-6 mb-6 text-zinc-600 font-montserrat space-y-2">
									<li>
										Implementing a manufacturing execution
										system that provided real-time
										visibility into operations
									</li>
									<li>
										Deploying predictive quality analytics
										that reduced defect rates by 35%
									</li>
									<li>
										Redesigning supply chain processes that
										improved on-time delivery by 28%
									</li>
									<li>
										Establishing a digital performance
										management system that enhanced
										productivity by 18%
									</li>
								</ul>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									The result was a significant improvement in
									operational performance, a 22% increase in
									manufacturing throughput, and a 15%
									reduction in production costs, positioning
									the company for sustained competitive
									advantage in their market.
								</p>
							</div>

							{/* CTA Box */}
							<div className="bg-genesis-navy p-8 rounded-sm text-white">
								<h3 className="text-xl font-medium mb-4 font-playfair">
									Ready to Transform Your Manufacturing
									Operations?
								</h3>
								<p className="mb-6 font-montserrat">
									Our team of manufacturing experts is ready
									to help you optimize operations, implement
									digital technologies, and build sustainable
									strategies for growth and competitiveness.
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
											current: true,
										},
										{
											name: "Operations Management",
											href: "/services/industries/operations",
											current: false,
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
									Our Manufacturing Expertise
								</h3>
								<ul className="space-y-3 mb-8">
									{[
										"Operational Excellence",
										"Digital Manufacturing",
										"Supply Chain Optimization",
										"Sustainable Manufacturing",
										"Product Innovation",
										"Growth Strategy",
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
										"Genesis Management helped us transform
										our manufacturing operations through a
										combination of lean principles and
										digital technologies. Their practical
										approach and deep industry knowledge
										enabled us to achieve significant
										improvements in productivity, quality,
										and customer satisfaction."
									</p>
									<p className="text-genesis-navy font-medium text-sm">
										— Operations Director, Precision
										Manufacturing Company
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
													Financial strategies for
													manufacturing firms
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
													Market development for
													manufacturing products
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
