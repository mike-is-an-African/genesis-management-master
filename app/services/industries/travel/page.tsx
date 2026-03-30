import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title: "Travel & Logistics | Genesis Management",
	description:
		"Strategic consulting for travel, transportation, and logistics companies to optimize operations, enhance customer experiences, and drive digital transformation.",
};

export default function TravelLogisticsPage() {
	return (
		<>
			{/* Hero Section */}
			<section className="relative bg-genesis-navy text-white py-20 md:py-28 pt-24 md:pt-28">
				<div className="absolute inset-0 z-0">
					<Image
						src="https://images.unsplash.com/photo-1590047698045-5edb14be0115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
						alt="Travel and Logistics in Africa"
						fill
						className="object-cover opacity-20"
						priority
					/>
				</div>

				<div className="container mx-auto px-4 relative z-10">
					<div className="relative z-50 inline-block">
						<Link
							href="/services"
							className="group mb-8 inline-flex items-center text-white/70 hover:text-white"
						>
							<ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
							<span>Back to Services</span>
						</Link>
					</div>

					<div className="max-w-3xl">
						<h1 className="text-4xl md:text-5xl font-playfair mb-6">
							Travel & Logistics
						</h1>
						<p className="text-lg md:text-xl text-white/80 mb-8 font-montserrat">
							Transforming travel and logistics operations through
							innovative strategies, digital solutions, and
							customer-centric approaches.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-genesis-gold hover:bg-genesis-gold/90 text-genesis-navy"
						>
							<a href="#contact">Schedule a Consultation</a>
						</Button>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-3 gap-12">
						{/* Sidebar */}
						<div className="md:col-span-1">
							<div className="sticky top-24">
								{/* Industry Links */}
								<div className="mb-8 bg-zinc-50 p-6 rounded-sm">
									<h3 className="text-lg font-medium mb-4 text-genesis-navy font-playfair">
										Industries
									</h3>
									<div className="space-y-1">
										<Link
											href="/services/industries/agriculture"
											className="block text-sm py-2 border-b border-zinc-200 text-zinc-600 hover:text-genesis-gold"
										>
											Agriculture
										</Link>
										<Link
											href="/services/industries/consumer-goods"
											className="block text-sm py-2 border-b border-zinc-200 text-zinc-600 hover:text-genesis-gold"
										>
											Consumer Goods
										</Link>
										<Link
											href="/services/industries/education"
											className="block text-sm py-2 border-b border-zinc-200 text-zinc-600 hover:text-genesis-gold"
										>
											Education
										</Link>
										<Link
											href="/services/industries/energy"
											className="block text-sm py-2 border-b border-zinc-200 text-zinc-600 hover:text-genesis-gold"
										>
											Energy & Mining
										</Link>
										<Link
											href="/services/industries/engineering"
											className="block text-sm py-2 border-b border-zinc-200 text-zinc-600 hover:text-genesis-gold"
										>
											Engineering & Infrastructure
										</Link>
										<Link
											href="/services/industries/financial"
											className="block text-sm py-2 border-b border-zinc-200 text-zinc-600 hover:text-genesis-gold"
										>
											Financial Services
										</Link>
										<Link
											href="/services/industries/healthcare"
											className="block text-sm py-2 border-b border-zinc-200 text-zinc-600 hover:text-genesis-gold"
										>
											Healthcare
										</Link>
										<Link
											href="/services/industries/manufacturing"
											className="block text-sm py-2 border-b border-zinc-200 text-zinc-600 hover:text-genesis-gold"
										>
											Manufacturing
										</Link>
										<Link
											href="/services/industries/operations"
											className="block text-sm py-2 border-b border-zinc-200 text-zinc-600 hover:text-genesis-gold"
										>
											Operations Management
										</Link>
										<Link
											href="/services/industries/public"
											className="block text-sm py-2 border-b border-zinc-200 text-zinc-600 hover:text-genesis-gold"
										>
											Public Sector
										</Link>
										<Link
											href="/services/industries/retail"
											className="block text-sm py-2 border-b border-zinc-200 text-zinc-600 hover:text-genesis-gold"
										>
											Retail
										</Link>
										<Link
											href="/services/industries/security"
											className="block text-sm py-2 border-b border-zinc-200 text-zinc-600 hover:text-genesis-gold"
										>
											Security
										</Link>
										<Link
											href="/services/industries/services-sector"
											className="block text-sm py-2 border-b border-zinc-200 text-zinc-600 hover:text-genesis-gold"
										>
											Services Sector
										</Link>
										<Link
											href="/services/industries/travel"
											className="block text-sm py-2 text-genesis-gold font-medium"
										>
											Travel & Logistics
										</Link>
									</div>
								</div>

								{/* Travel & Logistics Expertise */}
								<div className="mb-8 bg-zinc-50 p-6 rounded-sm">
									<h3 className="text-lg font-medium mb-4 text-genesis-navy font-playfair">
										Our Travel & Logistics Expertise
									</h3>
									<div className="space-y-3">
										<div className="flex gap-2 items-start">
											<CheckCircle2 className="h-5 w-5 text-genesis-gold flex-shrink-0 mt-0.5" />
											<span className="text-sm text-zinc-700">
												Network Optimization
											</span>
										</div>
										<div className="flex gap-2 items-start">
											<CheckCircle2 className="h-5 w-5 text-genesis-gold flex-shrink-0 mt-0.5" />
											<span className="text-sm text-zinc-700">
												Customer Experience
											</span>
										</div>
										<div className="flex gap-2 items-start">
											<CheckCircle2 className="h-5 w-5 text-genesis-gold flex-shrink-0 mt-0.5" />
											<span className="text-sm text-zinc-700">
												Digital Transformation
											</span>
										</div>
										<div className="flex gap-2 items-start">
											<CheckCircle2 className="h-5 w-5 text-genesis-gold flex-shrink-0 mt-0.5" />
											<span className="text-sm text-zinc-700">
												Operational Excellence
											</span>
										</div>
										<div className="flex gap-2 items-start">
											<CheckCircle2 className="h-5 w-5 text-genesis-gold flex-shrink-0 mt-0.5" />
											<span className="text-sm text-zinc-700">
												Sustainability
											</span>
										</div>
										<div className="flex gap-2 items-start">
											<CheckCircle2 className="h-5 w-5 text-genesis-gold flex-shrink-0 mt-0.5" />
											<span className="text-sm text-zinc-700">
												Revenue Management
											</span>
										</div>
									</div>
								</div>

								{/* Client Testimonial */}
								<div className="p-6 bg-genesis-navy text-white rounded-sm">
									<p className="italic text-sm mb-6">
										"Genesis Management's strategic guidance
										helped us transform our logistics
										network, resulting in a 22% reduction in
										operational costs and a 35% improvement
										in on-time delivery performance. Their
										deep industry expertise was invaluable
										to our success."
									</p>
									<div>
										<p className="text-sm font-medium">
											James Wilson
										</p>
										<p className="text-xs text-white/70">
											COO, Global Logistics Corporation
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Main Content */}
						<div className="md:col-span-2">
							{/* Travel & Logistics Overview */}
							<div className="mb-16">
								<h2 className="text-3xl font-playfair mb-6 text-genesis-navy">
									Navigating the Future of Travel & Logistics
								</h2>
								<p className="text-zinc-700 mb-4">
									The travel and logistics industries are
									experiencing unprecedented transformation
									driven by technological innovation, changing
									customer expectations, sustainability
									imperatives, and global disruptions.
									Organizations must adapt quickly to maintain
									competitive advantage while delivering
									exceptional customer experiences and
									operational efficiency.
								</p>
								<p className="text-zinc-700 mb-4">
									Genesis Management partners with travel,
									transportation, and logistics companies to
									navigate these challenges and transform
									their operations, customer experiences, and
									business models. Our multidisciplinary team
									combines deep industry knowledge with
									functional expertise to help clients enhance
									service delivery, optimize operations, and
									drive sustainable growth.
								</p>

								<h3 className="text-xl font-playfair mt-8 mb-4 text-genesis-navy">
									Key Industry Challenges
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
									<div className="bg-zinc-50 p-4 rounded-sm">
										<h4 className="font-medium text-genesis-navy mb-2">
											Digital Disruption
										</h4>
										<p className="text-sm text-zinc-600">
											Adapting to rapidly evolving digital
											technologies and new business models
										</p>
									</div>
									<div className="bg-zinc-50 p-4 rounded-sm">
										<h4 className="font-medium text-genesis-navy mb-2">
											Customer Expectations
										</h4>
										<p className="text-sm text-zinc-600">
											Meeting rising demands for
											personalized, seamless, and
											transparent experiences
										</p>
									</div>
									<div className="bg-zinc-50 p-4 rounded-sm">
										<h4 className="font-medium text-genesis-navy mb-2">
											Sustainability
										</h4>
										<p className="text-sm text-zinc-600">
											Addressing environmental concerns
											and regulatory requirements
										</p>
									</div>
									<div className="bg-zinc-50 p-4 rounded-sm">
										<h4 className="font-medium text-genesis-navy mb-2">
											Network Complexity
										</h4>
										<p className="text-sm text-zinc-600">
											Managing increasingly complex global
											networks and supply chains
										</p>
									</div>
								</div>
							</div>

							{/* Travel & Hospitality */}
							<div className="mb-16">
								<div className="flex items-center mb-5">
									<div className="h-10 w-10 rounded-full bg-genesis-gold/10 flex items-center justify-center mr-4">
										<div className="h-5 w-5 text-genesis-gold">
											✈️
										</div>
									</div>
									<h3 className="text-2xl font-playfair text-genesis-navy">
										Travel & Hospitality
									</h3>
								</div>
								<p className="text-zinc-700 mb-4">
									The travel and hospitality sector is
									undergoing significant transformation as
									consumer preferences evolve and digital
									technologies reshape the travel experience.
									Our travel and hospitality practice helps
									clients enhance customer experiences,
									optimize operations, and develop innovative
									business models to drive competitive
									advantage.
								</p>
								<div className="space-y-4 mt-6">
									<div className="bg-zinc-50 p-5 rounded-sm">
										<h4 className="font-medium text-genesis-navy mb-2">
											Customer Experience Design
										</h4>
										<p className="text-sm text-zinc-600">
											Development of distinctive and
											memorable travel experiences that
											drive loyalty, positive reviews, and
											premium pricing.
										</p>
									</div>
									<div className="bg-zinc-50 p-5 rounded-sm">
										<h4 className="font-medium text-genesis-navy mb-2">
											Digital Strategy
										</h4>
										<p className="text-sm text-zinc-600">
											Creation of digital strategies and
											implementation roadmaps to enhance
											customer engagement, streamline
											operations, and create new revenue
											streams.
										</p>
									</div>
									<div className="bg-zinc-50 p-5 rounded-sm">
										<h4 className="font-medium text-genesis-navy mb-2">
											Revenue Management
										</h4>
										<p className="text-sm text-zinc-600">
											Implementation of advanced analytics
											and pricing strategies to optimize
											revenue and yield across travel and
											hospitality assets.
										</p>
									</div>
								</div>
							</div>

							{/* Transportation & Logistics */}
							<div className="mb-16">
								<div className="flex items-center mb-5">
									<div className="h-10 w-10 rounded-full bg-genesis-gold/10 flex items-center justify-center mr-4">
										<div className="h-5 w-5 text-genesis-gold">
											🚚
										</div>
									</div>
									<h3 className="text-2xl font-playfair text-genesis-navy">
										Transportation & Logistics
									</h3>
								</div>
								<p className="text-zinc-700 mb-4">
									Transportation and logistics companies face
									mounting pressure to enhance efficiency,
									reduce costs, and improve service levels in
									an increasingly complex and volatile
									environment. Our transportation and
									logistics practice helps clients optimize
									their networks, enhance operational
									performance, and leverage digital
									technologies to create competitive
									advantage.
								</p>
								<div className="space-y-4 mt-6">
									<div className="bg-zinc-50 p-5 rounded-sm">
										<h4 className="font-medium text-genesis-navy mb-2">
											Network Optimization
										</h4>
										<p className="text-sm text-zinc-600">
											Strategic design and optimization of
											transportation and distribution
											networks to enhance efficiency,
											reduce costs, and improve service
											levels.
										</p>
									</div>
									<div className="bg-zinc-50 p-5 rounded-sm">
										<h4 className="font-medium text-genesis-navy mb-2">
											Last-Mile Innovation
										</h4>
										<p className="text-sm text-zinc-600">
											Development of innovative approaches
											to last-mile delivery that enhance
											customer satisfaction while managing
											costs and environmental impact.
										</p>
									</div>
									<div className="bg-zinc-50 p-5 rounded-sm">
										<h4 className="font-medium text-genesis-navy mb-2">
											Fleet Management
										</h4>
										<p className="text-sm text-zinc-600">
											Implementation of advanced fleet
											management strategies and
											technologies to optimize vehicle
											utilization, reduce maintenance
											costs, and enhance safety.
										</p>
									</div>
								</div>
							</div>

							{/* Digital Transformation */}
							<div className="mb-16">
								<div className="flex items-center mb-5">
									<div className="h-10 w-10 rounded-full bg-genesis-gold/10 flex items-center justify-center mr-4">
										<div className="h-5 w-5 text-genesis-gold">
											💻
										</div>
									</div>
									<h3 className="text-2xl font-playfair text-genesis-navy">
										Digital Transformation
									</h3>
								</div>
								<p className="text-zinc-700 mb-4">
									Digital technologies are fundamentally
									changing how travel and logistics companies
									operate and engage with customers. Our
									digital transformation practice helps
									clients leverage emerging technologies to
									enhance customer experiences, optimize
									operations, and create new business models.
								</p>
								<div className="space-y-4 mt-6">
									<div className="bg-zinc-50 p-5 rounded-sm">
										<h4 className="font-medium text-genesis-navy mb-2">
											Digital Platforms
										</h4>
										<p className="text-sm text-zinc-600">
											Development of digital platforms and
											ecosystems that enhance customer
											engagement, streamline operations,
											and create new revenue streams.
										</p>
									</div>
									<div className="bg-zinc-50 p-5 rounded-sm">
										<h4 className="font-medium text-genesis-navy mb-2">
											Advanced Analytics
										</h4>
										<p className="text-sm text-zinc-600">
											Application of data analytics, AI,
											and machine learning to enhance
											decision-making, optimize
											operations, and personalize customer
											experiences.
										</p>
									</div>
									<div className="bg-zinc-50 p-5 rounded-sm">
										<h4 className="font-medium text-genesis-navy mb-2">
											IoT & Connected Assets
										</h4>
										<p className="text-sm text-zinc-600">
											Implementation of IoT solutions to
											enhance asset tracking, monitoring,
											and management across travel and
											logistics operations.
										</p>
									</div>
								</div>
							</div>

							{/* Case Study */}
							<div className="mb-16 bg-zinc-50 p-6 rounded-sm border-l-4 border-genesis-gold">
								<h3 className="text-xl font-playfair mb-4 text-genesis-navy">
									Case Study: Global Logistics Provider
								</h3>
								<p className="text-zinc-700 mb-4 text-sm">
									A leading global logistics provider was
									facing challenges with rising costs,
									increasing customer expectations, and
									digital disruption. Genesis Management was
									engaged to help the company transform its
									operations and enhance its competitive
									position.
								</p>
								<div className="mb-4">
									<h4 className="font-medium text-genesis-navy mb-2">
										Our Approach
									</h4>
									<ul className="list-disc pl-5 text-sm text-zinc-700 space-y-1">
										<li>
											Conducted a comprehensive assessment
											of the company's network,
											operations, and digital capabilities
										</li>
										<li>
											Developed a network optimization
											strategy that balanced cost
											efficiency with service level
											requirements
										</li>
										<li>
											Implemented advanced analytics to
											enhance route planning, load
											optimization, and asset utilization
										</li>
										<li>
											Created a digital customer platform
											to enhance visibility, self-service
											capabilities, and communication
										</li>
										<li>
											Established a continuous improvement
											program to drive ongoing operational
											excellence
										</li>
									</ul>
								</div>
								<div>
									<h4 className="font-medium text-genesis-navy mb-2">
										Results
									</h4>
									<ul className="list-disc pl-5 text-sm text-zinc-700 space-y-1">
										<li>
											22% reduction in transportation
											costs
										</li>
										<li>
											35% improvement in on-time delivery
											performance
										</li>
										<li>
											18% increase in asset utilization
										</li>
										<li>
											40% reduction in customer service
											inquiries through enhanced
											self-service capabilities
										</li>
										<li>
											15% increase in customer
											satisfaction scores
										</li>
									</ul>
								</div>
							</div>

							{/* Related Solutions */}
							<div className="mb-16">
								<h3 className="text-xl font-playfair mb-6 text-genesis-navy">
									Related Solutions
								</h3>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<Link
										href="/services/digital-transformation"
										className="group block bg-white border border-zinc-200 p-5 rounded-sm hover:border-genesis-gold transition-colors"
									>
										<h4 className="font-medium text-genesis-navy group-hover:text-genesis-gold transition-colors mb-2">
											Digital Transformation
										</h4>
										<p className="text-sm text-zinc-600 mb-3">
											Leverage digital technologies to
											enhance customer experiences and
											operational efficiency
										</p>
										<div className="flex items-center text-genesis-gold text-sm">
											<span>Learn more</span>
											<ChevronRight className="h-4 w-4 ml-1" />
										</div>
									</Link>
									<Link
										href="/services/customer-experience"
										className="group block bg-white border border-zinc-200 p-5 rounded-sm hover:border-genesis-gold transition-colors"
									>
										<h4 className="font-medium text-genesis-navy group-hover:text-genesis-gold transition-colors mb-2">
											Customer Experience
										</h4>
										<p className="text-sm text-zinc-600 mb-3">
											Design and deliver exceptional
											customer experiences that drive
											loyalty and growth
										</p>
										<div className="flex items-center text-genesis-gold text-sm">
											<span>Learn more</span>
											<ChevronRight className="h-4 w-4 ml-1" />
										</div>
									</Link>
								</div>
							</div>

							{/* CTA Section */}
							<div
								id="contact"
								className="bg-genesis-navy text-white p-8 rounded-sm"
							>
								<h3 className="text-xl font-playfair mb-4">
									Ready to Transform Your Travel or Logistics
									Operations?
								</h3>
								<p className="mb-6 text-white/80">
									Contact us today to discuss how our travel
									and logistics solutions can help your
									organization enhance customer experiences,
									optimize operations, and drive sustainable
									growth.
								</p>
								<div className="flex flex-col sm:flex-row gap-4">
									<Button
										asChild
										size="lg"
										className="bg-genesis-gold hover:bg-genesis-gold/90 text-genesis-navy"
									>
										<a href="/contact">
											Schedule a Consultation
										</a>
									</Button>
									<Button
										asChild
										variant="outline"
										size="lg"
										className="border-white text-white hover:bg-white/10"
									>
										<a href="/insights">
											Explore Our Insights
										</a>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
