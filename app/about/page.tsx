import { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us | Genesis Management",
  description: "Learn about Genesis Management Consultancy, our mission, values, and the team behind our success.",
};

const values = [
  {
    title: "Excellence",
    description: "We are committed to delivering the highest quality solutions that exceed client expectations."
  },
  {
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical standards in all our engagements."
  },
  {
    title: "Innovation",
    description: "We continuously explore new ideas and approaches to create value for our clients."
  },
  {
    title: "Partnership",
    description: "We build lasting relationships based on mutual trust and shared success."
  }
];

const teamMembers = [
  {
    name: "Cleo Mutema",
    role: "Co-Founder",
    bio: "A visionary leader who recognized the gap between brilliant business ideas and essential management skills, Cleo founded Genesis Management Consultancy to bridge this divide and empower entrepreneurs to succeed.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    email: "cleo.mutema@genesismanagement.com"
  },
  {
    name: "Michael Okonkwo",
    role: "Chief Strategy Officer",
    bio: "Michael specializes in emerging markets strategy and has led transformational projects across Africa and Asia, bringing deep financial sector expertise to our clients.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    email: "michael.okonkwo@genesismanagement.com"
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Digital Transformation",
    bio: "Elena bridges technology and business strategy to help organizations thrive in the digital economy. She has spearheaded digital initiatives for Fortune 500 companies globally.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    email: "elena.rodriguez@genesismanagement.com"
  },
  {
    name: "James Chen",
    role: "Financial Advisory Lead",
    bio: "James brings deep expertise in financial restructuring and sustainable finance solutions. His work has helped clients navigate complex financial landscapes and regulatory environments.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    email: "james.chen@genesismanagement.com"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="absolute inset-0 bg-noise opacity-30"></div>
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-genesis-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-genesis-gold/10"></div>
        <div 
          className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 rounded-full border border-genesis-gold/10 animate-rotate-slow opacity-30" 
          style={{ left: "-2rem", bottom: "-2rem" }}
        ></div>
        <div 
          className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 rounded-full border border-genesis-gold/10 animate-rotate-slow opacity-30"
          style={{ right: "-4rem", top: "-4rem" }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-6 md:mb-8 font-playfair tracking-tight">
              About <span className="text-genesis-gold">Genesis</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-200 mb-6 md:mb-8 font-montserrat leading-relaxed max-w-2xl">
              A premier management consultancy dedicated to transforming organizations through strategic insight, operational excellence, and digital innovation.
            </p>
            <div className="w-16 md:w-24 h-1 bg-genesis-gold mb-6 md:mb-8"></div>
            
            {/* Founder Quote */}
            <blockquote className="border-l-4 border-genesis-gold pl-5 py-2 max-w-2xl">
              <p className="text-white/90 italic text-lg font-montserrat mb-4">
                "Witnessing a common struggle among aspiring business owners who possessed brilliant ideas but lacked the essential management skills, Genesis Management Consultancy was born."
              </p>
              <footer className="text-genesis-gold">
                <cite>Cleo Mutema, GMC co-founder</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <div className="mb-5 md:mb-6">
                <div className="inline-block px-4 py-1.5 bg-genesis-gold/10 text-genesis-navy text-sm font-medium rounded-full">
                  Our Story
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-5 md:mb-6 font-playfair tracking-tight text-genesis-navy">
                The Genesis Journey
              </h2>
              <div className="space-y-4 md:space-y-6 text-zinc-600 font-montserrat text-base md:text-lg">
                <p>
                  At Genesis Management Consultancy, we understand that the journey of transforming a groundbreaking concept into a thriving enterprise is not without its challenges. And that business leaders do not always have the solutions to business hurdles foreseen or otherwise. That's where we step in. As the expert partner and trusted advisor, armed with the expertise and insights to bridge the gaps that hold businesses back.
                </p>
                <p>
                  Our story is one of comprehensive capabilities and deep industry knowledge, enabling us to tackle the most complex issues faced by businesses and communities alike. Year after year, our client list grows, a testament to the trust and confidence placed in us by both returning and new clients.
                </p>
                <p>
                  We share a deep appreciation for the immense personal knowledge and innovative ideas that entrepreneurs bring to the table and recognize that these visionaries deserve the freedom to focus on the core of their business, where their passion and unique talents lie. That's why we take upon ourselves the responsibility to handle the essential business management tasks, allowing our clients to capitalize on their strengths and drive innovation.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] relative overflow-hidden shadow-premium rounded-sm border border-zinc-100">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Genesis Management team collaboration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-genesis-navy/5"></div>
              </div>
              <div 
                className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-genesis-gold/10 rounded-sm border border-genesis-gold/20"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 md:py-24 bg-genesis-navy/5 relative">
        <div 
          className="absolute -z-0 top-0 right-0 w-64 md:w-96 h-64 md:h-96 rounded-full border border-genesis-gold/10 animate-rotate-slow opacity-30"
          style={{ right: "-4rem", top: "-4rem" }}
        ></div>
        <div 
          className="absolute -z-0 bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 rounded-full border border-genesis-gold/10 animate-rotate-slow opacity-30"
          style={{ left: "-4rem", bottom: "-4rem" }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block px-4 py-1.5 bg-genesis-gold/10 text-genesis-navy text-sm font-medium rounded-full mb-6">
              Our Mission
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-5 md:mb-6 font-playfair tracking-tight text-genesis-navy">
              Bridging Gaps, Building Businesses
            </h2>
            <div className="w-16 md:w-24 h-1 bg-genesis-gold/40 mx-auto mt-6 md:mt-8 mb-8"></div>
            <p className="text-base md:text-lg text-zinc-600 max-w-3xl mx-auto font-montserrat">
              ...encapsulates our mission. Our efforts aim to bridge the divide between organization reality and vision, identifying and eliminating the hurdles that hinder success. By leveraging our expertise in business management, we empower businesses to flourish and make their mark in the world.
            </p>
            <p className="text-base md:text-lg text-zinc-600 max-w-3xl mx-auto font-montserrat mt-6">
              Ultimately, our success lies in the success of the businesses we serve. We measure our achievements by the tangible results our clients achieve – increased profitability, streamlined operations, and sustainable growth. We take pride in being the catalyst that propels businesses to new heights, turning their aspirations into remarkable accomplishments.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 md:py-24 relative">
        <div 
          className="absolute -z-0 top-0 right-0 w-64 md:w-96 h-64 md:h-96 rounded-full border border-genesis-gold/10 animate-rotate-slow opacity-30"
          style={{ right: "-4rem", top: "-4rem" }}
        ></div>
        <div 
          className="absolute -z-0 bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 rounded-full border border-genesis-gold/10 animate-rotate-slow opacity-30"
          style={{ left: "-4rem", bottom: "-4rem" }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block px-4 py-1.5 bg-genesis-gold/10 text-genesis-navy text-sm font-medium rounded-full mb-6">
              Our Values
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-5 md:mb-6 font-playfair tracking-tight text-genesis-navy">
              What guides us
            </h2>
            <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto font-montserrat">
              Our values are at the core of everything we do, informing our approach to client work,
              team collaboration, and community engagement.
            </p>
            <div className="w-16 md:w-24 h-1 bg-genesis-gold/40 mx-auto mt-6 md:mt-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-6 md:p-8 rounded-sm border border-zinc-200/80 hover:shadow-premium transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start">
                  <div className="bg-genesis-gold/10 p-2 md:p-3 rounded-full mr-4 md:mr-5 mt-1">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-genesis-gold flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-3 font-playfair text-genesis-navy">
                      {value.title}
                    </h3>
                    <p className="text-sm md:text-base text-zinc-600 font-montserrat">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-16 md:py-24 bg-genesis-navy/5 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <div className="mb-5 md:mb-6">
                <div className="inline-block px-4 py-1.5 bg-genesis-gold/10 text-genesis-navy text-sm font-medium rounded-full">
                  Partners for Progress
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-5 md:mb-6 font-playfair tracking-tight text-genesis-navy">
                More Than Just Consultants
              </h2>
              <div className="space-y-4 md:space-y-6 text-zinc-600 font-montserrat text-base md:text-lg">
                <p>
                  We are more than just consultants. We are partners for progress, passionate advocates for business success. Collaborating with business and community leaders for the past 17 years, we have been instrumental in addressing and overcoming their most pressing challenges.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] relative overflow-hidden shadow-premium rounded-sm border border-zinc-100">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Genesis Management partnerships"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-genesis-navy/5"></div>
              </div>
              <div 
                className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-genesis-gold/10 rounded-sm border border-genesis-gold/20"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Make Money Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="lg:order-2">
              <div className="mb-5 md:mb-6">
                <div className="inline-block px-4 py-1.5 bg-genesis-gold/10 text-genesis-navy text-sm font-medium rounded-full">
                  Our Focus
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-5 md:mb-6 font-playfair tracking-tight text-genesis-navy">
                Make Money
              </h2>
              <div className="space-y-4 md:space-y-6 text-zinc-600 font-montserrat text-base md:text-lg">
                <p>
                  This is the distilled goal for most organizations, and perhaps even yours. And it is a goal that we understand completely.
                </p>
                <p>
                  Our teams meticulously analyze your financial systems to identify and patch any inefficiencies and areas of waste, ensuring that every dollar is retained and utilized effectively. We help navigate organizations through turbulent economic times, providing strategic guidance to keep your business afloat and maintain a steady course towards improved cashflows and sustainable profitability.
                </p>
              </div>
            </div>
            
            <div className="relative lg:order-1">
              <div className="aspect-[4/3] relative overflow-hidden shadow-premium rounded-sm border border-zinc-100">
                <Image
                  src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Financial success and growth"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-genesis-navy/5"></div>
              </div>
              <div 
                className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-genesis-gold/10 rounded-sm border border-genesis-gold/20"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block px-4 py-1.5 bg-genesis-gold/10 text-genesis-navy text-sm font-medium rounded-full mb-6">
              Our Team
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-5 md:mb-6 font-playfair tracking-tight text-genesis-navy">
              Leadership
            </h2>
            <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto font-montserrat">
              Meet the experienced professionals who guide our vision and ensure we deliver exceptional value to our clients.
            </p>
            <div className="w-16 md:w-24 h-1 bg-genesis-gold/40 mx-auto mt-6 md:mt-8"></div>
          </div>
          
          <div className="space-y-12 md:space-y-16">
            {teamMembers.map((member, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="group">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 items-center">
                    <div className={cn("md:col-span-1", isEven ? "order-1" : "order-1 md:order-2")}>
                      <div className="aspect-square relative overflow-hidden rounded-sm border border-zinc-200 group-hover:shadow-premium transition-all duration-300">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="flex space-x-3 justify-end">
                            <a 
                              href={member.linkedin} 
                              className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                              aria-label={`${member.name}'s LinkedIn`}
                            >
                              <Linkedin className="h-4 w-4 text-white" />
                            </a>
                            <a 
                              href={member.twitter} 
                              className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                              aria-label={`${member.name}'s Twitter`}
                            >
                              <Twitter className="h-4 w-4 text-white" />
                            </a>
                            <a 
                              href={`mailto:${member.email}`} 
                              className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                              aria-label={`Email ${member.name}`}
                            >
                              <Mail className="h-4 w-4 text-white" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className={cn("md:col-span-3", isEven ? "order-2" : "order-2 md:order-1")}>
                      <div className={cn(
                        "border-l-4 pl-4 md:pl-6 py-1 mt-6 md:mt-0",
                        isEven ? "border-genesis-gold/60" : "border-genesis-navy/30"
                      )}>
                        <h3 className="text-xl md:text-2xl font-medium font-playfair text-genesis-navy mb-1">
                          {member.name}
                        </h3>
                        <p className="text-genesis-gold font-medium text-sm uppercase tracking-wider mb-4">
                          {member.role}
                        </p>
                      </div>
                      <p className="text-sm md:text-base text-zinc-600 font-montserrat leading-relaxed mt-4">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12 md:mt-20">
            <Link 
              href="/careers" 
              className="inline-flex items-center text-sm font-medium bg-genesis-navy hover:bg-genesis-navy/90 text-white px-6 py-3 rounded-sm transition-colors"
            >
              Join our team
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 md:py-24 bg-genesis-navy text-white relative">
        <div className="absolute inset-0 bg-noise opacity-20"></div>
        <div 
          className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 rounded-full border border-genesis-gold/10 animate-rotate-slow opacity-30"
          style={{ right: "-4rem", top: "-4rem" }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 rounded-full border border-genesis-gold/10 animate-rotate-slow opacity-30"
          style={{ left: "-4rem", bottom: "-4rem" }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-6 md:mb-8 font-playfair tracking-tight">
              Ready to transform your business?
            </h2>
            <div className="w-16 md:w-24 h-1 bg-genesis-gold mx-auto mb-6 md:mb-8"></div>
            <p className="text-base md:text-lg text-zinc-200 mb-4 md:mb-6 font-montserrat">
              So, if you are ready to experience the expertise of Genesis Management Consultancy firsthand, we invite you to reach out to us today. Let us discuss your organization's unique challenges and aspirations.
            </p>
            <p className="text-base md:text-lg text-zinc-200 mb-8 md:mb-10 font-montserrat">
              Share your vision with us, and together, we will make it happen.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center text-sm font-medium bg-genesis-gold hover:bg-genesis-gold/90 text-genesis-navy px-6 py-3 sm:px-8 sm:py-4 rounded-sm transition-colors shadow-subtle"
            >
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 