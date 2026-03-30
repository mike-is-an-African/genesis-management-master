import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, Building, Tag, Clock } from "lucide-react";
import { getAllCaseStudies } from "@/lib/case-studies";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
	title: "Case Studies | Genesis Management",
	description:
		"Explore our client success stories and case studies showcasing how Genesis Management delivers transformative business solutions.",
};

export default async function CaseStudiesPage() {
	const caseStudies = await getAllCaseStudies();

	return (
		<div className="min-h-screen bg-white">
			<div className="absolute inset-0 bg-noise opacity-30"></div>
			<div className="container mx-auto px-4 py-20 pt-24 md:pt-28 relative z-10">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<div className="inline-block px-4 py-1.5 bg-genesis-gold/10 text-genesis-navy text-sm font-medium rounded-full mb-6">
							Our Work
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
							Case Studies
						</h1>
						<p className="text-lg text-zinc-600 max-w-2xl mx-auto font-montserrat">
							Real-world examples of how we've helped our clients
							transform their businesses and achieve exceptional
							results
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{caseStudies.map((caseStudy) => (
							<Link
								key={caseStudy.slug}
								href={`/case-studies/${caseStudy.slug}`}
								className="group"
							>
								<Card className="h-full hover:shadow-subtle transition-all duration-300 hover:-translate-y-1 border border-zinc-200/80 overflow-hidden rounded-sm bg-white">
									<div className="aspect-[4/3] relative overflow-hidden">
										<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
										<div className="absolute inset-0 bg-genesis-gold/20 mix-blend-multiply z-10 transition-opacity duration-700 opacity-0 group-hover:opacity-100"></div>

										{caseStudy.image && (
											<Image
												src={caseStudy.image}
												alt={caseStudy.title}
												fill
												className="object-cover transition-transform duration-700 group-hover:scale-105"
											/>
										)}

										<div className="absolute top-4 right-4 px-3 py-1 text-xs uppercase tracking-wider font-medium bg-genesis-gold/90 text-white z-20">
											{caseStudy.industry}
										</div>
									</div>

									<div className="p-6">
										<div className="flex flex-wrap items-center gap-3 mb-3 text-sm text-zinc-500">
											<span className="flex items-center">
												<Calendar className="h-3.5 w-3.5 mr-1" />
												{formatDate(caseStudy.date)}
											</span>
											<span className="flex items-center">
												<Clock className="h-3.5 w-3.5 mr-1" />
												{caseStudy.readingTime}
											</span>
										</div>
										<h2 className="text-xl font-medium mb-3 group-hover:text-genesis-gold transition-colors font-playfair text-genesis-navy">
											{caseStudy.title}
										</h2>
										<p className="text-sm text-zinc-600 mb-4 line-clamp-3 font-montserrat">
											{caseStudy.description}
										</p>
										<div className="mb-4">
											<div className="text-sm text-genesis-navy mb-2">
												<strong>Client:</strong>{" "}
												{caseStudy.client}
											</div>
											{caseStudy.tags &&
												caseStudy.tags.length > 0 && (
													<div className="flex flex-wrap gap-1">
														{caseStudy.tags
															.slice(0, 3)
															.map((tag) => (
																<span
																	key={tag}
																	className="bg-genesis-navy/5 px-2 py-0.5 rounded-full text-xs text-genesis-navy flex items-center"
																>
																	<Tag className="h-3 w-3 mr-1" />{" "}
																	{tag}
																</span>
															))}
														{caseStudy.tags.length >
															3 && (
															<span className="text-xs text-zinc-500">
																+
																{caseStudy.tags
																	.length -
																	3}{" "}
																more
															</span>
														)}
													</div>
												)}
										</div>
										<div className="flex items-center text-sm text-genesis-gold font-medium">
											Read Case Study{" "}
											<ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
										</div>
									</div>
								</Card>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
