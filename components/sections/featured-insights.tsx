import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Insight } from "@/lib/insights";
import { formatDate } from "@/lib/utils";

interface FeaturedInsightsProps {
	insights: Insight[];
}

// Default images for insights that don't have them
const defaultInsightImages = [
	"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
	"https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
	"https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
];

export default function FeaturedInsights({ insights }: FeaturedInsightsProps) {
	return (
		<section className="py-24 bg-zinc-50 relative overflow-hidden">
			<div className="absolute inset-0 bg-noise opacity-30"></div>
			<div className="container mx-auto px-4 relative z-10">
				<div className="mb-16 max-w-3xl mx-auto text-center">
					<div className="inline-block px-4 py-1.5 bg-genesis-gold/10 text-genesis-navy text-sm font-medium rounded-full mb-6">
						Featured Insights
					</div>
					<h2 className="text-4xl md:text-5xl font-playfair tracking-tight mb-6 text-genesis-navy">
						Latest Thinking
					</h2>
					<p className="text-lg text-zinc-600 max-w-2xl mx-auto font-montserrat">
						Stay ahead with our latest insights on emerging markets, sustainable finance, and digital transformation strategies.
					</p>
				</div>
				
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
									<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
									<div className="absolute inset-0 bg-genesis-gold/20 mix-blend-multiply z-10 transition-opacity duration-700 opacity-0 group-hover:opacity-100"></div>
									
									<Image
										src={insight.image || defaultInsightImages[index % defaultInsightImages.length]}
										alt={insight.title}
										fill
										className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
									/>
									
									<div className="absolute bottom-4 left-4 px-3 py-1 text-xs uppercase tracking-wider font-medium bg-white/90 text-genesis-navy z-20 backdrop-blur-sm border-l-2 border-genesis-gold">
										{insight.category || "Article"}
									</div>
								</div>
								
								{/* Content */}
								<div className="p-6 flex flex-col flex-grow">
									<div className="flex items-center justify-between text-sm text-zinc-500 mb-3">
										<div className="flex items-center">
											<Calendar className="h-3.5 w-3.5 mr-1.5" />
											<span>{formatDate(insight.date)}</span>
										</div>
										<div className="flex items-center">
											<Clock className="h-3.5 w-3.5 mr-1.5" />
											<span>{insight.readingTime}</span>
										</div>
									</div>
									
									<h3 className="text-xl font-playfair tracking-tight text-genesis-navy mb-3 group-hover:text-genesis-gold transition-colors line-clamp-2">
										{insight.title}
									</h3>
									
									<p className="text-zinc-600 text-base leading-relaxed mb-4 font-montserrat line-clamp-3">
										{insight.description}
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

				<div className="mt-16 text-center">
					<Link 
						href="/insights" 
						className="inline-flex items-center text-sm font-medium bg-genesis-navy hover:bg-genesis-navy/90 text-white px-6 py-3 rounded-sm transition-colors"
					>
						View All Insights
						<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
					</Link>
				</div>
			</div>
		</section>
	);
}
