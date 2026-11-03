import Link from "next/link";
import { ChevronDown, CheckCircle2, Clock } from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CONSULT_HREF } from "@/components/services/services-interactive";

export const metadata = {
  title: "Our Process | Study Abroad Step by Step",
  description:
    "From free counseling to landing on campus, see every step of studying abroad and what you and our team do at each stage.",
};

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const steps = [
  {
    title: "Free counseling",
    duration: "1 day",
    text: "We learn your goals, results and budget, then outline a realistic study plan.",
    you: ["Share your results and goals", "Tell us your budget"],
    we: ["Review your profile", "Outline a personal plan"],
  },
  {
    title: "Choose country and course",
    duration: "1 to 2 weeks",
    text: "Compare destinations by cost, career outcomes, post-study work options and scholarships.",
    you: ["Pick your top 2 or 3 countries", "Decide level and subject"],
    we: ["Compare tuition and living costs", "Explain work and PR options"],
  },
  {
    title: "Shortlist universities",
    duration: "1 week",
    text: "A balanced list of safe, target and ambitious programs that fit your profile.",
    you: ["Review the shortlist", "Confirm your final choices"],
    we: ["Check entry requirements", "Rank by fit and budget"],
  },
  {
    title: "Prepare documents and tests",
    duration: "2 to 8 weeks",
    text: "Transcripts, SOP, recommendation letters and your IELTS or TOEFL score.",
    you: ["Collect certificates", "Book your English test"],
    we: ["Polish your SOP and CV", "Verify every document"],
  },
  {
    title: "Apply and get your offer",
    duration: "2 to 6 weeks",
    text: "We submit and track every application and help you choose the best offer.",
    you: ["Approve your applications", "Reply to university emails"],
    we: ["Submit and track applications", "Compare offers with you"],
  },
  {
    title: "Funding and scholarships",
    duration: "Runs alongside",
    text: "Plan tuition, apply for scholarships and prepare the proof of funds your visa needs.",
    you: ["Prepare bank documents", "Submit scholarship forms"],
    we: ["Match scholarships to your profile", "Guide your financial proof"],
  },
  {
    title: "Visa application",
    duration: "2 to 8 weeks",
    text: "File a complete application, attend biometrics and practise for the interview.",
    you: ["Attend biometrics", "Join mock interviews"],
    we: ["Audit your visa file", "Coach you for the interview"],
  },
  {
    title: "Pre-departure and arrival",
    duration: "1 to 2 weeks",
    text: "Flights, housing and a briefing so you land with a clear plan.",
    you: ["Book your flight", "Confirm accommodation"],
    we: ["Run the pre-departure briefing", "Share arrival contacts"],
  },
];

const documents = [
  {
    level: "Bachelor",
    items: [
      "Passport (valid 12+ months)",
      "SSC and HSC certificates and transcripts",
      "English test score",
      "Personal statement",
      "1 or 2 recommendation letters",
      "Bank statement or sponsor papers",
    ],
  },
  {
    level: "Master",
    items: [
      "Passport (valid 12+ months)",
      "Bachelor certificate and transcripts",
      "IELTS or TOEFL score",
      "Statement of purpose",
      "2 recommendation letters",
      "Updated CV",
    ],
  },
  {
    level: "PhD",
    items: [
      "Passport (valid 12+ months)",
      "Masters and bachelor transcripts",
      "Research proposal",
      "2 or 3 academic references",
      "Publications list",
      "Funding proof or supervisor email",
    ],
  },
];

// Months on a 0 to 10 scale
const phases = [
  { label: "Counseling and shortlist", start: 0, end: 1.5 },
  { label: "Documents and tests", start: 1, end: 4 },
  { label: "Applications and offer", start: 3, end: 6 },
  { label: "Funding and scholarships", start: 3, end: 7 },
  { label: "Visa", start: 6, end: 8.5 },
  { label: "Departure", start: 8.5, end: 10 },
];

const faqs = [
  { q: "Is the first counseling session really free?", a: "Yes. The first session is free with no obligation. We review your profile and explain your options." },
  { q: "How long does the whole process take?", a: "Most students need 6 to 10 months from the first session to landing. English tests and visa processing change the timeline the most." },
  { q: "Can I apply to more than one university?", a: "Yes. We usually recommend 4 to 6 applications across safe, target and ambitious choices." },
  { q: "What if my visa is refused?", a: "We review the refusal reason with you, fix the gaps in your file and guide you on reapplying or choosing another destination." },
  { q: "Can I work while I study?", a: "Most destinations allow part-time work with weekly hour limits. The rules differ by country, so we explain them during counseling." },
];

