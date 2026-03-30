import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import { compileMDX } from "next-mdx-remote/rsc";

// Define the frontmatter type
export interface InsightFrontmatter {
	title: string;
	description: string;
	date: string;
	author: string;
	category: string;
	tags: string[];
	image?: string;
	premium?: boolean;
	published: boolean;
}

// Define the insight post type
export type Insight = {
	slug: string;
	title: string;
	description: string;
	date: string;
	content: string;
	readingTime: string;
	category?: string;
	image?: string;
};

// Path to the insights
const insightsDirectory = path.join(process.cwd(), "content/insights");

// Get all insights
export async function getAllInsights(): Promise<Insight[]> {
	const fileNames = fs.readdirSync(insightsDirectory);
	const allInsightsData = await Promise.all(
		fileNames.map(async (fileName) => {
			const slug = fileName.replace(/\.mdx$/, "");
			const fullPath = path.join(insightsDirectory, fileName);
			const fileContents = fs.readFileSync(fullPath, "utf8");
			const { data, content } = matter(fileContents);

			return {
				slug,
				title: data.title,
				description: data.description,
				date: data.date,
				readingTime: data.readingTime || calculateReadingTime(content),
				category: data.category,
				image: data.image,
				content,
			};
		})
	);

	return allInsightsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Get a single insight by slug
export async function getInsightBySlug(slug: string): Promise<Insight | null> {
	try {
		const fullPath = path.join(insightsDirectory, `${slug}.mdx`);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data, content } = matter(fileContents);

		return {
			slug,
			title: data.title,
			description: data.description,
			date: data.date,
			readingTime: data.readingTime || calculateReadingTime(content),
			category: data.category,
			image: data.image,
			content,
		};
	} catch (error) {
		console.error(`Error getting insight by slug: ${slug}`, error);
		return null;
	}
}

// Helper function to add IDs to headings for the table of contents
function addIdsToHeadings(html: string): string {
	// Add IDs to h2 and h3 tags based on their text content
	return html.replace(/<(h[2-3])>(.*?)<\/h[2-3]>/g, (match, tag, content) => {
		const id = content
			.toLowerCase()
			.replace(/[^\w\s]/g, "")
			.replace(/\s+/g, "-");

		return `<${tag} id="${id}">${content}</${tag}>`;
	});
}

export function calculateReadingTime(content: string): string {
	const wordsPerMinute = 200;
	const words = content.trim().split(/\s+/).length;
	const minutes = Math.ceil(words / wordsPerMinute);
	return `${minutes} min read`;
}

