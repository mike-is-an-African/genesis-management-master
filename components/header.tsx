"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
	const pathname = usePathname();
	const isHomePage = pathname === "/";
	const isTransparentHeader = isHomePage || pathname.startsWith("/insights");

	const [headerStyle, setHeaderStyle] = useState({
		backgroundColor: isTransparentHeader ? "transparent" : "white",
		boxShadow: isTransparentHeader ? "none" : "0 1px 3px rgba(0,0,0,0.1)",
		borderBottom: isTransparentHeader
			? "none"
			: "1px solid rgba(228,228,231,0.8)",
		padding: isTransparentHeader ? "1.25rem 0" : "0.75rem 0",
		backdropFilter: "none",
	});
	const [textStyle, setTextStyle] = useState({
		color: isTransparentHeader ? "white" : "#0E1E4A", // genesis-navy color
		textShadow: isTransparentHeader ? "0 1px 2px rgba(0,0,0,0.5)" : "none",
	});
	const [hoverBg, setHoverBg] = useState(
		isTransparentHeader ? "rgba(255,255,255,0.1)" : "rgba(228,228,231,0.5)"
	);

	// Handle scroll events
	useEffect(() => {
		if (!isTransparentHeader) return; // Only apply on transparent header pages

		const handleScroll = () => {
			const scrollY = window.scrollY;

			if (scrollY < 20) {
				// At top
				setHeaderStyle({
					backgroundColor: "transparent",
					boxShadow: "none",
					borderBottom: "none",
					padding: "1.25rem 0", // py-5
					backdropFilter: "none",
				});
				setTextStyle({
					color: "white",
					textShadow: "0 1px 2px rgba(0,0,0,0.5)",
				});
				setHoverBg("rgba(255,255,255,0.1)"); // hover:bg-white/10
			} else {
				// Scrolled
				setHeaderStyle({
					backgroundColor: "rgba(255,255,255,0.8)",
					boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
					borderBottom: "none",
					padding: "0.75rem 0", // py-3
					backdropFilter: "blur(8px)",
				});
				setTextStyle({
					color: "#0E1E4A", // genesis-navy
					textShadow: "none",
				});
				setHoverBg("rgba(228,228,231,0.5)"); // hover:bg-zinc-100
			}
		};

		// Set initial values
		handleScroll();

		// Add scroll listener
		window.addEventListener("scroll", handleScroll);

		// Clean up
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isTransparentHeader]);

	// Close mobile menu when route changes
	useEffect(() => {
		setMobileMenuOpen(false);
	}, [pathname]);

	// Prevent body scroll when mobile menu is open
	useEffect(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileMenuOpen]);

	const toggleMobileSubmenu = (key: string) => {
		setMobileSubmenu((prev) => (prev === key ? null : key));
	};

	return (
		<>
			<header
				className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
				style={headerStyle}
			>
				<div className="container mx-auto px-4">
					<div className="flex items-center justify-between">
						{/* Logo */}
						<Link href="/" className="flex items-center group py-2">
							<Image
								src="/logo.png"
								alt="Genesis Management Logo"
								width={320}
								height={128}
								className="h-24 w-auto transition-all duration-300"
								priority
							/>
						</Link>

						{/* Desktop Navigation - Centered */}
						<div className="hidden lg:flex flex-1 justify-center">
							<NavigationMenu>
								<NavigationMenuList className="space-x-1">
									{/* Our Expertise */}
									<NavigationMenuItem>
										<NavigationMenuTrigger
											className="text-sm font-medium rounded-md px-3 py-2 transition-colors duration-300 navigation-menu-trigger"
											style={textStyle}
										>
											Our Expertise
										</NavigationMenuTrigger>
										<NavigationMenuContent>
											<div className="w-[600px] p-4">
												{expertiseItems.map(
													(section, sectionIdx) => (
														<div
															key={sectionIdx}
															className={
																sectionIdx > 0
																	? "mt-4 pt-4 border-t border-zinc-100"
																	: ""
															}
														>
															<h3 className="text-genesis-gold font-medium text-sm mb-2">
																{section.title}
															</h3>
															<ul className="grid grid-cols-2 gap-2">
																{section.items.map(
																	(item) => (
																		<li
																			key={
																				item.title
																			}
																		>
																			<NavigationMenuLink
																				asChild
																			>
																				<Link
																					href={
																						item.href
																					}
																					className="block select-none p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-50 hover:text-genesis-gold rounded-sm"
																				>
																					<div className="text-sm font-medium leading-none mb-2.5">
																						{
																							item.title
																						}
																					</div>
																					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
																						{
																							item.description
																						}
																					</p>
																				</Link>
																			</NavigationMenuLink>
																		</li>
																	)
																)}
															</ul>
														</div>
													)
												)}
											</div>
										</NavigationMenuContent>
									</NavigationMenuItem>

									{/* Gen-ius Insights */}
									<NavigationMenuItem>
										<NavigationMenuTrigger
											className="text-sm font-medium rounded-md px-3 py-2 transition-colors duration-300 navigation-menu-trigger"
											style={textStyle}
										>
											Gen-ius Insights
										</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="grid w-[400px] gap-0 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] rounded-sm">
												{insightsItems.map((item) => (
													<ListItem
														key={item.title}
														title={item.title}
														href={item.href}
														className="rounded-sm"
													>
														{item.description}
													</ListItem>
												))}
											</ul>
										</NavigationMenuContent>
									</NavigationMenuItem>

									{/* About Genesis */}
									<NavigationMenuItem>
										<Link
											href="/about"
											legacyBehavior
											passHref
										>
											<NavigationMenuLink
												className="text-sm font-medium rounded-sm px-3 py-2 flex items-center transition-colors duration-300 navigation-menu-link"
												style={textStyle}
											>
												About Genesis
											</NavigationMenuLink>
										</Link>
									</NavigationMenuItem>

									{/* Contact Us */}
									<NavigationMenuItem>
										<Link
											href="/contact"
											legacyBehavior
											passHref
										>
											<NavigationMenuLink
												className="text-sm font-medium rounded-sm px-3 py-2 flex items-center transition-colors duration-300 navigation-menu-link"
												style={textStyle}
											>
												Contact Us
											</NavigationMenuLink>
										</Link>
									</NavigationMenuItem>
								</NavigationMenuList>
							</NavigationMenu>
						</div>

						{/* Join for Free CTA Button */}
						<div className="hidden lg:flex items-center">
							<Button
								asChild
								variant="custom"
								className="text-sm font-medium rounded-md transition-all duration-300 z-50 bg-genesis-gold text-genesis-navy border border-genesis-gold/30 hover:bg-genesis-gold/90"
							>
								<Link href="/subscribe">Join for Free</Link>
							</Button>
						</div>

						{/* Mobile Menu Button */}
						<div className="lg:hidden flex items-center space-x-2">
							<Button
								variant="ghost"
								size="icon"
								onClick={() =>
									setMobileMenuOpen(!mobileMenuOpen)
								}
								aria-label="Toggle menu"
								className="rounded-sm z-50 transition-colors duration-300 menu-button"
								style={textStyle}
								withBorder={false}
							>
								<Menu size={24} />
							</Button>
						</div>
					</div>
				</div>
			</header>

			{/* Add hover support for the header items */}
			<style jsx global>{`
				@media (min-width: 1024px) {
					.navigation-menu-trigger:hover,
					.navigation-menu-link:hover,
					.menu-button:hover {
						background-color: ${hoverBg} !important;
					}
				}
			`}</style>

			{/* Mobile Menu Overlay */}
			{mobileMenuOpen && (
				<div className="mobile-menu lg:hidden animate-fade-in z-[60]">
					<div className="mobile-menu-header">
						<Link
							href="/"
							className="flex items-center"
							onClick={() => setMobileMenuOpen(false)}
						>
							<Image
								src="/logo.png"
								alt="Genesis Management Logo"
								width={220}
								height={88}
								className="h-20 w-auto"
								priority
							/>
						</Link>
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setMobileMenuOpen(false)}
							aria-label="Close menu"
							className="rounded-sm hover:bg-zinc-100 transition-all duration-300 text-genesis-navy"
							withBorder={false}
						>
							<X size={24} />
						</Button>
					</div>

					<div className="mobile-menu-content">
						<div className="space-y-6">
							{/* Our Expertise */}
							<div>
								<button
									className="flex items-center justify-between w-full py-2 text-lg font-medium border-b border-zinc-200 text-genesis-navy hover:text-genesis-gold transition-colors"
									onClick={() =>
										toggleMobileSubmenu("expertise")
									}
								>
									<span>Our Expertise</span>
									<ChevronDown
										size={20}
										className={cn(
											"transition-transform duration-300",
											mobileSubmenu === "expertise"
												? "rotate-180"
												: ""
										)}
									/>
								</button>

								{mobileSubmenu === "expertise" && (
									<div className="mt-2 ml-4 space-y-6 animate-fade-in">
										{expertiseItems.map(
											(section, sectionIdx) => (
												<div key={sectionIdx}>
													<h3 className="text-genesis-gold font-medium text-sm mb-2">
														{section.title}
													</h3>
													<div className="space-y-2">
														{section.items.map(
															(item) => (
																<Link
																	key={
																		item.title
																	}
																	href={
																		item.href
																	}
																	className="block py-2 text-base text-genesis-navy hover:text-genesis-gold transition-colors"
																	onClick={() =>
																		setMobileMenuOpen(
																			false
																		)
																	}
																>
																	{item.title}
																</Link>
															)
														)}
													</div>
												</div>
											)
										)}
									</div>
								)}
							</div>

							{/* Gen-ius Insights */}
							<div>
								<button
									className="flex items-center justify-between w-full py-2 text-lg font-medium border-b border-zinc-200 text-genesis-navy hover:text-genesis-gold transition-colors"
									onClick={() =>
										toggleMobileSubmenu("insights")
									}
								>
									<span>Gen-ius Insights</span>
									<ChevronDown
										size={20}
										className={cn(
											"transition-transform duration-300",
											mobileSubmenu === "insights"
												? "rotate-180"
												: ""
										)}
									/>
								</button>

								{mobileSubmenu === "insights" && (
									<div className="mt-2 ml-4 space-y-2 animate-fade-in">
										{insightsItems.map((item) => (
											<Link
												key={item.title}
												href={item.href}
												className="block py-2 text-base text-genesis-navy hover:text-genesis-gold transition-colors"
												onClick={() =>
													setMobileMenuOpen(false)
												}
											>
												{item.title}
											</Link>
										))}
									</div>
								)}
							</div>

							{/* About & Contact */}
							<Link
								href="/about"
								className="block py-2 text-lg font-medium border-b border-zinc-200 text-genesis-navy hover:text-genesis-gold transition-colors"
								onClick={() => setMobileMenuOpen(false)}
							>
								About Genesis
							</Link>
							<Link
								href="/contact"
								className="block py-2 text-lg font-medium border-b border-zinc-200 text-genesis-navy hover:text-genesis-gold transition-colors"
								onClick={() => setMobileMenuOpen(false)}
							>
								Contact Us
							</Link>
						</div>
					</div>

					<div className="mobile-menu-footer">
						<div className="flex flex-col space-y-3">
							<Button
								asChild
								className="w-full rounded-sm transition-all duration-300 border border-genesis-gold bg-genesis-gold text-genesis-navy hover:bg-genesis-gold/90"
							>
								<Link href="/subscribe">Join for Free</Link>
							</Button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

const expertiseItems = [
	{
		isHeader: true,
		title: "Our Services",
		items: [
			{
				title: "Corporate Finance",
				description:
					"Empower your growth journey with strategic financial mastery.",
				href: "/services/solutions/corporate-finance",
			},
			{
				title: "Operations Management",
				description:
					"Optimize your operations for efficiency and effectiveness.",
				href: "/services/solutions/operations-management",
			},
			{
				title: "Marketing, Growth & Sales",
				description:
					"Boost your business with strategic marketing and sales initiatives.",
				href: "/services/solutions/marketing-growth-sales",
			},
			{
				title: "Advisory",
				description:
					"Expert guidance for your most complex business challenges.",
				href: "/services/solutions/advisory",
			},
		],
	},
	{
		isHeader: true,
		title: "Industries We Serve",
		items: [
			{
				title: "Agriculture",
				description:
					"Strategic solutions for agribusiness from seed to market.",
				href: "/services/industries/agriculture",
			},
			{
				title: "Consumer Goods",
				description:
					"Transform brands, captivate markets, and inspire consumer confidence.",
				href: "/services/industries/consumer-goods",
			},
			{
				title: "Education",
				description:
					"Empower institutions and shape futures with excellence.",
				href: "/services/industries/education",
			},
			{
				title: "Energy & Mining",
				description:
					"Powering sustainable growth in resource-intensive sectors.",
				href: "/services/industries/energy",
			},
			{
				title: "Engineering & Infrastructure",
				description:
					"Building the foundation for sustainable development.",
				href: "/services/industries/engineering",
			},
			{
				title: "Financial Services",
				description:
					"Navigating complexity with confidence for financial institutions.",
				href: "/services/industries/financial-services",
			},
			{
				title: "Healthcare",
				description:
					"Innovative solutions for healthcare providers and businesses.",
				href: "/services/industries/healthcare",
			},
			{
				title: "Manufacturing",
				description:
					"Engineering excellence and operational innovation for manufacturers.",
				href: "/services/industries/manufacturing",
			},
			{
				title: "Operations Management",
				description:
					"Driving operational excellence and sustainable competitive advantage.",
				href: "/services/industries/operations",
			},
			{
				title: "Public Sector",
				description:
					"Driving efficiency and impact in public service sectors.",
				href: "/services/industries/public",
			},
			{
				title: "Retail",
				description:
					"Transforming retail experiences for tomorrow's consumers.",
				href: "/services/industries/retail",
			},
			{
				title: "Security",
				description:
					"Protecting organizations and assets through strategic security solutions.",
				href: "/services/industries/security",
			},
			{
				title: "Services Sector",
				description:
					"Elevating service delivery across diverse industries.",
				href: "/services/industries/services-sector",
			},
			{
				title: "Technology",
				description:
					"Navigating digital transformation in rapidly evolving markets.",
				href: "/services/industries/technology",
			},
			{
				title: "Travel & Logistics",
				description:
					"Optimizing movement of people and goods across borders.",
				href: "/services/industries/travel",
			},
		],
	},
];

const insightsItems = [
	{
		title: "Latest Articles",
		description: "Our most recent insights and thought leadership.",
		href: "/insights/articles",
	},
	{
		title: "Industry Reports",
		description: "In-depth analysis of industry trends and developments.",
		href: "/insights/reports",
	},
	{
		title: "Case Studies",
		description:
			"Real-world examples of our successful client engagements.",
		href: "/insights/case-studies",
	},
	{
		title: "Whitepapers",
		description: "Detailed research papers on critical business topics.",
		href: "/insights/whitepapers",
	},
	{
		title: "Webinars & Events",
		description: "Upcoming and recorded educational sessions.",
		href: "/insights/webinars",
	},
	{
		title: "Podcast",
		description:
			"The Genesis Management podcast featuring industry experts.",
		href: "/insights/podcasts",
	},
];

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none p-4 leading-none no-underline outline-none transition-colors hover:bg-zinc-50 hover:text-genesis-gold",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none mb-2.5">
						{title}
					</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
