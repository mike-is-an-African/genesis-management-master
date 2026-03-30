import Link from "next/link";
import { ArrowRight, Globe, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SpecialOffering() {
	return (
		<section className="py-16 bg-genesis-navy relative overflow-hidden">
			<div className="absolute inset-0 bg-noise opacity-20"></div>

			{/* Decorative pattern */}
			<div className="absolute top-0 left-0 w-full h-full opacity-10">
				<div className="absolute -top-10 -right-10 w-60 h-60 rounded-full border border-genesis-gold"></div>
				<div className="absolute top-40 -left-20 w-80 h-80 rounded-full border border-genesis-gold"></div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 md:p-10 lg:p-12 border border-white/10">
					<div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
						<div className="lg:col-span-3">
							<Badge
								variant="outline"
								className="bg-genesis-gold/20 text-genesis-gold border-genesis-gold/20 mb-4"
							>
								<Globe className="h-3 w-3 mr-1" /> Special
								Offering
							</Badge>
							<h2 className="text-3xl md:text-4xl font-playfair text-white tracking-tight mb-6">
								Register your business online in 10 simple steps
							</h2>
							<p className="text-lg text-zinc-300 mb-8 max-w-2xl font-montserrat">
								Streamline your business registration process
								with our fully digital solution. Available in 29
								countries across the globe, our platform makes
								company formation simple, efficient, and
								hassle-free.
							</p>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
								<div className="flex items-start">
									<CheckCircle2 className="h-5 w-5 text-genesis-gold mr-2 mt-0.5" />
									<span className="text-zinc-200">
										Easy online process
									</span>
								</div>
								<div className="flex items-start">
									<CheckCircle2 className="h-5 w-5 text-genesis-gold mr-2 mt-0.5" />
									<span className="text-zinc-200">
										Global coverage
									</span>
								</div>
								<div className="flex items-start">
									<CheckCircle2 className="h-5 w-5 text-genesis-gold mr-2 mt-0.5" />
									<span className="text-zinc-200">
										Legal compliance guaranteed
									</span>
								</div>
								<div className="flex items-start">
									<CheckCircle2 className="h-5 w-5 text-genesis-gold mr-2 mt-0.5" />
									<span className="text-zinc-200">
										Transparent pricing
									</span>
								</div>
							</div>

							<div className="flex flex-col sm:flex-row gap-4">
								<Link
									href="/services/business-registration"
									className="inline-flex items-center bg-genesis-gold hover:bg-genesis-gold/90 text-genesis-navy font-medium px-6 py-3 rounded-sm transition-colors"
								>
									Get Started
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
								<Link
									href="/contact"
									className="inline-flex items-center border border-white/20 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-sm transition-colors"
								>
									Contact Sales
								</Link>
							</div>
						</div>

						<div className="lg:col-span-2 flex flex-col justify-center">
							<div className="bg-white/10 rounded-md p-6 backdrop-blur-sm">
								<h3 className="text-xl text-white font-medium mb-4 font-montserrat">
									Why choose our registration service?
								</h3>
								<ul className="space-y-3 text-zinc-200">
									<li className="flex items-start">
										<CheckCircle2 className="h-5 w-5 text-genesis-gold mr-2 shrink-0 mt-0.5" />
										<span>
											Complete your registration from
											anywhere, on any device
										</span>
									</li>
									<li className="flex items-start">
										<CheckCircle2 className="h-5 w-5 text-genesis-gold mr-2 shrink-0 mt-0.5" />
										<span>
											Save up to 70% on traditional
											registration costs
										</span>
									</li>
									<li className="flex items-start">
										<CheckCircle2 className="h-5 w-5 text-genesis-gold mr-2 shrink-0 mt-0.5" />
										<span>
											Dedicated support throughout the
											entire process
										</span>
									</li>
									<li className="flex items-start">
										<CheckCircle2 className="h-5 w-5 text-genesis-gold mr-2 shrink-0 mt-0.5" />
										<span>
											Additional services: tax
											registration, licensing & more
										</span>
									</li>
								</ul>
								<p className="text-xs text-zinc-400 mt-4">
									Terms and conditions apply. Service
									availability varies by country.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
