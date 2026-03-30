import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { calculateReadingTime } from "@/lib/utils";

// Define the frontmatter type
export interface CaseStudyFrontmatter {
	title: string;
	description: string;
	date: string;
	client: string;
	industry: string;
	tags: string[];
	image?: string;
}

// Define the case study type that's separate from the imported one
export interface CaseStudyData {
	slug: string;
	title: string;
	description: string;
	date: string;
	client: string;
	industry: string;
	readingTime: string;
	content: string;
	tags: string[];
	image?: string;
}

// Path to the case studies
const caseStudiesDirectory = path.join(process.cwd(), "content/case-studies");

// Get all case studies
export async function getAllCaseStudies(): Promise<CaseStudyData[]> {
	try {
		const fileNames = fs.readdirSync(caseStudiesDirectory);
		const allCaseStudiesData = await Promise.all(
			fileNames.map(async (fileName) => {
				// Remove .mdx from file name to get slug
				const slug = fileName.replace(/\.mdx$/, "");
				const fullPath = path.join(caseStudiesDirectory, fileName);
				const fileContents = fs.readFileSync(fullPath, "utf8");
				
				// Use gray-matter to parse the post metadata section
				const { data, content } = matter(fileContents);
				const frontmatter = data as CaseStudyFrontmatter;
				
				// Calculate reading time
				const readingTime = calculateReadingTime(content);
				
				return {
					slug,
					title: frontmatter.title,
					description: frontmatter.description,
					date: frontmatter.date,
					client: frontmatter.client,
					industry: frontmatter.industry,
					tags: frontmatter.tags || [],
					readingTime,
					content,
					image: frontmatter.image || getDefaultImage(frontmatter.industry),
				};
			})
		);
		
		// Sort case studies by date in descending order
		return allCaseStudiesData.sort((a, b) => (a.date < b.date ? 1 : -1));
	} catch (error) {
		console.error("Error getting all case studies:", error);
		return [];
	}
}

// Get a single case study by slug
export async function getCaseStudyBySlug(slug: string): Promise<CaseStudyData | undefined> {
	try {
		const fullPath = path.join(caseStudiesDirectory, `${slug}.mdx`);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		
		// Use gray-matter to parse the post metadata section
		const { data, content } = matter(fileContents);
		const frontmatter = data as CaseStudyFrontmatter;
		
		// Calculate reading time
		const readingTime = calculateReadingTime(content);
		
		return {
			slug,
			title: frontmatter.title,
			description: frontmatter.description,
			date: frontmatter.date,
			client: frontmatter.client,
			industry: frontmatter.industry,
			tags: frontmatter.tags || [],
			readingTime,
			content,
			image: frontmatter.image || getDefaultImage(frontmatter.industry),
		};
	} catch (error) {
		console.error(`Error getting case study by slug: ${slug}`, error);
		return undefined;
	}
}

// Helper function to get a default image based on industry if none is provided
function getDefaultImage(industry: string): string {
	const industryImages: Record<string, string> = {
		"Financial Services": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
		"Manufacturing": "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
		"Healthcare": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
		"Technology": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
		"Retail": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
		"Packaging": "https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
		"Beauty & Health": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
		"Government & Public Service": "https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
		"Agriculture": "https://images.unsplash.com/photo-1626093582624-e6296dbc9693?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
	};

	return industryImages[industry] || "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80";
} 