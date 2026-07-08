"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Leaf, ArrowUpRight, Loader2 } from "lucide-react";

import { listArticles, type Article } from "@/lib/articles";

export default function ArticlePage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listArticles()
      .then(setArticles)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-amber-50 dark:bg-[#0a1f14] text-neutral-900 dark:text-[#a3c9b8]">
      <Hero />
      <TrendingArticles articles={articles} loading={loading} />
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

function TrendingArticles({ articles, loading }: { articles: Article[]; loading: boolean }) {
  const [showAll, setShowAll] = useState(false);
  const trending = articles.slice(0, 3);
  const rest = articles.slice(3);

  if (loading) {
    return (
      <section className="flex items-center justify-center px-6 py-20 sm:py-24">
        <Loader2 className="h-6 w-6 animate-spin text-neutral-400" />
      </section>
    );
  }

  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <span className="inline-flex items-center bg-white gap-1.5 rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-500">
          Blog
        </span>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Our Trending Article{" "}
          <span className="text-neutral-300">[{articles.length}]</span>
        </h2>

        <div className="mt-10 divide-y divide-neutral-200">
          {trending.map((article, i) => (
            <article
              key={article.$id}
              className="grid grid-cols-1 items-center gap-6 py-10 first:pt-0 last:pb-0 sm:grid-cols-2 sm:gap-10"
            >
              <div className={i % 2 === 1 ? "sm:order-2" : ""}>
                <h3 className="text-xl font-semibold leading-snug sm:text-2xl">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                  {article.content.length > 150
                    ? article.content.slice(0, 150) + "..."
                    : article.content}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <Link
                    href={`/article/${article.$id}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700"
                  >
                    Read article
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              <div className={i % 2 === 1 ? "sm:order-1" : ""}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-100 sm:aspect-[3/2]">
                  {article.featured_image ? (
                    <img
                      src={article.featured_image}
                      alt={article.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-neutral-300">No image</div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {showAll && rest.length > 0 && (
          <>
            <h3 className="mt-28 text-3xl lg:text-2xl font-semibold">More Articles</h3>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((article) => {
                const excerpt =
                  article.content.length > 120
                    ? article.content.slice(0, 120) + "..."
                    : article.content;
                return (
                  <article
                    key={article.$id}
                    className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200 transition hover:shadow-md dark:bg-neutral-900 dark:ring-neutral-800"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                      {article.featured_image ? (
                        <img
                          src={article.featured_image}
                          alt={article.title}
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-neutral-300">No image</div>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-5">
                      <h3 className="text-lg font-semibold leading-snug">{article.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-500">{excerpt}</p>
                      <Link
                        href={`/article/${article.$id}`}
                        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700"
                      >
                        Read article
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </>
        )}

        {articles.length > 3 && !showAll && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium text-neutral-600 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800"
            >
              Show more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

