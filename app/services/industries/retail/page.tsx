import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	ShoppingBag,
	LineChart,
	Store,
	Globe,
	CheckCircle2,
	Smartphone,
	Users,
} from "lucide-react";

export const metadata: Metadata = {
	title: "Retail Industry | Genesis Management",
	description:
		"Strategic consulting for retail businesses navigating digital transformation, changing consumer behaviors, and evolving market dynamics to drive growth and enhance customer experiences.",
};

export default function RetailPage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative overflow-hidden">
				{/* Background Image with Overlay */}
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-genesis-navy/70 z-10 mix-blend-multiply"></div>
					<img
						src="https://images.unsplash.com/photo-1594115810247-b4db67298db3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
						alt="Retail in Africa"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
					<div className="max-w-3xl">
						<div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
							Industries We Serve
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
							Retail
						</h1>
						<div className="h-1 w-24 bg-genesis-gold mb-8"></div>
						<p className="text-xl text-white/90 mb-8 font-montserrat">
							Transforming retail experiences for tomorrow's
							consumers: Strategic solutions to enhance customer
							engagement, optimize operations, and drive
							profitable growth in a rapidly evolving marketplace.
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
								Retail Excellence in a Digital Age
							</h2>

							{/* Retail Overview Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<ShoppingBag className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Retail Industry Overview
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									The retail landscape is experiencing
									unprecedented transformation, driven by
									changing consumer behaviors, digital
									disruption, supply chain evolution, and
									heightened competition for customer loyalty.
								</p>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									At Genesis Management, we partner with
									retailers of all sizes to navigate these
									complex challenges and capitalize on
									emerging opportunities. Our team of retail
									experts combines deep industry knowledge
									with strategic insight to deliver practical
									solutions that enhance customer experiences,
									optimize operations, and drive sustainable
									growth.
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
												omnichannel integration
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Evolving customer expectations
												and experiences
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Supply chain disruptions and
												optimization needs
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Data-driven personalization and
												marketing
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Physical store evolution and
												experience design
											</span>
										</li>
									</ul>
								</div>
							</div>

							{/* Omnichannel Strategy Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Globe className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Omnichannel Strategy & Implementation
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help retailers create seamless,
									integrated customer experiences across all
									channels and touchpoints. Our omnichannel
									experts bring deep understanding of consumer
									behaviors, journey mapping, and technology
									integration to deliver truly connected
									retail experiences.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Omnichannel Experience Design
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Create cohesive customer journeys
											that span physical and digital
											touchpoints. We help you map current
											experiences, identify friction
											points, design future state
											journeys, and implement changes that
											enhance customer satisfaction and
											drive loyalty across channels.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Digital & Physical Integration
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Bridge the gap between online and
											offline retail experiences. We help
											you implement click-and-collect
											services, endless aisle
											capabilities, in-store digital
											experiences, mobile-enabled
											shopping, and other integrations
											that create seamless customer
											journeys.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Technology Enablement
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Select and implement the right
											technology stack to power your
											omnichannel strategy. We help you
											evaluate platforms, implement
											e-commerce solutions, integrate
											systems, and create data
											architectures that enable unified
											views of customers and inventory
											across channels.
										</p>
									</div>
								</div>
							</div>

							{/* Digital Transformation Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Smartphone className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Digital Retail Transformation
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help retailers harness the power of
									digital technologies to transform customer
									experiences, operational processes, and
									business models. Our digital experts combine
									retail knowledge with technology expertise
									to deliver practical solutions that drive
									measurable results.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											E-commerce Excellence
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Optimize your digital retail
											channels to drive engagement,
											conversion, and loyalty. We help you
											enhance website experiences,
											implement mobile shopping
											capabilities, optimize product
											discovery, streamline checkout
											processes, and create digital
											strategies that drive growth.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Advanced Analytics & Personalization
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Leverage customer data to deliver
											personalized retail experiences. We
											help you develop data strategies,
											implement analytics platforms,
											create customer segmentations,
											design recommendation engines, and
											deploy personalization solutions
											that enhance relevance and drive
											conversion.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Emerging Technologies
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Harness innovative technologies to
											create differentiated retail
											experiences. We help you evaluate
											and implement augmented reality,
											virtual try-on, artificial
											intelligence, voice commerce, and
											other emerging technologies that
											enhance customer engagement and
											drive competitive advantage.
										</p>
									</div>
								</div>
							</div>

							{/* Store Transformation Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Store className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Store Transformation
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help retailers reimagine and transform
									physical stores to create compelling
									experiences that drive traffic, engagement,
									and sales. Our store transformation experts
									bring deep knowledge of retail design,
									operations, and technology integration.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Store Experience Design
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Create compelling physical retail
											environments that engage customers
											and reflect your brand. We help you
											develop store concepts, optimize
											layouts, enhance visual
											merchandising, implement
											experiential elements, and create
											cohesive designs that differentiate
											your retail spaces.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Store Operations Excellence
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Optimize in-store processes to
											improve efficiency, service quality,
											and sales effectiveness. We help you
											enhance staff productivity,
											streamline operations, implement
											labor optimization, improve
											inventory management, and create
											consistent execution standards
											across locations.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											In-Store Technology
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Integrate digital technologies into
											physical stores to enhance customer
											experiences and operational
											efficiency. We help you implement
											mobile POS, self-checkout, digital
											signage, smart fitting rooms,
											inventory tracking, and other
											technologies that modernize the
											store environment.
										</p>
									</div>
								</div>
							</div>

							{/* Customer Strategy Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Users className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Customer Strategy & Marketing
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help retailers develop and implement
									customer-centered strategies that drive
									acquisition, engagement, and loyalty. Our
									customer experts bring deep knowledge of
									retail consumer behavior, segmentation,
									loyalty programs, and marketing
									effectiveness.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Customer Insights & Segmentation
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Develop deep understanding of your
											customers to inform strategy and
											marketing. We help you gather
											customer insights, create actionable
											segmentations, develop customer
											personas, identify high-value
											segments, and use data to drive
											customer-centered decisions across
											your organization.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Loyalty & Retention Programs
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Design and implement effective
											approaches to building customer
											loyalty and increasing lifetime
											value. We help you create compelling
											loyalty programs, implement
											personalized retention strategies,
											enhance customer service models, and
											develop approaches that turn
											customers into advocates.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Digital Marketing Excellence
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Optimize your digital marketing to
											acquire and engage customers
											efficiently. We help you enhance
											search visibility, implement
											effective social strategies,
											optimize email marketing, develop
											content approaches, and create
											integrated digital marketing
											strategies that drive measurable
											results.
										</p>
									</div>
								</div>
							</div>

							{/* Supply Chain Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<LineChart className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Retail Operations & Supply Chain
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help retailers optimize their operations
									and supply chains to improve efficiency,
									agility, and customer satisfaction. Our
									operations experts bring deep knowledge of
									retail processes, inventory management,
									logistics, and fulfillment strategies.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Supply Chain Optimization
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Build efficient, responsive supply
											chains that meet customer
											expectations. We help you enhance
											demand planning, optimize inventory
											management, streamline distribution
											networks, improve supplier
											relationships, and create supply
											chain strategies that balance cost
											and service levels.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Fulfillment Excellence
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Develop efficient approaches to
											order fulfillment across channels.
											We help you implement
											ship-from-store capabilities,
											optimize warehouse operations,
											enhance last-mile delivery, improve
											returns management, and create
											seamless fulfillment experiences
											that meet customer expectations.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Retail Performance Optimization
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Improve financial performance
											through enhanced retail operations.
											We help you optimize pricing
											strategies, merchandise planning,
											category management, markdown
											optimization, space planning, and
											other core retail processes to
											maximize profitability and customer
											satisfaction.
										</p>
									</div>
								</div>
							</div>

							{/* Case Study Section */}
							<div className="bg-zinc-50 p-8 rounded-sm mb-12">
								<h3 className="text-xl md:text-2xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
									Success Story: Specialty Retailer
									Transformation
								</h3>
								<p className="text-lg text-zinc-600 mb-4 font-montserrat">
									We partnered with a mid-sized specialty
									retailer facing challenges with omnichannel
									integration, digital capabilities, and
									customer engagement. Our team implemented a
									comprehensive transformation strategy that
									included:
								</p>
								<ul className="list-disc pl-6 mb-6 text-zinc-600 font-montserrat space-y-2">
									<li>
										Developing an integrated omnichannel
										experience that increased cross-channel
										shopping by 45%
									</li>
									<li>
										Implementing personalization
										capabilities that improved online
										conversion rates by 28%
									</li>
									<li>
										Redesigning store concepts that enhanced
										customer dwell time and increased units
										per transaction
									</li>
									<li>
										Creating a unified customer data
										platform that enabled targeted marketing
										and improved ROI by 35%
									</li>
								</ul>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									The result was a significant improvement in
									customer satisfaction, a 30% increase in
									digital revenue, and a 15% overall sales
									growth, positioning the retailer as a leader
									in omnichannel retail excellence.
								</p>
							</div>

							{/* CTA Box */}
							<div className="bg-genesis-navy p-8 rounded-sm text-white">
								<h3 className="text-xl font-medium mb-4 font-playfair">
									Ready to Transform Your Retail Business?
								</h3>
								<p className="mb-6 font-montserrat">
									Our team of retail experts is ready to help
									you enhance customer experiences, optimize
									operations, and build sustainable strategies
									for growth and competitive differentiation.
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
											name: "Retail",
											href: "/services/industries/retail",
											current: true,
										},
										{
											name: "Manufacturing",
											href: "/services/industries/manufacturing",
											current: false,
										},
										{
											name: "Financial Services",
											href: "/services/industries/financial",
											current: false,
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
									Our Retail Expertise
								</h3>
								<ul className="space-y-3 mb-8">
									{[
										"Omnichannel Strategy",
										"Digital Transformation",
										"Store Experience Design",
										"Customer Analytics",
										"Supply Chain Optimization",
										"Loyalty & Personalization",
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
										"Genesis Management transformed our
										approach to retail, helping us build
										truly connected customer experiences
										across channels. Their strategic
										guidance and practical implementation
										support enabled us to navigate digital
										disruption and emerge as a leader in our
										category."
									</p>
									<p className="text-genesis-navy font-medium text-sm">
										— Chief Retail Officer, Specialty
										Retailer
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
													retail growth
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
													loyalty strategies
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
