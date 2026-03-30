import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	Users,
	Briefcase,
	LineChart,
	HeartHandshake,
	CheckCircle2,
	Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
	title: "Services Sector | Genesis Management",
	description:
		"Strategic consulting for professional services, hospitality, and business services firms to drive growth, optimize operations, and enhance client experiences.",
};

export default function ServicesSectorPage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative overflow-hidden">
				{/* Background Image with Overlay */}
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-genesis-navy/70 z-10 mix-blend-multiply"></div>
					<img
						src="https://images.unsplash.com/photo-1572521165329-b197f9ea3da6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
						alt="Services Sector in Africa"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
					<div className="max-w-3xl">
						<div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
							Industries We Serve
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
							Services Sector
						</h1>
						<div className="h-1 w-24 bg-genesis-gold mb-8"></div>
						<p className="text-xl text-white/90 mb-8 font-montserrat">
							Elevating service excellence and operational
							performance across professional services,
							hospitality, and business services organizations.
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
								Excellence in Service Delivery
							</h2>

							{/* Services Sector Overview Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Briefcase className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Industry Overview
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									The services sector—encompassing
									professional services, hospitality, and
									business services—faces unprecedented
									disruption driven by changing client
									expectations, digital transformation, and
									evolving workforce dynamics. Organizations
									must adapt quickly to maintain competitive
									advantage while delivering exceptional
									service experiences.
								</p>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									At Genesis Management, we partner with
									services organizations to navigate these
									challenges and transform their operations,
									talent strategies, and client experiences.
									Our multidisciplinary team combines deep
									industry knowledge with functional expertise
									to help clients enhance service delivery,
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
												Meeting evolving client
												expectations and personalization
												demands
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Leveraging digital technologies
												to enhance service delivery
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Optimizing operational
												efficiency and cost structures
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Attracting, developing, and
												retaining top talent
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Adapting to changing market
												dynamics and competitive
												pressures
											</span>
										</li>
									</ul>
								</div>
							</div>

							{/* Service Transformation Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<LineChart className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Service Transformation & Growth
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help service organizations transform
									their operations, enhance client
									experiences, and drive sustainable growth.
									Our experts bring deep knowledge of service
									design, operational improvement, and digital
									innovation to create tailored solutions that
									deliver tangible results.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Service Design & Innovation
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Create exceptional client
											experiences through innovative
											service design and delivery models.
											We help you understand client needs,
											map service journeys, identify pain
											points, and develop solutions that
											enhance satisfaction and loyalty.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Operational Excellence in Services
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Optimize service operations to
											improve efficiency, quality, and
											cost-effectiveness. We help you
											streamline processes, implement best
											practices, leverage technology, and
											develop performance management
											systems that drive continuous
											improvement.
										</p>
									</div>
								</div>
							</div>

							{/* Case Study Section */}
							<div className="bg-zinc-50 p-8 rounded-sm mb-12">
								<h3 className="text-xl md:text-2xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
									Success Story: Enhancing Client Experience
									for a Professional Services Firm
								</h3>
								<p className="text-lg text-zinc-600 mb-4 font-montserrat">
									We partnered with a leading professional
									services firm to transform its client
									experience and improve operational
									efficiency. Our team implemented a
									comprehensive strategy that included:
								</p>
								<ul className="list-disc pl-6 mb-6 text-zinc-600 font-montserrat space-y-2">
									<li>
										Redesigning the client journey to
										enhance engagement and satisfaction
									</li>
									<li>
										Implementing digital tools to streamline
										service delivery and communication
									</li>
									<li>
										Developing a talent strategy to build
										skills for the future of service
									</li>
									<li>
										Creating a performance management system
										to track client outcomes and service
										quality
									</li>
								</ul>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									The result was a 28% increase in client
									satisfaction scores, a 15% improvement in
									operational efficiency, and a 10% growth in
									revenue from existing clients, positioning
									the firm for sustained success in a
									competitive market.
								</p>
							</div>

							{/* CTA Box */}
							<div className="bg-genesis-navy p-8 rounded-sm text-white">
								<h3 className="text-xl font-medium mb-4 font-playfair">
									Ready to Elevate Your Service Organization?
								</h3>
								<p className="mb-6 font-montserrat">
									Our team of services sector experts is ready
									to help you enhance client experiences,
									optimize operations, and drive sustainable
									growth for your organization.
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
											current: false,
										},
										{
											name: "Services Sector",
											href: "/services/industries/services-sector",
											current: true,
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
									Our Services Sector Expertise
								</h3>
								<ul className="space-y-3 mb-8">
									{[
										"Professional Services",
										"Hospitality & Tourism",
										"Business Services",
										"Customer Experience",
										"Digital Transformation",
										"Talent Management",
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
										transformed our service delivery model,
										resulting in a 28% increase in client
										satisfaction and 15% improvement in
										operational efficiency. Their deep
										expertise in professional services was
										instrumental to our success."
									</p>
									<p className="text-genesis-navy font-medium text-sm">
										— Managing Partner, Global Professional
										Services Firm
									</p>
								</div>

								<div className="border-t border-zinc-200 pt-6">
									<h3 className="text-lg font-medium mb-4 font-playfair text-genesis-navy">
										Related Solutions
									</h3>
									<ul className="space-y-4">
										<li>
											<Link
												href="/services/solutions/customer-experience"
												className="group"
											>
												<p className="text-sm text-genesis-navy font-medium group-hover:text-genesis-gold transition-colors">
													Customer Experience
													Transformation
												</p>
												<p className="text-xs text-zinc-500">
													Enhancing client journeys
													and service delivery
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
													Optimizing service
													operations and processes
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
