import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
	ArrowLeft,
	ArrowRight,
	Calendar,
	Clock,
	Share2,
	Bookmark,
	Play,
	FileText,
	Video,
	FileSpreadsheet,
	Radio,
	BarChart,
	CalendarDays,
} from "lucide-react";
import { getInsightBySlug, getAllInsights } from "@/lib/insights";
import { formatDate } from "@/lib/utils";
import TableOfContents from "@/components/table-of-contents";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Callout } from "@/components/ui/callout";
import { Steps } from "@/components/ui/steps";
import { Metrics } from "@/components/ui/metrics";
import { DataTable } from "@/components/ui/data-table";
import { StatGrid } from "@/components/ui/stat-grid";
import { FrameworkCard } from "@/components/ui/framework-card";
import { TimelineItem } from "@/components/ui/timeline-item";

const components = {
	Callout,
	Card,
	Steps,
	"Steps.Step": Steps.Step,
	Metrics,
	"Metrics.Category": Metrics.Category,
	DataTable,
	StatGrid,
	FrameworkCard,
	TimelineItem,
	h2: (props: any) => (
		<h2
			className="text-2xl md:text-3xl font-medium mt-12 mb-6 font-playfair tracking-tight text-genesis-navy"
			{...props}
		/>
	),
	h3: (props: any) => (
		<h3
			className="text-xl md:text-2xl font-medium mt-8 mb-4 font-playfair tracking-tight text-genesis-navy"
			{...props}
		/>
	),
	p: (props: any) => (
		<p
			className="text-base md:text-lg text-zinc-600 leading-relaxed mb-6 font-montserrat"
			{...props}
		/>
	),
	ul: (props: any) => (
		<ul
			className="list-disc list-inside text-base md:text-lg text-zinc-600 space-y-2 mb-6 font-montserrat"
			{...props}
		/>
	),
	ol: (props: any) => (
		<ol
			className="list-decimal list-inside text-base md:text-lg text-zinc-600 space-y-2 mb-6 font-montserrat"
			{...props}
		/>
	),
	li: (props: any) => (
		<li
			className="text-base md:text-lg text-zinc-600 leading-relaxed font-montserrat"
			{...props}
		/>
	),
	blockquote: (props: any) => (
		<blockquote
			className="border-l-4 border-genesis-gold pl-4 italic text-base md:text-lg text-zinc-600 my-6 font-montserrat"
			{...props}
		/>
	),
	a: (props: any) => (
		<a
			className="text-genesis-gold hover:text-genesis-navy underline-offset-4 hover:underline font-montserrat"
			{...props}
		/>
	),
	strong: (props: any) => (
		<strong className="font-medium text-genesis-navy" {...props} />
	),
	code: (props: any) => (
		<code
			className="bg-zinc-100 rounded px-1.5 py-0.5 text-sm font-mono"
			{...props}
		/>
	),
	pre: (props: any) => (
		<pre
			className="bg-zinc-100 rounded-sm p-4 overflow-x-auto my-6"
			{...props}
		/>
	),
};

type Props = {
	params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const insight = await getInsightBySlug(params.slug);

	if (!insight) {
		return {
			title: "Insight Not Found",
			description: "The requested insight could not be found.",
		};
	}

	return {
		title: `${insight.title} | Genesis Management Insights`,
		description: insight.description,
	};
}

export async function generateStaticParams() {
	const insights = await getAllInsights();
	return insights.map((insight) => ({
		slug: insight.slug,
	}));
}

