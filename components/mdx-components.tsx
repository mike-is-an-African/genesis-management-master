import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type React from "react";
import {
	Table,
	TableHeader,
	TableBody,
	TableFooter,
	TableHead,
	TableRow,
	TableCell,
	TableCaption,
} from "@/components/ui/table";
import { ElementType } from "react";

interface MdxImageProps {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	className?: string;
}

interface MdxLinkProps {
	href: string;
	children: React.ReactNode;
	className?: string;
}

interface MdxHeadingProps {
	id?: string;
	level: 1 | 2 | 3 | 4 | 5 | 6;
	children: React.ReactNode;
	className?: string;
}

interface MdxCalloutProps {
	type?: "info" | "warning" | "error";
	children: React.ReactNode;
	className?: string;
}

export const MdxImage = ({
	src,
	alt,
	width = 800,
	height = 450,
	className,
}: MdxImageProps) => {
	return (
		<div
			className={cn(
				"my-8 overflow-hidden rounded-md border-2 border-primary",
				className
			)}
		>
			<Image
				src={src || "/placeholder.svg"}
				alt={alt}
				width={width}
				height={height}
				className="w-full object-cover"
			/>
		</div>
	);
};

export const MdxLink = ({ href, children, className }: MdxLinkProps) => {
	const isInternal = href.startsWith("/") || href.startsWith("#");

	if (isInternal) {
		return (
			<Link
				href={href}
				className={cn(
					"text-primary underline underline-offset-4",
					className
				)}
			>
				{children}
			</Link>
		);
	}

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={cn(
				"text-primary underline underline-offset-4",
				className
			)}
		>
			{children}
		</a>
	);
};

export const MdxHeading = ({
	id,
	level,
	children,
	className,
}: MdxHeadingProps) => {
	const Component = `h${level}` as ElementType;

	return (
		<Component
			id={id}
			className={cn(
				"scroll-m-20",
				level === 1 && "text-4xl font-bold tracking-tight mt-8 mb-4",
				level === 2 && "text-3xl font-bold tracking-tight mt-8 mb-4",
				level === 3 && "text-2xl font-bold tracking-tight mt-6 mb-3",
				level === 4 && "text-xl font-bold tracking-tight mt-4 mb-2",
				level === 5 && "text-lg font-bold tracking-tight mt-4 mb-2",
				level === 6 && "text-base font-bold tracking-tight mt-4 mb-2",
				className
			)}
		>
			{children}
		</Component>
	);
};

export const MdxCallout = ({
	type = "info",
	children,
	className,
}: MdxCalloutProps) => {
	return (
		<div
			className={cn(
				"my-6 rounded-md border-2 p-4",
				type === "info" && "border-blue-900 bg-blue-50",
				type === "warning" && "border-yellow-600 bg-yellow-50",
				type === "error" && "border-red-600 bg-red-50",
				className
			)}
		>
			{children}
		</div>
	);
};

// Table components for MDX
export const MdxTable = ({
	className,
	...props
}: React.HTMLAttributes<HTMLTableElement>) => (
	<Table className={cn("my-8 border-collapse", className)} {...props} />
);

export const MdxTableHeader = (
	props: React.HTMLAttributes<HTMLTableSectionElement>
) => <TableHeader {...props} className="bg-genesis-navy/5 font-semibold" />;

export const MdxTableRow = (
	props: React.HTMLAttributes<HTMLTableRowElement>
) => <TableRow {...props} className="border-b border-genesis-navy/10" />;

export const MdxTableHead = (
	props: React.ThHTMLAttributes<HTMLTableCellElement>
) => (
	<TableHead
		{...props}
		className="text-genesis-navy font-bold p-3 text-left"
	/>
);

export const MdxTableBody = (
	props: React.HTMLAttributes<HTMLTableSectionElement>
) => <TableBody {...props} />;

export const MdxTableCell = (
	props: React.TdHTMLAttributes<HTMLTableCellElement>
) => <TableCell {...props} className="p-3 border-genesis-navy/10" />;

export const MdxTableCaption = (
	props: React.HTMLAttributes<HTMLTableCaptionElement>
) => (
	<TableCaption
		{...props}
		className="font-medium text-sm text-genesis-navy/80 mt-2"
	/>
);

// List components for MDX
export const MdxUnorderedList = ({
	className,
	...props
}: React.HTMLAttributes<HTMLUListElement>) => (
	<ul
		className={cn("list-disc list-outside my-4 ml-6 space-y-1", className)}
		{...props}
	/>
);

export const MdxOrderedList = ({
	className,
	...props
}: React.HTMLAttributes<HTMLOListElement>) => (
	<ol
		className={cn(
			"list-decimal list-outside my-4 ml-6 space-y-1",
			className
		)}
		{...props}
	/>
);

export const MdxListItem = ({
	className,
	...props
}: React.HTMLAttributes<HTMLLIElement>) => (
	<li className={cn("", className)} {...props} />
);

export const mdxComponents = {
	img: MdxImage,
	a: MdxLink,
	h1: (props: any) => <MdxHeading level={1} {...props} />,
	h2: (props: any) => <MdxHeading level={2} {...props} />,
	h3: (props: any) => <MdxHeading level={3} {...props} />,
	h4: (props: any) => <MdxHeading level={4} {...props} />,
	h5: (props: any) => <MdxHeading level={5} {...props} />,
	h6: (props: any) => <MdxHeading level={6} {...props} />,
	Callout: MdxCallout,
	// Add table components
	table: MdxTable,
	thead: MdxTableHeader,
	tbody: MdxTableBody,
	tr: MdxTableRow,
	th: MdxTableHead,
	td: MdxTableCell,
	caption: MdxTableCaption,
	// Add list components
	ul: MdxUnorderedList,
	ol: MdxOrderedList,
	li: MdxListItem,
};
