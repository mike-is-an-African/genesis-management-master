"use client";

/* eslint-disable */
import React, { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuccessStory {
	quote: string;
	author: string;
	position: string;
	company: string;
	image: string;
}

const successStories: SuccessStory[] = [
	{
		quote: "Genesis Management's strategic vision was a game-changer for our expansion into new African markets. Their understanding of the local landscape and their commitment to our success were unparalleled, leading to a 60% growth in our regional presence.",
		author: "Sophia Redebe",
		position: "Founder & CEO",
		company: "AfriConnect Solutions",
		image: "/clients/sofia-redebe.jpg",
	},
	{
		quote: "The operational overhaul spearheaded by Genesis Management streamlined our complex supply chains across East Africa. We've seen a 35% reduction in logistical costs and a significant improvement in delivery times, directly impacting our bottom line.",
		author: "Alex Chenamwoyo",
		position: "Director of Operations",
		company: "Kijani AgroProcessing Ltd.",
		image: "/clients/alex.jpg",
	},
	{
		quote: "Thanks to Genesis Management's expertise in digital transformation, we successfully launched our fintech platform, reaching underserved communities. Their guidance on market entry and product development was invaluable.",
		author: "David Njoroge",
		position: "Head of Innovation",
		company: "InnoPay Africa",
		image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
	},
];

export default function SuccessStories() {
	const [active, setActive] = useState(0);
	const [animating, setAnimating] = useState(false);
	const successStoriesRef = useRef<HTMLDivElement>(null);
	// @ts-ignore
	const timeout = useRef<NodeJS.Timeout>();

	const handlePrev = useCallback(() => {
		if (animating) return;
		setAnimating(true);
		setActive((prev) =>
			prev === 0 ? successStories.length - 1 : prev - 1
		);
		setTimeout(() => setAnimating(false), 600);
		if (timeout.current) clearTimeout(timeout.current);
	}, [animating]);

	const handleNext = useCallback(() => {
		if (animating) return;
		setAnimating(true);
		setActive((prev) =>
			prev === successStories.length - 1 ? 0 : prev + 1
		);
		setTimeout(() => setAnimating(false), 600);
		if (timeout.current) clearTimeout(timeout.current);
	}, [animating]);

	// Auto advance slides
	useEffect(() => {
		timeout.current = setTimeout(() => {
			if (!animating) {
				handleNext();
			}
		}, 8000);

		return () => {
			if (timeout.current) {
				clearTimeout(timeout.current);
			}
		};
	}, [active, animating, handleNext]);

	return (
		<section className="py-28 relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white">
			{/* Decorative elements */}
			<div className="absolute -top-36 -right-36 w-72 h-72 rounded-full border border-genesis-gold/20 animate-rotate-slow"></div>
			<div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full border border-genesis-gold/30 animate-rotate-slow"></div>
			<div className="absolute top-40 left-20 w-6 h-6 rounded-full bg-genesis-gold/20 animate-pulse-slow"></div>
			<div className="absolute bottom-32 right-1/4 w-4 h-4 rounded-full bg-genesis-gold/30 animate-pulse-slow"></div>

			{/* Background pattern */}
			<div className="absolute inset-0 bg-mesh-gradients opacity-30 mix-blend-soft-light"></div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-md mx-auto md:mx-0 mb-16">
					<h2 className="text-4xl md:text-5xl font-montserrat tracking-tight mb-6 text-genesis-navy relative">
						<div className="relative z-10">
							Client{" "}
							<span className="relative">
								success stories
								<span className="absolute -bottom-1 left-0 w-full h-1 bg-genesis-gold"></span>
							</span>
						</div>
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl border-l-2 border-genesis-gold pl-6">
						Hear directly from our clients about their
						transformative experiences working with Genesis
						Management Consultancy.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
					{/* Left column - Quote */}
					<div
						ref={successStoriesRef}
						className="relative h-full flex flex-col justify-center"
					>
						<div className="mb-10">
							<Quote className="text-genesis-gold h-16 w-16 opacity-30 absolute -top-8 -left-3" />

							<div className="relative min-h-[220px] flex items-center">
								{successStories.map((story, index) => (
									<div
										key={index}
										className={cn(
											"absolute transition-all duration-500 w-full",
											active === index
												? "opacity-100 translate-x-0"
												: "opacity-0 translate-x-20"
										)}
									>
										<p className="text-2xl md:text-3xl font-montserrat italic text-genesis-navy leading-relaxed mb-8">
											{story.quote}
										</p>
									</div>
								))}
							</div>

							<div className="flex items-center space-x-4 mt-8 relative h-[80px]">
								{successStories.map((story, index) => (
									<div
										key={index}
										className={cn(
											"absolute transition-all duration-500 flex items-center",
											active === index
												? "opacity-100 translate-x-0"
												: "opacity-0 translate-x-20"
										)}
									>
										<div className="border-l-2 border-genesis-gold pl-6">
											<p className="font-medium text-lg">
												{story.author}
											</p>
											<p className="text-muted-foreground">
												{story.position},{" "}
												{story.company}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="flex items-center space-x-2 mt-6">
							<Button
								variant="minimal"
								size="icon"
								onClick={handlePrev}
								className="h-10 w-10 rounded-full border border-zinc-200 hover:border-genesis-gold hover:bg-genesis-gold/10 text-genesis-navy"
							>
								<ChevronLeft className="h-5 w-5" />
								<span className="sr-only">Previous</span>
							</Button>
							<Button
								variant="minimal"
								size="icon"
								onClick={handleNext}
								className="h-10 w-10 rounded-full border border-zinc-200 hover:border-genesis-gold hover:bg-genesis-gold/10 text-genesis-navy"
							>
								<ChevronRight className="h-5 w-5" />
								<span className="sr-only">Next</span>
							</Button>

							<div className="flex items-center space-x-1 ml-3">
								{successStories.map((_, index) => (
									<button
										key={index}
										onClick={() => {
											if (animating) return;
											setAnimating(true);
											setActive(index);
											setTimeout(
												() => setAnimating(false),
												600
											);
											if (timeout.current)
												clearTimeout(timeout.current);
										}}
										className={cn(
											"w-8 h-1 rounded-sm transition-all",
											active === index
												? "bg-genesis-gold"
												: "bg-zinc-200"
										)}
										aria-label={`Go to slide ${index + 1}`}
									/>
								))}
							</div>
						</div>
					</div>

					{/* Right column - Images */}
					<div className="relative h-[400px] md:h-[500px] lg:h-full overflow-hidden">
						<div
							className="absolute top-0 right-0 bottom-0 left-0"
							style={{
								clipPath:
									"polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
							}}
						>
							{successStories.map((story, index) => (
								<div
									key={index}
									className={cn(
										"absolute inset-0 transition-all duration-700",
										active === index
											? "opacity-100 scale-100"
											: "opacity-0 scale-110"
									)}
								>
									<div className="absolute inset-0 bg-gradient-to-tr from-genesis-navy/80 via-genesis-navy/50 to-transparent mix-blend-multiply z-10"></div>
									<div className="absolute inset-0 bg-genesis-gold/20 mix-blend-multiply z-10 opacity-40"></div>
									<img
										src={story.image}
										alt={story.author}
										className="w-full h-full object-cover object-center"
									/>
								</div>
							))}

							<div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
								<div className="mb-3 border-l-2 border-genesis-gold pl-4 max-w-xs backdrop-blur-sm bg-black/20 py-2 pr-4">
									<p className="text-sm uppercase tracking-wider">
										{successStories.length}+ Success Stories
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
