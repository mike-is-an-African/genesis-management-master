import { ReactNode } from "react";

interface FrameworkCardProps {
  number: string;
  priority: "high" | "critical";
  title: string;
  timeline: string;
  children: ReactNode;
}

export function FrameworkCard({
  number,
  priority,
  title,
  timeline,
  children,
}: FrameworkCardProps) {
  return (
    <div className="relative bg-white border border-zinc-200 rounded-sm p-8 my-4 shadow-subtle overflow-hidden">
      {/* Large background number */}
      <span className="absolute top-3 right-4 text-7xl font-black text-zinc-100 leading-none select-none font-playfair">
        {number}
      </span>

      {/* Priority badge */}
      <span
        className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 font-montserrat ${
          priority === "critical"
            ? "bg-genesis-navy text-white"
            : "bg-genesis-gold text-genesis-navy"
        }`}
      >
        {priority === "critical" ? "Critical" : "High Priority"}
      </span>

      <h4 className="text-lg font-semibold text-genesis-navy mb-3 font-playfair relative z-10">
        {title}
      </h4>

      <div className="text-sm text-zinc-600 leading-relaxed mb-4 font-montserrat relative z-10">
        {children}
      </div>

      <p className="text-xs text-zinc-400 font-medium font-montserrat">
        Timeline: {timeline}
      </p>
    </div>
  );
}
