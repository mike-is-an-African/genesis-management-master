import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	Briefcase,
	BarChart3,
	Building2,
	GraduationCap,
	ShoppingCart,
	Sprout,
	Heart,
	Cpu,
	Factory,
	ShoppingBag,
	Settings,
	Zap,
	Landmark,
	Shield,
	Plane,
	Users,
} from "lucide-react";

export const metadata: Metadata = {
	title: "Our Expertise | Genesis Management",
	description:
		"Discover our comprehensive range of services and industry expertise at Genesis Management Consultancy, where we empower businesses to achieve sustainable growth and success.",
};

export default function ServicesPage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative overflow-hidden">
				{/* Background Image with Overlay */}
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-genesis-navy/70 z-10 mix-blend-multiply"></div>
					<img
						src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
						alt="Business professionals in a meeting"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
					<div className="max-w-3xl">
						<div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
							Our Expertise
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
							Building Foundations for Business Success
						</h1>
						<div className="h-1 w-24 bg-genesis-gold mb-8"></div>
						<p className="text-xl text-white/90 mb-8 font-montserrat">
							We help build the necessary infrastructure around
							great business ideas, enabling the realization and
							real-life impact of innovative and profitable
							ventures.
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

			{/* Value Proposition */}
			<section className="py-16 md:py-20 bg-zinc-50">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
							How We Assist Clients
						</h2>
						<div className="h-1 w-24 bg-genesis-gold mb-8 mx-auto"></div>
						<p className="text-lg text-zinc-700 font-montserrat">
							The client is likely an entrepreneur, a business
							person with an idea. GMC helps build the necessary
							infrastructure around great business ideas. To
							enable the realization and real life impact of
							innovative and profitable business ideas. We handle
							the technicalities of management so the client
							maintains focus on the core mission of their
							enterprise.
						</p>
					</div>
				</div>
			</section>

			{/* Solutions */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy text-center">
						Our Solutions
					</h2>
					<div className="h-1 w-24 bg-genesis-gold mb-12 mx-auto"></div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Corporate Finance */}
						<div className="bg-white border border-zinc-200 rounded-sm overflow-hidden shadow-subtle transition-all hover:shadow-md group">
							<div className="h-48 overflow-hidden relative">
								<div className="absolute inset-0 bg-genesis-navy/20 group-hover:bg-genesis-navy/10 transition-colors z-10"></div>
								<img
									src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
									alt="Corporate Finance"
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center mb-3">
									<Briefcase className="w-5 h-5 text-genesis-gold mr-2" />
									<h3 className="text-xl font-medium font-playfair text-genesis-navy">
										Corporate Finance
									</h3>
								</div>
								<p className="text-zinc-600 mb-4 font-montserrat">
									Empower your growth journey with strategic
									financial mastery from business accounting
									to tax management and investment strategy.
								</p>
								<Link
									href="/services/solutions/corporate-finance"
									className="inline-flex items-center text-genesis-gold font-medium text-sm transition-colors hover:text-genesis-navy"
								>
									Learn more
									<ArrowRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>

						{/* Marketing, Growth & Sales */}
						<div className="bg-white border border-zinc-200 rounded-sm overflow-hidden shadow-subtle transition-all hover:shadow-md group">
							<div className="h-48 overflow-hidden relative">
								<div className="absolute inset-0 bg-genesis-navy/20 group-hover:bg-genesis-navy/10 transition-colors z-10"></div>
								<img
									src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
									alt="Marketing, Growth & Sales"
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center mb-3">
									<BarChart3 className="w-5 h-5 text-genesis-gold mr-2" />
									<h3 className="text-xl font-medium font-playfair text-genesis-navy">
										Marketing, Growth & Sales
									</h3>
								</div>
								<p className="text-zinc-600 mb-4 font-montserrat">
									Boost your business with strategic
									marketing, targeted sales initiatives, and
									scalable growth solutions to outperform
									competitors.
								</p>
								<Link
									href="/services/solutions/marketing-growth-sales"
									className="inline-flex items-center text-genesis-gold font-medium text-sm transition-colors hover:text-genesis-navy"
								>
									Learn more
									<ArrowRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>

						{/* Company Registration */}
						<div className="bg-white border border-zinc-200 rounded-sm overflow-hidden shadow-subtle transition-all hover:shadow-md group">
							<div className="h-48 overflow-hidden relative">
								<div className="absolute inset-0 bg-genesis-navy/20 group-hover:bg-genesis-navy/10 transition-colors z-10"></div>
								<img
									src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
									alt="Company Registration"
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center mb-3">
									<Building2 className="w-5 h-5 text-genesis-gold mr-2" />
									<h3 className="text-xl font-medium font-playfair text-genesis-navy">
										Company Registration
									</h3>
								</div>
								<p className="text-zinc-600 mb-4 font-montserrat">
									Turn your entrepreneurial dreams into
									reality with our comprehensive company
									registration, incorporation, and
									formalization services.
								</p>
								<Link
									href="/services/solutions/company-registration"
									className="inline-flex items-center text-genesis-gold font-medium text-sm transition-colors hover:text-genesis-navy"
								>
									Learn more
									<ArrowRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Industries */}
			<section className="py-16 md:py-24 bg-zinc-50">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy text-center">
						Industries We Serve
					</h2>
					<div className="h-1 w-24 bg-genesis-gold mb-12 mx-auto"></div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Agriculture */}
						<div className="bg-white border border-zinc-200 rounded-sm overflow-hidden shadow-subtle transition-all hover:shadow-md group">
							<div className="h-48 overflow-hidden relative">
								<div className="absolute inset-0 bg-genesis-navy/20 group-hover:bg-genesis-navy/10 transition-colors z-10"></div>
								<img
									src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
									alt="Agriculture"
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center mb-3">
									<Sprout className="w-5 h-5 text-genesis-gold mr-2" />
									<h3 className="text-xl font-medium font-playfair text-genesis-navy">
										Agriculture
									</h3>
								</div>
								<p className="text-zinc-600 mb-4 font-montserrat">
									Cultivating prosperity and harvesting
									success: Revolutionizing agribusiness with
									strategic solutions from seed to market.
								</p>
								<Link
									href="/services/industries/agriculture"
									className="inline-flex items-center text-genesis-gold font-medium text-sm transition-colors hover:text-genesis-navy"
								>
									Learn more
									<ArrowRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>

						{/* Healthcare */}
						<div className="bg-white border border-zinc-200 rounded-sm overflow-hidden shadow-subtle transition-all hover:shadow-md group">
							<div className="h-48 overflow-hidden relative">
								<div className="absolute inset-0 bg-genesis-navy/20 group-hover:bg-genesis-navy/10 transition-colors z-10"></div>
								<img
									src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
									alt="Healthcare"
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center mb-3">
									<Heart className="w-5 h-5 text-genesis-gold mr-2" />
									<h3 className="text-xl font-medium font-playfair text-genesis-navy">
										Healthcare
									</h3>
								</div>
								<p className="text-zinc-600 mb-4 font-montserrat">
									Advancing patient care through strategic
									innovation: Optimizing operations and
									enhancing outcomes for healthcare
									organizations.
								</p>
								<Link
									href="/services/industries/healthcare"
									className="inline-flex items-center text-genesis-gold font-medium text-sm transition-colors hover:text-genesis-navy"
								>
									Learn more
									<ArrowRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>

						{/* Technology & IT */}
						<div className="bg-white border border-zinc-200 rounded-sm overflow-hidden shadow-subtle transition-all hover:shadow-md group">
							<div className="h-48 overflow-hidden relative">
								<div className="absolute inset-0 bg-genesis-navy/20 group-hover:bg-genesis-navy/10 transition-colors z-10"></div>
								<img
									src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
									alt="Technology & IT"
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center mb-3">
									<Cpu className="w-5 h-5 text-genesis-gold mr-2" />
									<h3 className="text-xl font-medium font-playfair text-genesis-navy">
										Technology & IT
									</h3>
								</div>
								<p className="text-zinc-600 mb-4 font-montserrat">
									Driving innovation and digital
									transformation: Strategic solutions for tech
									companies and IT departments to accelerate
									growth.
								</p>
								<Link
									href="/services/industries/technology"
									className="inline-flex items-center text-genesis-gold font-medium text-sm transition-colors hover:text-genesis-navy"
								>
									Learn more
									<ArrowRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>

						{/* Financial Services */}
						<div className="bg-white border border-zinc-200 rounded-sm overflow-hidden shadow-subtle transition-all hover:shadow-md group">
							<div className="h-48 overflow-hidden relative">
								<div className="absolute inset-0 bg-genesis-navy/20 group-hover:bg-genesis-navy/10 transition-colors z-10"></div>
								<img
									src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
									alt="Financial Services"
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center mb-3">
									<Briefcase className="w-5 h-5 text-genesis-gold mr-2" />
									<h3 className="text-xl font-medium font-playfair text-genesis-navy">
										Financial Services
									</h3>
								</div>
								<p className="text-zinc-600 mb-4 font-montserrat">
									Navigating complexity with confidence:
									Driving growth and optimization for
									financial institutions in a rapidly evolving
									landscape.
								</p>
								<Link
									href="/services/industries/financial"
									className="inline-flex items-center text-genesis-gold font-medium text-sm transition-colors hover:text-genesis-navy"
								>
									Learn more
									<ArrowRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>

						{/* Manufacturing */}
						<div className="bg-white border border-zinc-200 rounded-sm overflow-hidden shadow-subtle transition-all hover:shadow-md group">
							<div className="h-48 overflow-hidden relative">
								<div className="absolute inset-0 bg-genesis-navy/20 group-hover:bg-genesis-navy/10 transition-colors z-10"></div>
								<img
									src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
									alt="Manufacturing"
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center mb-3">
									<Factory className="w-5 h-5 text-genesis-gold mr-2" />
									<h3 className="text-xl font-medium font-playfair text-genesis-navy">
										Manufacturing
									</h3>
								</div>
								<p className="text-zinc-600 mb-4 font-montserrat">
									Engineering excellence and operational
									innovation: Optimizing production processes
									and driving sustainable growth for
									manufacturers.
								</p>
								<Link
									href="/services/industries/manufacturing"
									className="inline-flex items-center text-genesis-gold font-medium text-sm transition-colors hover:text-genesis-navy"
								>
									Learn more
									<ArrowRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>

						{/* Operations Management */}
						<div className="bg-white border border-zinc-200 rounded-sm overflow-hidden shadow-subtle transition-all hover:shadow-md group">
							<div className="h-48 overflow-hidden relative">
								<div className="absolute inset-0 bg-genesis-navy/20 group-hover:bg-genesis-navy/10 transition-colors z-10"></div>
								<img
									src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
									alt="Operations Management"
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center mb-3">
									<Settings className="w-5 h-5 text-genesis-gold mr-2" />
									<h3 className="text-xl font-medium font-playfair text-genesis-navy">
										Operations Management
									</h3>
								</div>
								<p className="text-zinc-600 mb-4 font-montserrat">
									Drive operational excellence and unlock
									sustainable competitive advantage through
									strategic process optimization and
									efficiency improvements.
								</p>
								<Link
									href="/services/industries/operations"
									className="inline-flex items-center text-genesis-gold font-medium text-sm transition-colors hover:text-genesis-navy"
								>
									Learn more
									<ArrowRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>

						{/* Energy & Mining */}
						<div className="bg-white border border-zinc-200 rounded-sm overflow-hidden shadow-subtle transition-all hover:shadow-md group">
							<div className="h-48 overflow-hidden relative">
								<div className="absolute inset-0 bg-genesis-navy/20 group-hover:bg-genesis-navy/10 transition-colors z-10"></div>
								<img
									src="https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
									alt="Energy and Mining"
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center mb-3">
									<Zap className="w-5 h-5 text-genesis-gold mr-2" />
									<h3 className="text-xl font-medium font-playfair text-genesis-navy">
										Energy & Mining
									</h3>
								</div>
								<p className="text-zinc-600 mb-4 font-montserrat">
									Navigate the complex energy transition and
									resource challenges with strategic solutions
									that balance sustainability, profitability,
									and operational excellence.
								</p>
								<Link
									href="/services/industries/energy"
									className="inline-flex items-center text-genesis-gold font-medium text-sm transition-colors hover:text-genesis-navy"
								>
									Learn more
									<ArrowRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>

						{/* Engineering & Infrastructure */}
						<div className="bg-white border border-zinc-200 rounded-sm overflow-hidden shadow-subtle transition-all hover:shadow-md group">
							<div className="h-48 overflow-hidden relative">
								<div className="absolute inset-0 bg-genesis-navy/20 group-hover:bg-genesis-navy/10 transition-colors z-10"></div>
								<img
									src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
									alt="Engineering and Infrastructure"
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center mb-3">
									<Building2 className="w-5 h-5 text-genesis-gold mr-2" />
									<h3 className="text-xl font-medium font-playfair text-genesis-navy">
										Engineering & Infrastructure
									</h3>
								</div>
								<p className="text-zinc-600 mb-4 font-montserrat">
									Building resilient, sustainable, and
									innovative infrastructure solutions that
									transform communities and drive economic
									growth.
								</p>
								<Link
									href="/services/industries/engineering"
									className="inline-flex items-center text-genesis-gold font-medium text-sm transition-colors hover:text-genesis-navy"
								>
									Learn more
									<ArrowRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>

						{/* Public Sector */}
						<div className="bg-white border border-zinc-200 rounded-sm overflow-hidden shadow-subtle transition-all hover:shadow-md group">
							<div className="h-48 overflow-hidden relative">
								<div className="absolute inset-0 bg-genesis-navy/20 group-hover:bg-genesis-navy/10 transition-colors z-10"></div>
								<img
									src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
									alt="Public Sector"
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center mb-3">
									<Landmark className="w-5 h-5 text-genesis-gold mr-2" />
									<h3 className="text-xl font-medium font-playfair text-genesis-navy">
										Public Sector
									</h3>
								</div>
								<p className="text-zinc-600 mb-4 font-montserrat">
									Transforming public service delivery through
									innovative strategies, operational
									excellence, and citizen-centric approaches.
								</p>
								<Link
									href="/services/industries/public"
									className="inline-flex items-center text-genesis-gold font-medium text-sm transition-colors hover:text-genesis-navy"
								>
									Learn more
									<ArrowRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>

						{/* Consumer Goods */}
						<div className="bg-white border border-zinc-200 rounded-sm overflow-hidden shadow-subtle transition-all hover:shadow-md group">
							<div className="h-48 overflow-hidden relative">
								<div className="absolute inset-0 bg-genesis-navy/20 group-hover:bg-genesis-navy/10 transition-colors z-10"></div>
								<img
									src="https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2095&q=80"
									alt="Consumer Goods"
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center mb-3">
									<ShoppingCart className="w-5 h-5 text-genesis-gold mr-2" />
									<h3 className="text-xl font-medium font-playfair text-genesis-navy">
										Consumer Goods
									</h3>
								</div>
								<p className="text-zinc-600 mb-4 font-montserrat">
									Elevate brands, inspire confidence: We
									transform brands, captivate markets, and
									inspire unwavering consumer loyalty.
								</p>
								<Link
									href="/services/industries/consumer-goods"
									className="inline-flex items-center text-genesis-gold font-medium text-sm transition-colors hover:text-genesis-navy"
								>
									Learn more
									<ArrowRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>

						{/* Services Sector */}
						<div className="bg-white border border-zinc-200 rounded-sm overflow-hidden shadow-subtle transition-all hover:shadow-md group">
							<div className="h-48 overflow-hidden relative">
								<div className="absolute inset-0 bg-genesis-navy/20 group-hover:bg-genesis-navy/10 transition-colors z-10"></div>
								<img
									src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
									alt="Services Sector"
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center mb-3">
									<Users className="w-5 h-5 text-genesis-gold mr-2" />
									<h3 className="text-xl font-medium font-playfair text-genesis-navy">
										Services Sector
									</h3>
								</div>
								<p className="text-zinc-600 mb-4 font-montserrat">
									Elevating service excellence and operational
									performance across professional services,
									hospitality, and business services
									organizations.
								</p>
								<Link
									href="/services/industries/services-sector"
									className="inline-flex items-center text-genesis-gold font-medium text-sm transition-colors hover:text-genesis-navy"
								>
									Learn more
									<ArrowRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>

						{/* Retail */}
						<div className="bg-white border border-zinc-200 rounded-sm overflow-hidden shadow-subtle transition-all hover:shadow-md group">
							<div className="h-48 overflow-hidden relative">
								<div className="absolute inset-0 bg-genesis-navy/20 group-hover:bg-genesis-navy/10 transition-colors z-10"></div>
								<img
									src="https://images.unsplash.com/photo-1610554675583-3dc443076fc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
									alt="Retail"
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center mb-3">
									<ShoppingBag className="w-5 h-5 text-genesis-gold mr-2" />
									<h3 className="text-xl font-medium font-playfair text-genesis-navy">
										Retail
									</h3>
								</div>
								<p className="text-zinc-600 mb-4 font-montserrat">
									Transforming retail experiences for
									tomorrow's consumers: Enhancing engagement
									and optimizing operations for profitable
									growth.
								</p>
								<Link
									href="/services/industries/retail"
									className="inline-flex items-center text-genesis-gold font-medium text-sm transition-colors hover:text-genesis-navy"
								>
									Learn more
									<ArrowRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>

						{/* Security */}
						<div className="bg-white border border-zinc-200 rounded-sm overflow-hidden shadow-subtle transition-all hover:shadow-md group">
							<div className="h-48 overflow-hidden relative">
								<div className="absolute inset-0 bg-genesis-navy/20 group-hover:bg-genesis-navy/10 transition-colors z-10"></div>
								<img
									src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
									alt="Security"
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center mb-3">
									<Shield className="w-5 h-5 text-genesis-gold mr-2" />
									<h3 className="text-xl font-medium font-playfair text-genesis-navy">
										Security
									</h3>
								</div>
								<p className="text-zinc-600 mb-4 font-montserrat">
									Protecting organizations and assets through
									strategic security solutions that address
									physical, cyber, and operational
									vulnerabilities.
								</p>
								<Link
									href="/services/industries/security"
									className="inline-flex items-center text-genesis-gold font-medium text-sm transition-colors hover:text-genesis-navy"
								>
									Learn more
									<ArrowRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>

						{/* Travel & Logistics */}
						<div className="bg-white border border-zinc-200 rounded-sm overflow-hidden shadow-subtle transition-all hover:shadow-md group">
							<div className="h-48 overflow-hidden relative">
								<div className="absolute inset-0 bg-genesis-navy/20 group-hover:bg-genesis-navy/10 transition-colors z-10"></div>
								<img
									src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
									alt="Travel and Logistics"
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center mb-3">
									<Plane className="w-5 h-5 text-genesis-gold mr-2" />
									<h3 className="text-xl font-medium font-playfair text-genesis-navy">
										Travel & Logistics
									</h3>
								</div>
								<p className="text-zinc-600 mb-4 font-montserrat">
									Transforming travel and logistics operations
									through innovative strategies, digital
									solutions, and customer-centric approaches.
								</p>
								<Link
									href="/services/industries/travel"
									className="inline-flex items-center text-genesis-gold font-medium text-sm transition-colors hover:text-genesis-navy"
								>
									Learn more
									<ArrowRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>

						{/* Education */}
						<div className="bg-white border border-zinc-200 rounded-sm overflow-hidden shadow-subtle transition-all hover:shadow-md group">
							<div className="h-48 overflow-hidden relative">
								<div className="absolute inset-0 bg-genesis-navy/20 group-hover:bg-genesis-navy/10 transition-colors z-10"></div>
								<img
									src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
									alt="Education"
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center mb-3">
									<GraduationCap className="w-5 h-5 text-genesis-gold mr-2" />
									<h3 className="text-xl font-medium font-playfair text-genesis-navy">
										Education
									</h3>
								</div>
								<p className="text-zinc-600 mb-4 font-montserrat">
									Empowering institutions, shaping futures:
									Your partner in education excellence for
									brighter futures and streamlined strategies.
								</p>
								<Link
									href="/services/industries/education"
									className="inline-flex items-center text-genesis-gold font-medium text-sm transition-colors hover:text-genesis-navy"
								>
									Learn more
									<ArrowRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 md:py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="bg-genesis-navy rounded-sm p-8 md:p-12 lg:p-16 text-center">
						<h2 className="text-2xl md:text-3xl font-medium mb-4 font-playfair tracking-tight text-white">
							Ready to elevate your business?
						</h2>
						<p className="text-white/80 mb-8 max-w-2xl mx-auto font-montserrat">
							Let us discuss your organization's unique challenges
							and aspirations. Share your vision with us, and
							together, we will make it happen.
						</p>
						<Button className="bg-genesis-gold hover:bg-genesis-gold/90 text-genesis-navy">
							<Link href="/contact" className="flex items-center">
								Contact Us
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
