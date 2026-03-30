import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	ShoppingBag,
	TrendingUp,
	Shield,
	Factory,
	CheckCircle2,
	Truck,
	BadgePercent,
} from "lucide-react";

export const metadata: Metadata = {
	title: "Consumer Goods | Genesis Management",
	description:
		"Expert consultancy services for consumer goods companies looking to innovate, optimize operations, and grow market share in competitive retail environments.",
};

export default function ConsumerGoodsPage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative overflow-hidden">
				{/* Background Image with Overlay */}
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-genesis-navy/70 z-10 mix-blend-multiply"></div>
					<img
						src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
						alt="Consumer goods in Africa"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
					<div className="max-w-3xl">
						<div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
							Our Industries
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
							Consumer Goods
						</h1>
						<div className="h-1 w-24 bg-genesis-gold mb-8"></div>
						<p className="text-xl text-white/90 mb-8 font-montserrat">
							Strategic solutions for consumer goods companies to
							innovate, optimize operations, and grow market share
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
								Navigating the Consumer Goods Landscape
							</h2>

							{/* Market Trends Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<ShoppingBag className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Consumer Goods Industry Overview
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									The consumer goods sector is experiencing
									unprecedented transformation driven by
									changing consumer preferences, digital
									disruption, and supply chain evolution.
								</p>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									At Genesis Management, we understand the
									complexities and opportunities in the
									consumer goods industry. From fast-moving
									consumer goods (FMCG) to durables and luxury
									products, we help companies navigate market
									challenges, optimize operations, and build
									sustainable growth strategies that resonate
									with today's discerning consumers.
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
												Rapidly changing consumer
												preferences and expectations
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Digital disruption and
												e-commerce transformation
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Supply chain volatility and
												increasing costs
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Sustainability demands and
												regulatory pressures
											</span>
										</li>
										<li className="flex">
											<span className="text-genesis-gold mr-2">
												•
											</span>
											<span>
												Market saturation and heightened
												competition
											</span>
										</li>
									</ul>
								</div>
							</div>

							{/* Growth Strategy Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<TrendingUp className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Growth & Innovation Strategy
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									Accelerate growth and innovation in your
									consumer goods business with strategies that
									capitalize on emerging trends and consumer
									insights.
								</p>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									Our team of experienced consultants works
									closely with consumer goods companies to
									develop growth strategies that drive
									sustainable competitive advantage. We
									combine deep industry knowledge with
									consumer insights and market analytics to
									identify opportunities and create actionable
									roadmaps for success.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Market Expansion Strategy
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Identify and evaluate new market
											opportunities that align with your
											strengths and business objectives.
											We help you develop market entry
											strategies, assess competitive
											landscapes, and create roadmaps for
											successful expansion into new
											geographies, segments, or
											categories.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Product Innovation & Development
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Develop winning product strategies
											that address evolving consumer needs
											and preferences. We help you
											establish innovation processes,
											identify market gaps, and create
											product roadmaps that capitalize on
											emerging trends while remaining true
											to your brand's core values.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Brand Positioning & Differentiation
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Establish a compelling brand
											position that resonates with your
											target audience and differentiates
											you from competitors. We help you
											define your unique value
											proposition, develop messaging
											frameworks, and create brand
											strategies that drive preference and
											loyalty in crowded marketplaces.
										</p>
									</div>
								</div>
							</div>

							{/* Operations Optimization Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Factory className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Operations Optimization
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									Enhance operational efficiency and
									resilience throughout your value chain to
									improve margins and customer satisfaction.
								</p>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									Our operations experts bring deep experience
									in consumer goods manufacturing,
									distribution, and retail to help you
									optimize your end-to-end operations. We
									identify opportunities for efficiency
									improvements, cost reduction, and enhanced
									service levels across your value chain.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Supply Chain Optimization
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Build resilient, efficient supply
											chains that balance
											cost-effectiveness with
											responsiveness to market demands. We
											help you optimize inventory
											management, enhance supplier
											relationships, implement advanced
											planning systems, and develop
											contingency plans to mitigate
											disruptions.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Manufacturing Excellence
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Improve production efficiency and
											product quality while reducing
											costs. We help you implement lean
											manufacturing principles, optimize
											production planning, enhance quality
											management systems, and leverage
											technology to drive continuous
											improvement.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Distribution & Logistics
											Optimization
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Enhance the efficiency and
											effectiveness of your distribution
											network to improve service levels
											and reduce costs. We help you
											optimize warehouse operations,
											streamline transportation
											management, implement advanced
											logistics technologies, and develop
											multi-channel fulfillment
											strategies.
										</p>
									</div>
								</div>
							</div>

							{/* Digital Transformation Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Truck className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Retail & Channel Strategy
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									Develop effective retail and channel
									strategies that maximize your market
									presence and drive sales growth.
								</p>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									Our retail and channel experts help consumer
									goods companies navigate the complexities of
									today's omnichannel landscape. We develop
									strategies that optimize your presence
									across traditional retail, e-commerce,
									direct-to-consumer, and other emerging
									channels.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Omnichannel Strategy
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Develop an integrated approach to
											serving customers across all
											channels, providing a seamless
											experience that drives engagement
											and loyalty. We help you map
											customer journeys, align channel
											strategies, and implement
											technologies that enable consistent
											cross-channel experiences.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											E-commerce Acceleration
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Capitalize on the growing importance
											of e-commerce in the consumer goods
											sector. We help you develop
											compelling online propositions,
											optimize digital shelf presence,
											implement effective marketplace
											strategies, and build
											direct-to-consumer capabilities that
											drive growth.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Trade Marketing & Retail Execution
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Enhance your effectiveness in
											driving sales through retail
											partners. We help you develop trade
											marketing strategies, optimize
											promotional investments, implement
											effective category management
											approaches, and enhance in-store
											execution to maximize your retail
											performance.
										</p>
									</div>
								</div>
							</div>

							{/* Sustainability Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Shield className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Sustainability & Responsible Business
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									Integrate sustainability into your business
									strategy to meet stakeholder expectations
									and create long-term value.
								</p>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									Our sustainability experts help consumer
									goods companies navigate the evolving
									landscape of environmental and social
									responsibility. We develop strategies that
									not only reduce environmental impact but
									also create business value through enhanced
									reputation, operational efficiencies, and
									innovative products.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Sustainable Product Development
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Develop products that minimize
											environmental impact while meeting
											consumer needs. We help you
											implement eco-design principles,
											assess material alternatives, reduce
											packaging waste, and develop
											circular economy approaches that
											enhance sustainability while
											maintaining product performance.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Responsible Sourcing
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Ensure your supply chain reflects
											your commitment to environmental and
											social responsibility. We help you
											develop responsible sourcing
											strategies, conduct supplier
											assessments, implement traceability
											systems, and engage with suppliers
											to drive continuous improvement in
											sustainability performance.
										</p>
									</div>
								</div>
							</div>

							{/* Digital Transformation Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<BadgePercent className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Consumer Marketing & Analytics
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									Harness the power of data and analytics to
									deepen consumer understanding and drive
									marketing effectiveness.
								</p>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									Our consumer marketing and analytics experts
									help you leverage data to gain consumer
									insights, optimize marketing investments,
									and enhance customer engagement. We combine
									advanced analytics with deep marketing
									expertise to drive measurable results.
								</p>

								<div className="space-y-8 mb-12">
									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Consumer Insights & Segmentation
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Develop deep understanding of your
											consumers to inform product
											development, marketing, and channel
											strategies. We help you conduct
											consumer research, develop
											segmentation models, create consumer
											personas, and translate insights
											into actionable strategies.
										</p>
									</div>

									<div className="bg-zinc-50 p-6 rounded-sm border-l-2 border-genesis-gold">
										<h4 className="text-lg font-medium text-genesis-navy font-playfair mb-3">
											Marketing Effectiveness
										</h4>
										<p className="text-zinc-600 font-montserrat">
											Optimize your marketing investments
											to maximize impact and return on
											investment. We help you develop
											measurement frameworks, implement
											marketing mix modeling, enhance
											digital attribution, and create
											testing approaches that drive
											continuous improvement in marketing
											performance.
										</p>
									</div>
								</div>
							</div>

							{/* CTA Box */}
							<div className="bg-zinc-50 border border-zinc-200 p-8 rounded-sm">
								<h3 className="text-xl font-medium mb-4 font-playfair text-genesis-navy">
									Ready to Transform Your Consumer Goods
									Business?
								</h3>
								<p className="text-zinc-600 mb-6 font-montserrat">
									Our consumer goods experts are ready to help
									you navigate industry challenges, seize
									growth opportunities, and build sustainable
									competitive advantage in today's dynamic
									market environment.
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
									Our Industries
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
											current: true,
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
									Services Offered
								</h3>
								<ul className="space-y-3 mb-8">
									{[
										{
											name: "Growth & Innovation Strategy",
											icon: (
												<TrendingUp className="h-4 w-4" />
											),
										},
										{
											name: "Operations Optimization",
											icon: (
												<Factory className="h-4 w-4" />
											),
										},
										{
											name: "Retail & Channel Strategy",
											icon: <Truck className="h-4 w-4" />,
										},
										{
											name: "Sustainability",
											icon: (
												<Shield className="h-4 w-4" />
											),
										},
										{
											name: "Consumer Marketing & Analytics",
											icon: (
												<BadgePercent className="h-4 w-4" />
											),
										},
									].map((service, index) => (
										<li
											key={index}
											className="flex items-center"
										>
											<CheckCircle2 className="text-genesis-gold mr-2 h-5 w-5 flex-shrink-0" />
											<div className="flex items-center text-zinc-700">
												<span className="text-genesis-gold mr-2">
													{service.icon}
												</span>
												{service.name}
											</div>
										</li>
									))}
								</ul>

								<h3 className="text-lg font-medium mb-4 font-playfair text-genesis-navy">
									Client Success Story
								</h3>
								<div className="bg-zinc-50 p-4 rounded-sm mb-6">
									<p className="text-zinc-600 italic mb-4 font-montserrat text-sm">
										"Genesis Management helped us reshape
										our product portfolio and go-to-market
										strategy, resulting in 18% revenue
										growth and 4% market share gain within
										the first year. Their industry expertise
										and practical approach delivered
										tangible results."
									</p>
									<p className="text-genesis-navy font-medium text-sm">
										— CEO, Leading Personal Care Brand
									</p>
								</div>

								<div className="border-t border-zinc-200 pt-6">
									<h3 className="text-lg font-medium mb-4 font-playfair text-genesis-navy">
										Related Insights
									</h3>
									<ul className="space-y-4">
										<li>
											<Link
												href="/insights/consumer-trends"
												className="group"
											>
												<p className="text-sm text-genesis-navy font-medium group-hover:text-genesis-gold transition-colors">
													Emerging Consumer Trends
												</p>
												<p className="text-xs text-zinc-500">
													How shifting consumer values
													are reshaping the industry
												</p>
											</Link>
										</li>
										<li>
											<Link
												href="/insights/sustainability-strategy"
												className="group"
											>
												<p className="text-sm text-genesis-navy font-medium group-hover:text-genesis-gold transition-colors">
													Sustainability as Strategy
												</p>
												<p className="text-xs text-zinc-500">
													Beyond compliance to
													competitive advantage
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
