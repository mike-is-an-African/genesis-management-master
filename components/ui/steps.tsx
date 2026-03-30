import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepsProps {
	children: React.ReactNode;
	className?: string;
}

interface StepProps {
	title: string;
	children: React.ReactNode;
	className?: string;
}

export function Steps({ children, className }: StepsProps) {
	return (
		<div className={cn("space-y-8 my-10 pl-4", className)}>
			{children}
		</div>
	);
}

export function Step({ title, children, className }: StepProps) {
	return (
		<div className={cn("flex gap-5", className)}>
			<div className="flex-shrink-0 w-10 h-10 rounded-full bg-genesis-gold/10 text-genesis-gold flex items-center justify-center ring-4 ring-genesis-gold/5 dark:ring-genesis-gold/10 shadow-subtle">
				<Check className="h-5 w-5" />
			</div>
			<div>
				<h4 className="text-lg font-medium mb-2 font-playfair text-genesis-navy">
					{title}
				</h4>
				<p className="text-base md:text-lg text-zinc-600 font-montserrat">
					{children}
				</p>
			</div>
		</div>
	);
}

Steps.Step = Step;