export default function ProcessPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-secondary to-background">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center md:py-24">
            <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">
              Your journey abroad, step by step
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
              From your first counseling session to landing on campus, see what you
              do and what we do at every stage.
            </p>
            <ul className="mt-6 flex flex-wrap justify-center gap-2 text-sm font-medium text-foreground">
              {["8 clear steps", "6 to 10 months", "Free first session"].map((c) => (
                <li key={c} className="rounded-full border border-border bg-background px-4 py-1.5">
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href={CONSULT_HREF}
                className={`inline-flex h-12 items-center rounded-xl bg-primary px-6 font-medium text-primary-foreground transition hover:opacity-90 ${focusRing}`}
              >
                Book free counseling
              </Link>
              <Link
                href="/destinations"
                className={`inline-flex h-12 items-center rounded-xl border border-border bg-background px-6 font-medium text-foreground transition hover:bg-muted ${focusRing}`}
              >
                Explore destinations
              </Link>
            </div>
          </div>
        </section>

        {/* Steps: a real sequence, so numbered steps are appropriate */}
        <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Eight steps to campus
            </h2>
            <p className="mt-3 text-foreground/70">
              Each step shows how long it usually takes and who does what.
            </p>
          </div>

          <ol className="relative mt-10 max-w-4xl space-y-8 border-l-2 border-border pl-8">
            {steps.map((step, i) => (
              <li key={step.title} className="relative">
                <span className="absolute -left-[2.9rem] grid size-9 place-items-center rounded-full bg-primary font-heading text-sm font-semibold text-primary-foreground ring-4 ring-background">
                  {i + 1}
                </span>

                <div className="rounded-2xl border border-border bg-background p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                      <Clock className="size-3.5 text-primary" aria-hidden="true" />
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-2 max-w-prose text-foreground/70">{step.text}</p>

                  <div className="mt-5 grid gap-5 border-t border-border pt-5 sm:grid-cols-2">
                    {[
                      ["What you do", step.you],
                      ["What we do", step.we],
                    ].map(([title, list]) => (
                      <div key={title}>
                        <p className="font-heading text-sm font-semibold text-foreground">{title}</p>
                        <ul className="mt-2 space-y-1.5">
                          {list.map((item) => (
                            <li key={item} className="flex gap-2 text-sm text-foreground/70">
                              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Documents */}
        <section className="bg-muted">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
                Documents you will need
              </h2>
              <p className="mt-3 text-foreground/70">
                Requirements vary by country and university. We confirm the exact
                list for your choices during counseling.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {documents.map((d) => (
                <div key={d.level} className="rounded-2xl border border-border bg-background p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{d.level}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {d.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-foreground/70">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typical timeline */}
        <section className="mx-auto max-w-4xl px-4 py-16 md:py-20">
          <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
            A typical timeline
          </h2>
          <p className="mt-3 text-foreground/70">
            Phases overlap, so most students go from first session to arrival in 6
            to 10 months.
          </p>

          <ul className="mt-8 space-y-4 rounded-2xl border border-border bg-background p-6">
            {phases.map((p) => (
              <li key={p.label}>
                <p className="mb-1.5 text-sm font-medium text-foreground">{p.label}</p>
                <div className="relative h-3 rounded-full bg-secondary">
                  <div
                    className="absolute top-0 h-3 rounded-full bg-primary"
                    style={{
                      left: `${(p.start / 10) * 100}%`,
                      width: `${((p.end - p.start) / 10) * 100}%`,
                    }}
                  />
                </div>
              </li>
            ))}
            <li className="flex justify-between pt-1 text-xs text-foreground/60" aria-hidden="true">
              <span>Month 0</span>
              <span>Month 5</span>
              <span>Month 10</span>
            </li>
          </ul>
        </section>

        {/* FAQ: native details/summary, keyboard accessible with no extra JS */}
        <section className="bg-muted">
          <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
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
          </div>
        </section>

        {/* Closing call to action */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl rounded-3xl bg-primary px-6 py-14 text-center md:px-12">
            <h2 className="mx-auto max-w-2xl font-heading text-3xl font-semibold text-primary-foreground md:text-4xl">
              Ready to start your journey?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
              Book a free counseling session and leave with a clear plan for your
              country, course and timeline.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href={CONSULT_HREF}
                className={`inline-flex h-12 items-center rounded-xl bg-accent px-6 font-medium text-foreground transition hover:opacity-90 ${focusRing} focus-visible:outline-white`}
              >
                Book free counseling
              </Link>
              <Link
                href="/services"
                className={`inline-flex h-12 items-center rounded-xl border border-white/40 px-6 font-medium text-primary-foreground transition hover:bg-white/10 ${focusRing} focus-visible:outline-white`}
              >
                See our services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}