export default async function InsightPage({ params }: Props) {
	const insight = await getInsightBySlug(params.slug);

	if (!insight) {
		notFound();
	}

	// Get related insights (excluding current)
	const allInsights = await getAllInsights();
	const relatedInsights = allInsights
		.filter((p) => p.slug !== params.slug)
		.slice(0, 3);

	const isVideo = insight.slug.includes("video-");
	const isAudio = insight.slug.includes("audio-");
	const isReport = insight.slug.includes("report-");
	const isWhitepaper = insight.slug.includes("whitepaper-");
	const isWebinar = insight.slug.includes("webinar-");
	const isPodcast = insight.slug.includes("podcast-");

	// For handling external podcast links
	const isPodcastExternal =
		isPodcast && insight.description.includes("external:");
	const externalPodcastUrl = isPodcastExternal
		? insight.description.split("external:")[1].trim()
		: "";
	const cleanPodcastDescription = isPodcastExternal
		? insight.description.split("external:")[0].trim()
		: insight.description;

	// For webinar status
	const isUpcomingWebinar =
		isWebinar && insight.description.includes("Upcoming");

	return (
		<article className="min-h-screen bg-white">
			<div className="absolute inset-0 bg-noise opacity-30"></div>
			<div className="container mx-auto px-4 py-16 pt-24 md:pt-28 relative z-10">
				<div className="max-w-4xl mx-auto">
					<div className="mb-12 relative">
						<Link
							href="/insights"
							className="inline-flex items-center text-sm mb-8 group text-genesis-navy hover:text-genesis-gold relative !z-[9999] !pointer-events-auto"
							style={{ position: "relative", zIndex: 9999 }}
						>
							<ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
							Back to all insights
						</Link>

						{/* Content type specific display */}
						{isVideo && (
							<div className="mb-8 relative rounded-sm overflow-hidden">
								<div className="aspect-video bg-zinc-900 flex items-center justify-center">
									<Play className="h-16 w-16 text-white opacity-80" />
								</div>
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
							</div>
						)}

						{isWebinar && (
							<div className="mb-8 relative rounded-sm overflow-hidden">
								<div className="aspect-video bg-zinc-900 flex items-center justify-center">
									{isUpcomingWebinar ? (
										<div className="text-center">
											<CalendarDays className="h-16 w-16 text-white opacity-80 mx-auto mb-3" />
											<div className="bg-genesis-gold text-genesis-navy px-4 py-1 rounded-sm inline-block">
												<span className="text-sm font-medium">
													Upcoming Event
												</span>
											</div>
										</div>
									) : (
										<Play className="h-16 w-16 text-white opacity-80" />
									)}
								</div>
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
							</div>
						)}

						{isPodcast && !isPodcastExternal && (
							<div className="mb-8 relative rounded-sm overflow-hidden">
								<div className="aspect-video bg-zinc-100 flex items-center justify-center">
									<div className="text-center">
										<Radio className="h-16 w-16 text-genesis-gold opacity-80 mx-auto mb-3" />
										<div className="text-genesis-navy font-medium">
											<span>Listen to this episode</span>
										</div>
									</div>
								</div>
							</div>
						)}

						{isWhitepaper && (
							<div className="mb-8 relative rounded-sm overflow-hidden">
								<div className="bg-genesis-navy/10 p-8 flex items-center rounded-sm">
									<div className="mr-6">
										<FileSpreadsheet className="h-16 w-16 text-genesis-gold" />
									</div>
									<div>
										<h3 className="text-xl font-medium mb-1 font-playfair text-genesis-navy">
											Download Whitepaper
										</h3>
										<p className="text-zinc-600 mb-3 font-montserrat">
											This content is available as a
											downloadable PDF
										</p>
										<Button className="bg-genesis-gold hover:bg-genesis-gold/90 text-genesis-navy">
											<a
												href="#download"
												className="flex items-center"
											>
												Download PDF
												<ArrowRight className="ml-2 h-4 w-4" />
											</a>
										</Button>
									</div>
								</div>
							</div>
						)}

						{isReport && (
							<div className="mb-8">
								<div className="bg-genesis-navy/5 p-6 rounded-sm border-l-2 border-genesis-gold">
									<div className="flex items-center mb-3">
										<BarChart className="h-5 w-5 text-genesis-gold mr-2" />
										<span className="text-sm font-medium text-genesis-navy">
											Industry Report
										</span>
									</div>
									<p className="text-zinc-600 font-montserrat text-sm">
										This report contains data-driven
										insights and analysis on industry
										trends, challenges, and opportunities.
									</p>
								</div>
							</div>
						)}

						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
							{insight.title}
						</h1>

						<div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-zinc-500 mb-8">
							<div className="flex items-center">
								{isVideo ? (
									<Video className="h-4 w-4 mr-2 text-genesis-gold" />
								) : isAudio ? (
									<i className="h-4 w-4 mr-2 text-genesis-gold"></i>
								) : isReport ? (
									<BarChart className="h-4 w-4 mr-2 text-genesis-gold" />
								) : isWhitepaper ? (
									<FileSpreadsheet className="h-4 w-4 mr-2 text-genesis-gold" />
								) : isWebinar ? (
									<CalendarDays className="h-4 w-4 mr-2 text-genesis-gold" />
								) : isPodcast ? (
									<Radio className="h-4 w-4 mr-2 text-genesis-gold" />
								) : (
									<FileText className="h-4 w-4 mr-2 text-genesis-gold" />
								)}
								<span className="text-sm font-medium">
									{isVideo
										? "Video"
										: isAudio
										? "Audio"
										: isReport
										? "Report"
										: isWhitepaper
										? "Whitepaper"
										: isWebinar
										? "Webinar"
										: isPodcast
										? "Podcast"
										: "Article"}
								</span>
							</div>
							<div className="flex items-center">
								<Calendar className="h-4 w-4 mr-2" />
								<span className="text-sm">
									{new Date(insight.date).toLocaleDateString(
										"en-US",
										{
											year: "numeric",
											month: "long",
											day: "numeric",
										}
									)}
								</span>
							</div>
							{!isWebinar && !isPodcast && !isWhitepaper && (
								<div className="flex items-center">
									<Clock className="h-4 w-4 mr-2" />
									<span className="text-sm">
										{insight.readingTime}
									</span>
								</div>
							)}
							{isWebinar && isUpcomingWebinar && (
								<div className="flex items-center text-genesis-gold">
									<span className="text-sm font-medium">
										Upcoming Event
									</span>
								</div>
							)}
							{isPodcastExternal && (
								<div className="flex items-center text-genesis-gold">
									<span className="text-sm font-medium">
										External Platform
									</span>
								</div>
							)}
						</div>

						<div className="flex flex-wrap gap-4 mb-8">
							{isPodcastExternal ? (
								<Button className="bg-genesis-gold hover:bg-genesis-gold/90 text-genesis-navy">
									<a
										href={externalPodcastUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center"
									>
										Listen on Platform
										<ArrowRight className="ml-2 h-4 w-4" />
									</a>
								</Button>
							) : isWebinar && isUpcomingWebinar ? (
								<Button className="bg-genesis-gold hover:bg-genesis-gold/90 text-genesis-navy">
									<a
										href="#register"
										className="flex items-center"
									>
										Register Now
										<ArrowRight className="ml-2 h-4 w-4" />
									</a>
								</Button>
							) : isWhitepaper ? (
								<Button className="bg-genesis-gold hover:bg-genesis-gold/90 text-genesis-navy">
									<a
										href="#download"
										className="flex items-center"
									>
										Download PDF
										<ArrowRight className="ml-2 h-4 w-4" />
									</a>
								</Button>
							) : null}

							<Button
								variant="outline"
								size="sm"
								className="flex items-center gap-2"
							>
								<Share2 className="h-4 w-4" />
								Share
							</Button>
							<Button
								variant="outline"
								size="sm"
								className="flex items-center gap-2"
							>
								<Bookmark className="h-4 w-4" />
								Save
							</Button>
						</div>

						{/* Lead paragraph or description */}
						<div className="bg-genesis-navy/5 p-6 rounded-sm border-l-2 border-genesis-gold mb-10">
							<p className="text-lg font-medium text-genesis-navy font-montserrat">
								{isPodcastExternal
									? cleanPodcastDescription
									: insight.description}
							</p>
						</div>
					</div>

					{/* PDF Download Section for Whitepapers */}
					{isWhitepaper && (
						<div
							id="download"
							className="mb-12 p-8 border border-zinc-200 rounded-sm bg-white shadow-subtle"
						>
							<h2 className="text-2xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
								Download This Whitepaper
							</h2>
							<p className="text-zinc-600 mb-6 font-montserrat">
								Fill out the form below to receive immediate
								access to this whitepaper. Your information
								helps us improve our content and keep you
								updated on relevant insights.
							</p>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="block text-sm font-medium text-zinc-700 mb-1">
										Full Name*
									</label>
									<input
										type="text"
										className="w-full px-3 py-2 border border-zinc-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-genesis-gold"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-zinc-700 mb-1">
										Email Address*
									</label>
									<input
										type="email"
										className="w-full px-3 py-2 border border-zinc-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-genesis-gold"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-zinc-700 mb-1">
										Company
									</label>
									<input
										type="text"
										className="w-full px-3 py-2 border border-zinc-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-genesis-gold"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-zinc-700 mb-1">
										Job Title
									</label>
									<input
										type="text"
										className="w-full px-3 py-2 border border-zinc-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-genesis-gold"
									/>
								</div>
							</div>
							<div className="mt-6">
								<div className="flex items-start">
									<input
										type="checkbox"
										className="mt-1 mr-2"
										id="consent"
									/>
									<label
										htmlFor="consent"
										className="text-sm text-zinc-600"
									>
										I agree to receive educational content
										and marketing communications from
										Genesis Management Consultancy.
									</label>
								</div>
							</div>
							<div className="mt-6">
								<Button className="bg-genesis-gold hover:bg-genesis-gold/90 text-genesis-navy">
									Download Now
								</Button>
							</div>
						</div>
					)}

					{/* Registration Form for Upcoming Webinars */}
					{isWebinar && isUpcomingWebinar && (
						<div
							id="register"
							className="mb-12 p-8 border border-zinc-200 rounded-sm bg-white shadow-subtle"
						>
							<h2 className="text-2xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
								Register for This Webinar
							</h2>
							<p className="text-zinc-600 mb-6 font-montserrat">
								Complete the form below to secure your spot for
								this exclusive webinar. You'll receive an email
								with calendar invite and connection details.
							</p>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="block text-sm font-medium text-zinc-700 mb-1">
										Full Name*
									</label>
									<input
										type="text"
										className="w-full px-3 py-2 border border-zinc-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-genesis-gold"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-zinc-700 mb-1">
										Email Address*
									</label>
									<input
										type="email"
										className="w-full px-3 py-2 border border-zinc-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-genesis-gold"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-zinc-700 mb-1">
										Company
									</label>
									<input
										type="text"
										className="w-full px-3 py-2 border border-zinc-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-genesis-gold"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-zinc-700 mb-1">
										Job Title
									</label>
									<input
										type="text"
										className="w-full px-3 py-2 border border-zinc-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-genesis-gold"
									/>
								</div>
							</div>
							<div className="mt-6">
								<div className="flex items-start">
									<input
										type="checkbox"
										className="mt-1 mr-2"
										id="reminders"
									/>
									<label
										htmlFor="reminders"
										className="text-sm text-zinc-600"
									>
										Send me email reminders before the
										webinar
									</label>
								</div>
							</div>
							<div className="mt-6">
								<Button className="bg-genesis-gold hover:bg-genesis-gold/90 text-genesis-navy">
									Register Now
								</Button>
							</div>
						</div>
					)}

					<div className="prose prose-zinc max-w-none prose-headings:font-playfair prose-headings:tracking-tight prose-headings:text-genesis-navy prose-p:text-zinc-600 prose-p:leading-relaxed prose-p:font-montserrat prose-a:text-genesis-gold prose-a:no-underline hover:prose-a:underline prose-strong:text-genesis-navy prose-strong:font-medium prose-code:bg-zinc-100 prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-mono prose-pre:bg-zinc-100 prose-pre:rounded-sm prose-pre:p-4 prose-pre:overflow-x-auto prose-blockquote:border-genesis-gold">
						<MDXRemote
							source={insight.content}
							components={components}
						/>
					</div>

					{/* Topic tags if available */}
					<div className="mt-12 pt-6 border-t border-zinc-200">
						<div className="flex flex-wrap gap-2">
							{[
								"Business Strategy",
								"Management",
								"Leadership",
								"Finance",
							].map((tag, index) => (
								<Link
									key={index}
									href={`/insights?topic=${tag
										.toLowerCase()
										.replace(/ /g, "-")}`}
									className="px-3 py-1 bg-genesis-navy/5 text-genesis-navy text-sm rounded-full hover:bg-genesis-gold/20 transition-colors"
								>
									{tag}
								</Link>
							))}
						</div>
					</div>

					{relatedInsights.length > 0 && (
						<div className="mt-16 pt-10 border-t border-zinc-200">
							<h2 className="text-2xl font-medium mb-8 font-playfair tracking-tight text-genesis-navy">
								Related Insights
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								{relatedInsights.map((relatedInsight) => (
									<Link
										key={relatedInsight.slug}
										href={`/insights/${relatedInsight.slug}`}
										className="group"
									>
										<div className="h-full hover:shadow-subtle transition-all duration-300 hover:-translate-y-1 border border-zinc-200/80 overflow-hidden rounded-sm bg-white">
											<div className="p-5">
												<div className="flex items-center justify-between text-xs text-zinc-500 mb-3">
													<div className="flex items-center">
														<Calendar className="h-3 w-3 mr-1" />
														{new Date(
															relatedInsight.date
														).toLocaleDateString(
															"en-US",
															{
																year: "numeric",
																month: "short",
																day: "numeric",
															}
														)}
													</div>
													{relatedInsight.slug.includes(
														"video-"
													) ? (
														<div className="flex items-center text-genesis-gold">
															<Video className="h-3 w-3 mr-1" />
															<span className="text-xs">
																Video
															</span>
														</div>
													) : relatedInsight.slug.includes(
															"report-"
													  ) ? (
														<div className="flex items-center text-genesis-gold">
															<BarChart className="h-3 w-3 mr-1" />
															<span className="text-xs">
																Report
															</span>
														</div>
													) : relatedInsight.slug.includes(
															"whitepaper-"
													  ) ? (
														<div className="flex items-center text-genesis-gold">
															<FileSpreadsheet className="h-3 w-3 mr-1" />
															<span className="text-xs">
																Whitepaper
															</span>
														</div>
													) : relatedInsight.slug.includes(
															"webinar-"
													  ) ? (
														<div className="flex items-center text-genesis-gold">
															<CalendarDays className="h-3 w-3 mr-1" />
															<span className="text-xs">
																Webinar
															</span>
														</div>
													) : relatedInsight.slug.includes(
															"podcast-"
													  ) ? (
														<div className="flex items-center text-genesis-gold">
															<Radio className="h-3 w-3 mr-1" />
															<span className="text-xs">
																Podcast
															</span>
														</div>
													) : (
														<div className="flex items-center text-genesis-gold">
															<FileText className="h-3 w-3 mr-1" />
															<span className="text-xs">
																Article
															</span>
														</div>
													)}
												</div>
												<h3 className="text-base font-medium mb-2 group-hover:text-genesis-gold transition-colors font-playfair text-genesis-navy">
													{relatedInsight.title}
												</h3>
												<div className="flex items-center text-xs text-genesis-gold font-medium mt-2">
													Read More{" "}
													<ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
												</div>
											</div>
										</div>
									</Link>
								))}
							</div>
						</div>
					)}

					{/* Subscribe CTA */}
					<div className="mt-16 pt-10 border-t border-zinc-200">
						<div className="bg-genesis-navy/5 rounded-sm p-8">
							<div className="text-center">
								<h3 className="text-xl font-medium mb-4 font-playfair text-genesis-navy">
									Stay Updated with Our Latest Insights
								</h3>
								<p className="text-zinc-600 mb-6 font-montserrat max-w-xl mx-auto">
									Subscribe to our newsletter to receive
									regular updates on business trends,
									strategic insights, and exclusive content.
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
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}
