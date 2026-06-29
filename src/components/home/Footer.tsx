import { brand } from "@/lib/brand-assets";
import swissStartup from "@/assets/endorsements/swiss_startup.png.asset.json";
import make from "@/assets/endorsements/make.png.asset.json";
import goodfirms from "@/assets/endorsements/goodfirms.png.asset.json";
import swissEmbassy from "@/assets/endorsements/swiss_embassy.png.asset.json";

const endorsements = [
  { name: "Swiss Startup Association", src: swissStartup.url },
  { name: "Swiss Confederation", src: swissEmbassy.url },
  { name: "Make", src: make.url },
  { name: "GoodFirms", src: goodfirms.url },
];

const cols = [
  {
    title: "Services",
    links: ["Strategy & Consultation", "Paid Social", "SEA / PPC", "GEO & SEO", "Content & Creative", "Email / SMS / Telemarketing", "Organic (incl. Influencers)", "Website Development", "Tech & Data"],
    hrefs: ["#services", "#services", "#services", "#services", "#services", "#services", "#services", "#services", "#services"],
  },
  {
    title: "Products",
    links: ["Foundations First", "Performance First", "GotPost"],
    hrefs: ["#products", "#products", "#products"],
  },
  {
    title: "More",
    links: ["Why R17", "Pricing", "Case Studies", "Team", "Careers", "Academy", "News"],
    hrefs: ["#about", "#pricing", "#work", "#about", "#academy", "#academy", "#about"],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-background/80">
      <div className="container-r17 py-20">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-10">
          <div className="col-span-12 md:col-span-3">
            <img src={brand.logo} alt="R17 Ventures" className="h-8 w-auto invert" />
            <p className="mt-6 max-w-xs text-[13px] leading-relaxed text-background/60">
              R17 Ventures AG - redefining growth through digital partnerships and solutions that really make an impact
            </p>

            <div className="mt-8 space-y-6 text-[13px] text-background/70">
              <div>
                <p className="text-[11px] uppercase tracking-widest text-accent">Switzerland</p>
                <p className="mt-2 font-semibold text-background/80">Domicile:</p>
                <p>Zugerstrasse 32</p>
                <p>6340 Baar</p>
                <p className="mt-2 font-semibold text-background/80">Office:</p>
                <p>Selnaustrasse 5</p>
                <p>8001 Zürich</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-widest text-accent">South Africa</p>
                <p className="mt-2 text-background/80">5th Floor, Nedbank Building</p>
                <p>Victoria & Alfred Waterfront</p>
                <p>Cape Town, 8001</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-widest text-accent">Contact</p>
                <p className="mt-2">+41 43 588 19 23</p>
                <p>sales@r17ventures.com</p>
              </div>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="col-span-6 md:col-span-3">
              <p className="text-[11px] uppercase tracking-widest text-accent">{c.title}</p>
              <ul className="mt-6 space-y-3 text-[13px]">
                {c.links.map((l, i) => (
                  <li key={l}>
                    <a href={c.hrefs[i]} className="text-background/70 transition-colors hover:text-background">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-background/10 pt-6">
          <p className="text-center text-[10px] uppercase tracking-widest text-background/30">Endorsed by</p>
          <div className="mt-4 grid grid-cols-3 items-center gap-x-8 gap-y-4 sm:grid-cols-4">
            {endorsements.map((e) => (
              <div key={e.name} className="flex items-center justify-center">
                <img
                  src={e.src}
                  alt={e.name}
                  loading="lazy"
                  className="h-5 w-auto max-w-[100px] object-contain opacity-50 brightness-0 invert transition hover:opacity-70 md:h-6"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-background/10 pt-6 text-[12px] text-background/50 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} R17 Ventures AG. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background">Imprint</a>
            <a href="#" className="hover:text-background">Terms</a>
            <a href="#" className="hover:text-background">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
