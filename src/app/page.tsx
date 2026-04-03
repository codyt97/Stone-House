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

const projects = [
  {
    title: "Modern Kitchen",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Luxury Bath",
    image:
      "https://images.unsplash.com/photo-1600566752227-8f3baf8a4d6b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Contemporary Living",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Timeless Elegance",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <header className="absolute left-0 top-0 z-20 w-full">
        <div className="container-main flex items-center justify-between border-b border-white/10 py-6">
          <div>
            <div className="text-2xl font-semibold tracking-[0.2em] text-white">
              STONE HOUSE
            </div>
            <div className="mt-1 text-xs uppercase tracking-[0.35em] text-[#c6a46a]">
              Marble & Granite
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] text-white/85 md:flex">
            <a href="#materials">Materials</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#visualizers">Visualizers</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="gold-btn hidden md:inline-flex">
            Get a Quote
          </a>
        </div>
      </header>

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

      <section id="materials" className="light-section py-20 md:py-28">
        <div className="container-main">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="section-title text-[#171717]">
                Explore Our Materials
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-base leading-7 text-black/70">
                Hand-selected natural and engineered stones. Endless beauty.
                Lasting performance.
              </p>
              <a
                href="#contact"
                className="mt-3 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-[#9d7b43]"
              >
                View All Materials →
              </a>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {materials.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden bg-black"
              >
                <div
                  className="h-[360px] bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                  <h3 className="text-3xl font-medium tracking-[-0.03em]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/75">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="visualizers" className="dark-section py-20 md:py-28">
        <div className="container-main grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="section-title">Design Your Space</h2>
            <p className="section-subtitle mt-6 max-w-xl">
              Bring your vision to life with interactive tools to preview
              finishes, edges, and styles before installation.
            </p>

            <a href="#contact" className="gold-btn mt-8">
              Launch Kitchen Visualizer
            </a>

            <div className="mt-10 flex flex-wrap gap-6 text-sm uppercase tracking-[0.18em] text-white/75">
              <span>Kitchen Visualizer</span>
              <span>Bath Visualizer</span>
              <span>Edge Visualizer</span>
            </div>
          </div>

          <div className="overflow-hidden rounded-sm border border-white/10 bg-[#111] p-4 shadow-2xl">
            <div className="grid min-h-[420px] grid-cols-[90px_1fr_90px] gap-4">
              <div className="flex flex-col gap-3 bg-black/70 p-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-12 border border-white/10 bg-gradient-to-br from-neutral-300 to-neutral-500"
                  />
                ))}
              </div>

              <div
                className="bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80')",
                }}
              />

              <div className="flex flex-col gap-3 bg-black/70 p-3">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-8 border border-white/10 bg-white/10"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="light-section py-12">
        <div className="container-main">
          <div className="grid gap-8 text-center md:grid-cols-3 md:text-left">
            <div className="flex items-start gap-4">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9d7b43]">
                01
              </div>
              <div>
                <h3 className="text-lg font-semibold uppercase tracking-[0.12em]">
                  Select
                </h3>
                <p className="mt-2 text-black/65">
                  Choose your perfect stone.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9d7b43]">
                02
              </div>
              <div>
                <h3 className="text-lg font-semibold uppercase tracking-[0.12em]">
                  Fabricate
                </h3>
                <p className="mt-2 text-black/65">Cut with precision.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9d7b43]">
                03
              </div>
              <div>
                <h3 className="text-lg font-semibold uppercase tracking-[0.12em]">
                  Install
                </h3>
                <p className="mt-2 text-black/65">Finished to perfection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="dark-section py-20 md:py-28">
        <div className="container-main">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="section-title">Featured Projects</h2>
            <a
              href="#contact"
              className="hidden text-sm font-semibold uppercase tracking-[0.18em] text-[#c6a46a] md:inline-block"
            >
              View All Projects →
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <div key={project.title} className="group overflow-hidden bg-black">
                <div
                  className="h-[330px] bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="border border-t-0 border-white/10 p-5">
                  <h3 className="text-xl font-medium tracking-[-0.02em]">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-6 border-t border-white/10 pt-10 text-center md:grid-cols-3 md:text-left">
            <div>
              <div className="text-4xl font-medium text-[#c6a46a]">500+</div>
              <div className="mt-2 text-sm uppercase tracking-[0.18em] text-white/70">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-4xl font-medium text-[#c6a46a]">5-Star</div>
              <div className="mt-2 text-sm uppercase tracking-[0.18em] text-white/70">
                Rated by Our Clients
              </div>
            </div>
            <div>
              <div className="text-4xl font-medium text-[#c6a46a]">Fast</div>
              <div className="mt-2 text-sm uppercase tracking-[0.18em] text-white/70">
                Turnaround
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/10 bg-black py-20"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(198,164,106,0.25),transparent_35%)]" />
        </div>

        <div className="container-main relative z-10 text-center">
          <h2 className="section-title">Ready to Elevate Your Space?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Get a free quote and expert guidance for your next marble, granite,
            or quartz project.
          </p>

          <a href="tel:2157509100" className="gold-btn mt-8">
            Get Your Free Estimate
          </a>

          <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm uppercase tracking-[0.16em] text-white/65 md:flex-row">
            <div>
              <div className="text-xl font-semibold tracking-[0.2em] text-white">
                STONE HOUSE
              </div>
              <div className="mt-1 text-xs tracking-[0.3em] text-[#c6a46a]">
                Marble & Granite
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="#materials">Materials</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#visualizers">Visualizers</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="text-center md:text-right">
              <div className="text-white">(215) 750-9100</div>
              <div className="mt-1 text-white/55">Langhorne, PA</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
