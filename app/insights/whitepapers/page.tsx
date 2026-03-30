import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, FileSpreadsheet, Clock } from "lucide-react";
import { getAllInsights } from "@/lib/insights";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
	title: "Whitepapers | Gen-ius Insights | Genesis Management",
	description:
		"Access in-depth research and thought leadership on complex business challenges from our expert team.",
};

// Default images for whitepapers that don't have them
const defaultWhitepaperImages = [
	"https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // Business documents
	"https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2026&q=80", // Data analysis
	"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // Computer work
];

export default async function WhitepapersPage() {
	const insights = await getAllInsights();
	const whitepapers = insights.filter((insight) =>
		insight.slug.includes("whitepaper-")
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
						src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
						alt="Business whitepapers and research"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
					<div className="max-w-3xl">
						<div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
							Knowledge Center
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
							Whitepapers
						</h1>
						<div className="h-1 w-24 bg-genesis-gold mb-8"></div>
						<p className="text-xl text-white/90 mb-8 font-montserrat">
							In-depth research and thought leadership on complex
							business challenges
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
									className="text-sm px-5 py-2 bg-genesis-navy text-white rounded-sm transition-colors"
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

						{/* Whitepapers */}
						{whitepapers.length === 0 ? (
							<div className="text-center py-12 px-4">
								<div className="max-w-2xl mx-auto bg-genesis-navy/5 rounded-sm p-8 border-l-2 border-genesis-gold">
									<FileSpreadsheet className="h-12 w-12 text-genesis-gold mx-auto mb-4" />
									<h3 className="text-xl font-medium mb-4 font-playfair text-genesis-navy">
										Whitepapers Coming Soon
									</h3>
									<p className="text-zinc-600 mb-6 font-montserrat">
										Our team is currently developing
										in-depth whitepapers on critical
										business topics. These downloadable PDF
										resources will provide comprehensive
										insights into complex business
										challenges. Subscribe to be notified
										when they become available.
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
							</div>
						) : (
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
								{whitepapers.map((whitepaper, index) => (
									<Link
										key={whitepaper.slug}
										href={`/insights/${whitepaper.slug}`}
										className="group flex flex-col h-full"
									>
										<div className="h-full overflow-hidden border border-zinc-200 rounded-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-1 bg-white flex flex-col">
											{/* Image container */}
											<div className="relative overflow-hidden h-56">
												<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
												<div className="absolute inset-0 bg-genesis-gold/20 mix-blend-multiply z-10 transition-opacity duration-700 opacity-0 group-hover:opacity-100"></div>

												<Image
													src={
														whitepaper.image ||
														defaultWhitepaperImages[
															index %
																defaultWhitepaperImages.length
														]
													}
													alt={whitepaper.title}
													fill
													className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
												/>

												<div className="absolute bottom-4 left-4 px-3 py-1 text-xs uppercase tracking-wider font-medium bg-white/90 text-genesis-navy z-20 backdrop-blur-sm border-l-2 border-genesis-gold">
													Whitepaper
												</div>

												<div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-sm flex items-center backdrop-blur-sm z-20">
													<FileSpreadsheet className="h-4 w-4 text-genesis-gold mr-1" />
													<span className="text-xs">
														PDF
													</span>
												</div>
											</div>

											{/* Content */}
											<div className="p-6 flex flex-col flex-grow">
												<div className="flex items-center justify-between text-sm text-zinc-500 mb-3">
													<div className="flex items-center">
														<Calendar className="h-3.5 w-3.5 mr-1.5" />
														<span>
															{formatDate(
																whitepaper.date
															)}
														</span>
													</div>
													<div className="flex items-center">
														<Clock className="h-3.5 w-3.5 mr-1.5" />
														<span>
															{whitepaper.readingTime ||
																"15 min read"}
														</span>
													</div>
												</div>

												<h3 className="text-xl font-playfair tracking-tight text-genesis-navy mb-3 group-hover:text-genesis-gold transition-colors line-clamp-2">
													{whitepaper.title}
												</h3>

												<p className="text-zinc-600 text-base leading-relaxed mb-4 font-montserrat line-clamp-3">
													{whitepaper.description}
												</p>

												<div className="mt-auto flex items-center text-genesis-gold font-medium text-sm">
													<span>Download PDF</span>
													<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
												</div>
											</div>
										</div>
									</Link>
								))}
							</div>
						)}
					</div>

					{/* Featured Topics */}
					<section className="mt-16 pt-16 border-t border-zinc-200">
						<h2 className="text-2xl md:text-3xl font-medium mb-10 font-playfair tracking-tight text-genesis-navy text-center">
							Featured Whitepaper Topics
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{[
								{
									title: "Digital Transformation",
									description:
										"Strategies for successful digital adoption and transformation for mid-size enterprises",
								},
								{
									title: "ESG Strategy",
									description:
										"Implementing effective Environmental, Social, and Governance practices for sustainable growth",
								},
								{
									title: "Risk Management",
									description:
										"Comprehensive approaches to identifying, assessing, and mitigating business risks",
								},
							].map((topic, index) => (
								<div
									key={index}
									className="bg-white border border-zinc-200 rounded-sm p-6"
								>
									<h3 className="text-lg font-medium mb-2 font-playfair text-genesis-navy">
										{topic.title}
									</h3>
									<p className="text-zinc-600 text-sm mb-4 font-montserrat">
										{topic.description}
									</p>
								</div>
							))}
						</div>
					</section>

					{/* Subscribe CTA */}
					<section className="mt-20 bg-genesis-navy/5 rounded-sm p-8 md:p-12">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
							<div>
								<h2 className="text-2xl md:text-3xl font-medium mb-4 font-playfair tracking-tight text-genesis-navy">
									Get Early Access to Our Whitepapers
								</h2>
								<p className="text-zinc-600 mb-6 font-montserrat">
									Subscribe to our newsletter to receive early
									access to our whitepapers and exclusive
									research delivered straight to your inbox.
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
									src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
									alt="Stay updated with Genesis Management whitepapers"
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
