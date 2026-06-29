import { useMemo, useState } from "react";
import { Reveal } from "@/components/home/Reveal";

type Inputs = {
  aov: number;
  unitsPerOrder: number;
  cogsPct: number;
  paymentPct: number;
  merchantPct: number;
  shippingPerOrder: number;
  fulfillmentPerUnit: number;
  targetMarginPct: number;
  apfr: number;
};

const DEFAULTS: Inputs = {
  aov: 125,
  unitsPerOrder: 2.6,
  cogsPct: 35,
  paymentPct: 1.5,
  merchantPct: 1.0,
  shippingPerOrder: 3,
  fulfillmentPerUnit: 3,
  targetMarginPct: 30,
  apfr: 2,
};

const fields: Array<{
  key: keyof Inputs;
  label: string;
  hint: string;
  suffix?: string;
  step?: number;
}> = [
  { key: "aov", label: "Average Order Value", hint: "Gross sales / number of orders.", suffix: "$" },
  { key: "unitsPerOrder", label: "Units per Order", hint: "Products sold / orders.", step: 0.1 },
  { key: "cogsPct", label: "Blended COGS %", hint: "Average cost of goods (manufacturing + receiving) across your full catalogue.", suffix: "%" },
  { key: "paymentPct", label: "Payment Processor Fees %", hint: "Amount your card processor takes per order.", suffix: "%", step: 0.1 },
  { key: "merchantPct", label: "Merchant Account Fees %", hint: "Amount Shopify / your sales channel takes per order (use 0 if you pay a flat monthly fee).", suffix: "%", step: 0.1 },
  { key: "shippingPerOrder", label: "Shipping Cost per Order", hint: "Average shipping + packaging cost per order.", suffix: "$", step: 0.5 },
  { key: "fulfillmentPerUnit", label: "Fulfillment Cost per Unit", hint: "Fee your fulfilment partner charges per item or order.", suffix: "$", step: 0.5 },
  { key: "targetMarginPct", label: "Target Net Margin %", hint: "Net profit per order you need — covers salaries, rent, overhead.", suffix: "%" },
  { key: "apfr", label: "Average Purchase Frequency Rate", hint: "Total orders / total customers with >0 orders. Drives LTV.", step: 0.1 },
];

function fmt$(n: number) {
  if (!isFinite(n)) return "—";
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });
}
function fmtPct(n: number) {
  if (!isFinite(n)) return "—";
  return `${(n * 100).toFixed(1)}%`;
}
function fmtX(n: number) {
  if (!isFinite(n)) return "—";
  return `${n.toFixed(2)}x`;
}

