import { BUSINESS, TOWNS } from "../data";
import { Contact } from "../components/Sections";
import { PageHero, RouteFX } from "../components/PageBits";

export default function ContactPage() {
  return (
    <>
      <RouteFX
        title="Contact GCS Worldwide LLC | Free Estimates in Cranford, NJ"
        description={`Contact GCS Worldwide LLC for a free estimate. Call ${BUSINESS.phone} or email ${BUSINESS.email}. Serving ${TOWNS.slice(0, 5).join(", ")} and more across Union County, NJ.`}
      />
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's talk
            <br />
            about your project.
          </>
        }
        sub="Call or send the form to schedule your free estimate — we'll get back to you to set up a time."
        img="/img/hero-contact.jpg"
      />

      {/* reuse the full contact section (form + phone + email + office) */}
      <Contact />

      {/* styled address card instead of an external map embed */}
      <section className="bg-cream pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="reveal overflow-hidden rounded-3xl bg-ink">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cream/50">
                  Find us
                </p>
                <h2 className="mt-3 font-display text-2xl uppercase text-cream md:text-4xl">
                  {BUSINESS.address}
                </h2>
                <dl className="mt-6 space-y-4 text-cream/70">
                  <div>
                    <dt className="text-[11px] font-bold uppercase tracking-[0.25em] text-cream/40">
                      Email
                    </dt>
                    <dd className="mt-1 text-base">
                      <a href={BUSINESS.emailHref} className="font-semibold text-cream underline underline-offset-4">
                        {BUSINESS.email}
                      </a>
                      <br />
                      <span>Estimates are free — call to schedule.</span>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-bold uppercase tracking-[0.25em] text-cream/40">
                      Service area
                    </dt>
                    <dd className="mt-1 text-base">
                      {TOWNS.slice(0, 8).join(" · ")} &amp; more
                    </dd>
                  </div>
                </dl>
                <a
                  href={BUSINESS.phoneHref}
                  className="mt-8 inline-flex min-h-[52px] items-center justify-center rounded-full bg-cream px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-ink transition hover:bg-white"
                >
                  Call {BUSINESS.phone}
                </a>
              </div>
              <div className="relative min-h-[280px]">
                <img
                  src="/img/contact-card.jpg"
                  alt="Brick home in Union County, NJ"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-forest/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-ink/80 px-8 py-4 backdrop-blur">
                    <p className="font-display text-lg uppercase tracking-wide text-cream">
                      Cranford, NJ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
