export default function Navbar() {
  return (
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
  );
}
