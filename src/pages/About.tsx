import { Link } from "react-router-dom";
import { BUSINESS, GLASS_CARDS } from "../data";
import { CtaBand, Faq, PageHero, RouteFX } from "../components/PageBits";
import { CountUp } from "../components/MotionBits";

const VALUES = [
  {
    title: "Masonry first",
    desc: "Brick, stone, and block are the trade. Concrete flatwork supports the masonry work — it doesn't replace it, and we don't pretend otherwise.",
  },
  {
    title: "Priced in writing",
    desc: "Free on-site estimates with a firm written number before we start. The price we quote is the price you pay.",
  },
  {
    title: "Built to outlast",
    desc: "Proper bases, matched mortar, drainage behind every wall — the unglamorous details that decide whether work lasts five years or fifty.",
  },
  {
    title: "Straight answers",
    desc: "If a repair will hold, we say so. If it needs a rebuild, we show you why — with photos of your own wall or chimney, not a sales pitch.",
  },
];

const PROCESS = [
  { step: "01", text: "Call or send the form. Tell us about the wall, chimney, patio, or driveway you need looked at." },
  { step: "02", text: "Free on-site estimate. We look at the actual conditions and give you a firm written price." },
  { step: "03", text: "The work gets done — clean site, straight communication the whole way through." },
  { step: "04", text: "Final walkthrough together. We don't call it done until you've walked the finished work with us." },
];

export default function About() {
  return (
    <>
      <RouteFX
        title="About GCS Worldwide LLC | Masonry Contractor — Cranford, NJ"
        description="GCS Worldwide LLC is a masonry contractor based in Cranford, NJ — brick, stone, and block work, with concrete flatwork on the side. Serving Union County. Free estimates."
      />
      <PageHero
        eyebrow="About us"
        title={
          <>
            Masonry first.
            <br />
            Not a sideline.
          </>
        }
        sub="GCS Worldwide LLC is a masonry contractor based in Cranford, New Jersey. Brick, stone, and block work is the trade — concrete is the side work, never the other way around."
        img="/img/about.jpg"
      />

      {/* story */}
      <section className="bg-cream py-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-forest">
              Our story
            </p>
            <h2 className="reveal mt-3 font-display text-2xl uppercase leading-[1.05] text-charcoal md:text-5xl">
              Brick. Stone.
              <br />
              Block. Done right.
            </h2>
          </div>
          <div className="reveal space-y-5 text-base leading-relaxed text-charcoal/70 md:text-lg">
            <p>
              GCS Worldwide LLC handles the masonry that holds a New Jersey home
              together: brick repair and repointing, stone and paver work, chimney
              repair, retaining walls, and full masonry restoration — with concrete
              flatwork like driveways, walkways, and slabs as the supporting work.
            </p>
            <p>
              The office is on Commerce Drive in Cranford, and the work runs across
              Union County — Westfield, Scotch Plains, Clark, Linden, and the
              surrounding towns. Masonry is the core trade here, not one line on a
              long list of services: when a job calls for brick, stone, or block,
              that's the work we lead with.
            </p>
            <p>
              Every job starts the same way — an on-site look, straight talk about
              repair versus rebuild, and a firm written price before any work
              begins. No pressure and no vague allowances: the quote is the price.
            </p>
          </div>
        </div>
      </section>

      {/* stats band */}
      <section className="bg-ink py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4 md:px-12">
          {[
            { n: <CountUp to={6} />, l: "Core services" },
            { n: <CountUp to={12} />, l: "Towns served" },
            { n: <CountUp to={3} />, l: "Core materials — brick, stone, block" },
            { n: <CountUp to={100} suffix="%" />, l: "Free estimates" },
          ].map((s) => (
            <div key={s.l} className="reveal text-center md:text-left">
              <p className="font-display text-4xl text-cream md:text-6xl">{s.n}</p>
              <p className="mt-1 text-sm uppercase tracking-widest text-cream/55">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* values */}
      <section className="bg-cream py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-forest">
            How we work
          </p>
          <h2 className="reveal mt-3 font-display text-2xl uppercase leading-[1.05] text-charcoal md:text-5xl">
            Four rules. No exceptions.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2">
            {VALUES.map((v, i) => (
              <article
                key={v.title}
                className="reveal rounded-3xl border border-charcoal/10 bg-white p-7 md:p-9"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="font-display text-sm text-forest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-xl uppercase text-charcoal md:text-2xl">
                  {v.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-charcoal/65">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* process */}
      <section className="bg-forest py-12 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-cream/60">
            How it works
          </p>
          <h2 className="reveal mt-3 font-display text-2xl uppercase leading-[1.05] text-cream md:text-5xl">
            Four steps. Zero drama.
          </h2>
          <div className="mt-8 space-y-0 md:mt-12">
            {PROCESS.map((t) => (
              <div
                key={t.step}
                className="reveal flex items-baseline gap-5 border-t border-cream/15 py-5 md:gap-10 md:py-6"
              >
                <span className="font-display text-xl text-cream/90 md:text-3xl">{t.step}</span>
                <p className="text-base text-cream/70 md:text-lg">{t.text}</p>
              </div>
            ))}
            <div className="border-t border-cream/15" />
          </div>
        </div>
      </section>

      {/* why cards reuse */}
      <section className="bg-cream py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <h2 className="reveal font-display text-2xl uppercase leading-[1.05] text-charcoal md:text-5xl">
            Why homeowners pick us.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
            {GLASS_CARDS.map((c, i) => (
              <div
                key={c.title}
                className="reveal rounded-3xl bg-ink p-6 md:p-7"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <h3 className="font-display text-lg uppercase text-cream">{c.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-cream/70">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="reveal mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-forest px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-forest-deep"
            >
              See what we do
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's look at your project."
        sub={`Free on-site estimates across Cranford and Union County. Call ${BUSINESS.phone} to schedule yours.`}
      />

      {/* FAQ */}
      <section className="bg-cream pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <h2 className="reveal font-display text-2xl uppercase text-charcoal md:text-4xl">
            Quick answers.
          </h2>
          <div className="mt-6">
            <Faq
              items={[
                {
                  q: "Do you give free estimates?",
                  a: "Always. We come out, look at the work, and give you a firm written price. No fee, no pressure.",
                },
                {
                  q: "What areas do you serve?",
                  a: "We're based in Cranford and work across Union County — including Westfield, Kenilworth, Garwood, Roselle Park, Clark, Linden, Union, Scotch Plains, Mountainside, Springfield, and Berkeley Heights.",
                },
                {
                  q: "Do you only do masonry?",
                  a: "Masonry is the core trade — brick, stone, and block. We also pour concrete flatwork like driveways, walkways, and patios. If a job falls outside that, we'll tell you straight.",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
