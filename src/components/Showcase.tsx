import { useEffect, useRef, useState } from "react";
import { FULLBLEED_IMG, GLASS_CARDS, SERVICE_CARDS, WORK_SHOTS } from "../data";

/* ---------- Section 2: stacked headline + floating cards (like "Homes. Loans. Agents. Tours.") ---------- */
export function Stacked() {
  const floats = ["floaty", "floaty-2", "floaty-3"];
  const tilts = ["md:rotate-[1.5deg]", "md:rotate-[-1.2deg]", "md:rotate-[1deg]", "md:rotate-[-1.5deg]", "md:rotate-[1.2deg]", "md:rotate-[-1deg]"];
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = SERVICE_CARDS.length;

  const onScroll = () => {
    const el = trackRef.current;
    if (!el || el.clientWidth === 0) return;
    const max = el.scrollWidth - el.clientWidth;
    if (max <= 0) return;
    setActive(Math.round((el.scrollLeft / max) * (count - 1)));
  };

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const child = el.children[i] as HTMLElement | undefined;
    if (child) child.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setActive(i);
  };

  return (
    <section id="services" className="relative overflow-hidden bg-ink py-12 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-cream/50">
          What we do
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <h2 className="reveal max-w-xl font-display text-3xl uppercase leading-[1.05] text-cream md:text-5xl md:leading-[1.02]">
            Brick, stone &amp; concrete — done right.
          </h2>
          <p className="reveal max-w-sm text-base leading-relaxed text-cream/55">
            Brick repair, stone and paver work, chimneys, concrete flatwork, retaining
            walls, and restoration for homeowners in Cranford and across Union County —
            straight talk, firm prices, and work that lasts.
          </p>
        </div>

        <div
          ref={trackRef}
          onScroll={onScroll}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mt-14 md:grid md:snap-none md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-4"
        >
          {SERVICE_CARDS.map((c, i) => (
            <article
              key={c.title}
              className={`reveal ${floats[i % 3]} ${tilts[i % 6]} min-w-full snap-center overflow-hidden rounded-2xl bg-cream md:min-w-0 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-transform duration-500 md:hover:rotate-0`}
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  draggable={false}
                />
                <span className="absolute left-3 top-3 rounded-full bg-forest px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cream">
                  {c.from}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold tracking-[0.2em] text-charcoal/40">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-xl uppercase text-charcoal">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{c.desc}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-forest transition-all hover:gap-2"
                >
                  Ask about this service <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile pagination — numbered, tap to jump (one card at a time) */}
        <div className="mt-2 flex items-center justify-center gap-2 md:hidden">
          {SERVICE_CARDS.map((c, i) => (
            <button
              key={c.title}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to service ${i + 1}: ${c.title}`}
              aria-current={active === i ? "true" : undefined}
              className={`flex h-10 w-10 items-center justify-center rounded-full font-display text-sm transition-colors ${
                active === i
                  ? "bg-forest text-cream"
                  : "bg-cream/15 text-cream/70 hover:bg-cream/25"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 4: full-bleed image + floating glass cards (like the sunset cabin) ---------- */
export function FullBleed() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip parallax on mobile + reduced-motion: bg stays static, content fully visible
    if (
      window.matchMedia("(max-width: 767px)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!bgRef.current) return;
        const r = bgRef.current.getBoundingClientRect();
        const progress = (window.innerHeight - r.top) / (window.innerHeight + r.height);
        bgRef.current.style.transform = `translateY(${(progress - 0.5) * -60}px) scale(1.12)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 will-change-transform" style={{ transform: "scale(1.12)" }}>
        <img
          src={FULLBLEED_IMG}
          alt="Brick home exterior — masonry work by GCS Worldwide LLC"
          loading="lazy"
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12 md:px-12 md:py-36">
        <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-cream/85">
          Why us
        </p>
        <h2 className="reveal mt-3 max-w-2xl font-display text-2xl uppercase leading-[1.05] text-cream md:text-6xl md:leading-[1.02]">
          Masonry first. Pride in every joint.
        </h2>

        <div data-stagger className="mt-8 grid grid-cols-1 gap-3 md:mt-16 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {GLASS_CARDS.map((c, i) => (
            <div
              key={c.title}
              className={`glass reveal rounded-2xl p-5 md:p-6 ${
                i % 2 === 0 ? "floaty" : "floaty-2"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <h3 className="font-display text-base uppercase text-cream md:text-lg">{c.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-cream/80 md:text-[13px]">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 5: recent work — REAL job photos ---------- */
export function Work() {
  return (
    <section id="work" className="bg-cream py-12 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-forest">
          The work
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <h2 className="reveal font-display text-2xl uppercase leading-[1.05] text-charcoal md:text-6xl md:leading-[1.02]">
            The craft,
            <br />
            up close.
          </h2>
          <p className="reveal max-w-md text-base text-charcoal/65">
            The materials and details behind our work — brick, stone, block, and concrete, done the way it should be. Every job starts with a free on-site estimate.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-5 md:mt-12 md:grid md:grid-cols-3 lg:grid-cols-4">
          {WORK_SHOTS.map((s, i) => (
            <figure
              key={s.img + i}
              className="reveal group relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-md md:aspect-[4/3]"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 pt-10">
                <p className="font-display text-base uppercase leading-tight text-cream md:text-lg">
                  {s.title}
                </p>
                <p className="mt-0.5 text-xs text-cream/75">{s.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
