import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import ProcessView from "@/components/process-view";

export const metadata = {
  title: "Our Process | Study Abroad Step by Step",
  description:
    "From free counseling to landing on campus, see every step of studying abroad and how we guide you through it.",
};

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProcessView />
      </main>
      <Footer />
    </>
  );
}import Link from "next/link";
import { ArrowUpRight, PlaneTakeoff } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// Check these slugs match your mock-data destinations.
const countries = [
  { slug: "uk", name: "United Kingdom", note: "1-year masters, top research universities", from: "From £11,000 / year" },
  { slug: "usa", name: "United States", note: "Wide course choice, strong STEM funding", from: "From $15,000 / year" },
  { slug: "canada", name: "Canada", note: "Post-study work routes and PR pathways", from: "From CA$14,000 / year" },
  { slug: "australia", name: "Australia", note: "Work rights during study, high-ranked unis", from: "From A$18,000 / year" },
  { slug: "germany", name: "Germany", note: "Low or no tuition at public universities", from: "From €0 tuition" },
];

const stops = [
  { title: "Talk to us", text: "A free session to map your goals and budget." },
  { title: "Get your offer", text: "We shortlist, prepare and submit your applications." },
  { title: "Get your visa", text: "File, practise the interview, fix gaps early." },
  { title: "Take off", text: "Flights, housing and a briefing before you leave." },
];

const selectCls =
  "mt-1 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring";

function BoardingPass() {
  return (
    <form
      action="/destinations"
      method="get"
      className="rise relative mt-10 grid overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-primary/10 md:grid-cols-[1fr_auto_220px]"
      style={{ "--d": "0.35s" }}
    >
      <div className="grid gap-4 p-6 sm:grid-cols-3">
        <label className="text-xs font-semibold text-muted-foreground">
          Country
          <select name="country" className={selectCls} defaultValue="">
            <option value="">Any country</option>
            {countries.map((c) => (
              <option key={c.slug} value={c.slug}>{c.name}</option>
            ))}
          </select>
        </label>
        <label className="text-xs font-semibold text-muted-foreground">
          Level
          <select name="level" className={selectCls} defaultValue="">
            <option value="">Any level</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="masters">Masters</option>
            <option value="phd">PhD</option>
          </select>
        </label>
        <label className="text-xs font-semibold text-muted-foreground">
          Subject
          <select name="subject" className={selectCls} defaultValue="">
            <option value="">Any subject</option>
            <option value="computer-science">Computer Science</option>
            <option value="business">Business</option>
            <option value="engineering">Engineering</option>
            <option value="economics">Economics</option>
          </select>
        </label>
      </div>

      {/* perforation */}
      <div aria-hidden="true" className="relative hidden w-0 border-l-2 border-dashed border-border md:block">
        <span className="absolute -left-3 -top-3 size-6 rounded-full bg-background" />
        <span className="absolute -bottom-3 -left-3 size-6 rounded-full bg-background" />
      </div>

      <div className="flex items-center justify-center border-t-2 border-dashed border-border bg-secondary p-6 md:border-t-0">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          <PlaneTakeoff className="size-5" aria-hidden="true" />
          Find programs
        </button>
      </div>
    </form>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-[28rem] rounded-full bg-secondary motion-safe:animate-[float_9s_ease-in-out_infinite]"
          />
          <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 md:pt-24">
            <h1 className="rise font-heading max-w-4xl text-5xl font-extrabold leading-[1.02] md:text-7xl">
              Dhaka to your first lecture, planned for you.
            </h1>
            <p className="rise mt-6 max-w-xl text-lg text-muted-foreground" style={{ "--d": "0.15s" }}>
              Free counseling, university matching and visa support. One team
              from your first question to your arrival day.
            </p>
            <BoardingPass />
          </div>
        </section>

        {/* DESTINATIONS as rows */}
        <section className="border-t border-border bg-card">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <h2 className="font-heading max-w-xl text-3xl font-bold md:text-5xl">
              Where do you want to study?
            </h2>
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {countries.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/destinations/${c.slug}`}
                    className="group grid items-center gap-2 py-6 transition-colors hover:bg-secondary/60 md:grid-cols-[1.2fr_2fr_1fr_auto] md:gap-6 md:px-4"
                  >
                    <span className="font-heading text-2xl font-bold">{c.name}</span>
                    <span className="text-muted-foreground">{c.note}</span>
                    <span className="text-sm font-semibold text-primary">{c.from}</span>
                    <ArrowUpRight
                      className="hidden size-6 text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:block"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PROCESS teaser as a flight path */}
        <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-heading max-w-xl text-3xl font-bold md:text-5xl">
              Four stops between you and campus
            </h2>
            <Link href="/process" className="font-semibold text-primary underline underline-offset-4">
              See the full process
            </Link>
          </div>
          <ol className="relative mt-12 grid gap-8 md:grid-cols-4">
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-[11px] hidden border-t-2 border-dashed border-primary/40 md:block"
            />
            {stops.map((s) => (
              <li key={s.title} className="relative">
                <span className="relative z-10 block size-6 rounded-full border-4 border-background bg-accent" />
                <h3 className="font-heading mt-4 text-xl font-bold">{s.title}</h3>
                <p className="mt-1 text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <section className="px-4 pb-20">
          <div className="mx-auto max-w-6xl rounded-[2rem] bg-primary px-6 py-16 text-center text-primary-foreground md:py-24">
            <h2 className="font-heading mx-auto max-w-2xl text-4xl font-extrabold md:text-6xl">
              Book your free session this week
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80">
              Bring your results and your questions. Leave with a clear plan.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition-transform hover:scale-[1.04]"
            >
              Book free counseling
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}