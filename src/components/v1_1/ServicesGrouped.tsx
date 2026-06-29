import { Reveal } from "@/components/home/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const groups = [
  {
    n: "01",
    title: "Customer Acquisition",
    body: "Top-of-funnel growth engineered for contribution margin — not vanity reach. From paid media to SEO, organic and outbound, every channel is run against one shared revenue thesis and reported on CAC and payback.",
    items: [
      { t: "Strategy & Consulting", d: "Strategic guidance from early-stage & GTM to scale-ups & enterprise." },
      { t: "Paid Social", d: "Meta, TikTok, LinkedIn, Snap, Pinterest, X." },
      { t: "SEA / PPC", d: "Google, Bing & Yahoo — performance-engineered." },
      { t: "SEO & GEO", d: "Technical, editorial & generative engine optimization that compounds." },
      { t: "Organic Social & Influencer", d: "Always-on social and vetted creators that earn share-of-search." },
      { t: "Deal Closing", d: "Telesales via our sister company Ganira — lead closing, high-AOV/LTV conversions & appointment setting." },
    ],
  },
  {
    n: "02",
    title: "Retention & Lifecycle",
    body: "Turn first-time buyers into a compounding revenue line. Lifecycle flows across email, SMS, WhatsApp and digitized direct mail — triggered by CRM events to lift repeat rate, AOV and LTV.",
    items: [
      { t: "Email / SMS / WhatsApp", d: "Lifecycle, retention & onboarding flows across owned channels." },
      { t: "Digitized Direct Mail", d: "Trigger-based physical mail tied to CRM events." },
    ],
  },
  {
    n: "03",
    title: "Creative & Content",
    body: "Performance creative at scale — produced by our in-house studio. Motion, lifestyle, brand and conversion-engineered sites that earn attention and turn it into pipeline.",
    items: [
      { t: "Content Production", d: "Motion, lifestyle & brand at scale." },
      { t: "Websites & E\u2011commerce", d: "High-converting sites on Webflow, Shopify, WordPress." },
    ],
  },

  {
    n: "04",
    title: "Techstack & Tracking",
    body: "Server-side tracking, attribution and revenue ops — board-grade reporting. We plug HubSpot, GA4, ad platforms and your warehouse into one source of truth, so every dollar is traceable to margin.",
    items: [
      { t: "HubSpot", d: "Implementation, automation & RevOps." },
      { t: "Data & Reporting", d: "Server-side tracking & CFO-grade dashboards." },
    ],
  },
];

export function ServicesGrouped() {
  return (
    <section id="services">
      <div className="container-r17 py-20 md:py-28">
        <div className="grid grid-cols-12 items-end gap-y-8">
          <Reveal className="col-span-12 md:col-span-8">
            <p className="eyebrow">Services</p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
              Our growth{" "}
              <span className="serif-accent text-accent">services</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 md:col-span-4">
            <p className="text-[15px] leading-relaxed text-ink-soft">
              Paid social, paid search, SEO, email, CRM and creative — we
              work out which will actually move your numbers, then run them.
              Reported on contribution margin, not vanity metrics.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <Accordion
            type="single"
            collapsible
            
            className="mt-14 border-y border-hairline"
          >
            {groups.map((g) => {
              const value = g.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
              return (
                <AccordionItem
                  key={g.title}
                  value={value}
                  className="border-b border-hairline last:border-b-0"
                >
                  <AccordionTrigger className="group flex w-full items-center gap-6 py-6 text-left hover:no-underline md:py-8 [&>svg]:text-accent [&>svg]:h-6 [&>svg]:w-6">
                    <span className="font-display text-xs font-semibold tracking-widest text-accent/80 w-8 shrink-0">
                      {g.n}
                    </span>
                    <span className="flex-1 font-display text-2xl font-semibold leading-tight md:text-4xl">
                      {g.title}
                    </span>
                    <span className="hidden text-[11px] uppercase tracking-widest text-foreground/50 md:inline">
                      {g.items.length} disciplines
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 md:pb-10">
                    <div className="grid grid-cols-12 gap-6 md:pl-14">
                      <p className="col-span-12 text-[14px] leading-relaxed text-ink-soft md:col-span-4">
                        {g.body}
                      </p>
                      <ul className="col-span-12 divide-y divide-hairline border-y border-hairline md:col-span-8">
                        {g.items.map((it) => (
                          <li
                            key={it.t}
                            className="grid grid-cols-12 items-baseline gap-4 py-3"
                          >
                            <span className="col-span-12 text-[15px] font-medium text-foreground md:col-span-4">
                              {it.t}
                            </span>
                            <span className="col-span-12 text-[12px] text-foreground/60 md:col-span-8">
                              {it.d}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex h-12 items-center gap-3 rounded-sm bg-accent px-6 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Talk to us
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
