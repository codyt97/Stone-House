const materials = [
  {
    title: "Marble",
    subtitle: "Timeless elegance",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Granite",
    subtitle: "Bold. Durable. Natural.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Quartz",
    subtitle: "Modern. Low maintenance.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Quartzite",
    subtitle: "Strength meets beauty",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Materials() {
  return (
    <section id="materials" className="light-section py-20 md:py-28">
      <div className="container-main">
        <h2 className="section-title text-[#171717] mb-12">
          Explore Our Materials
        </h2>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {materials.map((item) => (
            <div key={item.title} className="group relative overflow-hidden">
              <div
                className="h-[360px] bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-medium">{item.title}</h3>
                <p className="text-sm uppercase text-white/70">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
