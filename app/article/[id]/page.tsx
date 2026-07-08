"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Calendar, SquarePen, Loader2, AlertTriangle } from "lucide-react";

import { getArticle, type Article } from "@/lib/articles";

export default function ArticleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    getArticle(id)
      .then(setArticle)
      .catch((err) => {
        console.error(err);
        setError("Couldn't load the article. It may have been removed.");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-amber-50 dark:bg-[#0a1f14]">
        <Loader2 className="h-6 w-6 animate-spin text-neutral-400" />
      </main>
    );
  }

  if (error || !article) {
    return (
      <main className="flex min-h-screen pt-16 flex-col items-center justify-center gap-4 bg-amber-50 px-6 dark:bg-[#0a1f14]">
        <AlertTriangle className="h-8 w-8 text-neutral-400" />
        <p className="text-neutral-500 dark:text-[#8ab5a0]">{error ?? "Article not found."}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-16 bg-amber-50 dark:bg-[#0a1f14] text-neutral-900 dark:text-[#a3c9b8]">
      <article className="mx-auto max-w-3xl px-6 pb-20 pt-16 sm:pt-20">

        {article.featured_image && (
          <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-100">
            <img
              src={article.featured_image}
              alt={article.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          {article.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-neutral-400 dark:text-[#8ab5a0]">
          {article.$createdAt && (
                <span className="flex items-center gap-1">
                  <SquarePen className="h-3 w-3" /> {new Date(article.$createdAt).toLocaleDateString()}
                </span>
              )}
              {article.$updatedAt && (
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {new Date(article.$updatedAt).toLocaleDateString()}
                </span>
              )}
        </div>

        <div className="mt-8 whitespace-pre-wrap text-base leading-relaxed text-neutral-700 dark:text-[#a3c9b8]">
          {article.content}
        </div>
      </article>
    </main>
  );
}
