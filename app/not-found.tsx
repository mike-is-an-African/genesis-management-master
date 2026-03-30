import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-30 z-0"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full border border-genesis-gold/10 animate-rotate-slow opacity-30"></div>
      <div className="absolute bottom-20 -left-20 w-64 h-64 rounded-full border border-genesis-gold/20 animate-rotate-slow opacity-30"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10 max-w-3xl text-center">
        <div className="inline-block px-4 py-1.5 bg-genesis-gold/10 text-genesis-navy text-sm font-medium rounded-full mb-6">
          404 Error
        </div>
        
        <h1 className="text-5xl md:text-6xl font-medium mb-6 font-playfair tracking-tight text-genesis-navy">
          Page Not Found
        </h1>
        
        <div className="mb-8 h-1 w-24 bg-genesis-gold mx-auto"></div>
        
        <p className="text-lg text-zinc-600 mb-10 font-montserrat">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button asChild variant="outline" className="group border-genesis-navy text-genesis-navy hover:bg-genesis-navy/5">
            <Link href="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Return Home
            </Link>
          </Button>
          
          <Button asChild className="bg-genesis-gold text-genesis-navy hover:bg-genesis-gold/90">
            <Link href="/insights">
              Explore Our Insights
            </Link>
          </Button>
        </div>
        
        <div className="mt-16 border-t border-zinc-200 pt-6">
          <p className="text-sm text-zinc-500 font-montserrat">
            Need assistance? <Link href="/contact" className="text-genesis-gold hover:underline">Contact our team</Link>
          </p>
        </div>
      </div>
    </div>
  );
} 