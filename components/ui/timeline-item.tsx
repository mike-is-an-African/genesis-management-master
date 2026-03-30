import { ReactNode } from "react";

interface TimelineItemProps {
  year: string;
  title: string;
  children: ReactNode;
}

export function TimelineItem({ year, title, children }: TimelineItemProps) {
  return (
    <div className="flex gap-6 bg-white border border-zinc-200 rounded-sm p-6 mb-3 shadow-subtle">
      <div className="flex-shrink-0">
        <span className="inline-flex items-center justify-center bg-genesis-navy text-white text-sm font-bold px-3 py-2 font-montserrat min-w-[60px] text-center">
          {year}
        </span>
      </div>
      <div>
        <h5 className="text-base font-semibold text-genesis-navy mb-2 font-playfair">
          {title}
        </h5>
        <p className="text-sm text-zinc-600 leading-relaxed font-montserrat">
          {children}
        </p>
      </div>
    </div>
  );
}
