import { Reveal } from "./Reveal";
import abc from "@/assets/press/abc.webp.asset.json";
import ap from "@/assets/press/ap.webp.asset.json";
import benzinga from "@/assets/press/benzinga.webp.asset.json";
import biz from "@/assets/press/bizcommunity.webp.asset.json";
import capetalk from "@/assets/press/capetalk.webp.asset.json";
import cbs from "@/assets/press/cbs.webp.asset.json";
import fox from "@/assets/press/fox.webp.asset.json";
import iol from "@/assets/press/iol.webp.asset.json";
import leader from "@/assets/press/leader.webp.asset.json";
import msnbc from "@/assets/press/msnbc-1.webp.asset.json";
import nzz from "@/assets/press/nzz.png.asset.json";
import tagblatt from "@/assets/press/tagblatt.webp.asset.json";
import websummit from "@/assets/endorsements/websummit.png.asset.json";
import yahoo from "@/assets/press/yahoo.webp.asset.json";

const press = [
  { name: "Web Summit", src: websummit.url },
  { name: "NZZ", src: nzz.url },
  { name: "Tagblatt", src: tagblatt.url },
  { name: "Leader Digital", src: leader.url },
  { name: "Associated Press", src: ap.url },
  { name: "Yahoo Finance", src: yahoo.url },
  { name: "Bizcommunity", src: biz.url },
  { name: "IOL", src: iol.url },
  { name: "CapeTalk", src: capetalk.url },
  { name: "CBS", src: cbs.url },
  { name: "FOX", src: fox.url },
  { name: "ABC", src: abc.url },
  { name: "MSNBC", src: msnbc.url },
  { name: "Benzinga", src: benzinga.url },
];

export function PressStrip() {
  return (
    <section className="bg-background hairline-b">
      <div className="container-r17 py-8 md:py-10">
        <Reveal>
          <p className="eyebrow mb-5 md:mb-6">featured by</p>
          <div className="grid grid-cols-4 items-center gap-x-5 gap-y-6 sm:grid-cols-5 md:grid-cols-7 md:gap-x-8 md:gap-y-8">
            {press.map((p) => (
              <div key={p.name} className="flex h-7 w-20 items-center justify-center md:h-9 md:w-24">
                <img
                  src={p.src}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-contain opacity-70 grayscale"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
