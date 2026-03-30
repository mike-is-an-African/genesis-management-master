import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, BarChart, Clock } from "lucide-react";
import { getAllInsights } from "@/lib/insights";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
	title: "Industry Reports | Gen-ius Insights | Genesis Management",
	description:
		"Access comprehensive industry analysis and market trends to inform your strategic decisions.",
};

// Default images for reports that don't have them
const defaultReportImages = [
	"https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // Diverse team analyzing reports
	"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // Woman with tablet
	"https://images.unsplash.com/photo-1600878459108-617a253537e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // Asian woman in business meeting
	"https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // Black man in presentation
	"https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80", // Hispanic man with laptop
];

export default async function ReportsPage() {
	const insights = await getAllInsights();
	const reports = insights.filter((insight) =>
		insight.slug.includes("report-")
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
						src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
						alt="Industry reports and analysis"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
					<div className="max-w-3xl">
						<div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
							Knowledge Center
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
							Industry Reports
						</h1>
						<div className="h-1 w-24 bg-genesis-gold mb-8"></div>
						<p className="text-xl text-white/90 mb-8 font-montserrat">
							Comprehensive industry analysis and market trends to
							inform your strategic decisions
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
									className="text-sm px-5 py-2 bg-genesis-navy text-white rounded-sm transition-colors"
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

						{/* Reports */}
						{reports.length === 0 ? (
							<div className="text-center py-12 px-4">
								<div className="max-w-2xl mx-auto bg-genesis-navy/5 rounded-sm p-8 border-l-2 border-genesis-gold">
									<BarChart className="h-12 w-12 text-genesis-gold mx-auto mb-4" />
									<h3 className="text-xl font-medium mb-4 font-playfair text-genesis-navy">
										Industry Reports Coming Soon
									</h3>
									<p className="text-zinc-600 mb-6 font-montserrat">
										Our team is currently developing
										comprehensive industry reports to help
										you navigate market challenges and
										identify growth opportunities. Subscribe
										to be notified when new reports are
										published.
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
								{reports.map((report, index) => (
									<Link
										key={report.slug}
										href={`/insights/${report.slug}`}
										className="group flex flex-col h-full"
									>
										<div className="h-full overflow-hidden border border-zinc-200 rounded-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-1 bg-white flex flex-col">
											{/* Image container */}
											<div className="relative overflow-hidden h-56">
												<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
												<div className="absolute inset-0 bg-genesis-gold/20 mix-blend-multiply z-10 transition-opacity duration-700 opacity-0 group-hover:opacity-100"></div>

												<Image
													src={
														report.image ||
														defaultReportImages[
															index %
																defaultReportImages.length
														]
													}
													alt={report.title}
													fill
													className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
												/>

												<div className="absolute bottom-4 left-4 px-3 py-1 text-xs uppercase tracking-wider font-medium bg-white/90 text-genesis-navy z-20 backdrop-blur-sm border-l-2 border-genesis-gold">
													Report
												</div>
											</div>

											{/* Content */}
											<div className="p-6 flex flex-col flex-grow">
												<div className="flex items-center justify-between text-sm text-zinc-500 mb-3">
													<div className="flex items-center">
														<Calendar className="h-3.5 w-3.5 mr-1.5" />
														<span>
															{formatDate(
																report.date
															)}
														</span>
													</div>
													<div className="flex items-center">
														<Clock className="h-3.5 w-3.5 mr-1.5" />
														<span>
															{report.readingTime ||
																"10 min read"}
														</span>
													</div>
												</div>

												<h3 className="text-xl font-playfair tracking-tight text-genesis-navy mb-3 group-hover:text-genesis-gold transition-colors line-clamp-2">
													{report.title}
												</h3>

												<p className="text-zinc-600 text-base leading-relaxed mb-4 font-montserrat line-clamp-3">
													{report.description}
												</p>

												<div className="mt-auto flex items-center text-genesis-gold font-medium text-sm">
													<span>Read Report</span>
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
									Stay Updated with Our Latest Reports
								</h2>
								<p className="text-zinc-600 mb-6 font-montserrat">
									Subscribe to our newsletter to receive
									regular updates on industry analysis, market
									trends, and exclusive content delivered
									straight to your inbox.
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
									src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
									alt="Stay updated with Genesis Management industry reports"
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
