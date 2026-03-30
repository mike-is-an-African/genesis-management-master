export default function Partners() {
  return (
    <section className="py-16 bg-white dark:bg-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h3 className="text-xl font-medium mb-4">Trusted by industry leaders</h3>
          <div className="premium-divider max-w-xs mx-auto mb-8"></div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["Google", "Microsoft", "Amazon", "IBM", "Oracle"].map((partner, index) => (
              <div key={index} className="text-zinc-400 dark:text-zinc-500 font-medium text-xl">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

