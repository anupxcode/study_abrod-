"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Clock, ArrowRight } from "lucide-react";
import { blogPosts, blogCategories, formatDate, coverStyle } from "@/lib/blog-data";

function Avatar({ initials }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-primary"
    >
      {initials}
    </span>
  );
}

function PostCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[0.9rem] border border-border bg-background transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div className="relative h-44 overflow-hidden" style={coverStyle(post.colors)}>
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
          <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/10" />
          <div className="absolute -bottom-8 left-6 h-24 w-24 rounded-full bg-white/10" />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-foreground">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-semibold leading-snug text-foreground group-hover:text-primary">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-foreground/70">{post.excerpt}</p>
        <div className="mt-auto flex items-center gap-3 pt-5">
          <Avatar initials={post.author.initials} />
          <div className="min-w-0 text-xs text-foreground/70">
            <p className="truncate font-medium text-foreground">{post.author.name}</p>
            <p className="flex items-center gap-1">
              {formatDate(post.date)}
              <span aria-hidden="true">•</span>
              <Clock className="h-3 w-3" aria-hidden="true" />
              {post.readTime}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

function FeaturedPost({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid overflow-hidden rounded-[0.9rem] border border-border bg-background transition-shadow hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:grid-cols-2"
    >
      <div className="relative min-h-56 overflow-hidden md:min-h-80" style={coverStyle(post.colors)}>
        <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 motion-safe:animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute -bottom-12 left-8 h-36 w-36 rounded-full bg-white/10" />
      </div>
      <div className="flex flex-col justify-center p-6 md:p-10">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-foreground">
            {post.category}
          </span>
          <span className="text-xs font-medium text-foreground/70">Featured</span>
        </div>
        <h2 className="mt-4 font-heading text-2xl font-bold leading-tight text-foreground group-hover:text-primary md:text-3xl">
          {post.title}
        </h2>
        <p className="mt-3 leading-relaxed text-foreground/70">{post.excerpt}</p>
        <div className="mt-6 flex items-center gap-3">
          <Avatar initials={post.author.initials} />
          <div className="text-sm text-foreground/70">
            <p className="font-medium text-foreground">{post.author.name}</p>
            <p>
              {formatDate(post.date)} · {post.readTime}
            </p>
          </div>
          <ArrowRight
            className="ml-auto h-5 w-5 text-primary transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
}

export function BlogExplorer() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts.filter((p) => {
      const inCategory = category === "All" || p.category === category;
      const inQuery =
        !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
      return inCategory && inQuery;
    });
  }, [category, query]);

  const isDefaultView = category === "All" && !query.trim();
  const featured = isDefaultView ? filtered.find((p) => p.featured) : null;
  const gridPosts = featured ? filtered.filter((p) => p.slug !== featured.slug) : filtered;

  const clearFilters = () => {
    setCategory("All");
    setQuery("");
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-foreground to-primary text-white">
        <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/5 motion-safe:animate-[float_7s_ease-in-out_infinite]" />
        <div className="pointer-events-none absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-accent/15 motion-safe:animate-[float_9s_ease-in-out_infinite]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <h1 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
            Study Abroad Insights
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Scholarship tips, visa guides and country advice from counselors who help students get
            there.
          </p>
          <div className="relative mt-8 max-w-xl">
            <label htmlFor="blog-search" className="sr-only">
              Search articles
            </label>
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/50"
              aria-hidden="true"
            />
            <input
              id="blog-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles, for example visa or scholarship"
              className="h-13 w-full rounded-[0.9rem] bg-white py-4 pl-12 pr-4 text-foreground placeholder:text-foreground/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            />
          </div>
        </div>
      </section>

      {/* Filters + content */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {["All", ...blogCategories].map((c) => {
            const active = c === category;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={active}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  active
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-background text-foreground hover:bg-secondary"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <p className="sr-only" role="status" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "article" : "articles"} found
        </p>

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-[0.9rem] border border-dashed border-border bg-muted px-6 py-16 text-center">
            <h2 className="font-heading text-xl font-semibold text-foreground">No articles found</h2>
            <p className="mt-2 text-foreground/70">
              Try a different keyword or choose another category.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 rounded-[0.6rem] bg-primary px-5 py-2.5 font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            {featured && (
              <div className="mt-8">
                <FeaturedPost post={featured} />
              </div>
            )}
            {gridPosts.length > 0 && (
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {gridPosts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}

export { PostCard };