import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	Zap,
	LineChart,
	Lightbulb,
	Recycle,
	CheckCircle2,
	BarChart3,
	Waves,
} from "lucide-react";

export const metadata: Metadata = {
	title: "Energy & Mining Industry | Genesis Management",
	description:
		"Driving sustainable growth and operational excellence in the energy and mining sectors with strategic consulting solutions.",
};

export default function EnergyMiningPage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative overflow-hidden">
				{/* Background Image with Overlay */}
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-genesis-navy/70 z-10 mix-blend-multiply"></div>
					<img
						src="https://images.unsplash.com/photo-1589962513942-4b3ff2b907b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
						alt="Energy and Mining in Africa"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
					<div className="max-w-3xl">
						<div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
							Industries We Serve
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
							Energy & Mining
						</h1>
						<div className="h-1 w-24 bg-genesis-gold mb-8"></div>
						<p className="text-xl text-white/90 mb-8 font-montserrat">
							Navigate the complex energy transition and resource
							challenges with strategic solutions that balance
							sustainability, profitability, and operational
							excellence.
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
								Navigating the Energy & Resource Landscape
							</h2>

							{/* Energy & Mining Overview Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Zap className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Industry Overview
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									The energy and mining sectors are
									experiencing unprecedented transformation
									driven by the global energy transition,
									evolving regulatory landscapes,
									technological innovation, and increasing
									stakeholder expectations for sustainable
									practices.
								</p>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									At Genesis Management, we partner with
									energy and mining companies to navigate
									these complex challenges and capitalize on
									emerging opportunities. Our industry experts
									bring deep technical knowledge and strategic
									insight to help clients drive operational
									excellence, enhance sustainability, and
									deliver long-term value.
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
												Navigating the energy transition
												and decarbonization
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Managing ESG pressures and
												regulatory requirements
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Optimizing operational
												performance and costs
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Implementing digital
												transformation and technology
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Managing project and investment
												risk
											</span>
										</li>
									</ul>
								</div>
							</div>

							{/* Energy Transition Strategy Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<LineChart className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Energy Transition Strategy
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help energy and resource companies
									develop and implement comprehensive
									strategies to navigate the complex energy
									transition landscape. Our experts bring deep
									knowledge of market trends, policy
									developments, and technology innovations to
									create actionable roadmaps for sustainable
									transformation.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Decarbonization Strategy
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Develop comprehensive approaches to
											reduce carbon intensity and achieve
											net-zero goals. We help you assess
											emissions profiles, identify
											reduction opportunities, evaluate
											clean technology options, and create
											implementation roadmaps that balance
											environmental goals with business
											performance.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Portfolio Transformation
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Optimize your asset portfolio to
											thrive in a low-carbon future. We
											help you evaluate current assets,
											identify divestment candidates,
											assess acquisition opportunities,
											and develop diversification
											strategies that position your
											organization for long-term success
											in the evolving energy landscape.
										</p>
									</div>
								</div>
							</div>

							{/* Case Study Section */}
							<div className="bg-zinc-50 p-8 rounded-sm mb-12">
								<h3 className="text-xl md:text-2xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
									Success Story: Transforming an Energy
									Company
								</h3>
								<p className="text-lg text-zinc-600 mb-4 font-montserrat">
									We partnered with a mid-sized energy company
									facing challenges with the energy transition
									and operational efficiency. Our team
									implemented a comprehensive strategy that
									included:
								</p>
								<ul className="list-disc pl-6 mb-6 text-zinc-600 font-montserrat space-y-2">
									<li>
										Developing a decarbonization roadmap
										that reduced emissions by 30%
									</li>
									<li>
										Implementing digital technologies that
										improved operational efficiency by 25%
									</li>
									<li>
										Optimizing the asset portfolio to
										increase focus on renewable energy
									</li>
									<li>
										Creating an ESG strategy that improved
										stakeholder engagement and reporting
									</li>
								</ul>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									The result was a 35% improvement in
									operational performance and a significant
									enhancement in sustainability metrics,
									positioning the company as a leader in the
									energy transition.
								</p>
							</div>

							{/* CTA Box */}
							<div className="bg-genesis-navy p-8 rounded-sm text-white">
								<h3 className="text-xl font-medium mb-4 font-playfair">
									Ready to Transform Your Energy or Mining
									Operations?
								</h3>
								<p className="mb-6 font-montserrat">
									Our team of energy and mining industry
									experts is ready to help you navigate the
									complex challenges of the energy transition,
									optimize operations, and build a sustainable
									future for your business.
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
											current: true,
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
									Our Energy & Mining Expertise
								</h3>
								<ul className="space-y-3 mb-8">
									{[
										"Energy Transition Strategy",
										"Operational Excellence",
										"ESG & Sustainability",
										"Digital Transformation",
										"Asset Optimization",
										"Risk Management",
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
										"Genesis Management's strategic guidance
										helped us navigate the complex energy
										transition landscape, resulting in a
										comprehensive sustainability roadmap
										that balanced environmental goals with
										business performance. Their deep
										industry expertise was invaluable."
									</p>
									<p className="text-genesis-navy font-medium text-sm">
										— CEO, Global Energy Partners
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
													energy companies
												</p>
											</Link>
										</li>
										<li>
											<Link
												href="/services/solutions/operations-management"
												className="group"
											>
												<p className="text-sm text-genesis-navy font-medium group-hover:text-genesis-gold transition-colors">
													Operations Management
												</p>
												<p className="text-xs text-zinc-500">
													Optimizing energy and mining
													operations
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
