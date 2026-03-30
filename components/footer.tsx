import Link from "next/link";
import {
	ArrowUpRight,
	Phone,
	Facebook,
	Twitter,
	Linkedin,
	Mail,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bg-zinc-900 text-white relative dark:bg-zinc-950">
			<div className="absolute inset-0 opacity-5">
				<Image
					src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
					alt="Abstract pattern"
					fill
					className="object-cover"
				/>
			</div>
			<div className="absolute inset-0 bg-noise opacity-30"></div>
			<div className="container mx-auto px-4 py-20 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
					<div className="space-y-6">
						<div className="font-medium text-2xl relative inline-block">
							Genesis
							<div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-accent"></div>
						</div>
						<p className="text-zinc-400 text-sm dark:text-zinc-300 text-pretty">
							Professional management consultancy services
							delivering strategic solutions for complex business
							challenges.
						</p>
						<div className="flex items-center space-x-4">
							<span className="text-zinc-300 font-medium">
								Get in touch:
							</span>
							<div className="flex space-x-4">
								<a
									href="#"
									className="w-8 h-8 bg-zinc-800 flex items-center justify-center hover:bg-accent transition-colors rounded-sm"
									aria-label="Twitter"
								>
									<Twitter className="h-4 w-4" />
								</a>
								<a
									href="#"
									className="w-8 h-8 bg-zinc-800 flex items-center justify-center hover:bg-accent transition-colors rounded-sm"
									aria-label="Facebook"
								>
									<Facebook className="h-4 w-4" />
								</a>
								<a
									href="#"
									className="w-8 h-8 bg-zinc-800 flex items-center justify-center hover:bg-accent transition-colors rounded-sm"
									aria-label="LinkedIn"
								>
									<Linkedin className="h-4 w-4" />
								</a>
								<a
									href="mailto:info@genesis.com"
									className="w-8 h-8 bg-zinc-800 flex items-center justify-center hover:bg-accent transition-colors rounded-sm"
									aria-label="Email"
								>
									<Mail className="h-4 w-4" />
								</a>
							</div>
						</div>
					</div>

					<div>
						<h3 className="text-sm font-medium uppercase tracking-wider text-zinc-400 mb-6 border-l-2 border-accent pl-3 dark:text-zinc-300">
							Services
						</h3>
						<ul className="space-y-4">
							<li>
								<Link
									href="/services/strategic-planning"
									className="text-zinc-300 hover:text-white transition-colors text-sm flex items-center group dark:text-zinc-200"
								>
									<span className="group-hover:underline">
										Strategic Planning
									</span>
									<ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
								</Link>
							</li>
							<li>
								<Link
									href="/services/operational-excellence"
									className="text-zinc-300 hover:text-white transition-colors text-sm flex items-center group dark:text-zinc-200"
								>
									<span className="group-hover:underline">
										Operational Excellence
									</span>
									<ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
								</Link>
							</li>
							<li>
								<Link
									href="/services/digital-transformation"
									className="text-zinc-300 hover:text-white transition-colors text-sm flex items-center group dark:text-zinc-200"
								>
									<span className="group-hover:underline">
										Digital Transformation
									</span>
									<ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
								</Link>
							</li>
							<li>
								<Link
									href="/services/risk-management"
									className="text-zinc-300 hover:text-white transition-colors text-sm flex items-center group dark:text-zinc-200"
								>
									<span className="group-hover:underline">
										Risk Management
									</span>
									<ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-sm font-medium uppercase tracking-wider text-zinc-400 mb-6 border-l-2 border-accent pl-3 dark:text-zinc-300">
							Company
						</h3>
						<ul className="space-y-4">
							<li>
								<Link
									href="/about"
									className="text-zinc-300 hover:text-white transition-colors text-sm flex items-center group dark:text-zinc-200"
								>
									<span className="group-hover:underline">
										About Us
									</span>
									<ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
								</Link>
							</li>
							<li>
								<Link
									href="/team"
									className="text-zinc-300 hover:text-white transition-colors text-sm flex items-center group dark:text-zinc-200"
								>
									<span className="group-hover:underline">
										Our Team
									</span>
									<ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
								</Link>
							</li>
							<li>
								<Link
									href="/careers"
									className="text-zinc-300 hover:text-white transition-colors text-sm flex items-center group dark:text-zinc-200"
								>
									<span className="group-hover:underline">
										Careers
									</span>
									<ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-zinc-300 hover:text-white transition-colors text-sm flex items-center group dark:text-zinc-200"
								>
									<span className="group-hover:underline">
										Contact
									</span>
									<ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-sm font-medium uppercase tracking-wider text-zinc-400 mb-6 border-l-2 border-accent pl-3 dark:text-zinc-300">
							Contact Us
						</h3>
						<address className="not-italic text-zinc-300 dark:text-zinc-200 text-sm space-y-2">
							<p>Genesis Management Consultancy</p>
							<p>123 Borrowdale Road</p>
							<p>Highlands, Harare</p>
							<p>Zimbabwe</p>
						</address>
						<div className="mt-4 space-y-2">
							<a
								href="tel:+263771234567"
								className="text-zinc-300 hover:text-white transition-colors text-sm flex items-center group dark:text-zinc-200"
							>
								<Phone className="h-4 w-4 mr-2" />
								<span className="group-hover:underline">
									+263 77 123 4567
								</span>
							</a>
							<a
								href="mailto:info@genesismanagement.co.zw"
								className="text-zinc-300 hover:text-white transition-colors text-sm flex items-center group dark:text-zinc-200"
							>
								<Mail className="h-4 w-4 mr-2" />
								<span className="group-hover:underline">
									info@genesismanagement.co.zw
								</span>
							</a>
						</div>
					</div>
				</div>

				<div className="premium-divider my-12"></div>

				<div className="flex flex-col md:flex-row justify-between items-center">
					<p className="text-xs text-zinc-500 dark:text-zinc-400">
						© {new Date().getFullYear()} Genesis Management
						Consultancy. All rights reserved.
					</p>
					<div className="flex space-x-6 mt-4 md:mt-0">
						<Link
							href="#"
							className="text-zinc-500 hover:text-white transition-colors text-xs dark:text-zinc-400 dark:hover:text-white"
						>
							Sitemap
						</Link>
						<Link
							href="#"
							className="text-zinc-500 hover:text-white transition-colors text-xs dark:text-zinc-400 dark:hover:text-white"
						>
							Accessibility
						</Link>
						<Link
							href="#"
							className="text-zinc-500 hover:text-white transition-colors text-xs dark:text-zinc-400 dark:hover:text-white"
						>
							Disclaimer
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
