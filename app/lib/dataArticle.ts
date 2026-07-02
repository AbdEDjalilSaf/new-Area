import type { StaticImageData } from "next/image";

import first from "@/public/first.avif";
import second from "@/public/second.avif";
import third from "@/public/third.avif";
import fourth from "@/public/forth.avif";
import fifth from "@/public/fifth.avif";
import sixth from "@/public/sexth.avif";
import seventh from "@/public/seventh.avif";
import eighth from "@/public/eighth.avif";
import ninth from "@/public/ninth.avif";


export interface Article {
  id: number;
  tag: string;
  title: string;
  excerpt: string;
  image: StaticImageData; // was: string
  alt: string;
}

export interface Plot {
  id: number;
  title: string;
  excerpt: string;
  image: StaticImageData; // was: string
}

export interface Faq {
  q: string;
  a: string;
}

export interface FooterColumn {
  heading: string;
  links: string[];
}

export const partnerLogos: string[] = [
  "Terra Verde",
  "GreenChain",
  "AgroTrace",
  "EcoField",
  "PlotWise",
  "Cultiva",
];

export const trendingArticles: Article[] = [
  {
    id: 1,
    tag: "Blog",
    title: "Understanding the EU Deforestation Regulation (EUDR)",
    excerpt:
      "Dive into the key aspects of EUDR and discover how businesses can comply with this groundbreaking regulation to ensure sustainable supply chains.",
    image: first,
    alt: "Aerial view of curved green agricultural terraces",
  },
  {
    id: 2,
    tag: "Blog",
    title: "Mapping Supply Chains for Deforestation-Free Sourcing",
    excerpt:
      "A practical walkthrough of geolocation data, plot verification, and the due-diligence records regulators expect from importers.",
    image: second,
    alt: "Rows of trimmed green shrubs planted in a grid",
  },
  {
    id: 3,
    tag: "Blog",
    title: "Reading Satellite Data: A Grower's Guide to Compliance",
    excerpt:
      "How Sentinel imagery and risk scoring work together to flag deforestation risk before it becomes a shipment-blocking problem.",
    image: third,
    alt: "Close up of a palm frond",
  },
];

export const legalPlots: Plot[] = [
  {
    id: 1,
    title: "Supplier Legal Plot",
    excerpt:
      "Understanding the legal boundaries of your product's sources ensures supplier compliance and prevents penalties for illegal plantations.",
    image: fourth,
  },
  {
    id: 2,
    title: "Geolocation Verification",
    excerpt:
      "Cross-check plot coordinates against protected forest boundaries before a single shipment leaves the farm gate.",
    image: fifth,
  },
  {
    id: 3,
    title: "Risk Benchmarking",
    excerpt:
      "Score sourcing regions against EU risk categories so procurement can flag exposure well ahead of audit season.",
    image: sixth,
  },
  {
    id: 4,
    title: "Chain of Custody",
    excerpt:
      "Trace a commodity from plot to port with a documentation trail that stands up to customs scrutiny.",
    image: seventh,
  },
  {
    id: 5,
    title: "Deforestation-Free Statements",
    excerpt:
      "Generate the due-diligence statements EUDR requires, backed by evidence you can defend if it's ever questioned.",
    image: eighth,
  },
  {
    id: 6,
    title: "Ongoing Monitoring",
    excerpt:
      "Keep watch on plots after onboarding — regulations reward continuous evidence, not a one-time snapshot.",
    image: ninth,
  },
];

export const faqs: Faq[] = [
  {
    q: "What is the EUDR?",
    a: "The EU Deforestation Regulation requires companies placing certain commodities on the EU market to prove their supply chains are deforestation-free and legally produced, backed by geolocation data and a due-diligence statement.",
  },
  {
    q: "Who is impacted by EUDR?",
    a: "Any operator or trader placing cattle, cocoa, coffee, palm oil, rubber, soy, wood, or derived products on the EU market — regardless of where in the world the company is based.",
  },
  {
    q: "Can small companies be impacted by EUDR?",
    a: "Yes. Smaller operators get slightly longer compliance timelines and simplified due diligence in some cases, but they are not exempt from the core obligation to prove deforestation-free sourcing.",
  },
  {
    q: "What penalties are there for non-compliance?",
    a: "Penalties vary by EU member state but can include fines of up to 4% of a company's EU-wide annual turnover, confiscation of goods and revenues, and temporary exclusion from public procurement.",
  },
  {
    q: "Where can I get help with EUDR compliance?",
    a: "Agriplot's due-diligence system handles geolocation mapping, risk scoring, and documentation generation in one place — reach out to our team for a walkthrough.",
  },
  {
    q: "What is the due diligence process under the EUDR?",
    a: "It involves collecting plot-level geolocation data, assessing deforestation and legality risk, mitigating any risk found, and issuing a due-diligence statement before goods enter the EU market.",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    heading: "Explore",
    links: ["About us", "Features", "Blog", "FAQs"],
  },
  {
    heading: "Connect",
    links: ["agriplot@inovasidigital.asia", "LinkedIn"],
  },
];

export const addresses: string[] = [
  "Jakarta, Indonesia",
  "Kuala Lumpur, Malaysia",
  "Rotterdam, Netherlands",
];