export function ScalingCalculator() {
  const [v, setV] = useState<Inputs>(DEFAULTS);

  const r = useMemo(() => {
    const cogsPerOrder = v.aov * (v.cogsPct / 100);
    const payPerOrder = v.aov * (v.paymentPct / 100);
    const merchPerOrder = v.aov * (v.merchantPct / 100);
    const fulfillPerOrder = v.fulfillmentPerUnit * v.unitsPerOrder;
    const totalCosts = cogsPerOrder + payPerOrder + merchPerOrder + v.shippingPerOrder + fulfillPerOrder;
    const costPct = v.aov ? totalCosts / v.aov : 0;
    const fuelProfit = v.aov - totalCosts;
    const targetNet = v.aov * (v.targetMarginPct / 100);
    const cpaTarget = fuelProfit - targetNet;
    const roas = cpaTarget > 0 ? v.aov / cpaTarget : Infinity;
    const crr = v.aov ? cpaTarget / v.aov : 0;
    const ltv = v.aov * v.apfr;
    const scalingCpa = ltv * (1 - v.targetMarginPct / 100 - costPct);
    const fulfillCostLtv = totalCosts * v.apfr;
    const ltvNet = ltv - scalingCpa - fulfillCostLtv;
    return {
      cogsPerOrder, payPerOrder, merchPerOrder, fulfillPerOrder,
      totalCosts, costPct, fuelProfit, targetNet,
      cpaTarget, roas, crr, ltv, scalingCpa, fulfillCostLtv, ltvNet,
    };
  }, [v]);

  const update = (k: keyof Inputs, val: string) => {
    const n = parseFloat(val);
    setV({ ...v, [k]: isNaN(n) ? 0 : n });
  };

  return (
    <section id="calculator" className="bg-surface hairline-t hairline-b">
      <div className="container-r17 py-10 md:py-14">
        <div className="grid grid-cols-12 items-end gap-y-4">
          <Reveal className="col-span-12 md:col-span-7">
            <p className="eyebrow">[ Calculator ] Scaling CPA</p>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-[1.05] tracking-tight md:text-3xl lg:text-4xl">
              Most e-com brands obsess over{" "}
              <span className="serif-accent text-accent">ROAS</span>. It's the wrong number to scale on.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 md:col-span-5">
            <p className="text-[13px] leading-relaxed text-ink-soft">
              ROAS ignores COGS, fulfilment, fees, repeat purchase and the
              margin you actually need. Plug in real numbers — we'll show the
              CPA you can scale on.
            </p>
          </Reveal>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Inputs */}
          <Reveal className="lg:col-span-7">
            <div className="border border-hairline bg-background p-5 md:p-6">
              <div className="flex items-baseline justify-between">
                <p className="eyebrow">Your inputs</p>
                <button
                  type="button"
                  onClick={() => setV(DEFAULTS)}
                  className="text-[11px] font-semibold uppercase tracking-wider text-ink-soft underline-offset-4 hover:text-ink hover:underline"
                >
                  Reset
                </button>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                {fields.map((f) => (
                  <label key={f.key} className="block">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-ink" title={f.hint}>
                      {f.label}
                    </span>
                    <div className="relative mt-1.5 flex items-center">
                      {f.suffix === "$" && (
                        <span className="absolute left-3 text-[13px] text-ink-soft">$</span>
                      )}
                      <input
                        type="number"
                        inputMode="decimal"
                        step={f.step ?? 1}
                        value={v[f.key]}
                        onChange={(e) => update(f.key, e.target.value)}
                        className={`h-9 w-full border border-ink/20 bg-background text-[14px] text-ink outline-none transition-colors focus:border-accent ${
                          f.suffix === "$" ? "pl-7 pr-3" : f.suffix === "%" ? "pl-3 pr-8" : "px-3"
                        }`}
                      />
                      {f.suffix === "%" && (
                        <span className="absolute right-3 text-[13px] text-ink-soft">%</span>
                      )}
                    </div>
                    <span className="mt-1 block text-[11px] leading-snug text-ink-soft">
                      {f.hint}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Results */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="flex h-full flex-col gap-3">
              {/* Pre-order economics */}
              <div className="border border-hairline bg-background p-5 md:p-6">
                <p className="eyebrow">Pre-order economics</p>
                <dl className="mt-3 divide-y divide-hairline">
                  {[
                    { l: "Total cost to fulfil an order", v: fmt$(r.totalCosts) },
                    { l: "Cost as % of AOV", v: fmtPct(r.costPct) },
                    { l: "Fuel profit (AOV − costs)", v: fmt$(r.fuelProfit) },
                    { l: "CPA target (first order)", v: fmt$(r.cpaTarget), hi: true },
                    { l: "Break-even ROAS at target", v: fmtX(r.roas) },
                    { l: "LTV (AOV × APFR)", v: fmt$(r.ltv) },
                    { l: "Net $ per customer on LTV", v: fmt$(r.ltvNet) },
                  ].map((row) => (
                    <div key={row.l} className="flex items-baseline justify-between py-2">
                      <dt className="text-[12px] text-ink-soft">{row.l}</dt>
                      <dd className={`font-display text-[14px] font-semibold ${row.hi ? "text-accent" : "text-ink"}`}>
                        {row.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Hero result: Scaling CPA */}
              <div className="bg-accent p-5 text-accent-foreground md:p-6">
                <p className="eyebrow text-accent-foreground/80">The number that matters</p>
                <h3 className="mt-1 font-display text-lg font-semibold leading-tight">
                  Scaling Target CPA
                </h3>
                <div className="mt-2 font-display text-5xl font-semibold leading-none md:text-6xl">
                  {fmt$(r.scalingCpa)}
                </div>
                <p className="mt-2 text-[12px] leading-relaxed text-accent-foreground/90">
                  The CPA you can pay on the first order and still come out profitable on LTV — repeat purchases do the heavy lifting.
                </p>
                <div className="mt-4 border-t border-accent-foreground/20 pt-4">
                  <p className="font-display text-[14px] font-semibold text-accent-foreground">
                    Discover how realistic this is.
                  </p>
                  <a
                    href={`mailto:hello@r17ventures.com?subject=Scaling%20CPA%20Calculator%20Results&body=${encodeURIComponent(
                      `Hi R17 team,\n\nI ran the Scaling CPA calculator. Here are my inputs and key results:\n\nAOV: ${fmt$(v.aov)}\nUnits per order: ${v.unitsPerOrder}\nBlended COGS: ${v.cogsPct}%\nPayment fees: ${v.paymentPct}%\nMerchant fees: ${v.merchantPct}%\nShipping: ${fmt$(v.shippingPerOrder)}\nFulfillment: ${fmt$(v.fulfillmentPerUnit)}\nTarget margin: ${v.targetMarginPct}%\nAPFR: ${v.apfr}\n\nScaling Target CPA: ${fmt$(r.scalingCpa)}\nFirst-order CPA target: ${fmt$(r.cpaTarget)}\nLTV: ${fmt$(r.ltv)}\nNet $ per customer: ${fmt$(r.ltvNet)}\n\nI'd like to book a call to review how realistic these numbers are for my business.`
                    )}`}
                    className="mt-2 inline-flex h-10 items-center gap-2 rounded-sm bg-background px-4 text-[13px] font-semibold text-ink transition-transform hover:-translate-y-0.5"
                  >
                    Share results & book a review
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Formula notes */}
        <Reveal delay={0.15}>
          <div className="mt-10 grid grid-cols-1 gap-4 border-t border-hairline pt-8 md:grid-cols-3">
            {[
              { t: "CPA Target", f: "Fuel Profit − Target Net $", n: "The most you can pay on a first order and still hit your target margin." },
              { t: "Break-even ROAS", f: "AOV / CPA", n: "ROAS only tells you when you stop losing money on order one. It says nothing about scale." },
              { t: "Scaling Target CPA", f: "LTV × (1 − Margin − Cost%)", n: "Because customers come back. This is what unlocks aggressive paid scaling without burning cash." },
            ].map((b) => (
              <div key={b.t} className="border border-hairline bg-background p-6">
                <p className="font-display text-[18px] font-semibold text-ink">{b.t}</p>
                <p className="mt-2 font-mono text-[12px] text-accent">{b.f}</p>
                <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">{b.n}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex h-12 items-center gap-3 rounded-sm bg-ink px-6 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
            >
              Get our team to model this with you
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <p className="text-[12px] text-ink-soft">
              We'll plug in real cohort, returns and channel data — not estimates.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
