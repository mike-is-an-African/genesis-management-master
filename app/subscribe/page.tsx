import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Check, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SubscribePage() {
	return (
		<div className="pt-32 pb-20 relative">
			<div className="absolute inset-0">
				<Image
					src="/placeholder.svg?height=1080&width=1920"
					alt="Abstract business background"
					fill
					className="object-cover opacity-10"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/80"></div>
			</div>
			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-5xl mx-auto">
					<div className="text-center mb-16">
						<div className="inline-block px-3 py-1 bg-genesis-gold/10 text-genesis-navy border border-genesis-gold/20 text-xs font-medium mb-6 shadow-subtle">
							Join Our Community
						</div>
						<h1 className="text-3xl md:text-5xl font-medium mb-6 font-playfair text-genesis-navy">
							Subscribe to Genesis Insights
						</h1>
						<p className="text-lg text-slate-600 max-w-2xl mx-auto font-montserrat">
							Join our community of business leaders and gain
							access to exclusive content, research papers, and
							industry analyses.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
						<div>
							<Card className="overflow-hidden shadow-card border-zinc-200/80 h-full flex flex-col">
								<div className="h-2 bg-emerald-500"></div>
								<CardContent className="p-8 flex-1 flex flex-col">
									<div className="flex items-center justify-between mb-6">
										<h2 className="text-xl font-medium border-l-2 border-emerald-500 pl-4 text-genesis-navy font-playfair">
											Basic Account
										</h2>
										<span className="bg-emerald-500/10 text-emerald-700 text-xs font-medium px-3 py-1 rounded-full border border-emerald-500/20">
											Free
										</span>
									</div>

									<div className="mb-8">
										<div className="text-3xl font-bold mb-1 text-emerald-600">
											$0
										</div>
										<p className="text-sm text-slate-500">
											Always free access to basic features
										</p>
									</div>

									<ul className="space-y-3 mb-8 flex-1">
										{freeAccountBenefits.map(
											(benefit, index) => (
												<li
													key={index}
													className="flex items-start"
												>
													<div className="mr-3 mt-0.5 text-emerald-600 bg-emerald-50 p-1 rounded-full">
														<Check className="h-3 w-3" />
													</div>
													<span className="text-sm text-slate-600">
														{benefit}
													</span>
												</li>
											)
										)}
									</ul>

									<div className="mt-auto">
										<Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-subtle rounded-sm font-medium mb-4">
											Create Free Account
										</Button>

										<p className="text-xs text-slate-500 text-center">
											No credit card required
										</p>
									</div>
								</CardContent>
							</Card>
						</div>

						<div>
							<Card className="overflow-hidden shadow-card border-zinc-200/80 h-full flex flex-col">
								<div className="h-2 bg-genesis-gold"></div>
								<CardContent className="p-8 flex-1 flex flex-col">
									<div className="flex items-center justify-between mb-6">
										<h3 className="text-xl font-medium border-l-2 border-genesis-gold pl-4 text-genesis-navy font-playfair">
											Premium Subscription
										</h3>
										<span className="bg-genesis-gold/10 text-genesis-navy text-xs font-medium px-3 py-1 rounded-full border border-genesis-gold/20">
											RECOMMENDED
										</span>
									</div>

									<div className="mb-8">
										<div className="text-3xl font-bold mb-1 text-genesis-navy">
											$1.99
											<span className="text-sm font-normal text-slate-500">
												/month
											</span>
										</div>
										<p className="text-sm text-slate-500">
											Cancel anytime. No long-term
											commitment required.
										</p>
									</div>

									<ul className="space-y-3 mb-8 flex-1">
										{subscriptionBenefits.map(
											(benefit, index) => (
												<li
													key={index}
													className="flex items-start"
												>
													<div className="mr-3 mt-0.5 text-genesis-gold bg-genesis-gold/10 p-1 rounded-full border border-genesis-gold/20">
														<Check className="h-3 w-3" />
													</div>
													<div>
														<p className="text-sm text-slate-700 font-medium">
															{benefit.title}
														</p>
														<p className="text-xs text-slate-500 mt-0.5">
															{
																benefit.description
															}
														</p>
													</div>
												</li>
											)
										)}
									</ul>

									<div className="mt-auto">
										<Button className="w-full bg-genesis-gold hover:bg-genesis-gold/90 text-genesis-navy flex items-center justify-center shadow-subtle rounded-sm font-medium mb-4">
											Get Premium Access{" "}
											<ArrowRight className="ml-2 h-4 w-4" />
										</Button>
										<p className="text-xs text-slate-500 text-center">
											Includes all free features
										</p>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>

					<div className="max-w-3xl mx-auto">
						<Card className="overflow-hidden shadow-card border-zinc-200/80">
							<CardContent className="p-8">
								<h2 className="text-xl font-medium mb-6 text-center text-genesis-navy font-playfair">
									Complete Your Registration
								</h2>

								<form className="space-y-8">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div className="space-y-2">
											<label
												htmlFor="fullName"
												className="text-sm font-medium text-genesis-navy"
											>
												Full Name
											</label>
											<Input
												id="fullName"
												placeholder="John Doe"
												className="border-slate-200 focus:ring-2 focus:ring-genesis-gold/50 focus:border-genesis-gold rounded-sm"
												required
											/>
										</div>
										<div className="space-y-2">
											<label
												htmlFor="email"
												className="text-sm font-medium text-genesis-navy"
											>
												Email
											</label>
											<Input
												id="email"
												type="email"
												placeholder="john.doe@example.com"
												className="border-slate-200 focus:ring-2 focus:ring-genesis-gold/50 focus:border-genesis-gold rounded-sm"
												required
											/>
										</div>
										<div className="space-y-2">
											<label
												htmlFor="city"
												className="text-sm font-medium text-genesis-navy"
											>
												City
											</label>
											<Input
												id="city"
												placeholder="New York"
												className="border-slate-200 focus:ring-2 focus:ring-genesis-gold/50 focus:border-genesis-gold rounded-sm"
												required
											/>
										</div>
										<div className="space-y-2">
											<label
												htmlFor="country"
												className="text-sm font-medium text-genesis-navy"
											>
												Country
											</label>
											<Select>
												<SelectTrigger className="border-slate-200 focus:ring-2 focus:ring-genesis-gold/50 focus:border-genesis-gold rounded-sm">
													<SelectValue placeholder="Select a country" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="us">
														United States
													</SelectItem>
													<SelectItem value="uk">
														United Kingdom
													</SelectItem>
													<SelectItem value="ca">
														Canada
													</SelectItem>
													<SelectItem value="au">
														Australia
													</SelectItem>
													<SelectItem value="de">
														Germany
													</SelectItem>
													<SelectItem value="fr">
														France
													</SelectItem>
													<SelectItem value="jp">
														Japan
													</SelectItem>
													<SelectItem value="other">
														Other
													</SelectItem>
												</SelectContent>
											</Select>
										</div>
									</div>

									<div className="space-y-3">
										<label className="text-sm font-medium text-genesis-navy">
											Areas of Interest
										</label>
										<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
											{interests.map(
												(interest, index) => (
													<div
														key={index}
														className="flex items-center space-x-2 p-3 hover:bg-slate-50 transition-colors border border-slate-200 shadow-subtle rounded-sm"
													>
														<Checkbox
															id={`interest-${index}`}
															className="data-[state=checked]:bg-genesis-gold data-[state=checked]:border-genesis-gold"
														/>
														<label
															htmlFor={`interest-${index}`}
															className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer w-full text-slate-700"
														>
															{interest}
														</label>
													</div>
												)
											)}
										</div>
									</div>

									<div className="flex items-start space-x-2 p-4 bg-slate-50 border border-slate-200 shadow-subtle rounded-sm">
										<Checkbox
											id="terms"
											className="mt-1 data-[state=checked]:bg-genesis-gold data-[state=checked]:border-genesis-gold"
										/>
										<div className="grid gap-1.5 leading-none">
											<label
												htmlFor="terms"
												className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-genesis-navy"
											>
												I agree to the terms and
												conditions
											</label>
											<p className="text-sm text-slate-500">
												By checking this box, you agree
												to our{" "}
												<a
													href="/terms"
													className="text-genesis-navy hover:text-genesis-gold hover:underline"
												>
													Terms of Service
												</a>{" "}
												and{" "}
												<a
													href="/privacy"
													className="text-genesis-navy hover:text-genesis-gold hover:underline"
												>
													Privacy Policy
												</a>
												.
											</p>
										</div>
									</div>

									<Button
										type="submit"
										className="w-full bg-genesis-navy hover:bg-genesis-navy/90 text-white shadow-subtle rounded-sm py-6 font-medium text-lg"
									>
										Complete Registration
									</Button>
								</form>
							</CardContent>
						</Card>

						<div className="mt-8 text-center">
							<p className="text-slate-600 text-sm">
								Already have an account?{" "}
								<Link
									href="/login"
									className="text-genesis-navy hover:text-genesis-gold hover:underline font-medium"
								>
									Login here
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const interests = [
	"Strategic Planning",
	"Operational Excellence",
	"Digital Transformation",
	"Risk Management",
	"Market Analysis",
	"Leadership Development",
	"Financial Advisory",
	"Change Management",
];

const freeAccountBenefits = [
	"Weekly newsletter access",
	"Basic insights and articles",
	"Access to public webinars",
	"Community forum access",
];

const subscriptionBenefits = [
	{
		title: "Exclusive Premium Content",
		description:
			"Access our complete library of research papers and industry analyses",
	},
	{
		title: "Priority Event Registration",
		description:
			"Be the first to register for limited-seat webinars and conferences",
	},
	{
		title: "Personalized Insights",
		description:
			"Receive tailored reports based on your specific industry and interests",
	},
	{
		title: "Quarterly Expert Consultation",
		description:
			"One-on-one sessions with our specialists to discuss your business challenges",
	},
];
