import React from 'react';
import { cn } from '@/lib/utils';

export default function StatsSection() {
  return (
    <section className="py-20 bg-genesis-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light"></div>
      <div className="absolute -right-64 bottom-0 w-[500px] h-[500px] rounded-full border border-genesis-gold/10 animate-rotate-slow opacity-20"></div>
      <div className="absolute -left-80 top-20 w-[600px] h-[600px] rounded-full border border-genesis-gold/10 animate-rotate-slow opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 text-white">
          <StatItem 
            value="25+" 
            label="Years of Experience" 
            description="Delivering excellence in management consulting since 1999"
          />
          <StatItem 
            value="1000+" 
            label="Clients Served" 
            description="From startups to Fortune 500 companies across industries"
            className="md:border-l md:border-white/10"
          />
          <StatItem 
            value="200+" 
            label="Projects Completed" 
            description="Successfully delivering transformative solutions worldwide"
            className="md:border-l md:border-white/10"
          />
          <StatItem 
            value="95%" 
            label="Client Retention Rate" 
            description="Building lasting partnerships based on trust and results"
            className="md:border-l md:border-white/10"
          />
        </div>
      </div>
    </section>
  );
}

interface StatItemProps {
  value: string;
  label: string;
  description: string;
  className?: string;
}

function StatItem({ value, label, description, className }: StatItemProps) {
  return (
    <div className={cn("flex flex-col items-center text-center px-4 md:px-6", className)}>
      <div className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-genesis-gold">
        {value}
      </div>
      <div className="text-lg md:text-xl font-medium mb-3 font-montserrat tracking-wide">
        {label}
      </div>
      <p className="text-sm text-white/70 max-w-xs font-montserrat">
        {description}
      </p>
    </div>
  );
} 