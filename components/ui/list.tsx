import React from "react";
import { cn } from "@/lib/utils";

type BulletListProps = {
	items: React.ReactNode[];
	className?: string;
};

export function BulletList({ items, className }: BulletListProps) {
	return (
		<div className={cn("space-y-2 my-6", className)}>
			{items.map((item, index) => (
				<div key={index} className="flex gap-2">
					<div className="flex-shrink-0 w-4 text-genesis-navy">•</div>
					<div className="flex-1">{item}</div>
				</div>
			))}
		</div>
	);
}

type NumberedListProps = {
	items: React.ReactNode[];
	className?: string;
};

export function NumberedList({ items, className }: NumberedListProps) {
	return (
		<div className={cn("space-y-2 my-6", className)}>
			{items.map((item, index) => (
				<div key={index} className="flex gap-2">
					<div className="flex-shrink-0 w-6 text-right text-genesis-navy">
						{index + 1}.
					</div>
					<div className="flex-1">{item}</div>
				</div>
			))}
		</div>
	);
}
