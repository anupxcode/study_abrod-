import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  GraduationCap,
  Globe2,
  FileCheck2,
  Plane,
  HeartHandshake,
  ShieldCheck,
  Eye,
  Users,
} from "lucide-react";

export const metadata = {
  title: "About Us | GlobalPath Study",
  description:
    "GlobalPath Study helps students from Bangladesh find the right university abroad, apply with confidence, and settle in smoothly.",
};

const stats = [
  { value: "2,500+", label: "Students guided" },
  { value: "300+", label: "Partner universities" },
  { value: "15", label: "Countries covered" },
  { value: "96%", label: "Visa success rate" },
];

const help = [
  {
    icon: GraduationCap,
    title: "Course and university selection",
    text: "We match your results, budget and goals to programs you can actually get into.",
  },
  {
    icon: FileCheck2,
    title: "Application and documents",
    text: "We check your SOP, transcripts and forms before anything is submitted.",
  },
  {
    icon: Globe2,
    title: "Scholarships and funding",
    text: "We point you to scholarships you qualify for and explain the real cost of each country.",
  },
  {
    icon: Plane,
    title: "Visa and pre-departure",
    text: "From the visa interview to your first week abroad, we stay with you.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Honest advice",
    text: "If a university or country is not a good fit for you, we say so.",
  },
  {
    icon: Eye,
    title: "Clear costs",
    text: "You see every fee up front. No surprise charges later.",
  },
  {
    icon: HeartHandshake,
    title: "Student first",
    text: "Our counselors are paid to find the right fit, not to fill seats.",
  },
  {
    icon: Users,
    title: "Family included",
    text: "We talk to parents too, in plain language, so everyone is on the same page.",
  },
];

const team = [
  { name: "Your Name", role: "Founder and Lead Counselor" },
  { name: "Team Member", role: "Admissions Specialist" },
  { name: "Team Member", role: "Visa Consultant" },
  { name: "Team Member", role: "Scholarship Advisor" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground">
        {/* Hero */}
        <section className="relative overflow-hidden bg-secondary">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 top-10 h-64 w-64 rounded-full bg-primary/15 blur-2xl"
            style={{ animation: "float 7s ease-in-out infinite" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-accent/30 blur-2xl"
            style={{ animation: "float 9s ease-in-out infinite" }}
          />
          <div className="relative mx-auto max-w-5xl px-6 py-20 md:py-28">
            <h1 className="font-heading max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              We help Bangladeshi students study abroad without the guesswork.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/75">
              GlobalPath Study is a counseling team that walks with you from
              choosing a country to landing at your university.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/destinations"
                className="rounded-[var(--radius)] bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Explore destinations
              </Link>
              <Link
                href="/contact"
                className="rounded-[var(--radius)] border border-border bg-white px-6 py-3 font-medium transition-colors hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Talk to a counselor
              </Link>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-5 md:py-24">
          <h2 className="font-heading text-3xl font-bold md:col-span-2">
            Why we started
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-foreground/80 md:col-span-3">
            <p>
              Most students we meet have the grades and the drive. What they
              lack is clear, trustworthy information: which country suits their
              budget, which universities accept their profile, and what the
              visa office really looks for.
            </p>
            <p>
              We built GlobalPath Study to fix that. Every student gets a
              counselor who has been through the process, explains each step in
              simple words, and stays until the visa is in hand.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-border bg-muted">
          <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="font-heading text-4xl font-bold text-primary">
                  {s.value}
                </dd>
                <dt className="mt-1 text-sm text-foreground/70">{s.label}</dt>
              </div>
            ))}
          </dl>
        </section>

        {/* How we help */}
        <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <h2 className="font-heading max-w-xl text-3xl font-bold">
            What we do for you
          </h2>
          <ul className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {help.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius)] bg-secondary text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold">
                    {title}
                  </h3>
                  <p className="mt-1 text-foreground/75">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Values */}
        <section className="bg-secondary">
          <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
            <h2 className="font-heading text-3xl font-bold">
              How we work
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {values.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-[var(--radius)] border border-border bg-white p-6"
                >
                  <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="font-heading mt-4 text-lg font-semibold">
                    {title}
                  </h3>
                  <p className="mt-1 text-foreground/75">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <h2 className="font-heading text-3xl font-bold">Meet the team</h2>
          <ul className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {team.map((m, i) => (
              <li key={i}>
                <div
                  className="flex aspect-square items-center justify-center rounded-[var(--radius)] bg-secondary font-heading text-3xl font-bold text-primary"
                  aria-hidden="true"
                >
                  {m.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </div>
                <p className="mt-3 font-medium">{m.name}</p>
                <p className="text-sm text-foreground/70">{m.role}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-6 pb-20">
          <div className="rounded-[var(--radius)] bg-foreground px-8 py-12 text-white md:px-14">
            <h2 className="font-heading max-w-xl text-3xl font-bold">
              Book a free counseling session
            </h2>
            <p className="mt-3 max-w-lg text-white/75">
              Tell us your results and your budget. We will suggest countries
              and universities that fit.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-[var(--radius)] bg-accent px-6 py-3 font-medium text-foreground transition-colors hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book free session
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}