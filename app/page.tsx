import { Metadata } from "next";
import HeroSection from "@/components/sections/hero-section";
import SpecialOffering from "@/components/sections/special-offering";
import SuccessStories from "@/components/sections/testimonials";
import ClientStories from "@/components/sections/client-stories";
import FeaturedInsights from "@/components/sections/featured-insights";
import { getAllInsights } from "../lib/insights";
import { getAllCaseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
	title: "Genesis Management Consultancy",
	description: "Professional management consultancy services",
};

export default async function Home() {
	const insights = await getAllInsights();
	const caseStudies = await getAllCaseStudies();

	return (
		<div className="flex flex-col min-h-screen">
			<HeroSection />
			<FeaturedInsights insights={insights.slice(0, 3)} />
			<ClientStories caseStudies={caseStudies.slice(0, 3)} />
			<SpecialOffering />
			<SuccessStories />
		</div>
	);
}
