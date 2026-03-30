import type React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Genesis Management Consultancy",
	description: "Professional management consultancy services",
	generator: "v0.dev",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="bg-genesis-navy">
			<head>
				{/* Google Analytics */}
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-KYRRBVWKZ6"
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-KYRRBVWKZ6');
					`}
				</Script>
			</head>
			<body
				className={cn(
					"min-h-screen bg-background font-montserrat antialiased overflow-x-hidden",
					montserrat.variable
				)}
				style={{ backgroundColor: "#0E1E4A" }} // Genesis Navy color
			>
				<div className="flex min-h-screen flex-col bg-background relative">
					<div
						className="absolute inset-0 w-screen min-h-screen bg-genesis-navy"
						style={{ zIndex: -10 }}
					></div>
					<Header />
					<main className="flex-1">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}

import "./globals.css";
