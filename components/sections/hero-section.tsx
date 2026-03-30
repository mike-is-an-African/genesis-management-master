"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
	// Animation states
	const [visible, setVisible] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const heroRef = useRef<HTMLElement>(null);

	// Set animation visible on component mount
	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(true);
		}, 200);

		// Add subtle parallax effect on mouse movement
		const handleMouseMove = (e: MouseEvent) => {
			if (!heroRef.current) return;
			const { left, top, width, height } =
				heroRef.current.getBoundingClientRect();
			const x = (e.clientX - left) / width;
			const y = (e.clientY - top) / height;
			setMousePosition({ x, y });
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			clearTimeout(timer);
		};
	}, []);

	const stats = [
		{ number: "18+", label: "Years", icon: "✦" },
		{ number: "200", label: "Clients", icon: "◆" },
		{ number: "12K+", label: "Projects", icon: "⬢" },
		{ number: "54", label: "Countries", icon: "◉" },
	];

	const mobileStats = [
		{ number: "18+", label: "Years", icon: "✦" },
		{ number: "200", label: "Clients", icon: "◆" },
		{ number: "12K+", label: "Projects", icon: "⬢" },
		{ number: "54", label: "Countries", icon: "◉" },
	];

	return (
		<section
			ref={heroRef}
			className="relative min-h-screen w-full overflow-hidden flex items-start pt-32 lg:pt-40"
		>
			{/* Decorative Elements */}
			<div className="absolute -top-20 -right-20 w-96 h-96 rounded-full border border-genesis-gold/10 animate-rotate-slow opacity-30"></div>
			<div className="absolute bottom-20 -left-20 w-64 h-64 rounded-full border border-genesis-gold/20 animate-rotate-slow opacity-30"></div>
			<div className="absolute top-1/3 left-1/4 w-10 h-10 rounded-full bg-genesis-gold/5 animate-pulse"></div>
			<div className="absolute top-2/3 right-1/3 w-20 h-20 rounded-full bg-genesis-gold/10 animate-float-slow"></div>

			{/* Background Image with Advanced Effects */}
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-black/50 z-10"></div>
				<div className="absolute inset-0 bg-genesis-navy/30 z-10 mix-blend-soft-light"></div>
				<div className="absolute inset-0 bg-mesh-gradients z-20 opacity-10"></div>
				<div className="hero-grain animate-grain z-20"></div>
				<div
					className="absolute inset-0 overflow-hidden"
					style={{
						transform: `scale(1.03) translate(${
							mousePosition.x * -12
						}px, ${mousePosition.y * -12}px)`,
						transition:
							"transform 1s cubic-bezier(0.33, 1, 0.68, 1)",
					}}
				>
					<div className="absolute inset-0 scale-[1.03] hero-mask transition-all duration-700">
						<div
							className={`absolute inset-0 backdrop-blur-[1px] z-10 transition-opacity duration-1000 ${
								visible ? "opacity-100" : "opacity-0"
							}`}
						></div>
						<img
							src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
							alt="New York City skyline with modern skyscrapers"
							className={`absolute inset-0 h-full w-full object-cover object-center transition-transform duration-3000 ease-out ${
								visible ? "scale-100" : "scale-110"
							}`}
							style={{ transitionDuration: "7s" }}
						/>
					</div>
				</div>
			</div>

			{/* Subtle gradients */}
			<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent z-20"></div>
			<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent z-20"></div>
			<div className="absolute top-0 -right-[10%] bottom-0 w-[70%] transform z-20 opacity-30 bg-gradient-diagonal from-genesis-gold/10 to-transparent"></div>

			<div className="container mx-auto px-4 relative z-30">
				<div
					className={`max-w-4xl mx-auto mb-24 text-white transform transition-all duration-1000 ${
						visible
							? "translate-y-0 opacity-100"
							: "translate-y-12 opacity-0"
					}`}
				>
					{/* Distinctive Badge */}
					<div
						className={`relative z-10 inline-block transform transition-all duration-700 ${
							visible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-10"
						}`}
						style={{
							transitionTimingFunction:
								"cubic-bezier(0.16, 1, 0.3, 1)",
						}}
					>
						<div className="inline-flex items-center px-4 py-2 backdrop-blur-sm border-l-2 border-genesis-gold border-b border-b-white/10 bg-black/20 before:absolute before:inset-0 before:bg-gradient-to-r before:from-genesis-gold/10 before:to-transparent before:opacity-20 before:z-[-1] text-sm font-medium mb-10 shadow-subtle transition-all hover:shadow-subtle hover:border-genesis-gold">
							<span className="mr-2 inline-block w-2 h-2 bg-genesis-gold rounded-full animate-pulse"></span>
							Strategic Management Consultancy
						</div>
					</div>

					{/* Heading with animated reveal and gradient effects */}
					<h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat tracking-tight mb-10 text-white">
						<span
							className={`block transform transition-all duration-700 ${
								visible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-10"
							}`}
							style={{
								transitionDelay: "100ms",
								transitionTimingFunction:
									"cubic-bezier(0.16, 1, 0.3, 1)",
							}}
						>
							<span className="inline-block mr-2">Strategic</span>
							<span className="inline-block relative">
								solutions
								<span className="absolute bottom-2 left-0 w-full h-1 bg-genesis-gold/80"></span>
							</span>
						</span>
						<span
							className={`block corp-gradient-text transform transition-all duration-700 ${
								visible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-10"
							}`}
							style={{
								transitionDelay: "200ms",
								transitionTimingFunction:
									"cubic-bezier(0.16, 1, 0.3, 1)",
							}}
						>
							for complex challenges
						</span>
					</h1>

					{/* Enhanced subheading with custom styling */}
					<p
						className={`text-xl md:text-2xl text-white/90 mb-12 max-w-2xl transform transition-all duration-700 ${
							visible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-10"
						} border-l-2 border-genesis-gold/60 pl-6`}
						style={{
							transitionDelay: "300ms",
							transitionTimingFunction:
								"cubic-bezier(0.16, 1, 0.3, 1)",
							lineHeight: "1.6",
						}}
					>
						Genesis Management Consultancy delivers data-driven
						insights and transformative strategies for enterprises
						looking to achieve sustainable growth.
					</p>

					{/* Enhanced buttons with better hover states */}
					<div className="flex flex-wrap gap-6 mb-8 md:mb-16">
						<div
							className={`transform transition-all duration-700 ${
								visible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-10"
							}`}
							style={{
								transitionDelay: "400ms",
								transitionTimingFunction:
									"cubic-bezier(0.16, 1, 0.3, 1)",
							}}
						>
							<Button
								asChild
								variant="outline"
								className="px-8 py-7 h-auto bg-transparent text-white border-0 border-b-2 border-t-0 border-l-0 border-r-0 border-white/40 backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-white/5 active:scale-95 shadow-lg hover:shadow-xl rounded-none group"
							>
								<Link href="/login">
									<span className="flex items-center">
										Client Login
										<ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
									</span>
								</Link>
							</Button>
						</div>

						<div
							className={`transform transition-all duration-700 ${
								visible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-10"
							}`}
							style={{
								transitionDelay: "500ms",
								transitionTimingFunction:
									"cubic-bezier(0.16, 1, 0.3, 1)",
							}}
						>
							<Button
								asChild
								className="px-8 py-7 h-auto bg-genesis-gold text-genesis-navy font-medium border-0 shadow-subtle transition-all duration-500 active:scale-95 hover:shadow-subtle rounded-none group overflow-hidden relative"
							>
								<Link href="/case-studies">
									<span className="flex items-center relative z-10">
										View Case Studies
										<ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
									</span>
									<div className="absolute inset-0 bg-gradient-to-r from-genesis-gold to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
								</Link>
							</Button>
						</div>
					</div>

					{/* Stats with asymmetrical grid and enhanced styling - Desktop Only */}
					<div className="hidden sm:grid grid-cols-4 gap-2 md:gap-4 lg:gap-8">
						{stats.map((stat, index) => (
							<div
								key={index}
								className={`${
									index % 2 === 0 ? "-translate-y-4" : ""
								} glass-card p-6 border-t-0 border-r-0 border-b-0 border-l-2 border-genesis-gold/40 backdrop-blur-sm bg-black/20 group hover:-translate-y-2 transition-all duration-500 ease-out-expo transform ${
									visible
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-10"
								}`}
								style={{
									transitionDelay: `${700 + index * 100}ms`,
									transitionTimingFunction:
										"cubic-bezier(0.16, 1, 0.3, 1)",
								}}
							>
								<div className="text-white/50 text-lg mb-1">
									{stat.icon}
								</div>
								<div className="font-bold text-3xl md:text-4xl text-white group-hover:text-genesis-gold transition-colors duration-300">
									{stat.number}
								</div>
								<div className="text-white/90 text-sm group-hover:text-white transition-colors duration-300">
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Stats with asymmetrical grid and enhanced styling - Mobile Only */}
			<div className="sm:hidden grid grid-cols-4 gap-1 px-1 -mx-4 bg-black/50 py-2 absolute bottom-0 left-0 right-0 w-full z-20 backdrop-blur-md">
				{mobileStats.map((stat, index) => (
					<div
						key={index}
						className={`glass-card p-2 border-t-0 border-r-0 border-b-0 border-l-1 border-genesis-gold/40 backdrop-blur-sm bg-transparent group hover:-translate-y-1 transition-all duration-500 ease-out-expo transform ${
							visible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-10"
						}`}
						style={{
							transitionDelay: `${700 + index * 100}ms`,
							transitionTimingFunction:
								"cubic-bezier(0.16, 1, 0.3, 1)",
						}}
					>
						<div className="font-bold text-center text-sm text-white group-hover:text-genesis-gold transition-colors duration-300">
							{stat.number}
						</div>
						<div className="text-xs text-center text-white/90 group-hover:text-white transition-colors duration-300">
							{stat.label}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
