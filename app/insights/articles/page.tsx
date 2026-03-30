import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, FileText, Clock } from "lucide-react";
import { getAllInsights } from "@/lib/insights";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
	title: "Latest Articles | Gen-ius Insights | Genesis Management",
	description:
		"Explore our latest articles with in-depth analysis and expert perspectives on business trends and strategies.",
};

// Default images for articles that don't have them
const defaultArticleImages = [
	"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80", // Woman smiling in business attire
	"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80", // Diverse group collaborating
	"https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80", // Woman working on laptop
	"https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80", // Black businessman with briefcase
	"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // Woman with glasses
	"https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // Asian businessman
];

export default async function ArticlesPage() {
	const insights = await getAllInsights();
	const articles = insights.filter(
		(insight) =>
			!insight.slug.includes("video-") &&
			!insight.slug.includes("report-") &&
			!insight.slug.includes("whitepaper-") &&
			!insight.slug.includes("case-study-") &&
			!insight.slug.includes("webinar-") &&
			!insight.slug.includes("podcast-")
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
						src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
						alt="Business articles and insights"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
					<div className="max-w-3xl">
						<div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
							Knowledge Center
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
							Latest Articles
						</h1>
						<div className="h-1 w-24 bg-genesis-gold mb-8"></div>
						<p className="text-xl text-white/90 mb-8 font-montserrat">
							In-depth analysis and expert perspectives on
							business trends and strategies for today's leaders
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
									className="text-sm px-5 py-2 bg-genesis-navy text-white rounded-sm transition-colors"
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
									className="text-sm px-5 py-2 bg-neutral-100 text-genesis-navy hover:bg-neutral-200 rounded-sm transition-colors"
								>
									Podcasts
								</Link>
							</nav>
						</div>

						{/* Articles */}
						{articles.length === 0 ? (
							<div className="text-center py-12">
								<p className="text-zinc-500">
									No articles available yet. Check back soon!
								</p>
							</div>
						) : (
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
								{articles.map((article, index) => (
									<Link
										key={article.slug}
										href={`/insights/${article.slug}`}
										className="group flex flex-col h-full"
									>
										<div className="h-full overflow-hidden border border-zinc-200 rounded-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-1 bg-white flex flex-col">
											{/* Image container */}
											<div className="relative overflow-hidden h-56">
												<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
												<div className="absolute inset-0 bg-genesis-gold/20 mix-blend-multiply z-10 transition-opacity duration-700 opacity-0 group-hover:opacity-100"></div>

												<Image
													src={
														article.image ||
														defaultArticleImages[
															index %
																defaultArticleImages.length
														]
													}
													alt={article.title}
													fill
													className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
												/>

												<div className="absolute bottom-4 left-4 px-3 py-1 text-xs uppercase tracking-wider font-medium bg-white/90 text-genesis-navy z-20 backdrop-blur-sm border-l-2 border-genesis-gold">
													Article
												</div>
											</div>

											{/* Content */}
											<div className="p-6 flex flex-col flex-grow">
												<div className="flex items-center justify-between text-sm text-zinc-500 mb-3">
													<div className="flex items-center">
														<Calendar className="h-3.5 w-3.5 mr-1.5" />
														<span>
															{formatDate(
																article.date
															)}
														</span>
													</div>
													<div className="flex items-center">
														<Clock className="h-3.5 w-3.5 mr-1.5" />
														<span>
															{article.readingTime ||
																"5 min read"}
														</span>
													</div>
												</div>

												<h3 className="text-xl font-playfair tracking-tight text-genesis-navy mb-3 group-hover:text-genesis-gold transition-colors line-clamp-2">
													{article.title}
												</h3>

												<p className="text-zinc-600 text-base leading-relaxed mb-4 font-montserrat line-clamp-3">
													{article.description}
												</p>

												<div className="mt-auto flex items-center text-genesis-gold font-medium text-sm">
													<span>Read Article</span>
													<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
												</div>
											</div>
										</div>
									</Link>
								))}
							</div>
						)}
					</div>

					{/* Subscribe CTA */}
					<section className="mt-20 bg-genesis-navy/5 rounded-sm p-8 md:p-12">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
							<div>
								<h2 className="text-2xl md:text-3xl font-medium mb-4 font-playfair tracking-tight text-genesis-navy">
									Stay Updated with Our Latest Articles
								</h2>
								<p className="text-zinc-600 mb-6 font-montserrat">
									Subscribe to our newsletter to receive
									regular updates on business trends,
									strategic insights, and exclusive content
									delivered straight to your inbox.
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
									src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
									alt="Stay updated with Genesis Management insights"
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
