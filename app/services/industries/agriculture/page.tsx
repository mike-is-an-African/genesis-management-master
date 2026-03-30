import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	Leaf,
	TrendingUp,
	LineChart,
	ShoppingCart,
	Tractor,
	Sprout,
	CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
	title: "Agriculture Industry | Genesis Management",
	description:
		"Cultivating prosperity and harvesting success: Revolutionizing agribusiness with strategic solutions from seed to market with Genesis Management Consultancy.",
};

export default function AgriculturePage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative overflow-hidden">
				{/* Background Image with Overlay */}
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-genesis-navy/70 z-10 mix-blend-multiply"></div>
					<img
						src="https://images.unsplash.com/photo-1627483262769-04d0a1401487?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
						alt="Agriculture in Africa"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
					<div className="max-w-3xl">
						<div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
							Industries We Serve
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
							Agriculture
						</h1>
						<div className="h-1 w-24 bg-genesis-gold mb-8"></div>
						<p className="text-xl text-white/90 mb-8 font-montserrat">
							Cultivating Prosperity, Harvesting Success:
							Revolutionizing agribusiness with strategic
							solutions. From seed to market, we ensure your
							growth yields unmatched success.
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
								Agricultural Excellence From Seed to Market
							</h2>

							{/* Land Acquisition Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Leaf className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Land Acquisition
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									From land acquisition and lease optimization
									to navigating complex regulatory frameworks,
									we're equipped to handle all aspects of your
									land management needs. With a deep
									understanding of the agriculture sector, we
									provide tailored strategies and innovative
									solutions to help you unlock the full
									potential of your land assets.
								</p>
							</div>

							{/* Financial Solutions Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<TrendingUp className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Financial Solutions
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We offer unparalleled consulting services to
									help agricultural businesses optimize their
									financial performance and achieve
									sustainable growth. Our team of financial
									experts provides tailored solutions from
									financial planning and risk management to
									investment strategies and capital
									allocation, we work closely with you to
									drive value and mitigate risks.
								</p>
							</div>

							{/* Strategy Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<LineChart className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Strategy
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									With deep understanding of the industry
									dynamics and market trends, we provide
									strategic guidance and actionable insights
									to optimize your seasonal planning
									processes. Whether it's optimizing planting
									schedules, managing supply chain
									disruptions, or capitalizing on emerging
									market opportunities, we work closely with
									you to develop tailored strategies that
									ensure long-term success.
								</p>
							</div>

							{/* Marketing, Growth & Sales Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<ShoppingCart className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Marketing, Growth & Sales
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We help you optimize your retail
									distribution channels, ensuring your
									products reach the right markets at the
									right time. Our team of seasoned marketing
									professionals develops innovative marketing
									campaigns and customer-centric strategies to
									build brand awareness, attract new
									customers, and drive sales.
								</p>
							</div>

							{/* Infrastructure & Inputs Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Tractor className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Infrastructure & Inputs
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									We facilitate access to trusted suppliers,
									ensuring you have a reliable and sustainable
									supply chain of agricultural inputs. We also
									understand the critical role that
									high-quality inputs and advanced farm
									technologies play in driving productivity
									and profitability in the agricultural
									sector.
								</p>
							</div>

							{/* Sustainability Section */}
							<div className="mb-16">
								<div className="flex items-center mb-4">
									<Sprout className="h-6 w-6 text-genesis-gold mr-3" />
									<h3 className="text-xl md:text-2xl font-medium font-playfair tracking-tight text-genesis-navy">
										Sustainability
									</h3>
								</div>
								<p className="text-lg text-zinc-600 mb-8 font-montserrat">
									In a rapidly changing world, where climate
									change necessitates a transition towards a
									greener future, Genesis stands ready to
									support you. As a leader in the field of
									sustainability services for the Agriculture
									Industry, we understand the imperative to
									adopt sustainable practices that balance
									environmental stewardship with business
									growth. From optimizing resource utilization
									to mitigating climate risks and promoting
									social responsibility, our tailored
									solutions enable you to drive positive
									impact while maintaining a competitive edge.
								</p>
							</div>

							{/* Case Study Section */}
							<div className="bg-zinc-50 p-8 rounded-sm mb-12">
								<h3 className="text-xl md:text-2xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
									Success Story: Transforming an Agricultural
									Enterprise
								</h3>
								<p className="text-lg text-zinc-600 mb-4 font-montserrat">
									We partnered with a mid-sized agricultural
									producer facing challenges with distribution
									efficiency and market access. Our team
									implemented a comprehensive strategy that
									included:
								</p>
								<ul className="list-disc pl-6 mb-6 text-zinc-600 font-montserrat space-y-2">
									<li>
										Optimizing the supply chain to reduce
										waste by 35%
									</li>
									<li>
										Developing new market channels that
										expanded customer reach by 50%
									</li>
									<li>
										Implementing sustainable farming
										practices that reduced water usage by
										28%
									</li>
									<li>
										Securing favorable financing terms for
										expansion and equipment upgrades
									</li>
								</ul>
								<p className="text-lg text-zinc-600 mb-6 font-montserrat">
									The result was a 42% increase in revenue and
									a significant improvement in operational
									efficiency, establishing the client as a
									leader in sustainable agricultural practices
									in their region.
								</p>
							</div>

							{/* CTA Box */}
							<div className="bg-genesis-navy p-8 rounded-sm text-white">
								<h3 className="text-xl font-medium mb-4 font-playfair">
									Ready to Grow Your Agricultural Business?
								</h3>
								<p className="mb-6 font-montserrat">
									Our team of agricultural industry experts is
									ready to help you optimize your operations,
									expand your market reach, and build a
									sustainable future for your agribusiness.
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
											current: true,
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
									Our Agricultural Expertise
								</h3>
								<ul className="space-y-3 mb-8">
									{[
										"Land Acquisition & Management",
										"Financial Planning & Risk Management",
										"Strategic Season Planning",
										"Market Access & Distribution",
										"Supply Chain Optimization",
										"Sustainable Farming Practices",
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
										"Genesis Management has transformed our
										agricultural operations. Their strategic
										guidance helped us navigate market
										volatility and implement sustainable
										practices that have not only reduced our
										environmental impact but also
										significantly improved our bottom line."
									</p>
									<p className="text-genesis-navy font-medium text-sm">
										— Operations Director, Large-Scale Farm
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
													Financial solutions tailored
													for agribusiness
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
													Market access strategies for
													agricultural products
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
