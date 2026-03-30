import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	HardHat,
	LineChart,
	Settings,
	Ruler,
	CheckCircle2,
	Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
	title: "Engineering & Infrastructure | Genesis Management",
	description:
		"Strategic consulting for engineering firms and infrastructure projects to optimize performance, drive innovation, and deliver sustainable outcomes.",
};

export default function EngineeringInfrastructurePage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative overflow-hidden">
				{/* Background Image with Overlay */}
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-genesis-navy/70 z-10 mix-blend-multiply"></div>
					<img
						src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
						alt="Engineering and Infrastructure in Africa"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
					<div className="max-w-3xl">
						<div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
							Industries We Serve
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
							Engineering & Infrastructure
						</h1>
						<div className="h-1 w-24 bg-genesis-gold mb-8"></div>
						<p className="text-xl text-white/90 mb-8 font-montserrat">
							Building resilient, sustainable, and innovative
							infrastructure solutions that transform communities
							and drive economic growth.
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
								Engineering Excellence & Infrastructure
								Innovation
							</h2>

							{/* Engineering & Infrastructure Overview Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<HardHat className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Industry Overview
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									The engineering and infrastructure sectors
									face unprecedented challenges and
									opportunities in an era of rapid
									technological change, increasing
									urbanization, and growing focus on
									sustainability. Organizations must deliver
									complex projects efficiently while adapting
									to evolving regulatory landscapes and
									societal expectations.
								</p>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									At Genesis Management, we partner with
									engineering firms, infrastructure
									developers, and public sector organizations
									to navigate these complexities. Our team
									combines deep engineering expertise with
									strategic insight to help clients optimize
									project delivery, drive innovation, and
									build resilient, sustainable infrastructure
									for the future.
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
												Managing complex project
												lifecycles and risks
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Integrating sustainable design
												and construction practices
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Adopting digital engineering
												tools and BIM
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Addressing workforce skill gaps
												and talent shortages
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Navigating evolving regulatory
												and compliance requirements
											</span>
										</li>
									</ul>
								</div>
							</div>

							{/* Project Delivery Excellence Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Settings className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Project Delivery Excellence
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help engineering and infrastructure
									organizations enhance project delivery
									performance, from planning and design
									through to construction and operation. Our
									experts bring deep knowledge of project
									management, risk management, and contract
									management best practices.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Project Management & Controls
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Implement robust project management
											frameworks and control systems to
											improve project predictability,
											manage risk, and ensure on-time,
											on-budget delivery. We help you
											establish effective governance,
											planning, scheduling, cost control,
											and reporting processes.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Risk & Opportunity Management
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Develop comprehensive risk
											management strategies to identify,
											assess, and mitigate project risks
											while maximizing opportunities. We
											help you implement risk management
											frameworks, conduct risk
											assessments, develop mitigation
											plans, and establish risk monitoring
											and reporting systems.
										</p>
									</div>
								</div>
							</div>

							{/* Case Study Section */}
							<div className="bg-zinc-50 p-8 rounded-sm mb-12">
								<h3 className="text-xl md:text-2xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
									Success Story: Optimizing a Major
									Infrastructure Project
								</h3>
								<p className="text-lg text-zinc-600 mb-4 font-montserrat">
									We partnered with a government agency to
									optimize the delivery of a major
									transportation infrastructure project facing
									significant delays and cost overruns. Our
									team implemented a comprehensive strategy
									that included:
								</p>
								<ul className="list-disc pl-6 mb-6 text-zinc-600 font-montserrat space-y-2">
									<li>
										Implementing a revised project
										governance and control framework
									</li>
									<li>
										Conducting a detailed risk assessment
										and developing mitigation strategies
									</li>
									<li>
										Optimizing the project schedule and
										procurement processes
									</li>
									<li>
										Enhancing stakeholder communication and
										engagement
									</li>
								</ul>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									The result was a 22% reduction in project
									delivery time, a 15% decrease in project
									costs, and significantly improved
									stakeholder satisfaction, ensuring the
									successful completion of a critical public
									infrastructure asset.
								</p>
							</div>

							{/* CTA Box */}
							<div className="bg-genesis-navy p-8 rounded-sm text-white">
								<h3 className="text-xl font-medium mb-4 font-playfair">
									Ready to Build the Future?
								</h3>
								<p className="mb-6 font-montserrat">
									Our team of engineering and infrastructure
									experts is ready to help you optimize
									project delivery, drive innovation, and
									build resilient, sustainable infrastructure
									for the future.
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
											current: true,
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
									Our Engineering & Infrastructure Expertise
								</h3>
								<ul className="space-y-3 mb-8">
									{[
										"Project Management Excellence",
										"Sustainable Design & Construction",
										"Digital Engineering & BIM",
										"Infrastructure Resilience",
										"Smart Cities & IoT Integration",
										"Risk Management & Mitigation",
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
										"Genesis Management's expertise was
										instrumental in transforming our
										approach to large-scale infrastructure
										projects. Their innovative strategies
										helped us reduce project delivery time
										by 22% while improving quality outcomes
										and stakeholder satisfaction."
									</p>
									<p className="text-genesis-navy font-medium text-sm">
										— Director, Global Infrastructure
										Partners
									</p>
								</div>

								<div className="border-t border-zinc-200 pt-6">
									<h3 className="text-lg font-medium mb-4 font-playfair text-genesis-navy">
										Related Solutions
									</h3>
									<ul className="space-y-4">
										<li>
											<Link
												href="/services/solutions/project-management"
												className="group"
											>
												<p className="text-sm text-genesis-navy font-medium group-hover:text-genesis-gold transition-colors">
													Project Management
												</p>
												<p className="text-xs text-zinc-500">
													Delivering complex projects
													on time and on budget
												</p>
											</Link>
										</li>
										<li>
											<Link
												href="/services/solutions/sustainability-consulting"
												className="group"
											>
												<p className="text-sm text-genesis-navy font-medium group-hover:text-genesis-gold transition-colors">
													Sustainability Consulting
												</p>
												<p className="text-xs text-zinc-500">
													Integrating sustainability
													into infrastructure
													development
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
