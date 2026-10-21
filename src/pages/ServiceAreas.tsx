import { Link } from "react-router-dom";
import { BUSINESS, TOWNS } from "../data";
import { CtaBand, PageHero, RouteFX } from "../components/PageBits";

export default function ServiceAreas() {
  return (
    <>
      <RouteFX
        title="Service Areas | GCS Worldwide LLC — Cranford & Union County, NJ"
        description="GCS Worldwide LLC serves Cranford, Westfield, Kenilworth, Garwood, Roselle Park, Clark, Linden, Union, Scotch Plains, Mountainside, Springfield, and Berkeley Heights, NJ. Free estimates in our service area."
      />
      <PageHero
        eyebrow="Service areas"
        title={
          <>
            Local. Actually
            <br />
            local.
          </>
        }
        sub="Our office is in Cranford, and we work across Union County every week. If you're in one of these towns, estimates are free — call to schedule."
        img="/img/hero-areas.jpg"
      />

      <section className="bg-cream py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="reveal grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {TOWNS.map((t) => (
              <div
                key={t}
                className="flex min-h-[64px] items-center justify-center rounded-2xl border border-charcoal/10 bg-white px-4 py-4 text-center transition hover:border-forest hover:bg-forest hover:text-cream"
              >
                <span className="font-display text-lg uppercase tracking-wide md:text-xl">{t}</span>
              </div>
            ))}
          </div>

          <div className="reveal mt-10 grid gap-5 md:mt-14 lg:grid-cols-2">
            <div className="rounded-3xl bg-ink p-8 md:p-10">
              <h2 className="font-display text-2xl uppercase text-cream md:text-3xl">
                Inside the area?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cream/65">
                Free on-site estimates. Call {BUSINESS.phone} or send the form and
                we'll schedule a time to look at the work.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex min-h-[52px] items-center justify-center rounded-full bg-cream px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-ink transition hover:bg-white"
              >
                Get a free estimate
              </Link>
            </div>
            <div className="rounded-3xl border border-charcoal/10 bg-white p-8 md:p-10">
              <h2 className="font-display text-2xl uppercase text-charcoal md:text-3xl">
                Just outside?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal/65">
                We're Cranford-based and most of our work sits inside Union County —
                but the right masonry job sometimes takes us further. Call{" "}
                {BUSINESS.phone} — if we can't help, we'll tell you straight.
              </p>
              <a
                href={BUSINESS.phoneHref}
                className="mt-6 inline-flex min-h-[52px] items-center justify-center rounded-full bg-forest px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-forest-deep"
              >
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Free estimates in our service area."
        sub="Tell us about the job and where you are. We'll take it from there."
      />
    </>
  );
}
