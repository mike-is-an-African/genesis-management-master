import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	Calendar,
	Video,
	BookOpen,
	FileText,
	Bookmark,
	FileSpreadsheet,
	BookmarkIcon,
	Radio,
	CalendarDays,
	BarChart,
	Clock,
} from "lucide-react";
import { getAllInsights } from "@/lib/insights";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
	title: "Gen-ius Insights | Genesis Management",
	description:
		"Explore our latest articles, industry reports, case studies, and thought leadership content on business strategy, management, and innovation.",
};

// Default images for insights that don't have them
const defaultInsightImages = [
	"https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80", // Multiethnic business team
	"https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80", // Asian woman presenting
	"https://images.unsplash.com/photo-1601933470096-0e34634ffcde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // Hispanic woman in business
	"https://images.unsplash.com/photo-1585713181977-6f7573b1fb0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80", // Black woman with laptop
	"https://images.unsplash.com/photo-1530811761207-8d9d22f0a141?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // Women of color collaborating
	"https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // Black man in business attire
];

export default async function InsightsPage() {
	const insights = await getAllInsights();

	// Filter insights by type
	const articles = insights.filter(
		(insight) =>
			!insight.slug.includes("video-") &&
			!insight.slug.includes("report-") &&
			!insight.slug.includes("whitepaper-") &&
			!insight.slug.includes("case-study-") &&
			!insight.slug.includes("webinar-") &&
			!insight.slug.includes("podcast-")
	);
	const videos = insights.filter((insight) =>
		insight.slug.includes("video-")
	);
	const reports = insights.filter((insight) =>
		insight.slug.includes("report-")
	);
	const caseStudies = insights.filter((insight) =>
		insight.slug.includes("case-study-")
	);
	const whitepapers = insights.filter((insight) =>
		insight.slug.includes("whitepaper-")
	);
	const webinars = insights.filter((insight) =>
		insight.slug.includes("webinar-")
	);
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
						src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
						alt="Business insights and knowledge"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
					<div className="max-w-3xl">
						<div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
							Knowledge Center
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
							Gen-ius Insights
						</h1>
						<div className="h-1 w-24 bg-genesis-gold mb-8"></div>
						<p className="text-xl text-white/90 mb-8 font-montserrat">
							Discover actionable insights, industry expertise,
							and innovative ideas to drive your business forward
							in today's dynamic business landscape.
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
					<div className="w-full mb-12">
						<div className="flex justify-center overflow-x-auto">
							<nav className="mb-8 flex space-x-2">
								<Link
									href="/insights"
									className="text-sm px-5 py-2 bg-genesis-navy text-white rounded-sm transition-colors"
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
									className="text-sm px-5 py-2 bg-neutral-100 text-genesis-navy hover:bg-neutral-200 rounded-sm transition-colors"
								>
									Podcasts
								</Link>
							</nav>
						</div>

						{/* All Insights */}
						<div>
							<div className="text-center mb-10">
								<h2 className="text-2xl md:text-3xl font-medium mb-4 font-playfair tracking-tight text-genesis-navy">
									Latest Thinking
								</h2>
								<p className="text-zinc-600 max-w-3xl mx-auto font-montserrat">
									Stay updated with our most recent insights
									across all formats
								</p>
							</div>
							{insights.length === 0 ? (
								<div className="text-center py-12">
									<p className="text-zinc-500">
										No insights available yet. Check back
										soon!
									</p>
								</div>
							) : (
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
									{insights.map((insight, index) => (
										<Link
											key={insight.slug}
											href={`/insights/${insight.slug}`}
											className="group flex flex-col h-full"
										>
											<div className="h-full overflow-hidden border border-zinc-200 rounded-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-1 bg-white flex flex-col">
												{/* Image container */}
												<div className="relative overflow-hidden h-56">
													<Image
														src={
															insight.image ||
															defaultInsightImages[
																index %
																	defaultInsightImages.length
															]
														}
														alt={insight.title}
														fill
														className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
													/>

													<div className="absolute bottom-4 left-4 px-3 py-1 text-xs uppercase tracking-wider font-medium bg-white/90 text-genesis-navy z-20 backdrop-blur-sm border-l-2 border-genesis-gold">
														{insight.slug.includes(
															"video-"
														) ? (
															<>Video</>
														) : insight.slug.includes(
																"report-"
														  ) ? (
															<>Report</>
														) : insight.slug.includes(
																"whitepaper-"
														  ) ? (
															<>Whitepaper</>
														) : insight.slug.includes(
																"case-study-"
														  ) ? (
															<>Case Study</>
														) : insight.slug.includes(
																"webinar-"
														  ) ? (
															<>Webinar</>
														) : insight.slug.includes(
																"podcast-"
														  ) ? (
															<>Podcast</>
														) : (
															<>Article</>
														)}
													</div>
												</div>

												{/* Content */}
												<div className="p-6 flex flex-col flex-grow">
													<div className="flex items-center justify-between text-sm text-zinc-500 mb-3">
														<div className="flex items-center">
															<Calendar className="h-3.5 w-3.5 mr-1.5" />
															<span>
																{formatDate(
																	insight.date
																)}
															</span>
														</div>
														<div className="flex items-center">
															<Clock className="h-3.5 w-3.5 mr-1.5" />
															<span>
																{insight.readingTime ||
																	"5 min read"}
															</span>
														</div>
													</div>

													<h3 className="text-xl font-playfair tracking-tight text-genesis-navy mb-3 group-hover:text-genesis-gold transition-colors line-clamp-2">
														{insight.title}
													</h3>

													<p className="text-zinc-600 text-base leading-relaxed mb-4 font-montserrat line-clamp-3">
														{insight.description}
													</p>

													<div className="mt-auto flex items-center text-genesis-gold font-medium text-sm">
														<span>Read More</span>
														<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
													</div>
												</div>
											</div>
										</Link>
									))}
								</div>
							)}
						</div>
					</div>

					{/* Featured Categories */}
					<section className="mt-16 pt-16 border-t border-zinc-200">
						<h2 className="text-2xl md:text-3xl font-medium mb-10 font-playfair tracking-tight text-genesis-navy text-center">
							Explore by Topic
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
							{[
								{
									title: "Strategic Planning",
									icon: (
										<BookOpen className="h-6 w-6 text-genesis-gold" />
									),
									description:
										"Long-term vision and execution strategies",
									link: "/insights?topic=strategic-planning",
								},
								{
									title: "Digital Transformation",
									icon: (
										<FileText className="h-6 w-6 text-genesis-gold" />
									),
									description:
										"Leveraging technology for business growth",
									link: "/insights?topic=digital-transformation",
								},
								{
									title: "Financial Excellence",
									icon: (
										<Bookmark className="h-6 w-6 text-genesis-gold" />
									),
									description:
										"Optimizing financial performance and strategy",
									link: "/insights?topic=financial-excellence",
								},
								{
									title: "Market Trends",
									icon: (
										<Video className="h-6 w-6 text-genesis-gold" />
									),
									description:
										"Emerging patterns in global and local markets",
									link: "/insights?topic=market-trends",
								},
							].map((category, index) => (
								<Link
									key={index}
									href={category.link}
									className="bg-white border border-zinc-200 rounded-sm p-6 hover:shadow-subtle transition-all duration-300 hover:-translate-y-1 group"
								>
									<div className="flex flex-col items-center text-center">
										<div className="bg-genesis-gold/10 p-4 rounded-full mb-4">
											{category.icon}
										</div>
										<h3 className="text-lg font-medium mb-2 group-hover:text-genesis-gold transition-colors font-playfair text-genesis-navy">
											{category.title}
										</h3>
										<p className="text-zinc-600 text-sm mb-4 font-montserrat">
											{category.description}
										</p>
									</div>
								</Link>
							))}
						</div>
					</section>

					{/* Subscribe CTA */}
					<section className="mt-20 bg-genesis-navy/5 rounded-sm p-8 md:p-12">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
							<div>
								<h2 className="text-2xl md:text-3xl font-medium mb-4 font-playfair tracking-tight text-genesis-navy">
									Stay Updated with Our Latest Insights
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
