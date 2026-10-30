"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { BadgeCheck, GraduationCap, Stamp, Plane } from "lucide-react";
import { services, stages } from "@/lib/services-data";

// Change this if your counseling / contact route is different.
export const CONSULT_HREF = "/contact";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

/* ------------------------------------------------------------------ */
/* Hero: one orchestrated entrance, then the floating cards drift      */
/* ------------------------------------------------------------------ */
export function ServicesHero() {
  const reduce = useReducedMotion();

  const enter = (i) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
        };

  const floating = reduce ? "" : "animate-[float_6s_ease-in-out_infinite]";

  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <motion.h1
            {...enter(0)}
            className="font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl"
          >
            Support at every step, from choosing a course to landing abroad
          </motion.h1>

          <motion.p
            {...enter(1)}
            className="mt-5 max-w-prose text-lg text-foreground/70"
          >
            Use one service or the whole journey. Our counselors help you pick
            the right program, apply with confidence and arrive prepared.
          </motion.p>

          <motion.div {...enter(2)} className="mt-8 flex flex-wrap gap-3">
            <Link
              href={CONSULT_HREF}
              className={`inline-flex h-12 items-center rounded-xl bg-primary px-6 font-medium text-primary-foreground transition hover:opacity-90 ${focusRing}`}
            >
              Book free counseling
            </Link>
            <a
              href="#all-services"
              className={`inline-flex h-12 items-center rounded-xl border border-border bg-background px-6 font-medium text-foreground transition hover:bg-muted ${focusRing}`}
            >
              See our services
            </a>
          </motion.div>
        </div>

        {/* Decorative progress cards (illustrative, hidden from screen readers) */}
        <div aria-hidden="true" className="relative mx-auto h-80 w-full max-w-sm">
          <div
            className={`absolute left-0 top-2 flex w-64 items-center gap-3 rounded-2xl border border-border bg-background p-4 shadow-sm ${floating}`}
          >
            <span className="grid size-10 place-items-center rounded-xl bg-secondary text-primary">
              <GraduationCap className="size-5" />
            </span>
            <div>
              <p className="font-heading text-sm font-semibold text-foreground">
                Shortlist ready
              </p>
              <p className="text-xs text-foreground/60">Programs matched to you</p>
            </div>
          </div>

          <div
            style={{ animationDelay: "-2s" }}
            className={`absolute right-0 top-28 flex w-64 items-center gap-3 rounded-2xl border border-border bg-background p-4 shadow-sm ${floating}`}
          >
            <span className="grid size-10 place-items-center rounded-xl bg-accent/20 text-foreground">
              <Stamp className="size-5" />
            </span>
            <div>
              <p className="font-heading text-sm font-semibold text-foreground">
                Visa file checked
              </p>
              <p className="text-xs text-foreground/60">Nothing missing</p>
            </div>
          </div>

          <div
            style={{ animationDelay: "-4s" }}
            className={`absolute bottom-0 left-6 flex w-64 items-center gap-3 rounded-2xl border border-border bg-background p-4 shadow-sm ${floating}`}
          >
            <span className="grid size-10 place-items-center rounded-xl bg-secondary text-primary">
              <Plane className="size-5" />
            </span>
            <div>
              <p className="font-heading text-sm font-semibold text-foreground">
                Ready to fly
              </p>
              <p className="text-xs text-foreground/60">Arrival checklist done</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Services grid with a stage filter (same pattern as /destinations)   */
/* ------------------------------------------------------------------ */
export function ServicesExplorer() {
  const [stage, setStage] = useState("all");
  const reduce = useReducedMotion();

  const visible =
    stage === "all" ? services : services.filter((s) => s.stages.includes(stage));

  return (
    <section id="all-services" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 md:py-20">
      <div className="max-w-2xl">
        <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
          Where are you in your journey?
        </h2>
        <p className="mt-3 text-foreground/70">
          Pick your stage and we will show the services that help right now.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter services by stage">
        {stages.map((s) => {
          const active = stage === s.id;
          return (
            <button
              key={s.id}
              type="button"
              aria-pressed={active}
              onClick={() => setStage(s.id)}
              className={`h-10 rounded-full border px-4 text-sm font-medium transition ${focusRing} ${
                active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground hover:bg-muted"
              }`}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      <motion.ul layout={!reduce} className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((s) => {
            const Icon = s.icon;
            return (
              <motion.li
                key={s.id}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col rounded-2xl border border-border bg-background p-6"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-secondary text-primary">
                  <Icon className="size-5" />
                </span>

                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {s.summary}
                </p>

                <ul className="mt-5 space-y-2 border-t border-border pt-5">
                  {s.includes.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-foreground">
                      <BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
}