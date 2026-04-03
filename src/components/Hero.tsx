export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      <div className="container-main relative z-10 flex min-h-screen items-center pt-28">
        <div className="max-w-3xl">
          <h1 className="max-w-2xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl">
            Crafted in Stone.
            <br />
            <span className="text-[#c6a46a]">Designed for Life.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/75 md:text-xl">
            Custom marble, granite, and quartz countertops. Precision
            fabrication. Flawless installation.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="gold-btn">
              Get a Quote
            </a>
            <a href="#materials" className="outline-btn">
              Explore Materials
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
