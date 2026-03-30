import { AlertCircle, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = {
	info: Info,
	warning: AlertTriangle,
	success: CheckCircle,
	error: AlertCircle,
};

const styles = {
	info: "bg-blue-50/50 text-blue-900 border-blue-200 dark:bg-blue-950/50 dark:text-blue-200 dark:border-blue-800/30",
	warning:
		"bg-yellow-50/50 text-yellow-900 border-yellow-200 dark:bg-yellow-950/50 dark:text-yellow-200 dark:border-yellow-800/30",
	success:
		"bg-green-50/50 text-green-900 border-green-200 dark:bg-green-950/50 dark:text-green-200 dark:border-green-800/30",
	error: "bg-red-50/50 text-red-900 border-red-200 dark:bg-red-950/50 dark:text-red-200 dark:border-red-800/30",
};

interface CalloutProps {
	type?: keyof typeof icons;
	children: React.ReactNode;
	className?: string;
}

export function Callout({ type = "info", children, className }: CalloutProps) {
	const Icon = icons[type];

	return (
		<div
			className={cn(
				"flex gap-4 p-8 my-10 rounded-lg border border-opacity-70 backdrop-blur-sm shadow-sm hover:shadow-subtle transition-all duration-300",
				styles[type],
				className
			)}
		>
			<Icon className="h-6 w-6 flex-shrink-0 mt-1" />
			<div className="flex-1 text-base md:text-lg font-montserrat">{children}</div>
		</div>
	);
}
