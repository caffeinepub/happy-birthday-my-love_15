const memories = [
  {
    image: "/assets/generated/memory-picnic.dim_400x400.jpg",
    caption: "Our magical picnic in the meadow",
    rotation: "-3deg",
    date: "Summer 2023",
  },
  {
    image: "/assets/generated/memory-beach.dim_400x400.jpg",
    caption: "Golden hour by the sea",
    rotation: "2.5deg",
    date: "Spring 2024",
  },
  {
    image: "/assets/generated/memory-coffee.dim_400x400.jpg",
    caption: "Our favourite Sunday coffee ritual",
    rotation: "-1.5deg",
    date: "Every weekend",
  },
  {
    image: "/assets/generated/memory-stars.dim_400x400.jpg",
    caption: "Counting stars together",
    rotation: "3deg",
    date: "Last summer",
  },
];

export default function MemoriesSection() {
  return (
    <section
      id="memories"
      className="py-20 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.96 0.02 75) 0%, oklch(0.93 0.03 60) 50%, oklch(0.96 0.02 75) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-script text-gold text-2xl md:text-3xl mb-2">
            captured moments
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-maroon tracking-wide uppercase">
            Our Adventure Together
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold/50" />
            <span className="text-gold text-lg">❖</span>
            <span className="h-px w-12 bg-gold/50" />
          </div>
          <p className="font-body text-xl text-brown-soft mt-4 max-w-xl mx-auto leading-relaxed">
            Every moment with you is a treasure I hold close to my heart.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {memories.map((memory, i) => (
            <div
              key={memory.caption}
              className="polaroid-card cursor-pointer relative"
              style={{ transform: `rotate(${memory.rotation})` }}
              data-ocid={`memories.item.${i + 1}`}
            >
              <div
                className="bg-white p-3 pb-8 rounded-sm"
                style={{
                  boxShadow:
                    "0 4px 12px oklch(0.20 0.03 30 / 0.15), 0 1px 3px oklch(0.20 0.03 30 / 0.1)",
                }}
              >
                <div className="aspect-square overflow-hidden bg-muted mb-3">
                  <img
                    src={memory.image}
                    alt={memory.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center px-1">
                  <p className="font-script text-maroon text-sm md:text-base leading-tight">
                    {memory.caption}
                  </p>
                  <p className="font-body text-xs text-brown-soft mt-1 italic">
                    {memory.date}
                  </p>
                  <div className="mt-2 text-red-400 text-base">❤</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
