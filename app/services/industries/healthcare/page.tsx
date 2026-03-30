import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	Heart,
	LineChart,
	Shield,
	Stethoscope,
	CheckCircle2,
	Activity,
	Microscope,
} from "lucide-react";

export const metadata: Metadata = {
	title: "Healthcare Industry | Genesis Management",
	description:
		"Strategic consulting for healthcare providers, medical technology companies, and health systems to optimize patient care, operational efficiency, and industry innovation.",
};

export default function HealthcarePage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative overflow-hidden">
				{/* Background Image with Overlay */}
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-genesis-navy/70 z-10 mix-blend-multiply"></div>
					<img
						src="https://images.unsplash.com/photo-1571867424488-4565932edb41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
						alt="Healthcare in Africa"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
					<div className="max-w-3xl">
						<div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
							Industries We Serve
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
							Healthcare
						</h1>
						<div className="h-1 w-24 bg-genesis-gold mb-8"></div>
						<p className="text-xl text-white/90 mb-8 font-montserrat">
							Advancing patient care through strategic innovation:
							We partner with healthcare organizations to optimize
							operations, enhance patient outcomes, and navigate
							industry transformation.
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
								Healthcare Excellence Through Strategic
								Solutions
							</h2>

							{/* Healthcare Overview Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Heart className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Healthcare Industry Overview
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									The healthcare industry faces unprecedented
									challenges and opportunities, from
									technological advancements and regulatory
									changes to evolving patient expectations and
									financial pressures.
								</p>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									At Genesis Management, we understand the
									complexities of modern healthcare delivery.
									Our team of industry experts works alongside
									healthcare providers, medical technology
									companies, and health systems to navigate
									change, optimize operations, and deliver
									exceptional patient care while maintaining
									financial sustainability.
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
												Balancing quality care with cost
												containment
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Adapting to value-based care
												models
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Navigating complex regulatory
												environments
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Integrating digital health
												technologies
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Addressing workforce shortages
												and burnout
											</span>
										</li>
									</ul>
								</div>
							</div>

							{/* Strategic Planning Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<LineChart className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Strategic Planning & Transformation
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help healthcare organizations develop and
									implement strategic plans that align with
									their mission, vision, and market realities.
									Our approach combines deep industry
									knowledge with rigorous analysis to create
									actionable strategies that drive sustainable
									growth and improve patient outcomes.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Organizational Strategy
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Develop comprehensive strategic
											plans that address market
											challenges, leverage organizational
											strengths, and capitalize on
											emerging opportunities. We help you
											assess your competitive position,
											identify strategic priorities, and
											create implementation roadmaps that
											drive meaningful change.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Service Line Strategy
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Optimize your clinical service
											portfolio to meet community needs
											while ensuring financial
											sustainability. We help you evaluate
											service line performance, identify
											growth opportunities, develop new
											service concepts, and create
											implementation plans that balance
											clinical excellence with financial
											viability.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Merger & Acquisition Support
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Navigate complex integration
											processes to realize the full value
											of healthcare partnerships and
											acquisitions. We provide
											comprehensive M&A support, from due
											diligence and valuation to
											integration planning and post-merger
											optimization, ensuring smooth
											transitions and accelerated synergy
											capture.
										</p>
									</div>
								</div>
							</div>

							{/* Operations Excellence Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Stethoscope className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Operational Excellence
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help healthcare organizations optimize
									their operations to improve efficiency,
									quality, and financial performance. Our
									operational experts bring proven
									methodologies and healthcare-specific
									expertise to drive sustainable improvements
									across your organization.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Clinical Operations Improvement
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Enhance patient flow, optimize
											resource utilization, and improve
											clinical outcomes through
											data-driven operational
											improvements. We help you identify
											bottlenecks, streamline processes,
											and implement best practices that
											improve efficiency while maintaining
											or enhancing quality of care.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Revenue Cycle Optimization
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Improve financial performance by
											optimizing your revenue cycle from
											patient access to final payment. We
											help you enhance coding accuracy,
											reduce denials, streamline billing
											processes, and improve collection
											rates to maximize revenue while
											improving the patient financial
											experience.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Supply Chain Management
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Reduce costs and improve reliability
											by optimizing your healthcare supply
											chain. We help you enhance
											procurement practices, implement
											inventory optimization strategies,
											strengthen vendor relationships, and
											leverage group purchasing
											opportunities to achieve substantial
											cost savings.
										</p>
									</div>
								</div>
							</div>

							{/* Digital Health Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Activity className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Digital Health Transformation
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help healthcare organizations leverage
									digital technologies to enhance patient
									care, improve operational efficiency, and
									create competitive advantage. Our digital
									health experts combine technological
									expertise with deep healthcare knowledge to
									develop and implement solutions that address
									your unique challenges.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Digital Strategy
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Develop a comprehensive approach to
											digital health that aligns with your
											organizational strategy and
											addresses key priorities. We help
											you assess digital opportunities,
											prioritize initiatives, and create
											roadmaps that guide investment and
											implementation decisions.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Telehealth Implementation
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Design and implement telehealth
											programs that extend your reach and
											enhance patient access. We help you
											develop telehealth models, select
											appropriate technologies, design
											clinical workflows, and create
											implementation plans that ensure
											successful adoption and
											sustainability.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Data Analytics & Insights
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Harness the power of data to improve
											clinical outcomes, operational
											performance, and strategic
											decision-making. We help you develop
											analytics capabilities, implement
											data governance frameworks, and
											create insights-driven cultures that
											leverage information as a strategic
											asset.
										</p>
									</div>
								</div>
							</div>

							{/* Regulatory & Compliance Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Shield className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Regulatory & Compliance
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help healthcare organizations navigate
									complex regulatory environments and maintain
									compliance while achieving strategic
									objectives. Our regulatory experts provide
									guidance on healthcare laws, regulations,
									and standards to minimize risk and maximize
									operational flexibility.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Compliance Program Development
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Create effective compliance programs
											that meet regulatory requirements
											while supporting operational
											efficiency. We help you develop
											compliance policies, implement
											monitoring systems, conduct risk
											assessments, and foster cultures of
											compliance throughout your
											organization.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Privacy & Security
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Protect patient information and
											maintain regulatory compliance
											through effective privacy and
											security measures. We help you
											develop comprehensive privacy
											programs, implement security
											safeguards, respond to incidents,
											and train staff on best practices
											for data protection.
										</p>
									</div>
								</div>
							</div>

							{/* Case Study Section */}
							<div className="bg-zinc-50 p-8 rounded-sm mb-12">
								<h3 className="text-xl md:text-2xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
									Success Story: Regional Health System
									Transformation
								</h3>
								<p className="text-lg text-zinc-600 mb-4 font-montserrat">
									We partnered with a mid-sized regional
									health system facing challenges with
									operational efficiency and financial
									sustainability. Our team implemented a
									comprehensive transformation strategy that
									included:
								</p>
								<ul className="list-disc pl-6 mb-6 text-zinc-600 font-montserrat space-y-2">
									<li>
										Redesigning clinical workflows to
										improve patient throughput by 22%
									</li>
									<li>
										Optimizing the revenue cycle to reduce
										denials by 35% and increase collections
										by 15%
									</li>
									<li>
										Implementing a telehealth program that
										expanded access to specialty care in
										rural communities
									</li>
									<li>
										Developing a data analytics program that
										improved clinical quality metrics across
										key service lines
									</li>
								</ul>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									The result was a significant improvement in
									financial performance, including a 40%
									increase in operating margin, while
									simultaneously enhancing patient
									satisfaction and clinical outcomes.
								</p>
							</div>

							{/* CTA Box */}
							<div className="bg-genesis-navy p-8 rounded-sm text-white">
								<h3 className="text-xl font-medium mb-4 font-playfair">
									Ready to Transform Your Healthcare
									Organization?
								</h3>
								<p className="mb-6 font-montserrat">
									Our team of healthcare experts is ready to
									help you optimize operations, enhance
									patient care, and navigate industry
									transformation to build a sustainable future
									for your organization.
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
											name: "Healthcare",
											href: "/services/industries/healthcare",
											current: true,
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
									Our Healthcare Expertise
								</h3>
								<ul className="space-y-3 mb-8">
									{[
										"Strategic Planning & Transformation",
										"Operational Excellence",
										"Digital Health Innovation",
										"Regulatory & Compliance",
										"Financial Optimization",
										"Clinical Performance Improvement",
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
										"Genesis Management has been an
										invaluable partner in our transformation
										journey. Their healthcare expertise,
										combined with their strategic approach,
										helped us navigate complex challenges
										and achieve meaningful improvements in
										both patient care and financial
										performance."
									</p>
									<p className="text-genesis-navy font-medium text-sm">
										— CEO, Regional Medical Center
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
													Financial solutions for
													healthcare organizations
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
													Patient acquisition and
													service line growth
													strategies
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
