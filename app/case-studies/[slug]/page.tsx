import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/case-studies";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { Callout } from "@/components/ui/callout";
import { Card } from "@/components/ui/card";
import { Steps } from "@/components/ui/steps";
import { Metrics } from "@/components/ui/metrics";

interface Props {
	params: {
		slug: string;
	};
}

const components = {
	Callout,
	Card: (props: any) => <Card variant="mdx" {...props} />,
	Steps,
	"Steps.Step": Steps.Step,
	Metrics,
	"Metrics.Category": Metrics.Category,
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
			className="list-disc list-outside ml-6 text-base md:text-lg text-zinc-600 space-y-2 mb-6 font-montserrat"
			{...props}
		/>
	),
	ol: (props: any) => (
		<ol
			className="list-decimal list-outside ml-6 text-base md:text-lg text-zinc-600 space-y-2 mb-6 font-montserrat"
			{...props}
		/>
	),
	li: (props: any) => (
		<li
			className="text-base md:text-lg text-zinc-600 leading-relaxed font-montserrat pl-2"
			{...props}
		/>
	),
	blockquote: (props: any) => (
		<blockquote
			className="border-l-4 border-genesis-gold pl-6 italic text-base md:text-lg text-zinc-600 my-8 py-2 font-montserrat"
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
			className="bg-zinc-100 rounded-sm p-6 overflow-x-auto my-8 border border-zinc-200/80"
			{...props}
		/>
	),
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const caseStudy = await getCaseStudyBySlug(params.slug);

	if (!caseStudy) {
		return {
			title: "Not Found | Genesis Management",
			description: "The requested case study could not be found.",
		};
	}

	return {
		title: `${caseStudy.title} | Genesis Management`,
		description: caseStudy.description,
	};
}

export async function generateStaticParams() {
	const caseStudies = await getAllCaseStudies();
	return caseStudies.map((caseStudy) => ({
		slug: caseStudy.slug,
	}));
}

export default async function CaseStudyPage({ params }: Props) {
	const caseStudy = await getCaseStudyBySlug(params.slug);

	if (!caseStudy) {
		notFound();
	}

	// Get related case studies (excluding current)
	const allCaseStudies = await getAllCaseStudies();
	const relatedCaseStudies = allCaseStudies
		.filter((p) => p.slug !== params.slug)
		.slice(0, 2);

	return (
		<article className="min-h-screen bg-white">
			<div className="absolute inset-0 bg-noise opacity-30"></div>
			<div className="container mx-auto px-4 py-16 pt-28 relative z-10">
				<div className="max-w-3xl mx-auto">
					<div className="mb-12 relative">
						<Link
							href="/case-studies"
							className="inline-flex items-center text-sm mb-8 group text-genesis-navy hover:text-genesis-gold relative !z-[9999] !pointer-events-auto"
							style={{ position: "relative", zIndex: 9999 }}
						>
							<ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
							Back to all case studies
						</Link>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
							{caseStudy.title}
						</h1>
						<div className="flex flex-wrap items-center gap-4 text-zinc-500 mb-4">
							<div className="flex items-center">
								<Calendar className="h-4 w-4 mr-2" />
								{formatDate(caseStudy.date)}
							</div>
							<div className="flex items-center">
								<Clock className="h-4 w-4 mr-2" />
								{caseStudy.readingTime}
							</div>
						</div>
						<div className="flex flex-wrap gap-4 mb-6">
							<div className="bg-genesis-navy/5 px-3 py-1 rounded-full text-sm text-genesis-navy">
								Client: {caseStudy.client}
							</div>
							<div className="bg-genesis-navy/5 px-3 py-1 rounded-full text-sm text-genesis-navy">
								Industry: {caseStudy.industry}
							</div>
						</div>
						<p className="text-xl text-zinc-600 font-montserrat">
							{caseStudy.description}
						</p>
					</div>

					<div className="prose prose-zinc max-w-none prose-headings:font-playfair prose-headings:tracking-tight prose-headings:text-genesis-navy prose-p:text-zinc-600 prose-p:leading-relaxed prose-p:font-montserrat prose-a:text-genesis-gold prose-a:no-underline hover:prose-a:underline prose-strong:text-genesis-navy prose-strong:font-medium prose-code:bg-zinc-100 prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-mono prose-pre:bg-zinc-100 prose-pre:rounded-sm prose-pre:p-4 prose-pre:overflow-x-auto prose-blockquote:border-genesis-gold">
						<MDXRemote
							source={caseStudy.content}
							components={components}
						/>
					</div>

					{caseStudy.tags && caseStudy.tags.length > 0 && (
						<div className="mt-8">
							<h3 className="text-lg font-medium mb-3 font-playfair text-genesis-navy">
								Tags
							</h3>
							<div className="flex flex-wrap gap-2">
								{caseStudy.tags.map((tag) => (
									<span
										key={tag}
										className="bg-genesis-navy/5 px-3 py-1 rounded-full text-sm text-genesis-navy"
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					)}

					{relatedCaseStudies.length > 0 && (
						<div className="mt-16 pt-10 border-t border-zinc-200">
							<h2 className="text-2xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
								Related Case Studies
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{relatedCaseStudies.map((relatedCaseStudy) => (
									<Link
										key={relatedCaseStudy.slug}
										href={`/case-studies/${relatedCaseStudy.slug}`}
										className="group"
									>
										<div className="h-full hover:shadow-subtle transition-all duration-300 hover:-translate-y-1 border border-zinc-200/80 overflow-hidden rounded-sm bg-white">
											<div className="p-5">
												<h3 className="text-base font-medium mb-2 group-hover:text-genesis-gold transition-colors font-playfair text-genesis-navy">
													{relatedCaseStudy.title}
												</h3>
												<div className="flex items-center text-xs text-genesis-gold font-medium mt-2">
													Read Case Study{" "}
													<ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
												</div>
											</div>
										</div>
									</Link>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</article>
	);
}
