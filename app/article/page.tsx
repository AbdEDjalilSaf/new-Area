"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Minus, Leaf, ArrowUpRight } from "lucide-react";

import {
  partnerLogos,
  trendingArticles,
  legalPlots,
  faqs,
} from "@/app/lib/dataArticle";



export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-amber-50 dark:bg-[#0a1f14] text-neutral-900 dark:text-[#a3c9b8]">
      <Hero />
      <TrendingArticles />
    </main>
  );
}

/* ----------------------------- Hero ------------------------------ */

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 sm:pt-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm">
          <Leaf className="h-3.5 w-3.5 text-emerald-500" />
          Frontend Specialist
        </span>

        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Insights for Building a{" "}
          <span className="text-emerald-600">helpful software</span>
        </h1>
      </div>

    </section>
  );
}

/* ------------------------ Trending articles ----------------------- */

function TrendingArticles() {
  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-500">
          Blog
        </span>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Our Trending Article{" "}
          <span className="text-neutral-300">[{trendingArticles.length}]</span>
        </h2>

        <div className="mt-10 divide-y divide-neutral-200">
          {trendingArticles.map((article, i) => (
            <article
              key={article.id}
              className="grid grid-cols-1 items-center gap-6 py-10 first:pt-0 last:pb-0 sm:grid-cols-2 sm:gap-10"
            >
              <div className={i % 2 === 1 ? "sm:order-2" : ""}>
                <span className="text-xs font-medium text-neutral-400">
                  {article.tag}
                </span>
                <h3 className="mt-3 text-xl font-semibold leading-snug sm:text-2xl">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                  {article.excerpt}
                </p>
                <Link
                  href={`/blog/${article.id}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700"
                >
                  Read article
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className={i % 2 === 1 ? "sm:order-1" : ""}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-100 sm:aspect-[3/2]">
                  <Image
                    src={article.image}
                    alt={article.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

