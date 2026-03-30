import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	Landmark,
	Settings,
	ClipboardList,
	Users,
	CheckCircle2,
	Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
	title: "Public Sector | Genesis Management",
	description:
		"Strategic consulting for government agencies and public organizations to enhance service delivery, optimize operations, and drive digital transformation.",
};

export default function PublicSectorPage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative overflow-hidden">
				{/* Background Image with Overlay */}
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-genesis-navy/70 z-10 mix-blend-multiply"></div>
					<img
						src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
						alt="Public Sector in Africa"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
					<div className="max-w-3xl">
						<div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
							Industries We Serve
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
							Public Sector
						</h1>
						<div className="h-1 w-24 bg-genesis-gold mb-8"></div>
						<p className="text-xl text-white/90 mb-8 font-montserrat">
							Transforming public service delivery through
							innovative strategies, operational excellence, and
							citizen-centric approaches.
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
								Transforming Public Service Delivery
							</h2>

							{/* Public Sector Overview Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Landmark className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Industry Overview
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									Public sector organizations face
									unprecedented challenges in today's rapidly
									evolving environment. Increasing citizen
									expectations, budget constraints, complex
									policy requirements, and the imperative to
									leverage technology for greater efficiency
									and transparency demand innovative solutions
									and strategic partnerships.
								</p>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									At Genesis Management, we partner with
									government agencies and public organizations
									to navigate these complexities. Our team
									combines deep public sector expertise with
									proven methodologies to help clients enhance
									service delivery, optimize operations, drive
									digital transformation, and build trust with
									citizens.
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
												Improving citizen experience and
												service delivery
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Driving digital transformation
												and data utilization
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Optimizing operational
												efficiency and resource
												allocation
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Enhancing policy effectiveness
												and program outcomes
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Building workforce capabilities
												for the future of public service
											</span>
										</li>
									</ul>
								</div>
							</div>

							{/* Digital Government Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Lightbulb className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Digital Government & Service
										Modernization
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help public sector organizations leverage
									digital technologies to modernize service
									delivery, enhance citizen engagement, and
									improve operational efficiency. Our experts
									bring deep knowledge of digital strategy,
									data analytics, and change management to
									drive successful transformation.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Digital Transformation Strategy
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Develop comprehensive digital
											transformation roadmaps that align
											with policy objectives and citizen
											needs. We help you assess digital
											maturity, identify opportunities,
											prioritize initiatives, and build
											implementation plans that deliver
											tangible value.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Citizen Experience Enhancement
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Design and implement citizen-centric
											service delivery models that enhance
											satisfaction and trust. We help you
											understand citizen journeys,
											leverage digital channels,
											personalize interactions, and
											measure service performance.
										</p>
									</div>
								</div>
							</div>

							{/* Case Study Section */}
							<div className="bg-zinc-50 p-8 rounded-sm mb-12">
								<h3 className="text-xl md:text-2xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
									Success Story: Modernizing a National Health
									Service
								</h3>
								<p className="text-lg text-zinc-600 mb-4 font-montserrat">
									We partnered with a national health service
									to modernize its patient record systems and
									improve service delivery. Our team
									implemented a comprehensive strategy that
									included:
								</p>
								<ul className="list-disc pl-6 mb-6 text-zinc-600 font-montserrat space-y-2">
									<li>
										Implementing a new electronic health
										record (EHR) system
									</li>
									<li>
										Streamlining patient intake and
										appointment scheduling processes
									</li>
									<li>
										Developing a data analytics platform for
										improved decision-making
									</li>
									<li>
										Training staff and managing the change
										process effectively
									</li>
								</ul>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									The result was a 40% improvement in patient
									record accuracy, a 25% reduction in
									administrative workload, and enhanced
									patient satisfaction, enabling the health
									service to deliver better care more
									efficiently.
								</p>
							</div>

							{/* CTA Box */}
							<div className="bg-genesis-navy p-8 rounded-sm text-white">
								<h3 className="text-xl font-medium mb-4 font-playfair">
									Ready to Transform Public Service?
								</h3>
								<p className="mb-6 font-montserrat">
									Our team of public sector experts is ready
									to help you enhance service delivery,
									optimize operations, and drive digital
									transformation for your organization.
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
											current: false,
										},
										{
											name: "Public Sector",
											href: "/services/industries/public",
											current: true,
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
									Our Public Sector Expertise
								</h3>
								<ul className="space-y-3 mb-8">
									{[
										"Digital Government Transformation",
										"Policy Development & Implementation",
										"Operational Efficiency & Process Improvement",
										"Citizen Experience Enhancement",
										"Program Evaluation & Performance Management",
										"Change Management & Organizational Development",
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
										"Genesis Management provided invaluable
										guidance throughout our digital
										transformation journey. Their deep
										understanding of public sector
										challenges and innovative solutions
										helped us significantly improve service
										delivery while reducing operational
										costs."
									</p>
									<p className="text-genesis-navy font-medium text-sm">
										— Chief Digital Officer, Metropolitan
										Government
									</p>
								</div>

								<div className="border-t border-zinc-200 pt-6">
									<h3 className="text-lg font-medium mb-4 font-playfair text-genesis-navy">
										Related Solutions
									</h3>
									<ul className="space-y-4">
										<li>
											<Link
												href="/services/solutions/digital-transformation"
												className="group"
											>
												<p className="text-sm text-genesis-navy font-medium group-hover:text-genesis-gold transition-colors">
													Digital Transformation
												</p>
												<p className="text-xs text-zinc-500">
													Modernizing public service
													delivery
												</p>
											</Link>
										</li>
										<li>
											<Link
												href="/services/solutions/strategy-consulting"
												className="group"
											>
												<p className="text-sm text-genesis-navy font-medium group-hover:text-genesis-gold transition-colors">
													Strategy Consulting
												</p>
												<p className="text-xs text-zinc-500">
													Developing effective public
													policies and programs
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
