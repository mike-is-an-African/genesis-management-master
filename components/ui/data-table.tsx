interface DataTableProps {
  columns: string[];
  rows: (string | number)[][];
  caption?: string;
  source?: string;
}

export function DataTable({ columns, rows, caption, source }: DataTableProps) {
  return (
    <div className="my-8 overflow-x-auto">
      {caption && (
        <p className="text-xs font-semibold uppercase tracking-widest text-genesis-gold mb-3 font-montserrat">
          {caption}
        </p>
      )}
      <table className="w-full border-collapse text-sm font-montserrat">
        <thead>
          <tr className="bg-genesis-navy text-white">
            {columns.map((col, i) => (
              <th
                key={i}
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={ri % 2 === 0 ? "bg-white" : "bg-zinc-50"}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-4 py-3 text-zinc-600 border-b border-zinc-100 leading-relaxed ${
                    ci === 0 ? "font-medium text-genesis-navy" : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {source && (
        <p className="text-xs text-zinc-400 italic mt-2 font-montserrat">
          Source: {source}
        </p>
      )}
    </div>
  );
}
