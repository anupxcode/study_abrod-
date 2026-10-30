"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import {
  MessageCircle,
  Globe,
  GraduationCap,
  FileText,
  Send,
  Wallet,
  Stamp,
  Plane,
  CheckCircle2,
  Clock,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  processSteps,
  processDocuments,
  processPhases,
  processFaqs,
} from "@/lib/mock-data";

const ICONS = { MessageCircle, Globe, GraduationCap, FileText, Send, Wallet, Stamp, Plane };

/* ---------- small helpers ---------- */

function useReveal() {
  const reduce = useReducedMotion();
  return (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.5, ease: "easeOut", delay },
        };
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function MiniList({ title, items }) {
  return (
    <div>
      <p className="mb-2 text-sm font-semibold text-foreground">{title}</p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- sections ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background">
      {/* decorative floating shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-16 size-56 rounded-full bg-primary/10 motion-safe:animate-[float_7s_ease-in-out_infinite]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-32 size-40 rounded-full bg-accent/30 motion-safe:animate-[float_6s_ease-in-out_infinite]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 left-1/3 size-20 rounded-full bg-primary/15 motion-safe:animate-[float_8s_ease-in-out_infinite]"
      />

      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center md:py-28">
        <span className="inline-block rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-primary">
          How it works
        </span>
        <h1 className="font-heading mt-6 text-4xl font-bold leading-tight text-foreground md:text-6xl">
          Your journey abroad, step by step
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          From your first counseling session to landing on campus, we guide you
          through every stage.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">Book free counseling</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/destinations">Explore destinations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function StepsTimeline() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const reveal = useReveal();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <SectionHeading
        title="Eight steps from idea to arrival"
        subtitle="Each step shows what you do and what we do for you."
      />

      <div ref={ref} className="relative">
        {/* base line + scroll-filled line */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-5 top-0 w-0.5 -translate-x-1/2 bg-border md:left-1/2"
        />
        <motion.div
          aria-hidden="true"
          style={{ scaleY: reduce ? 1 : scaleY }}
          className="absolute bottom-0 left-5 top-0 w-0.5 origin-top -translate-x-1/2 bg-primary md:left-1/2"
        />

        <ol className="space-y-10 md:space-y-14">
          {processSteps.map((step, i) => {
            const Icon = ICONS[step.icon] ?? MessageCircle;
            const left = i % 2 === 0;
            return (
              <li
                key={step.id}
                className="relative grid pl-14 md:grid-cols-2 md:gap-20 md:pl-0"
              >
                {/* number badge on the line */}
                <span className="absolute left-0 top-2 z-10 flex size-10 items-center justify-center rounded-full border-4 border-background bg-primary font-heading text-sm font-semibold text-primary-foreground shadow md:left-1/2 md:-translate-x-1/2">
                  {step.id}
                </span>

                <motion.article
                  {...reveal()}
                  className={cn(
                    "rounded-[var(--radius)] border border-border bg-card p-6 shadow-sm",
                    left ? "md:col-start-1" : "md:col-start-2"
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      <Clock className="size-3.5" aria-hidden="true" />
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="font-heading mt-4 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>

                  <div className="mt-5 grid gap-5 border-t border-border pt-5 sm:grid-cols-2">
                    <MiniList title="What you do" items={step.youDo} />
                    <MiniList title="What we do" items={step.weDo} />
                  </div>
                </motion.article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function Documents() {
  const reveal = useReveal();
  const levels = [
    { value: "undergraduate", label: "Undergraduate" },
    { value: "masters", label: "Masters" },
    { value: "phd", label: "PhD" },
  ];

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading
          title="Documents you'll need"
          subtitle="Pick your study level to see the usual checklist."
        />

        <motion.div {...reveal()}>
          <Tabs defaultValue="undergraduate" className="w-full">
            <TabsList className="mx-auto grid w-full max-w-md grid-cols-3">
              {levels.map((l) => (
                <TabsTrigger key={l.value} value={l.value}>
                  {l.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {levels.map((l) => (
              <TabsContent key={l.value} value={l.value}>
                <ul className="mt-6 space-y-3 rounded-[var(--radius)] border border-border bg-card p-6">
                  {processDocuments[l.value].map((doc) => (
                    <li key={doc} className="flex gap-3 text-foreground">
                      <CheckCircle2
                        className="mt-0.5 size-5 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </Tabs>

          <p className="mt-4 rounded-[var(--radius)] bg-accent/20 px-4 py-3 text-sm text-foreground">
            Requirements vary by country and university. We confirm the exact list
            for your choices during counseling.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function TimelineBar() {
  const reveal = useReveal();
  const total = 10;

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <SectionHeading
        title="A typical timeline"
        subtitle="Most students go from first session to arrival in 6 to 10 months."
      />

      <motion.div
        {...reveal()}
        className="rounded-[var(--radius)] border border-border bg-card p-5 md:p-8"
      >
        <div className="mb-3 hidden justify-between text-xs text-muted-foreground md:flex">
          {Array.from({ length: 6 }, (_, i) => (
            <span key={i}>Month {i * 2}</span>
          ))}
        </div>

        <ul className="space-y-4">
          {processPhases.map((p) => (
            <li key={p.label}>
              <div className="mb-1.5 flex items-baseline justify-between gap-3">
                <span className="text-sm font-medium text-foreground">{p.label}</span>
                <span className="text-xs text-muted-foreground">{p.note}</span>
              </div>
              <div className="relative h-3 rounded-full bg-secondary">
                <div
                  title={`${p.label}: ${p.note}`}
                  className="absolute top-0 h-3 rounded-full bg-primary transition-colors hover:bg-accent"
                  style={{
                    left: `${(p.start / total) * 100}%`,
                    width: `${((p.end - p.start) / total) * 100}%`,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

function Faq() {
  const reveal = useReveal();
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading title="Questions students ask us" />
        <motion.div {...reveal()}>
          <Accordion
            type="single"
            collapsible
            className="rounded-[var(--radius)] border border-border bg-card px-6"
          >
            {processFaqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-heading text-base font-medium">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCta() {
  const reveal = useReveal();
  return (
    <section className="px-4 py-16 md:py-24">
      <motion.div
        {...reveal()}
        className="mx-auto max-w-5xl overflow-hidden rounded-[var(--radius)] bg-primary px-6 py-14 text-center text-primary-foreground md:px-12"
      >
        <h2 className="font-heading text-3xl font-semibold md:text-4xl">
          Ready to start your journey?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85">
          Book a free session and get a clear plan for your country, course and
          timeline.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 bg-accent font-semibold text-foreground hover:bg-accent/90"
        >
          <Link href="/contact">Book free counseling</Link>
        </Button>
      </motion.div>
    </section>
  );
}

/* ---------- page ---------- */

export default function ProcessView() {
  return (
    <>
      <Hero />
      <StepsTimeline />
      <Documents />
      <TimelineBar />
      <Faq />
      <FinalCta />
    </>
  );
}