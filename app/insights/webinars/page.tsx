import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Video, CalendarDays, Clock } from "lucide-react";
import { getAllInsights } from "@/lib/insights";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
	title: "Webinars & Events | Gen-ius Insights | Genesis Management",
	description:
		"Register for live and on-demand sessions featuring industry experts and thought leaders discussing important business topics.",
};

// Default images for webinars that don't have them
const defaultWebinarImages = [
	"https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2012&q=80", // Main webinar image
	"https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // Group discussion
	"https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // Virtual presentation
	"https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // Business webinar
];

export default async function WebinarsPage() {
	const insights = await getAllInsights();
	const webinars = insights.filter((insight) =>
		insight.slug.includes("webinar-")
	);

	// Split into upcoming and past webinars
	const today = new Date();
	const upcomingWebinars = webinars.filter(
		(webinar) =>
			webinar.description.includes("Upcoming") &&
			new Date(webinar.date) >= today
	);
	const pastWebinars = webinars.filter(
		(webinar) =>
			!webinar.description.includes("Upcoming") ||
			new Date(webinar.date) < today
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
						src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80"
						alt="Webinars and online events"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
					<div className="max-w-3xl">
						<div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
							Knowledge Center
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
							Webinars & Events
						</h1>
						<div className="h-1 w-24 bg-genesis-gold mb-8"></div>
						<p className="text-xl text-white/90 mb-8 font-montserrat">
							Live and on-demand sessions featuring industry
							experts and thought leaders
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
									className="text-sm px-5 py-2 bg-genesis-navy text-white rounded-sm transition-colors"
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

						{/* Webinars Content */}
						{webinars.length === 0 ? (
							<div className="text-center py-12 px-4">
								<div className="max-w-2xl mx-auto bg-genesis-navy/5 rounded-sm p-8 border-l-2 border-genesis-gold">
									<CalendarDays className="h-12 w-12 text-genesis-gold mx-auto mb-4" />
									<h3 className="text-xl font-medium mb-4 font-playfair text-genesis-navy">
										Upcoming Webinars & Events
									</h3>
									<p className="text-zinc-600 mb-6 font-montserrat">
										We're planning a series of webinars and
										virtual events featuring industry
										experts and thought leaders. Subscribe
										to receive invitations to these
										exclusive learning opportunities.
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
							<>
								{/* Upcoming Webinars */}
								{upcomingWebinars.length > 0 && (
									<div className="mb-16">
										<h2 className="text-2xl md:text-3xl font-medium mb-8 font-playfair tracking-tight text-genesis-navy text-center">
											Upcoming Webinars
										</h2>
										<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
											{upcomingWebinars.map(
												(webinar, index) => (
													<Link
														key={webinar.slug}
														href={`/insights/${webinar.slug}`}
														className="group flex flex-col h-full"
													>
														<div className="h-full overflow-hidden border border-zinc-200 rounded-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-1 bg-white flex flex-col">
															{/* Image container */}
															<div className="relative overflow-hidden h-56">
																<Image
																	src={
																		webinar.image ||
																		defaultWebinarImages[
																			index %
																				defaultWebinarImages.length
																		]
																	}
																	alt={
																		webinar.title
																	}
																	fill
																	className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
																/>

																<div className="absolute bottom-4 left-4 px-3 py-1 text-xs uppercase tracking-wider font-medium bg-white/90 text-genesis-navy z-20 backdrop-blur-sm border-l-2 border-genesis-gold">
																	Webinar
																</div>

																<div className="absolute top-4 right-4 bg-genesis-gold px-3 py-1 rounded-sm backdrop-blur-sm z-20">
																	<span className="text-xs text-genesis-navy font-medium">
																		Upcoming
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
																				webinar.date
																			)}
																		</span>
																	</div>
																	<div className="flex items-center">
																		<Clock className="h-3.5 w-3.5 mr-1.5" />
																		<span>
																			60
																			min
																		</span>
																	</div>
																</div>

																<h3 className="text-xl font-playfair tracking-tight text-genesis-navy mb-3 group-hover:text-genesis-gold transition-colors line-clamp-2">
																	{
																		webinar.title
																	}
																</h3>

																<p className="text-zinc-600 text-base leading-relaxed mb-4 font-montserrat line-clamp-3">
																	{webinar.description.replace(
																		"Upcoming: ",
																		""
																	)}
																</p>

																<div className="mt-auto flex items-center text-genesis-gold font-medium text-sm">
																	<span>
																		Register
																		Now
																	</span>
																	<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
																</div>
															</div>
														</div>
													</Link>
												)
											)}
										</div>
									</div>
								)}

								{/* Past Webinars / On-demand */}
								{pastWebinars.length > 0 && (
									<div>
										<h2 className="text-2xl md:text-3xl font-medium mb-8 font-playfair tracking-tight text-genesis-navy text-center">
											On-Demand Webinars
										</h2>
										<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
											{pastWebinars.map(
												(webinar, index) => (
													<Link
														key={webinar.slug}
														href={`/insights/${webinar.slug}`}
														className="group flex flex-col h-full"
													>
														<div className="h-full overflow-hidden border border-zinc-200 rounded-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-1 bg-white flex flex-col">
															{/* Image container */}
															<div className="relative overflow-hidden h-56">
																<Image
																	src={
																		webinar.image ||
																		defaultWebinarImages[
																			(index +
																				2) %
																				defaultWebinarImages.length
																		]
																	}
																	alt={
																		webinar.title
																	}
																	fill
																	className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
																/>

																<div className="absolute bottom-4 left-4 px-3 py-1 text-xs uppercase tracking-wider font-medium bg-white/90 text-genesis-navy z-20 backdrop-blur-sm border-l-2 border-genesis-gold">
																	Webinar
																</div>

																<div className="absolute top-4 right-4 bg-genesis-navy/80 px-3 py-1 rounded-sm backdrop-blur-sm z-20">
																	<span className="text-xs text-white font-medium">
																		On-demand
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
																				webinar.date
																			)}
																		</span>
																	</div>
																	<div className="flex items-center">
																		<Clock className="h-3.5 w-3.5 mr-1.5" />
																		<span>
																			60
																			min
																		</span>
																	</div>
																</div>

																<h3 className="text-xl font-playfair tracking-tight text-genesis-navy mb-3 group-hover:text-genesis-gold transition-colors line-clamp-2">
																	{
																		webinar.title
																	}
																</h3>

																<p className="text-zinc-600 text-base leading-relaxed mb-4 font-montserrat line-clamp-3">
																	{
																		webinar.description
																	}
																</p>

																<div className="mt-auto flex items-center text-genesis-gold font-medium text-sm">
																	<span>
																		Watch
																		Webinar
																	</span>
																	<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
																</div>
															</div>
														</div>
													</Link>
												)
											)}
										</div>
									</div>
								)}
							</>
						)}

						{webinars.length === 0 && (
							<div className="mt-16 text-center">
								<h2 className="text-2xl md:text-3xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
									Upcoming Events
								</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
									{[
										{
											title: "Annual Business Strategy Summit",
											date: "September 15-16, 2023",
											location: "Virtual Event",
											description:
												"A two-day virtual conference focused on innovative strategies for business growth and adaptation in the current economic landscape.",
										},
										{
											title: "Financial Leadership Roundtable",
											date: "October 20, 2023",
											location: "London, UK",
											description:
												"An exclusive in-person gathering of financial leaders discussing the latest trends and challenges in corporate finance.",
										},
									].map((event, index) => (
										<div
											key={index}
											className="bg-white border border-zinc-200 rounded-sm p-6 hover:shadow-subtle transition-all duration-300 hover:-translate-y-1"
										>
											<h3 className="text-xl font-medium mb-3 font-playfair text-genesis-navy">
												{event.title}
											</h3>
											<div className="flex items-center text-sm text-zinc-500 mb-3">
												<Calendar className="h-4 w-4 mr-2" />
												{event.date}
											</div>
											<div className="text-sm text-zinc-500 mb-4">
												{event.location}
											</div>
											<p className="text-zinc-600 text-sm mb-4 font-montserrat">
												{event.description}
											</p>
											<Button className="bg-genesis-gold hover:bg-genesis-gold/90 text-genesis-navy w-full">
												<Link
													href="/subscribe"
													className="flex items-center justify-center"
												>
													Get Notified
													<ArrowRight className="ml-2 h-4 w-4" />
												</Link>
											</Button>
										</div>
									))}
								</div>
							</div>
						)}
					</div>

					{/* Subscribe CTA */}
					<section className="mt-20 bg-genesis-navy/5 rounded-sm p-8 md:p-12">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
							<div>
								<h2 className="text-2xl md:text-3xl font-medium mb-4 font-playfair tracking-tight text-genesis-navy">
									Stay Updated on Future Webinars
								</h2>
								<p className="text-zinc-600 mb-6 font-montserrat">
									Subscribe to our newsletter to receive
									invitations to upcoming webinars and events,
									as well as access to on-demand recordings.
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
									src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
									alt="Stay updated with Genesis Management webinars and events"
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
