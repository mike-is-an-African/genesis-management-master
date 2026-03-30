import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { CaseStudyData } from "@/lib/case-studies";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface ClientStoriesProps {
	caseStudies: CaseStudyData[];
}

export default function ClientStories({ caseStudies }: ClientStoriesProps) {
	return (
		<section className="py-24 bg-white relative overflow-hidden">
			<div className="absolute inset-0 bg-noise opacity-30"></div>

			{/* Decorative elements */}
			<div className="absolute -right-64 top-20 w-[500px] h-[500px] rounded-full border border-genesis-gold/10 animate-rotate-slow opacity-20"></div>
			<div className="absolute -left-80 bottom-40 w-[600px] h-[600px] rounded-full border border-genesis-gold/10 animate-rotate-slow opacity-10"></div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="mb-20 max-w-3xl">
					<div className="inline-block px-4 py-1.5 bg-genesis-gold/10 text-genesis-navy text-sm font-medium rounded-full mb-6">
						Client Stories
					</div>
					<h2 className="text-4xl md:text-5xl font-playfair tracking-tight mb-8 text-genesis-navy relative">
						<span className="relative z-10">
							Transformative Results
							<div className="absolute -bottom-1 left-0 w-1/4 h-1 bg-genesis-gold/60"></div>
						</span>
					</h2>
					<p className="text-lg text-zinc-600 max-w-2xl border-l-2 border-genesis-gold/40 pl-6 font-montserrat">
						Discover how Gen-ius Management Consultancy has
						empowered organizations to overcome complex challenges,
						capitalize on opportunities, and achieve exceptional
						outcomes across diverse industries.
					</p>
				</div>

				<div className="space-y-28">
					{caseStudies.map((caseStudy, index) => (
						<CaseStudyItem
							key={caseStudy.slug}
							caseStudy={caseStudy}
							index={index}
						/>
					))}
				</div>

				<div className="mt-20 text-center">
					<Link
						href="/case-studies"
						className="inline-flex items-center text-sm font-medium bg-genesis-navy hover:bg-genesis-navy/90 text-white px-6 py-3 rounded-sm transition-colors"
					>
						View All Client Stories
						<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
					</Link>
				</div>
			</div>
		</section>
	);
}

function CaseStudyItem({
	caseStudy,
	index,
}: {
	caseStudy: CaseStudyData;
	index: number;
}) {
	const isEven = index % 2 === 0;

	return (
		<div
			className={cn(
				"grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative",
				"transition-all duration-1000"
			)}
		>
			{/* Decorative elements */}
			<div
				className={cn(
					"absolute -z-10",
					isEven
						? "-right-5 top-5 w-64 h-64 rounded-full border border-genesis-gold/10 animate-rotate-slow opacity-30"
						: "-left-5 top-5 w-64 h-64 rounded-full border border-genesis-gold/10 animate-rotate-slow opacity-30"
				)}
			></div>

			{/* Image */}
			<div
				className={cn("order-2", isEven ? "lg:order-2" : "lg:order-1")}
			>
				<div className="relative h-full overflow-hidden">
					<div className="aspect-[4/3] relative overflow-hidden bg-zinc-100 group rounded-sm">
						<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
						<div className="absolute inset-0 bg-genesis-gold/20 mix-blend-multiply z-10 transition-opacity duration-700 opacity-0 group-hover:opacity-100"></div>

						{caseStudy.image && (
							<Image
								src={caseStudy.image}
								alt={caseStudy.title}
								fill
								className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
							/>
						)}

						<div
							className={cn(
								"absolute top-6 px-4 py-2 text-xs uppercase tracking-wider font-medium backdrop-blur-md z-20",
								isEven
									? "right-6 bg-genesis-gold/90 text-white"
									: "left-6 border-l-2 border-genesis-gold bg-white/80 text-genesis-navy"
							)}
						>
							{caseStudy.industry}
						</div>
					</div>
				</div>
			</div>

			{/* Content */}
			<div
				className={cn(
					"order-1 flex items-center",
					isEven
						? "lg:order-1 lg:text-right lg:items-end"
						: "lg:order-2 lg:text-left"
				)}
			>
				<div className="max-w-xl mx-auto lg:mx-0 flex flex-col h-full">
					<div
						className={cn(
							"space-y-6",
							isEven ? "lg:ml-auto lg:items-end" : ""
						)}
					>
						<div className="flex items-center text-sm text-zinc-500 mb-2">
							<Calendar className="h-3.5 w-3.5 mr-1.5" />
							<span>{formatDate(caseStudy.date)}</span>
						</div>

						<h3
							className={cn(
								"text-2xl lg:text-3xl xl:text-4xl font-playfair tracking-tight text-genesis-navy",
								isEven
									? "border-r-2 border-genesis-gold/40 pr-6 lg:text-right"
									: "border-l-2 border-genesis-gold/40 pl-6"
							)}
						>
							{caseStudy.title}
						</h3>

						<p className="text-zinc-600 text-lg leading-relaxed font-montserrat">
							{caseStudy.description}
						</p>

						{caseStudy.tags && caseStudy.tags.length > 0 && (
							<div
								className={cn(
									"flex flex-wrap gap-2",
									isEven ? "justify-end" : ""
								)}
							>
								{caseStudy.tags.slice(0, 3).map((tag) => (
									<span
										key={tag}
										className="bg-genesis-navy/5 px-2 py-0.5 rounded-full text-xs text-genesis-navy flex items-center"
									>
										<Tag className="h-3 w-3 mr-1" /> {tag}
									</span>
								))}
							</div>
						)}

						<div
							className={cn(
								"pt-4",
								isEven ? "text-right" : "text-left"
							)}
						>
							<Link
								href={`/case-studies/${caseStudy.slug}`}
								className={cn(
									"inline-flex items-center text-genesis-gold hover:text-genesis-navy font-medium text-base transition-colors",
									isEven ? "flex-row-reverse" : ""
								)}
							>
								<span>Read Case Study</span>
								<ArrowRight
									className={cn(
										"transition-transform duration-300 group-hover:translate-x-2 h-5 w-5",
										isEven
											? "mr-2 rotate-180 group-hover:-translate-x-2"
											: "ml-2"
									)}
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
