import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	BookOpen,
	LineChart,
	Lightbulb,
	Globe,
	CheckCircle2,
	Users,
	Brain,
} from "lucide-react";

export const metadata: Metadata = {
	title: "Education | Genesis Management",
	description:
		"Strategic consulting services for educational institutions, EdTech companies, and learning organizations seeking to innovate and transform in a rapidly changing landscape.",
};

export default function EducationPage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative overflow-hidden">
				{/* Background Image with Overlay */}
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-genesis-navy/70 z-10 mix-blend-multiply"></div>
					<img
						src="https://images.unsplash.com/photo-1612532774244-e44094e14b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
						alt="Education in Africa"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
					<div className="max-w-3xl">
						<div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
							Our Industries
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
							Education
						</h1>
						<div className="h-1 w-24 bg-genesis-gold mb-8"></div>
						<p className="text-xl text-white/90 mb-8 font-montserrat">
							Transformative strategies for educational
							institutions and EdTech companies navigating the
							evolving landscape of learning
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
								Transforming Education for the Future
							</h2>

							{/* Education Overview Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<BookOpen className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Education Sector Overview
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									The education sector is undergoing
									significant transformation, driven by
									technological innovation, changing student
									expectations, and evolving workforce needs.
								</p>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									At Genesis Management, we partner with
									educational institutions, EdTech companies,
									and learning organizations to navigate these
									changes and build sustainable strategies for
									success. Our approach combines deep
									educational expertise with business acumen
									to deliver outcomes that enhance learning
									experiences and organizational
									effectiveness.
								</p>

								<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold mb-12">
									<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
										Sector Challenges
									</h4>
									<ul className="space-y-3 text-zinc-600 font-montserrat">
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Adapting to rapid technological
												change and digital
												transformation
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Meeting evolving student and
												employer expectations
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Financial sustainability and
												operational efficiency
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Creating inclusive and
												accessible learning environments
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Measuring and demonstrating
												educational outcomes
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
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									Develop a clear vision and actionable
									strategy to navigate change and build a
									sustainable future for your educational
									organization.
								</p>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									Our strategic planning experts work with
									educational leaders to create compelling
									visions and practical roadmaps that address
									immediate challenges while positioning
									organizations for long-term success. We
									combine deep educational knowledge with
									proven strategic frameworks to develop
									solutions that resonate with your unique
									context.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Institutional Strategy Development
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Create a compelling vision and
											actionable strategy that aligns with
											your educational mission and market
											realities. We help you assess your
											competitive position, identify
											strategic opportunities, engage
											stakeholders in the planning
											process, and develop implementation
											roadmaps that drive meaningful
											change.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Academic Program Portfolio
											Optimization
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Align your academic offerings with
											student needs, market demand, and
											institutional strengths. We help you
											evaluate program performance,
											identify opportunities for
											innovation, develop new program
											concepts, and create implementation
											plans that balance educational
											quality with financial
											sustainability.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Organizational Redesign
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Create organizational structures
											that enhance effectiveness and
											efficiency while supporting your
											educational mission. We help you
											assess current structures, identify
											opportunities for improvement,
											design future-focused organizational
											models, and implement changes in
											ways that build stakeholder support.
										</p>
									</div>
								</div>
							</div>

							{/* Digital Transformation Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Lightbulb className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Educational Innovation & Digital
										Transformation
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									Harness the power of technology and
									innovative approaches to enhance learning
									experiences and operational effectiveness.
								</p>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									Our educational innovation experts help
									institutions and companies leverage emerging
									technologies and pedagogical approaches to
									create compelling learning experiences. We
									focus on solutions that enhance educational
									outcomes while improving efficiency and
									expanding reach.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Digital Learning Strategy
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Develop comprehensive approaches to
											online, hybrid, and
											technology-enhanced learning that
											align with your educational mission
											and student needs. We help you
											create digital learning models,
											select appropriate technologies,
											design effective learning
											experiences, and build faculty
											capacity for digital teaching
											excellence.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											EdTech Product Strategy
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Create educational technology
											products and services that address
											real market needs and deliver
											compelling value. We help EdTech
											companies develop product
											strategies, validate concepts
											through market research, create
											implementation roadmaps, and build
											go-to-market approaches that drive
											adoption and growth.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Learning Experience Design
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Create engaging, effective learning
											experiences that leverage the best
											of pedagogy and technology. We help
											you design innovative learning
											models, develop compelling content,
											implement evidence-based teaching
											approaches, and create assessment
											strategies that measure meaningful
											outcomes.
										</p>
									</div>
								</div>
							</div>

							{/* Enrollment & Growth Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Users className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Enrollment Strategy & Growth
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									Develop effective approaches to student
									recruitment, retention, and success in
									increasingly competitive educational
									markets.
								</p>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									Our enrollment experts help educational
									institutions attract, retain, and graduate
									students by developing data-informed
									strategies that encompass the entire student
									lifecycle. We combine market insights with
									proven practices to create approaches that
									drive enrollment while supporting student
									success.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Market Assessment & Positioning
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Understand your competitive
											landscape and develop compelling
											market positioning that attracts
											target students. We help you analyze
											market trends, assess competitive
											dynamics, identify audience
											segments, and create positioning
											strategies that highlight your
											distinctive value proposition.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Recruitment & Enrollment Management
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Optimize your approach to student
											recruitment and enrollment to
											achieve growth targets while
											managing costs. We help you develop
											recruitment strategies, enhance
											marketing effectiveness, optimize
											the enrollment funnel, and implement
											technologies that improve efficiency
											and effectiveness.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Student Success & Retention
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Create integrated approaches to
											supporting student persistence and
											achievement. We help you develop
											early alert systems, design
											effective student support services,
											implement retention initiatives, and
											create data-informed approaches to
											measuring and improving student
											outcomes.
										</p>
									</div>
								</div>
							</div>

							{/* Global Education Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Globe className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Global Education & Partnerships
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									Develop international strategies and
									partnerships that expand your reach and
									enhance your educational impact.
								</p>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									Our global education experts help
									institutions and companies navigate the
									complexities of international education. We
									develop strategies that respect cultural
									differences while creating sustainable
									models for cross-border educational delivery
									and collaboration.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											International Strategy Development
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Create focused, sustainable
											approaches to global education that
											align with your mission and
											capabilities. We help you assess
											international opportunities,
											prioritize markets, develop entry
											strategies, and create operating
											models that support successful
											global initiatives.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Partnership Development
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Build effective partnerships with
											educational institutions, government
											agencies, and corporate entities. We
											help you identify potential
											partners, develop collaborative
											models, create governance
											structures, and implement
											operational approaches that ensure
											partnership success.
										</p>
									</div>
								</div>
							</div>

							{/* Research & Innovation Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Brain className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Research Strategy & Innovation
										Ecosystems
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									Enhance research impact and innovation
									capacity through strategic approaches to
									research development and ecosystem building.
								</p>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									Our research and innovation experts help
									higher education institutions and research
									organizations maximize their impact. We
									develop strategies that enhance research
									productivity, expand funding, and create
									pathways for translating research into
									societal and economic impact.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Research Strategy & Development
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Create focused research strategies
											that build on institutional
											strengths and address emerging
											opportunities. We help you assess
											research capabilities, identify
											priority areas, develop research
											support structures, and create
											approaches to measuring and
											communicating research impact.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Innovation Ecosystem Development
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Build vibrant innovation ecosystems
											that connect academic research with
											industry needs and entrepreneurial
											activity. We help you develop
											technology transfer capabilities,
											create incubation models, design
											industry partnership approaches, and
											implement programs that foster
											innovation and entrepreneurship.
										</p>
									</div>
								</div>
							</div>

							{/* CTA Box */}
							<div className="bg-genesis-navy p-8 rounded-sm text-white">
								<h3 className="text-xl font-medium mb-4 font-playfair">
									Ready to Transform Your Educational
									Organization?
								</h3>
								<p className="mb-6 font-montserrat">
									Our team of education industry experts is
									ready to help you navigate change, implement
									innovative solutions, and build a
									sustainable future for your educational
									organization.
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
											current: true,
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
									Our Educational Expertise
								</h3>
								<ul className="space-y-3 mb-8">
									{[
										"Strategic Planning & Transformation",
										"Digital Learning Strategy",
										"Educational Innovation",
										"Institutional Effectiveness",
										"Organizational Development",
										"Research & Innovation",
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
										"Genesis Management helped us develop
										and implement a comprehensive digital
										learning strategy that transformed our
										educational delivery model. Their
										understanding of both educational
										principles and technology implementation
										was invaluable in navigating this
										complex transition."
									</p>
									<p className="text-genesis-navy font-medium text-sm">
										— Vice President, Leading University
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
													educational institutions
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
													Enrollment strategies and
													student acquisition
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
