import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Calendar, Clock } from "lucide-react";
import { getAllInsights } from "@/lib/insights";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
	title: "Case Studies | Gen-ius Insights | Genesis Management",
	description:
		"Explore real-world success stories and practical applications of our consulting solutions.",
};

// Default images for case studies that don't have them
const defaultCaseStudyImages = [
	"https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // Team around table
	"https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // Diverse team discussing
	"https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // Team planning
	"https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // Business review
];

export default async function CaseStudiesPage() {
	const insights = await getAllInsights();
	const caseStudies = insights.filter((insight) =>
		insight.slug.includes("case-study-")
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
						src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
						alt="Case studies and success stories"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
					<div className="max-w-3xl">
						<div className="inline-block px-4 py-1.5 bg-genesis-gold/20 text-white text-sm font-medium rounded-sm mb-6">
							Knowledge Center
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-white">
							Case Studies
						</h1>
						<div className="h-1 w-24 bg-genesis-gold mb-8"></div>
						<p className="text-xl text-white/90 mb-8 font-montserrat">
							Real-world success stories and practical
							applications of our consulting solutions
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
									className="text-sm px-5 py-2 bg-genesis-navy text-white rounded-sm transition-colors"
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

						{/* Case Studies */}
						<div className="text-center py-6 mb-8">
							<p className="text-zinc-600 max-w-3xl mx-auto mb-8 font-montserrat">
								Our case studies showcase how we've helped
								businesses across various industries overcome
								challenges and achieve their strategic goals.
								Explore our dedicated case studies section for
								more in-depth success stories.
							</p>
							<Button className="bg-genesis-gold hover:bg-genesis-gold/90 text-genesis-navy">
								<Link
									href="/case-studies"
									className="flex items-center"
								>
									View All Case Studies
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
						</div>

						{/* Recent Case Studies from Insights */}
						{caseStudies.length > 0 && (
							<div className="mt-16">
								<h2 className="text-2xl font-medium mb-8 font-playfair tracking-tight text-genesis-navy text-center">
									Recent Case Studies
								</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
									{caseStudies.map((caseStudy, index) => (
										<Link
											key={caseStudy.slug}
											href={`/insights/${caseStudy.slug}`}
											className="group flex flex-col h-full"
										>
											<div className="h-full overflow-hidden border border-zinc-200 rounded-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-1 bg-white flex flex-col">
												{/* Image container */}
												<div className="relative overflow-hidden h-56">
													<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
													<div className="absolute inset-0 bg-genesis-gold/20 mix-blend-multiply z-10 transition-opacity duration-700 opacity-0 group-hover:opacity-100"></div>

													<Image
														src={
															caseStudy.image ||
															defaultCaseStudyImages[
																index %
																	defaultCaseStudyImages.length
															]
														}
														alt={caseStudy.title}
														fill
														className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
													/>

													<div className="absolute bottom-4 left-4 px-3 py-1 text-xs uppercase tracking-wider font-medium bg-white/90 text-genesis-navy z-20 backdrop-blur-sm border-l-2 border-genesis-gold">
														Case Study
													</div>
												</div>

												{/* Content */}
												<div className="p-6 flex flex-col flex-grow">
													<div className="flex items-center justify-between text-sm text-zinc-500 mb-3">
														<div className="flex items-center">
															<Calendar className="h-3.5 w-3.5 mr-1.5" />
															<span>
																{formatDate(
																	caseStudy.date
																)}
															</span>
														</div>
														<div className="flex items-center">
															<Clock className="h-3.5 w-3.5 mr-1.5" />
															<span>
																{caseStudy.readingTime ||
																	"8 min read"}
															</span>
														</div>
													</div>

													<h3 className="text-xl font-playfair tracking-tight text-genesis-navy mb-3 group-hover:text-genesis-gold transition-colors line-clamp-2">
														{caseStudy.title}
													</h3>

													<p className="text-zinc-600 text-base leading-relaxed mb-4 font-montserrat line-clamp-3">
														{caseStudy.description}
													</p>

													<div className="mt-auto flex items-center text-genesis-gold font-medium text-sm">
														<span>
															Read Case Study
														</span>
														<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
													</div>
												</div>
											</div>
										</Link>
									))}
								</div>
							</div>
						)}
					</div>

					{/* Industries Section */}
					<section className="mt-20 pt-16 border-t border-zinc-200">
						<h2 className="text-2xl md:text-3xl font-medium mb-10 font-playfair tracking-tight text-genesis-navy text-center">
							Industries We've Helped
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
							{[
								{
									title: "Financial Services",
									image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
									link: "/case-studies?industry=financial-services",
								},
								{
									title: "Healthcare",
									image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
									link: "/case-studies?industry=healthcare",
								},
								{
									title: "Technology",
									image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
									link: "/case-studies?industry=technology",
								},
								{
									title: "Manufacturing",
									image: "https://images.unsplash.com/photo-1565043589221-c5904457eae9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
									link: "/case-studies?industry=manufacturing",
								},
							].map((industry, index) => (
								<Link
									key={index}
									href={industry.link}
									className="group"
								>
									<div className="relative overflow-hidden rounded-sm h-48">
										<img
											src={industry.image}
											alt={industry.title}
											className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
										/>
										<div className="absolute inset-0 bg-genesis-navy/60 flex items-center justify-center p-4">
											<h3 className="text-xl font-medium text-white text-center font-playfair group-hover:text-genesis-gold transition-colors">
												{industry.title}
											</h3>
										</div>
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
									Discover How We Can Help Your Business
								</h2>
								<p className="text-zinc-600 mb-6 font-montserrat">
									Want to learn more about how we can help
									your business achieve similar results?
									Schedule a consultation with our expert
									team.
								</p>
								<Button className="bg-genesis-gold hover:bg-genesis-gold/90 text-genesis-navy">
									<Link
										href="/contact"
										className="flex items-center"
									>
										Schedule a Consultation
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
							</div>
							<div className="hidden md:block">
								<img
									src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
									alt="Business consultation with Genesis Management"
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
