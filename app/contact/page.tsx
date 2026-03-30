import { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, ArrowRight, Send } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us | Genesis Management",
  description: "Get in touch with Genesis Management Consultancy. Reach out to discuss how we can help transform your business.",
};

const officeLocations = [
  {
    city: "London",
    address: "25 Finsbury Square, London EC2A 1DX, United Kingdom",
    phone: "+44 20 7123 4567",
    email: "london@genesismanagement.com",
    hours: "Monday - Friday: 9am - 6pm",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    city: "New York",
    address: "350 Fifth Avenue, New York, NY 10118, United States",
    phone: "+1 212 555 6789",
    email: "newyork@genesismanagement.com",
    hours: "Monday - Friday: 8am - 5pm",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    city: "Harare",
    address: "123 Borrowdale Road, Highlands, Harare, Zimbabwe",
    phone: "+263 77 123 4567",
    email: "info@genesismanagement.co.zw",
    hours: "Monday - Friday: 8:30am - 5:30pm",
    image: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

export default function ContactPage() {
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
              Contact <span className="text-genesis-gold">Us</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-200 mb-6 md:mb-8 font-montserrat leading-relaxed max-w-2xl">
              Ready to discuss how Genesis Management can help transform your business? We'd love to hear from you.
            </p>
            <div className="w-16 md:w-24 h-1 bg-genesis-gold mb-6 md:mb-8"></div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 md:py-24 relative">
        <div 
          className="absolute -z-0 top-0 right-0 w-64 md:w-96 h-64 md:h-96 rounded-full border border-genesis-gold/10 animate-rotate-slow opacity-30"
          style={{ right: "-4rem", top: "-4rem" }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Form */}
            <div>
              <div className="mb-8">
                <div className="inline-block px-4 py-1.5 bg-genesis-gold/10 text-genesis-navy text-sm font-medium rounded-full mb-6">
                  Get in Touch
                </div>
                <h2 className="text-3xl md:text-4xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
                  Send us a message
                </h2>
                <p className="text-zinc-600 font-montserrat text-lg">
                  Fill out the form below and one of our consultants will get back to you within 24 hours.
                </p>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-genesis-navy">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 rounded-sm border border-zinc-300 focus:border-genesis-navy focus:ring-1 focus:ring-genesis-navy/40 transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-genesis-navy">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 rounded-sm border border-zinc-300 focus:border-genesis-navy focus:ring-1 focus:ring-genesis-navy/40 transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-genesis-navy">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-sm border border-zinc-300 focus:border-genesis-navy focus:ring-1 focus:ring-genesis-navy/40 transition-colors"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-medium text-genesis-navy">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-sm border border-zinc-300 focus:border-genesis-navy focus:ring-1 focus:ring-genesis-navy/40 transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-genesis-navy">
                    Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-sm border border-zinc-300 focus:border-genesis-navy focus:ring-1 focus:ring-genesis-navy/40 transition-colors"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-genesis-navy">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-sm border border-zinc-300 focus:border-genesis-navy focus:ring-1 focus:ring-genesis-navy/40 transition-colors"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="inline-flex items-center text-sm font-medium bg-genesis-navy hover:bg-genesis-navy/90 text-white px-6 py-3 rounded-sm transition-colors shadow-subtle"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="relative">
              <div className="bg-zinc-50 p-8 rounded-sm border border-zinc-200/80 shadow-subtle">
                <h3 className="text-2xl font-medium mb-6 font-playfair text-genesis-navy">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-genesis-gold/10 p-3 rounded-full mr-5">
                      <Mail className="h-5 w-5 text-genesis-gold flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-genesis-navy mb-1">
                        Email Us
                      </h4>
                      <p className="text-zinc-600 font-montserrat">
                        <a 
                          href="mailto:info@genesismanagement.co.zw" 
                          className="hover:text-genesis-gold transition-colors"
                        >
                          info@genesismanagement.co.zw
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-genesis-gold/10 p-3 rounded-full mr-5">
                      <Phone className="h-5 w-5 text-genesis-gold flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-genesis-navy mb-1">
                        Call Us
                      </h4>
                      <p className="text-zinc-600 font-montserrat">
                        <a 
                          href="tel:+26377123456" 
                          className="hover:text-genesis-gold transition-colors"
                        >
                          +263 77 123 4567
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-genesis-gold/10 p-3 rounded-full mr-5">
                      <Clock className="h-5 w-5 text-genesis-gold flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-genesis-navy mb-1">
                        Business Hours
                      </h4>
                      <p className="text-zinc-600 font-montserrat">
                        Monday - Friday: 9am - 6pm (Local Time)
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 border-t border-zinc-200 pt-6">
                  <h3 className="text-lg font-medium mb-4 font-playfair text-genesis-navy">
                    Connect With Us
                  </h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com" 
                      className="bg-genesis-navy p-3 rounded-full text-white hover:bg-genesis-gold transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a 
                      href="https://twitter.com" 
                      className="bg-genesis-navy p-3 rounded-full text-white hover:bg-genesis-gold transition-colors"
                      aria-label="Twitter"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div 
                className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-genesis-gold/10 rounded-sm border border-genesis-gold/20"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Office Locations */}
      <section className="py-16 md:py-24 bg-zinc-50 relative overflow-hidden">
        <div 
          className="absolute -z-0 bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 rounded-full border border-genesis-gold/10 animate-rotate-slow opacity-30"
          style={{ left: "-4rem", bottom: "-4rem" }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block px-4 py-1.5 bg-genesis-gold/10 text-genesis-navy text-sm font-medium rounded-full mb-6">
              Our Offices
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
              Visit our locations
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto font-montserrat">
              With offices in key global financial centers, we are well-positioned to serve clients around the world.
            </p>
            <div className="w-24 h-1 bg-genesis-gold/40 mx-auto mt-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <div 
                key={index} 
                className="bg-white rounded-sm border border-zinc-200/80 overflow-hidden hover:shadow-premium transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={office.image} 
                    alt={`${office.city} Office`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-medium text-white font-playfair">{office.city}</h3>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-genesis-gold mr-3 mt-1 flex-shrink-0" />
                    <p className="text-zinc-600 font-montserrat text-sm">
                      {office.address}
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-genesis-gold mr-3 mt-1 flex-shrink-0" />
                    <p className="text-zinc-600 font-montserrat text-sm">
                      <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover:text-genesis-gold transition-colors">
                        {office.phone}
                      </a>
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-genesis-gold mr-3 mt-1 flex-shrink-0" />
                    <p className="text-zinc-600 font-montserrat text-sm">
                      <a href={`mailto:${office.email}`} className="hover:text-genesis-gold transition-colors">
                        {office.email}
                      </a>
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-genesis-gold mr-3 mt-1 flex-shrink-0" />
                    <p className="text-zinc-600 font-montserrat text-sm">
                      {office.hours}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 relative bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <div className="inline-block px-4 py-1.5 bg-genesis-gold/10 text-genesis-navy text-sm font-medium rounded-full mb-6">
                FAQ
              </div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-zinc-600 font-montserrat">
                Have questions? Find answers to common inquiries below.
              </p>
              <div className="w-24 h-1 bg-genesis-gold/40 mx-auto mt-8"></div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-zinc-50 p-6 rounded-sm border border-zinc-200/80">
                <h3 className="text-lg font-medium mb-3 font-playfair text-genesis-navy">
                  What industries do you specialize in?
                </h3>
                <p className="text-zinc-600 font-montserrat">
                  Genesis Management has expertise across multiple industries including financial services, healthcare, technology, manufacturing, and retail. Our consultants bring both industry-specific knowledge and cross-sector insights to deliver tailored solutions.
                </p>
              </div>
              
              <div className="bg-zinc-50 p-6 rounded-sm border border-zinc-200/80">
                <h3 className="text-lg font-medium mb-3 font-playfair text-genesis-navy">
                  How long does a typical consulting engagement last?
                </h3>
                <p className="text-zinc-600 font-montserrat">
                  The duration varies based on the scope and complexity of the project. Strategic assessments may take 4-6 weeks, while full transformations can span several months. We work with you to define clear milestones and timeframes at the outset.
                </p>
              </div>
              
              <div className="bg-zinc-50 p-6 rounded-sm border border-zinc-200/80">
                <h3 className="text-lg font-medium mb-3 font-playfair text-genesis-navy">
                  Do you work with startups or only established businesses?
                </h3>
                <p className="text-zinc-600 font-montserrat">
                  We work with organizations at all stages of development. For startups, we offer specialized services designed to establish strong foundations and accelerate growth. Our flexible engagement models can be tailored to match your organization's size and needs.
                </p>
              </div>
              
              <div className="bg-zinc-50 p-6 rounded-sm border border-zinc-200/80">
                <h3 className="text-lg font-medium mb-3 font-playfair text-genesis-navy">
                  How do you measure the success of your consulting projects?
                </h3>
                <p className="text-zinc-600 font-montserrat">
                  We establish clear, measurable KPIs at the beginning of each engagement, aligned with your business objectives. These may include financial metrics, operational improvements, customer satisfaction scores, or other relevant indicators. We provide regular reporting on progress throughout the project.
                </p>
              </div>
            </div>
            
            <div className="mt-10 md:mt-12 text-center">
              <p className="text-zinc-600 font-montserrat mb-6">
                Have more questions? Reach out to our team directly.
              </p>
              <Link 
                href="mailto:info@genesismanagement.co.zw" 
                className="inline-flex items-center text-sm font-medium bg-genesis-navy hover:bg-genesis-navy/90 text-white px-6 py-3 rounded-sm transition-colors"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="relative h-64 sm:h-96 w-full bg-zinc-100">
        <div className="absolute inset-0 bg-zinc-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.247881953555!2d31.067227915406325!3d-17.789639587842177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4f59f213ebf%3A0x7a4247b74a134ff5!2sBorrowdale%20Rd%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1717347551073!5m2!1sen!2sus"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Genesis Management Harare Office Location"
            className="grayscale contrast-125 opacity-90"
          ></iframe>
        </div>
        <div className="absolute top-4 left-4 bg-white p-4 shadow-premium z-10 rounded-sm">
          <h3 className="text-genesis-navy font-playfair font-medium text-lg">Genesis Management</h3>
          <p className="text-zinc-600 font-montserrat text-sm">Global Headquarters</p>
        </div>
      </section>
    </div>
  );
} 