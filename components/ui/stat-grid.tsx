interface Stat {
  value: string;
  label: string;
  description?: string;
}

interface StatGridProps {
  stats: Stat[];
}

export function StatGrid({ stats }: StatGridProps) {
  return (
    <div
      className={`my-8 grid gap-4 ${
        stats.length === 2
          ? "grid-cols-1 sm:grid-cols-2"
          : stats.length === 3
          ? "grid-cols-1 sm:grid-cols-3"
          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      }`}
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-white border border-zinc-200 p-6 rounded-sm shadow-subtle"
        >
          <div className="text-3xl font-bold text-genesis-navy font-playfair tracking-tight mb-1">
            {stat.value}
          </div>
          <div className="text-sm font-semibold text-genesis-gold uppercase tracking-wide mb-2 font-montserrat">
            {stat.label}
          </div>
          {stat.description && (
            <p className="text-xs text-zinc-500 leading-relaxed font-montserrat">
              {stat.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
