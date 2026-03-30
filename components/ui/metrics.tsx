import { cn } from "@/lib/utils";

interface MetricsProps {
	children: React.ReactNode;
	className?: string;
}

interface CategoryProps {
	title: string;
	children: React.ReactNode;
	className?: string;
}

export function Metrics({ children, className }: MetricsProps) {
	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 my-12",
				className
			)}
		>
			{children}
		</div>
	);
}

export function Category({ title, children, className }: CategoryProps) {
	return (
		<div
			className={cn(
				"p-8 rounded-lg border bg-card/50 backdrop-blur-sm hover:shadow-premium transition-all duration-300 hover:border-primary/20",
				className
			)}
		>
			<h4 className="text-xl font-semibold mb-4 nyc-heading">{title}</h4>
			<ul className="space-y-3 text-base md:text-lg text-muted-foreground font-montserrat">
				{children}
			</ul>
		</div>
	);
}

Metrics.Category = Category;
