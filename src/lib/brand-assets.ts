import r17Logo from "@/assets/logos/r17.svg.asset.json";
import c1 from "@/assets/clients/c1.png.asset.json";
import c2 from "@/assets/clients/c2.png.asset.json";
import c3 from "@/assets/clients/c3.png.asset.json";
import c4 from "@/assets/clients/c4.png.asset.json";
import c5 from "@/assets/clients/c5.png.asset.json";
import c6 from "@/assets/clients/c6.png.asset.json";
import gotpost from "@/assets/clients/gotpost.png.asset.json";
import pf from "@/assets/clients/pf.avif.asset.json";
import ff from "@/assets/clients/ff.png.asset.json";
import meta from "@/assets/partners/meta.webp.asset.json";
import google from "@/assets/partners/google.webp.asset.json";
import shopify from "@/assets/partners/shopify.webp.asset.json";
import klaviyo from "@/assets/partners/klaviyo.webp.asset.json";
import hubspot from "@/assets/partners/hubspot.webp.asset.json";
import customerio from "@/assets/partners/customerio.webp.asset.json";
import tiktok from "@/assets/tiktok-partner2.png.asset.json";
import p1 from "@/assets/photos/p1.jpg.asset.json";
import p2 from "@/assets/photos/p2.jpg.asset.json";
import p3 from "@/assets/photos/p3.jpg.asset.json";
import p4 from "@/assets/photos/p4.jpg.asset.json";
import p5 from "@/assets/photos/p5.jpg.asset.json";
import funnel from "@/assets/illustrations/funnel.png.asset.json";
import growth from "@/assets/illustrations/growth.png.asset.json";
import handshake from "@/assets/illustrations/handshake.png.asset.json";
import teamwork from "@/assets/illustrations/teamwork.png.asset.json";
import cursor from "@/assets/illustrations/cursor.png.asset.json";

export const brand = {
  logo: r17Logo.url,
  // Real client brands (Brain'print stays text-only)
  clients: [
    { name: "Client 1", src: c1.url },
    { name: "Client 2", src: c2.url },
    { name: "Client 3", src: c3.url },
    { name: "Client 4", src: c4.url },
    { name: "Client 5", src: c5.url },
    { name: "Client 6", src: c6.url },
  ],
  // Productised programmes (formerly mis-tagged as clients)
  products: {
    performanceFoundations: { name: "Performance Foundations", src: ff.url },
    performanceFirst: { name: "Performance First", src: pf.url },
    gotpost: { name: "GotPost", src: gotpost.url },
  },
  partners: [
    { name: "Meta Business Partner", src: meta.url },
    { name: "Google Partner", src: google.url },
    { name: "TikTok Marketing Partner", src: tiktok.url },
    { name: "HubSpot Partner", src: hubspot.url },
    { name: "Klaviyo Partner", src: klaviyo.url },
    { name: "Shopify Partner", src: shopify.url },
    { name: "Customer.io Partner", src: customerio.url },
  ],
  photos: { p1: p1.url, p2: p2.url, p3: p3.url, p4: p4.url, p5: p5.url },
  illustrations: {
    funnel: funnel.url,
    growth: growth.url,
    handshake: handshake.url,
    teamwork: teamwork.url,
    cursor: cursor.url,
  },
  // Brand video placeholder — swap when real URL is provided
  brandVideo: {
    poster: p2.url,
    src: "" as string,
  },
};
