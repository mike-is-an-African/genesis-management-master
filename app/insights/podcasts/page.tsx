import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Radio, ExternalLink, Clock } from "lucide-react";
import { getAllInsights } from "@/lib/insights";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
	title: "Podcasts | Gen-ius Insights | Genesis Management",
	description:
		"Listen to insightful conversations with industry experts and thought leaders on business strategy, management, and innovation.",
};

// Default images for podcasts that don't have them
const defaultPodcastImages = [
	"https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Main podcast image
	"https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80", // Studio podcast
	"https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Podcast setup
	"https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80", // Business podcast
];

export default async function PodcastsPage() {
	const insights = await getAllInsights();
	const podcasts = insights.filter((insight) =>
		insight.slug.includes("podcast-")
	);

	return (
		<div className="min-h-screen bg-white">
			<div className="absolute inset-0 bg-noise opacity-30"></div>

			{/* Hero Section */}
			<section className="relative overflow-hidden">
				{/* Background Image with Overlay */}
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-genesis-navy/70 z-10 mix-blend-multiply"></div>
					<img
						src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
						alt="Business podcasts and audio content"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
					<div className="max-w-3xl">
						<div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
							Knowledge Center
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
							Podcasts
						</h1>
						<div className="h-1 w-24 bg-genesis-gold mb-8"></div>
						<p className="text-xl text-white/90 mb-8 font-montserrat">
							Insightful conversations with industry experts and
							thought leaders
						</p>
						<Button className="bg-genesis-gold hover:bg-genesis-gold/90 text-genesis-navy">
							<Link
								href="/subscribe"
								className="flex items-center"
							>
								Subscribe for Updates
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</div>
				</div>
			</section>

			<div className="container mx-auto px-4 py-16 relative z-10">
				<div className="max-w-6xl mx-auto">
					{/* Navigation */}
					<div className="w-full mb-12">
						<div className="flex justify-center overflow-x-auto mb-12">
							<nav className="flex space-x-2">
								<Link
									href="/insights"
									className="text-sm px-5 py-2 bg-neutral-100 text-genesis-navy hover:bg-neutral-200 rounded-sm transition-colors"
								>
									All Insights
								</Link>
								<Link
									href="/insights/articles"
									className="text-sm px-5 py-2 bg-neutral-100 text-genesis-navy hover:bg-neutral-200 rounded-sm transition-colors"
								>
									Latest Articles
								</Link>
								<Link
									href="/insights/reports"
									className="text-sm px-5 py-2 bg-neutral-100 text-genesis-navy hover:bg-neutral-200 rounded-sm transition-colors"
								>
									Industry Reports
								</Link>
								<Link
									href="/insights/case-studies"
									className="text-sm px-5 py-2 bg-neutral-100 text-genesis-navy hover:bg-neutral-200 rounded-sm transition-colors"
								>
									Case Studies
								</Link>
								<Link
									href="/insights/whitepapers"
									className="text-sm px-5 py-2 bg-neutral-100 text-genesis-navy hover:bg-neutral-200 rounded-sm transition-colors"
								>
									Whitepapers
								</Link>
								<Link
									href="/insights/webinars"
									className="text-sm px-5 py-2 bg-neutral-100 text-genesis-navy hover:bg-neutral-200 rounded-sm transition-colors"
								>
									Webinars & Events
								</Link>
								<Link
									href="/insights/podcasts"
									className="text-sm px-5 py-2 bg-genesis-navy text-white rounded-sm transition-colors"
								>
									Podcasts
								</Link>
							</nav>
						</div>

						{/* Podcasts */}
						{podcasts.length === 0 ? (
							<div className="text-center py-12 px-4">
								<div className="max-w-2xl mx-auto bg-genesis-navy/5 rounded-sm p-8 border-l-2 border-genesis-gold">
									<Radio className="h-12 w-12 text-genesis-gold mx-auto mb-4" />
									<h3 className="text-xl font-medium mb-4 font-playfair text-genesis-navy">
										Podcasts Coming Soon
									</h3>
									<p className="text-zinc-600 mb-6 font-montserrat">
										We're developing a podcast series
										featuring conversations with industry
										experts and thought leaders. Subscribe
										to be notified when our first episodes
										launch.
									</p>
									<Button className="bg-genesis-gold hover:bg-genesis-gold/90 text-genesis-navy">
										<Link
											href="/subscribe"
											className="flex items-center"
										>
											Get Notified
											<ArrowRight className="ml-2 h-4 w-4" />
										</Link>
									</Button>
								</div>

								{/* Featured Podcast Information */}
								<div className="mt-20">
									<h2 className="text-2xl md:text-3xl font-medium mb-12 font-playfair tracking-tight text-genesis-navy text-center">
										About Our Upcoming Podcast Series
									</h2>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
										<div className="aspect-square max-w-md mx-auto rounded-sm overflow-hidden shadow-lg">
											<img
												src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
												alt="Genesis Management Podcast"
												className="w-full h-full object-cover"
											/>
										</div>
										<div className="text-left">
											<h3 className="text-2xl font-medium mb-4 font-playfair text-genesis-navy">
												"Business Vision" Podcast
											</h3>
											<p className="text-zinc-600 mb-6 font-montserrat">
												Our upcoming podcast series
												"Business Vision" will feature
												in-depth conversations with top
												executives, industry experts,
												and thought leaders from around
												the world. Each episode will
												explore challenges and
												opportunities in today's complex
												business landscape.
											</p>
											<div className="space-y-4 mb-8">
												<div className="flex items-start">
													<div className="bg-genesis-gold/10 p-2 rounded-full mr-4 mt-1">
														<Radio className="h-4 w-4 text-genesis-gold" />
													</div>
													<div>
														<h4 className="font-medium text-genesis-navy">
															Expert-led
															discussions
														</h4>
														<p className="text-sm text-zinc-600">
															Hear directly from
															C-suite leaders and
															industry specialists
														</p>
													</div>
												</div>
												<div className="flex items-start">
													<div className="bg-genesis-gold/10 p-2 rounded-full mr-4 mt-1">
														<Radio className="h-4 w-4 text-genesis-gold" />
													</div>
													<div>
														<h4 className="font-medium text-genesis-navy">
															Actionable insights
														</h4>
														<p className="text-sm text-zinc-600">
															Practical strategies
															you can apply to
															your business
															immediately
														</p>
													</div>
												</div>
												<div className="flex items-start">
													<div className="bg-genesis-gold/10 p-2 rounded-full mr-4 mt-1">
														<Radio className="h-4 w-4 text-genesis-gold" />
													</div>
													<div>
														<h4 className="font-medium text-genesis-navy">
															Industry trends
														</h4>
														<p className="text-sm text-zinc-600">
															Stay ahead of market
															shifts and emerging
															opportunities
														</p>
													</div>
												</div>
											</div>
											<Button className="bg-genesis-gold hover:bg-genesis-gold/90 text-genesis-navy">
												<Link
													href="/subscribe"
													className="flex items-center"
												>
													Subscribe for Updates
													<ArrowRight className="ml-2 h-4 w-4" />
												</Link>
											</Button>
										</div>
									</div>
								</div>
							</div>
						) : (
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
								{podcasts.map((podcast, index) => (
									<Link
										key={podcast.slug}
										href={
											podcast.description.includes(
												"external:"
											)
												? podcast.description
														.split("external:")[1]
														.trim()
												: `/insights/${podcast.slug}`
										}
										target={
											podcast.description.includes(
												"external:"
											)
												? "_blank"
												: ""
										}
										rel={
											podcast.description.includes(
												"external:"
											)
												? "noopener noreferrer"
												: ""
										}
										className="group flex flex-col h-full"
									>
										<div className="h-full overflow-hidden border border-zinc-200 rounded-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-1 bg-white flex flex-col">
											{/* Image container */}
											<div className="relative overflow-hidden h-56">
												<Image
													src={
														podcast.image ||
														defaultPodcastImages[
															index %
																defaultPodcastImages.length
														]
													}
													alt={podcast.title}
													fill
													className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
												/>

												<div className="absolute bottom-4 left-4 px-3 py-1 text-xs uppercase tracking-wider font-medium bg-white/90 text-genesis-navy z-20 backdrop-blur-sm border-l-2 border-genesis-gold">
													Podcast
												</div>

												{podcast.description.includes(
													"external:"
												) ? (
													<div className="absolute top-4 right-4 bg-genesis-gold px-3 py-1 rounded-sm backdrop-blur-sm z-20">
														<span className="text-xs text-genesis-navy font-medium">
															External
														</span>
													</div>
												) : (
													<div className="absolute top-4 right-4 bg-genesis-navy/80 px-3 py-1 rounded-sm backdrop-blur-sm z-20">
														<span className="text-xs text-white font-medium">
															Genesis Media
														</span>
													</div>
												)}
											</div>

											{/* Content */}
											<div className="p-6 flex flex-col flex-grow">
												<div className="flex items-center justify-between text-sm text-zinc-500 mb-3">
													<div className="flex items-center">
														<Calendar className="h-3.5 w-3.5 mr-1.5" />
														<span>
															{formatDate(
																podcast.date
															)}
														</span>
													</div>
													<div className="flex items-center">
														<Clock className="h-3.5 w-3.5 mr-1.5" />
														<span>45 min</span>
													</div>
												</div>

												<h3 className="text-xl font-playfair tracking-tight text-genesis-navy mb-3 group-hover:text-genesis-gold transition-colors line-clamp-2">
													{podcast.title}
												</h3>

												<p className="text-zinc-600 text-base leading-relaxed mb-4 font-montserrat line-clamp-3">
													{podcast.description.includes(
														"external:"
													)
														? podcast.description
																.split(
																	"external:"
																)[0]
																.trim()
														: podcast.description}
												</p>

												<div className="mt-auto flex items-center text-genesis-gold font-medium text-sm">
													<span>
														{podcast.description.includes(
															"external:"
														)
															? "Listen on External Platform"
															: "Listen Now"}
													</span>
													{podcast.description.includes(
														"external:"
													) ? (
														<ExternalLink className="ml-2 h-4 w-4" />
													) : (
														<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
													)}
												</div>
											</div>
										</div>
									</Link>
								))}
							</div>
						)}
					</div>

					{/* Recommended Shows */}
					{podcasts.length === 0 && (
						<section className="mt-20 pt-16 border-t border-zinc-200">
							<h2 className="text-2xl md:text-3xl font-medium mb-10 font-playfair tracking-tight text-genesis-navy text-center">
								Business Podcasts We Recommend
							</h2>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
								{[
									{
										title: "HBR IdeaCast",
										host: "Harvard Business Review",
										description:
											"A weekly podcast featuring leading thinkers in business and management.",
										link: "https://hbr.org/podcasts/ideacast",
										image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
									},
									{
										title: "Masters of Scale",
										host: "Reid Hoffman",
										description:
											"How successful companies grow from zero to a gazillion, tested theories with masters of scale.",
										link: "https://mastersofscale.com/",
										image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
									},
									{
										title: "The McKinsey Podcast",
										host: "McKinsey & Company",
										description:
											"Insights and perspectives from McKinsey leaders on the trends shaping global business.",
										link: "https://www.mckinsey.com/featured-insights/mckinsey-podcast",
										image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
									},
								].map((show, index) => (
									<a
										key={index}
										href={show.link}
										target="_blank"
										rel="noopener noreferrer"
										className="group flex flex-col h-full"
									>
										<div className="h-full overflow-hidden border border-zinc-200 rounded-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-1 bg-white flex flex-col">
											{/* Image container */}
											<div className="relative overflow-hidden h-56">
												<Image
													src={show.image}
													alt={show.title}
													fill
													className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
												/>

												<div className="absolute bottom-4 left-4 px-3 py-1 text-xs uppercase tracking-wider font-medium bg-white/90 text-genesis-navy z-20 backdrop-blur-sm border-l-2 border-genesis-gold">
													Recommended
												</div>

												<div className="absolute top-4 right-4 bg-genesis-gold px-3 py-1 rounded-sm backdrop-blur-sm z-20">
													<span className="text-xs text-genesis-navy font-medium">
														External
													</span>
												</div>
											</div>

											{/* Content */}
											<div className="p-6 flex flex-col flex-grow">
												<div className="flex items-center text-sm text-genesis-gold mb-3">
													<Radio className="h-3.5 w-3.5 mr-1.5" />
													<span className="font-medium">
														Hosted by {show.host}
													</span>
												</div>

												<h3 className="text-xl font-playfair tracking-tight text-genesis-navy mb-3 group-hover:text-genesis-gold transition-colors line-clamp-2">
													{show.title}
												</h3>

												<p className="text-zinc-600 text-base leading-relaxed mb-4 font-montserrat line-clamp-3">
													{show.description}
												</p>

												<div className="mt-auto flex items-center text-genesis-gold font-medium text-sm">
													<span>Visit Show</span>
													<ExternalLink className="ml-2 h-4 w-4" />
												</div>
											</div>
										</div>
									</a>
								))}
							</div>
						</section>
					)}

					{/* Subscribe CTA */}
					<section className="mt-20 bg-genesis-navy/5 rounded-sm p-8 md:p-12">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
							<div>
								<h2 className="text-2xl md:text-3xl font-medium mb-4 font-playfair tracking-tight text-genesis-navy">
									Never Miss an Episode
								</h2>
								<p className="text-zinc-600 mb-6 font-montserrat">
									Subscribe to our newsletter to receive
									notifications when new podcast episodes are
									released, featuring exclusive insights from
									business leaders.
								</p>
								<Button className="bg-genesis-gold hover:bg-genesis-gold/90 text-genesis-navy">
									<Link
										href="/subscribe"
										className="flex items-center"
									>
										Subscribe Now
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
							</div>
							<div className="hidden md:block">
								<img
									src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
									alt="Stay updated with Genesis Management podcasts"
									className="w-full h-64 object-cover rounded-sm"
								/>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
