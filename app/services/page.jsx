import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  ServicesHero,
  ServicesExplorer,
  CONSULT_HREF,
} from "@/components/services/services-interactive";
import { steps, faqs } from "@/lib/services-data";

export const metadata = {
  title: "Services | Study Abroad Support",
  description:
    "Course shortlisting, application support, scholarships, visa assistance and pre-departure help for students going abroad.",
};

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        <ServicesHero />
        <ServicesExplorer />

        {/* Process: a real sequence, so numbered steps are appropriate */}
        <section className="bg-muted">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
                How it works
              </h2>
              <p className="mt-3 text-foreground/70">
                Five steps from your first question to your first day abroad.
              </p>
            </div>

            <ol className="relative mt-10 max-w-3xl space-y-8 border-l-2 border-border pl-8">
              {steps.map((step, i) => (
                <li key={step.title} className="relative">
                  <span className="absolute -left-[2.9rem] grid size-9 place-items-center rounded-full bg-primary font-heading text-sm font-semibold text-primary-foreground ring-4 ring-muted">
                    {i + 1}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1 max-w-prose text-foreground/70">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ: native details/summary, keyboard accessible with no extra JS */}
        <section className="mx-auto max-w-3xl px-4 py-16 md:py-20">
          <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
            Common questions
          </h2>

          <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-background">
            {faqs.map((f) => (
              <details key={f.q} className="group p-5">
                <summary
                  className={`flex cursor-pointer list-none items-center justify-between gap-4 rounded-md font-heading font-medium text-foreground ${focusRing} [&::-webkit-details-marker]:hidden`}
                >
                  {f.q}
                  <ChevronDown className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 max-w-prose text-foreground/70">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Closing call to action */}
        <section className="px-4 pb-20">
          <div className="mx-auto max-w-6xl rounded-3xl bg-primary px-6 py-14 text-center md:px-12">
            <h2 className="mx-auto max-w-2xl font-heading text-3xl font-semibold text-primary-foreground md:text-4xl">
              Not sure which service you need?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
              Book a free counseling session. We will review your profile and
              point you to the right next step.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href={CONSULT_HREF}
                className={`inline-flex h-12 items-center rounded-xl bg-accent px-6 font-medium text-foreground transition hover:opacity-90 ${focusRing} focus-visible:outline-white`}
              >
                Book free counseling
              </Link>
              <Link
                href="/destinations"
                className={`inline-flex h-12 items-center rounded-xl border border-white/40 px-6 font-medium text-primary-foreground transition hover:bg-white/10 ${focusRing} focus-visible:outline-white`}
              >
                Explore destinations
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}