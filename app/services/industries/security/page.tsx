import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	ShieldCheck,
	Network,
	ClipboardList,
	Users,
	CheckCircle2,
	AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
	title: "Security | Genesis Management",
	description:
		"Strategic consulting for security organizations to enhance operational effectiveness, drive digital transformation, and address evolving security challenges.",
};

export default function SecurityPage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative overflow-hidden">
				{/* Background Image with Overlay */}
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-genesis-navy/70 z-10 mix-blend-multiply"></div>
					<img
						src="https://images.unsplash.com/photo-1551651781-a1c34ddd0abe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
						alt="Security in Africa"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
					<div className="max-w-3xl">
						<div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
							Industries We Serve
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
							Security
						</h1>
						<div className="h-1 w-24 bg-genesis-gold mb-8"></div>
						<p className="text-xl text-white/90 mb-8 font-montserrat">
							Protecting organizations and assets through
							strategic security solutions that address physical,
							cyber, and operational vulnerabilities in an
							evolving threat landscape.
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
								Comprehensive Security Solutions
							</h2>

							{/* Security Overview Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<ShieldCheck className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Industry Overview
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									In today's complex and interconnected world,
									security challenges are evolving at an
									unprecedented pace. Organizations face a
									diverse array of threats—from sophisticated
									cyber attacks and physical security breaches
									to operational vulnerabilities and
									compliance risks—that require comprehensive
									and integrated approaches to security
									management.
								</p>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									At Genesis Management, we partner with
									security organizations and enterprise
									security departments to develop and
									implement robust security strategies that
									protect assets, ensure business continuity,
									and enable organizational resilience. Our
									multidisciplinary team combines deep
									security expertise with strategic business
									acumen to deliver solutions that address
									today's threats and anticipate tomorrow's
									challenges.
								</p>

								<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold mb-12">
									<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
										Key Security Challenges
									</h4>
									<ul className="space-y-3 text-zinc-600 font-montserrat">
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Evolving cyber threat landscape
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Physical security
												vulnerabilities and risks
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Insider threats and human
												factors
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Regulatory compliance and data
												privacy
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Security technology integration
												and modernization
											</span>
										</li>
									</ul>
								</div>
							</div>

							{/* Cybersecurity Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Network className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Cybersecurity & Risk Management
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help organizations develop and implement
									comprehensive cybersecurity strategies to
									protect critical assets, mitigate risks, and
									ensure compliance. Our experts bring deep
									knowledge of cyber threat intelligence,
									vulnerability management, incident response,
									and security governance.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Cyber Risk Assessment
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Identify and prioritize cyber risks
											through comprehensive assessments
											that evaluate vulnerabilities,
											threats, and potential impacts. We
											help you develop risk mitigation
											strategies aligned with your
											business objectives.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Security Program Development
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Design and implement robust security
											programs that incorporate people,
											processes, and technology to protect
											against evolving threats. We assist
											with policy development, security
											awareness training, and technology
											selection and implementation.
										</p>
									</div>
								</div>
							</div>

							{/* Case Study Section */}
							<div className="bg-zinc-50 p-8 rounded-sm mb-12">
								<h3 className="text-xl md:text-2xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
									Success Story: Enhancing Corporate Security
									for a Multinational
								</h3>
								<p className="text-lg text-zinc-600 mb-4 font-montserrat">
									We partnered with a multinational
									corporation to enhance its global security
									posture. Our comprehensive solution
									included:
								</p>
								<ul className="list-disc pl-6 mb-6 text-zinc-600 font-montserrat space-y-2">
									<li>
										Developing an integrated security risk
										management framework.
									</li>
									<li>
										Implementing advanced threat detection
										and response capabilities.
									</li>
									<li>
										Enhancing physical security measures
										across global facilities.
									</li>
									<li>
										Conducting crisis management and
										business continuity planning.
									</li>
								</ul>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									The engagement resulted in a 50% reduction
									in security incidents, improved regulatory
									compliance, and a more resilient and secure
									operating environment for the client.
								</p>
							</div>

							{/* CTA Box */}
							<div className="bg-genesis-navy p-8 rounded-sm text-white">
								<h3 className="text-xl font-medium mb-4 font-playfair">
									Ready to Strengthen Your Security Posture?
								</h3>
								<p className="mb-6 font-montserrat">
									Our security experts are ready to help you
									identify vulnerabilities, mitigate risks,
									and build a resilient security framework to
									protect your organization.
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
											current: true,
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
									Our Security Expertise
								</h3>
								<ul className="space-y-3 mb-8">
									{[
										"Cybersecurity Strategy & Implementation",
										"Physical Security & Asset Protection",
										"Security Operations & Threat Intelligence",
										"Risk Management & Compliance",
										"Crisis Management & Business Continuity",
										"Security Awareness & Training",
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
										"Genesis Management's comprehensive
										security assessment and transformation
										program helped us identify critical
										vulnerabilities and implement a robust
										security framework that significantly
										enhanced our resilience against evolving
										threats."
									</p>
									<p className="text-genesis-navy font-medium text-sm">
										— Chief Security Officer, Global
										Enterprise
									</p>
								</div>

								<div className="border-t border-zinc-200 pt-6">
									<h3 className="text-lg font-medium mb-4 font-playfair text-genesis-navy">
										Related Solutions
									</h3>
									<ul className="space-y-4">
										<li>
											<Link
												href="/services/solutions/risk-management"
												className="group"
											>
												<p className="text-sm text-genesis-navy font-medium group-hover:text-genesis-gold transition-colors">
													Risk Management
												</p>
												<p className="text-xs text-zinc-500">
													Identifying and mitigating
													security risks
												</p>
											</Link>
										</li>
										<li>
											<Link
												href="/services/solutions/technology-consulting"
												className="group"
											>
												<p className="text-sm text-genesis-navy font-medium group-hover:text-genesis-gold transition-colors">
													Technology Consulting
												</p>
												<p className="text-xs text-zinc-500">
													Implementing cutting-edge
													security technologies
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