export const insights = [
	{
		title: "The Future of African Markets: Opportunities and Challenges",
		description:
			"An in-depth analysis of emerging market trends across Africa, focusing on key sectors and investment opportunities.",
		date: "2024-03-15",
		readingTime: "8 min read",
		slug: "future-african-markets",
		content: `# The Future of African Markets: Opportunities and Challenges

The African continent is experiencing unprecedented economic growth and transformation. This article explores the key trends shaping the future of African markets and what they mean for investors and businesses.

## Key Trends

1. Digital Transformation
2. Sustainable Development
3. Regional Integration
4. Youth Demographics
5. Infrastructure Development

## Investment Opportunities

The continent offers numerous opportunities across various sectors:

- Technology and Innovation
- Renewable Energy
- Agriculture and Food Security
- Healthcare
- Financial Services

## Challenges and Risks

While opportunities abound, there are also significant challenges to consider:

- Political Stability
- Infrastructure Gaps
- Regulatory Environment
- Market Access
- Currency Volatility

## Conclusion

The future of African markets is bright, but success requires careful navigation of both opportunities and challenges.`,
	},
	{
		title: "Sustainable Finance: The New Paradigm in Investment",
		description:
			"Exploring how sustainable finance is reshaping investment strategies and creating new opportunities for responsible growth.",
		date: "2024-03-10",
		readingTime: "6 min read",
		slug: "sustainable-finance-paradigm",
		content: `# Sustainable Finance: The New Paradigm in Investment

Sustainable finance is no longer a niche market but a fundamental shift in how we approach investment and economic growth.

## The Evolution of Sustainable Finance

1. From Niche to Mainstream
2. Regulatory Framework
3. Market Drivers
4. Impact Measurement
5. Future Outlook

## Key Components

- ESG Integration
- Impact Investing
- Green Bonds
- Social Bonds
- Sustainability-Linked Loans

## Market Impact

The sustainable finance market is experiencing exponential growth:

- Market Size
- Investor Demand
- Corporate Adoption
- Performance Metrics
- Risk Management

## Looking Ahead

The future of finance is sustainable, and early adopters stand to benefit significantly.`,
	},
	{
		title: "Digital Transformation in Financial Services",
		description:
			"A comprehensive look at how digital transformation is revolutionizing financial services and creating new business models.",
		date: "2024-03-05",
		readingTime: "7 min read",
		slug: "digital-transformation-financial-services",
		content: `# Digital Transformation in Financial Services

The financial services industry is undergoing a profound digital transformation that is reshaping how services are delivered and consumed.

## Key Drivers

1. Customer Expectations
2. Technological Innovation
3. Regulatory Changes
4. Market Competition
5. Cost Efficiency

## Impact Areas

- Customer Experience
- Operational Efficiency
- Risk Management
- Product Innovation
- Market Access

## Future Trends

The digital transformation journey continues with emerging trends:

- Artificial Intelligence
- Blockchain Technology
- Open Banking
- Digital Currencies
- RegTech Solutions

## Strategic Implications

Organizations must adapt their strategies to thrive in the digital age.`,
	},
	{
		title: "Emerging Market Investment Strategies",
		description:
			"Strategic insights into navigating emerging markets and maximizing investment potential in dynamic economic environments.",
		date: "2024-02-28",
		readingTime: "9 min read",
		slug: "emerging-market-strategies",
		content: `# Emerging Market Investment Strategies

Emerging markets present unique opportunities and challenges for investors. This article explores effective strategies for navigating these dynamic environments.

## Market Characteristics

1. Growth Potential
2. Volatility Patterns
3. Currency Dynamics
4. Political Factors
5. Regulatory Environment

## Investment Approaches

Key strategies for emerging market success:

- Diversification
- Active Management
- Local Partnerships
- Risk Mitigation
- Long-term Focus

## Sector Opportunities

Promising sectors in emerging markets:

- Technology
- Healthcare
- Consumer Goods
- Infrastructure
- Financial Services

## Risk Management

Essential considerations for managing risks in emerging markets.`,
	},
	{
		title: "The Role of Technology in Modern Portfolio Management",
		description:
			"Examining how technology is revolutionizing portfolio management and investment decision-making processes.",
		date: "2024-02-20",
		readingTime: "5 min read",
		slug: "technology-portfolio-management",
		content: `# The Role of Technology in Modern Portfolio Management

Technology is transforming how portfolios are managed and investment decisions are made in the modern financial landscape.

## Technological Innovations

1. Robo-Advisors
2. AI and Machine Learning
3. Big Data Analytics
4. Cloud Computing
5. Blockchain

## Impact on Portfolio Management

- Automated Trading
- Risk Assessment
- Performance Analytics
- Client Communication
- Compliance Monitoring

## Future Developments

Emerging technologies shaping the future:

- Quantum Computing
- Predictive Analytics
- Natural Language Processing
- Smart Contracts
- Digital Assets

## Implementation Strategies

Best practices for integrating technology into portfolio management.`,
	},
	{
		title: "Global Economic Trends: A 2024 Outlook",
		description:
			"An analysis of key economic trends and their potential impact on global markets and investment strategies.",
		date: "2024-02-15",
		readingTime: "8 min read",
		slug: "global-economic-trends-2024",
		content: `# Global Economic Trends: A 2024 Outlook

As we navigate through 2024, several key economic trends are shaping the global financial landscape.

## Major Trends

1. Inflation Dynamics
2. Interest Rate Environment
3. Geopolitical Shifts
4. Supply Chain Evolution
5. Labor Market Changes

## Market Implications

Impact on various asset classes:

- Equities
- Fixed Income
- Commodities
- Real Estate
- Digital Assets

## Regional Perspectives

Key developments across major regions:

- North America
- Europe
- Asia-Pacific
- Latin America
- Africa

## Strategic Considerations

How to position portfolios in response to these trends.`,
	},
	{
		title: "The Rise of Impact Investing in Africa",
		description:
			"Exploring how impact investing is driving sustainable development and creating positive social change across Africa.",
		date: "2024-02-10",
		readingTime: "7 min read",
		slug: "impact-investing-africa",
		content: `# The Rise of Impact Investing in Africa

Impact investing is gaining momentum across Africa, offering a unique opportunity to generate both financial returns and positive social impact.

## Market Overview

1. Growth Trajectory
2. Key Players
3. Investment Focus
4. Impact Measurement
5. Success Stories

## Investment Areas

Prominent sectors for impact investing:

- Renewable Energy
- Healthcare
- Education
- Agriculture
- Financial Inclusion

## Challenges and Solutions

Addressing key challenges in impact investing:

- Measurement Standards
- Risk Management
- Market Liquidity
- Regulatory Framework
- Exit Strategies

## Future Outlook

The potential for impact investing in Africa's development journey.`,
	},
	{
		title: "Innovation in African Financial Technology",
		description:
			"Examining the rapid growth of fintech innovation across Africa and its implications for financial inclusion.",
		date: "2024-02-05",
		readingTime: "6 min read",
		slug: "african-fintech-innovation",
		content: `# Innovation in African Financial Technology

Africa is at the forefront of fintech innovation, revolutionizing how financial services are delivered and accessed.

## Key Innovations

1. Mobile Money
2. Digital Banking
3. Blockchain Solutions
4. InsurTech
5. RegTech

## Market Impact

Transforming financial services:

- Financial Inclusion
- Cost Reduction
- Service Delivery
- Customer Experience
- Market Access

## Regional Focus

Fintech developments across Africa:

- East Africa
- West Africa
- Southern Africa
- North Africa
- Central Africa

## Future Prospects

The evolving landscape of African fintech innovation.`,
	},
	{
		title: "Sustainable Development Goals and Investment Opportunities",
		description:
			"Analyzing how the UN Sustainable Development Goals are creating new investment opportunities in emerging markets.",
		date: "2024-01-30",
		readingTime: "8 min read",
		slug: "sdg-investment-opportunities",
		content: `# Sustainable Development Goals and Investment Opportunities

The UN SDGs are creating a framework for sustainable investment that aligns financial returns with global development priorities.

## SDG Alignment

1. Investment Framework
2. Impact Measurement
3. Market Opportunities
4. Risk Assessment
5. Performance Tracking

## Key Areas

Investment opportunities aligned with SDGs:

- Clean Energy
- Healthcare
- Education
- Infrastructure
- Sustainable Agriculture

## Implementation Strategies

Approaches to SDG-aligned investing:

- Portfolio Construction
- Impact Measurement
- Risk Management
- Reporting Standards
- Stakeholder Engagement

## Future Development

The role of SDG investing in global development.`,
	},
];
