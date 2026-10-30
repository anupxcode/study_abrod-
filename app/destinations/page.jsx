"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Globe2, Plane, GraduationCap, Wallet, BadgeCheck, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// Adjust these two imports to match your Home page's components
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { destinations, levels, subjects } from "@/lib/mock-data";

const ALL = "all";

export default function DestinationsPage() {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState(ALL);
  const [subject, setSubject] = useState(ALL);

  const results = useMemo(
    () =>
      destinations.filter(
        (d) =>
          d.name.toLowerCase().includes(query.trim().toLowerCase()) &&
          (level === ALL || d.levels.includes(level)) &&
          (subject === ALL || d.subjects.includes(subject))
      ),
    [query, level, subject]
  );

  const hasFilters = query || level !== ALL || subject !== ALL;
  const reset = () => {
    setQuery("");
    setLevel(ALL);
    setSubject(ALL);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-secondary">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
              <Globe2 className="size-4" aria-hidden="true" />
              Study abroad
            </span>
            <h1 className="font-heading mt-5 max-w-2xl text-4xl font-bold leading-tight text-balance sm:text-5xl">
              Choose where your future begins
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Compare costs, visas, and subjects across top study destinations,
              then talk to a counselor about the right fit.
            </p>
          </div>
          <Plane
            aria-hidden="true"
            className="absolute right-6 top-10 hidden size-24 text-primary/25 sm:block md:right-24 md:size-36 animate-[float_6s_ease-in-out_infinite]"
          />
        </section>

        {/* Filter bar */}
        <div className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
          <div className="mx-auto grid max-w-6xl gap-3 px-4 py-4 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_auto]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
              <Input
                aria-label="Search by country"
                placeholder="Search country"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={level} onValueChange={setLevel}>
              <SelectTrigger aria-label="Study level" className="w-full">
                <SelectValue placeholder="Study level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL}>All levels</SelectItem>
                {levels.map((l) => (
                  <SelectItem key={l} value={l}>{l}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={subject} onValueChange={setSubject}>
              <SelectTrigger aria-label="Subject" className="w-full">
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL}>All subjects</SelectItem>
                {subjects.map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={reset} disabled={!hasFilters}>
              Reset
            </Button>
          </div>
        </div>

        {/* Results */}
        <section className="mx-auto max-w-6xl px-4 py-10">
          <p className="mb-6 text-sm text-muted-foreground" aria-live="polite">
            Showing {results.length} {results.length === 1 ? "destination" : "destinations"}
          </p>

          {results.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {results.map((d, i) => (
                  <motion.article
                    key={d.slug}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative h-40 overflow-hidden bg-secondary">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={d.image}
                        alt={`${d.name} campus and city`}
                        loading="lazy"
                        className="size-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-background/95 px-2.5 py-1 text-sm font-medium shadow-sm">
                        <span aria-hidden="true">{d.flag}</span> {d.code}
                      </span>
                      <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
                        Popular: {d.popular}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <h2 className="font-heading text-xl font-semibold">{d.name}</h2>
                      <p className="mt-1 text-sm text-muted-foreground">{d.tagline}</p>
                      <p className="mt-2 text-sm font-medium text-primary">{d.scholarship}</p>

                      <dl className="mt-4 space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <GraduationCap className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                          <div><dt className="sr-only">Tuition</dt><dd>{d.tuition}</dd></div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Wallet className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                          <div><dt className="sr-only">Living cost</dt><dd>{d.living}</dd></div>
                        </div>
                        <div className="flex items-start gap-2">
                          <BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                          <div><dt className="sr-only">Post-study visa</dt><dd>{d.visa}</dd></div>
                        </div>
                      </dl>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {d.subjects.slice(0, 3).map((s) => (
                          <span key={s} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">
                            {s}
                          </span>
                        ))}
                      </div>

                      <Button asChild className="mt-6">
                        <Link href={`/destinations/${d.slug}`}>Explore {d.name}</Link>
                      </Button>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="flex flex-col items-center rounded-2xl border border-dashed border-border bg-muted px-6 py-16 text-center">
              <SearchX className="size-12 text-muted-foreground" aria-hidden="true" />
              <h2 className="font-heading mt-4 text-xl font-semibold">No destinations match your filters</h2>
              <p className="mt-2 max-w-sm text-muted-foreground">
                Try a different level or subject, or clear the filters to see every country.
              </p>
              <Button onClick={reset} className="mt-6">Clear filters</Button>
            </div>
          )}
        </section>

        {/* Counseling CTA */}
        <section className="px-4 pb-16">
          <div className="mx-auto max-w-6xl rounded-2xl bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Not sure which country fits you?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85">
              Our counselors will match your budget, grades, and goals to the right destination.
            </p>
            <Button asChild size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Book free counseling</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}