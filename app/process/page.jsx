"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MessageCircle, Globe, GraduationCap, FileText, Send, Wallet, Stamp, Plane,
  CheckCircle2, Circle, Clock, ChevronRight, CalendarDays, Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const steps = [
  { id: 1, icon: MessageCircle, color: "#125BC9", title: "Free counseling", duration: "1 day", before: 10,
    text: "We listen first, then map your goals, grades and budget into a realistic study plan.",
    you: ["Share your results and goals", "Tell us your budget"], we: ["Review your profile", "Outline a personal plan"] },
  { id: 2, icon: Globe, color: "#0FB5A6", title: "Choose country and course", duration: "1 to 2 weeks", before: 9,
    text: "Compare destinations by cost, career outcomes, post-study visa and scholarships.",
    you: ["Pick your top 2 or 3 countries", "Decide level and subject"], we: ["Compare tuition and living costs", "Explain work and PR options"] },
  { id: 3, icon: GraduationCap, color: "#6C5CE7", title: "Shortlist universities", duration: "1 week", before: 8,
    text: "A balanced list of safe, target and ambitious programs that fit your profile.",
    you: ["Review the shortlist", "Confirm final choices"], we: ["Check entry requirements", "Rank by fit and budget"] },
  { id: 4, icon: FileText, color: "#F5B301", title: "Documents and tests", duration: "2 to 8 weeks", before: 7,
    text: "Transcripts, SOP, recommendation letters and your IELTS or TOEFL score.",
    you: ["Collect certificates", "Book your English test"], we: ["Polish your SOP and CV", "Verify every document"] },
  { id: 5, icon: Send, color: "#FF6B5E", title: "Apply and get your offer", duration: "2 to 6 weeks", before: 5,
    text: "We submit and track every application and help you pick the best offer.",
    you: ["Approve applications", "Reply to university emails"], we: ["Submit and track", "Compare offers with you"] },
  { id: 6, icon: Wallet, color: "#12A150", title: "Funding and scholarships", duration: "Runs alongside", before: 5,
    text: "Tuition plan, scholarship forms and the proof of funds your visa needs.",
    you: ["Prepare bank documents", "Submit scholarship forms"], we: ["Match scholarships to you", "Guide your financial proof"] },
  { id: 7, icon: Stamp, color: "#E8590C", title: "Visa application", duration: "2 to 8 weeks", before: 3,
    text: "File a complete application, attend biometrics and practise the interview.",
    you: ["Attend biometrics", "Join mock interviews"], we: ["Audit your visa file", "Coach the interview"] },
  { id: 8, icon: Plane, color: "#0B1F44", title: "Pre-departure and arrival", duration: "1 to 2 weeks", before: 1,
    text: "Flights, housing, packing and a briefing so you land with a plan.",
    you: ["Book your flight", "Confirm accommodation"], we: ["Run the pre-departure briefing", "Share arrival contacts"] },
];

const docs = {
  Bachelor: ["Passport (12+ months valid)", "SSC and HSC certificates and transcripts", "English test score", "Personal statement", "1 or 2 recommendation letters", "Bank statement or sponsor papers"],
  Master: ["Passport (12+ months valid)", "Bachelor certificate and transcripts", "IELTS or TOEFL score", "Statement of purpose", "2 recommendation letters", "Updated CV", "Bank statement or scholarship letter"],
  PhD: ["Passport (12+ months valid)", "Masters and bachelor transcripts", "Research proposal", "2 or 3 academic references", "Publications list", "English test score", "Funding proof or supervisor email"],
};

const faqs = [
  ["Is the first counseling session really free?", "Yes. The first session is free with no obligation."],
  ["How long does the whole process take?", "Most students need 6 to 10 months from first session to landing. Tests and visa processing change it the most."],
  ["Can I apply to more than one university?", "Yes. We usually recommend 4 to 6 applications across safe, target and ambitious choices."],
  ["What if my visa is refused?", "We review the refusal reason, fix the gaps in your file and guide you on reapplying or choosing another destination."],
];

const intakes = [{ label: "January", m: 0 }, { label: "May", m: 4 }, { label: "September", m: 8 }];

function startLabel(intakeMonth, before) {
  const now = new Date();
  let intake = new Date(now.getFullYear(), intakeMonth, 1);
  if (intake <= new Date(now.getFullYear(), now.getMonth() + 2, 1)) intake = new Date(now.getFullYear() + 1, intakeMonth, 1);
  const start = new Date(intake.getFullYear(), intake.getMonth() - before, 1);
  if (start <= now) return "Start now";
  return start.toLocaleDateString("en-GB", { month: "short", year: "numeric" });
}

export default function ProcessPage() {
  const [active, setActive] = useState(1);
  const [done, setDone] = useState([]);
  const [intake, setIntake] = useState(null);
  const [level, setLevel] = useState("Bachelor");
  const [ticked, setTicked] = useState({});

  const step = steps.find((s) => s.id === active);
  const Icon = step.icon;
  const pct = Math.round((done.length / steps.length) * 100);
  const toggleDone = (id) => setDone((d) => (d.includes(id) ? d.filter((x) => x !== id) : [...d, id]));

  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden text-white" style={{ background: "linear-gradient(135deg,#0B1F44 0%,#0E3A8C 55%,#125BC9 100%)" }}>
          <div aria-hidden="true" className="absolute -right-20 -top-20 size-80 rounded-full bg-[#F5B301]/25 blur-3xl motion-safe:animate-[float_8s_ease-in-out_infinite]" />
          <div aria-hidden="true" className="absolute -bottom-24 left-10 size-72 rounded-full bg-[#0FB5A6]/25 blur-3xl motion-safe:animate-[float_10s_ease-in-out_infinite]" />
          <div className="relative mx-auto max-w-5xl px-4 pb-28 pt-20 text-center md:pt-28">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur">
              <Sparkles className="size-4 text-[#F5B301]" aria-hidden="true" /> 8 clear steps, zero guesswork
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Your journey abroad, <span className="text-[#F5B301]">step by step</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
              Track your progress, plan your dates by intake and see exactly what you and our team do at every stage.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="rounded-full bg-[#F5B301] px-7 py-3.5 font-semibold text-[#0B1F44] transition-transform hover:scale-105">Book free counseling</Link>
              <Link href="/destinations" className="rounded-full border border-white/40 px-7 py-3.5 font-semibold transition-colors hover:bg-white/10">Explore destinations</Link>
            </div>
          </div>
        </section>

        {/* INTAKE PLANNER */}
        <section className="relative z-10 mx-auto -mt-16 max-w-6xl px-4">
          <div className="rounded-3xl border border-border bg-white p-6 shadow-2xl shadow-[#125BC9]/15 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="flex items-center gap-2 text-2xl font-bold text-[#0B1F44]">
                  <CalendarDays className="size-6 text-[#125BC9]" aria-hidden="true" /> Plan your dates
                </h2>
                <p className="mt-1 text-muted-foreground">Pick your target intake and see when to start each step.</p>
              </div>
              <div className="flex gap-2" role="group" aria-label="Choose intake">
                {intakes.map((i) => (
                  <button key={i.m} type="button" onClick={() => setIntake(i.m)}
                    className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${intake === i.m ? "border-[#125BC9] bg-[#125BC9] text-white" : "border-border bg-white text-[#0B1F44] hover:bg-secondary"}`}>
                    {i.label}
                  </button>
                ))}
              </div>
            </div>
            {intake === null ? (
              <p className="mt-6 rounded-2xl bg-secondary px-4 py-6 text-center text-muted-foreground">Choose an intake above to see your personal start dates.</p>
            ) : (
              <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((s) => (
                  <li key={s.id} className="rounded-2xl border border-border p-4" style={{ borderTop: `4px solid ${s.color}` }}>
                    <p className="text-xs font-semibold text-muted-foreground">Step {s.id}</p>
                    <p className="mt-1 font-semibold text-[#0B1F44]">{s.title}</p>
                    <p className="mt-2 text-sm font-bold" style={{ color: s.color }}>{startLabel(intake, s.before)}</p>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </section>

        {/* STEP NAVIGATOR */}
        <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-xl text-3xl font-bold text-[#0B1F44] md:text-4xl">Explore every step</h2>
            <div className="w-full max-w-xs">
              <div className="mb-1 flex justify-between text-sm font-medium text-[#0B1F44]"><span>Your progress</span><span>{pct}%</span></div>
              <div className="h-3 overflow-hidden rounded-full bg-secondary" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
                <div className="h-full rounded-full bg-gradient-to-r from-[#125BC9] to-[#0FB5A6] transition-all duration-500" style={{ width: `${pct}%` }} />
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
            <ul className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
              {steps.map((s) => (
                <li key={s.id} className="shrink-0 lg:shrink">
                  <button type="button" onClick={() => setActive(s.id)} aria-current={active === s.id}
                    className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all ${active === s.id ? "border-transparent bg-[#0B1F44] text-white shadow-lg" : "border-border bg-white text-[#0B1F44] hover:bg-secondary"}`}>
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: s.color }}>{s.id}</span>
                    <span className="flex-1 whitespace-nowrap text-sm font-semibold lg:whitespace-normal">{s.title}</span>
                    {done.includes(s.id) && <CheckCircle2 className="size-5 text-[#12A150]" aria-label="Done" />}
                  </button>
                </li>
              ))}
            </ul>

            <article key={step.id} className="rounded-3xl border border-border bg-white p-6 shadow-lg md:p-8" style={{ borderTop: `6px solid ${step.color}` }}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="flex size-14 items-center justify-center rounded-2xl" style={{ background: `${step.color}1f`, color: step.color }}>
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-4 py-1.5 text-sm font-medium text-[#0B1F44]">
                  <Clock className="size-4" aria-hidden="true" /> {step.duration}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-[#0B1F44] md:text-3xl">{step.id}. {step.title}</h3>
              <p className="mt-2 text-lg text-muted-foreground">{step.text}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[["What you do", step.you, "#F5B301"], ["What we do", step.we, "#125BC9"]].map(([t, list, c]) => (
                  <div key={t} className="rounded-2xl p-5" style={{ background: `${c}14` }}>
                    <p className="font-bold text-[#0B1F44]">{t}</p>
                    <ul className="mt-3 space-y-2">
                      {list.map((x) => (
                        <li key={x} className="flex gap-2 text-sm text-[#0B1F44]/80"><CheckCircle2 className="mt-0.5 size-4 shrink-0" style={{ color: c === "#F5B301" ? "#B98900" : c }} aria-hidden="true" />{x}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button type="button" onClick={() => toggleDone(step.id)}
                  className={`rounded-full px-6 py-3 font-semibold transition-colors ${done.includes(step.id) ? "bg-[#12A150] text-white" : "bg-[#125BC9] text-white hover:bg-[#0E4BA6]"}`}>
                  {done.includes(step.id) ? "Completed" : "Mark as done"}
                </button>
                {step.id < steps.length && (
                  <button type="button" onClick={() => setActive(step.id + 1)} className="inline-flex items-center gap-1 rounded-full border border-border px-6 py-3 font-semibold text-[#0B1F44] hover:bg-secondary">
                    Next step <ChevronRight className="size-4" aria-hidden="true" />
                  </button>
                )}
              </div>
            </article>
          </div>
        </section>

        {/* DOCUMENT CHECKLIST */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-center text-3xl font-bold text-[#0B1F44] md:text-4xl">Documents checklist</h2>
            <p className="mt-2 text-center text-muted-foreground">Tick what you already have. Requirements vary by country and university.</p>
            <div className="mt-8 flex justify-center gap-2" role="tablist">
              {Object.keys(docs).map((l) => (
                <button key={l} type="button" role="tab" aria-selected={level === l} onClick={() => setLevel(l)}
                  className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${level === l ? "bg-[#0B1F44] text-white" : "bg-white text-[#0B1F44] hover:bg-white/70"}`}>{l}</button>
              ))}
            </div>
            <ul className="mt-6 space-y-3 rounded-3xl bg-white p-6 shadow-lg">
              {docs[level].map((d) => {
                const k = `${level}-${d}`;
                return (
                  <li key={k}>
                    <button type="button" onClick={() => setTicked((t) => ({ ...t, [k]: !t[k] }))} className="flex w-full items-center gap-3 text-left">
                      {ticked[k] ? <CheckCircle2 className="size-6 shrink-0 text-[#12A150]" aria-hidden="true" /> : <Circle className="size-6 shrink-0 text-border" aria-hidden="true" />}
                      <span className={ticked[k] ? "text-muted-foreground line-through" : "font-medium text-[#0B1F44]"}>{d}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 text-center text-sm font-semibold text-[#125BC9]">
              {docs[level].filter((d) => ticked[`${level}-${d}`]).length} of {docs[level].length} ready
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-4 py-16 md:py-24">
          <h2 className="text-center text-3xl font-bold text-[#0B1F44] md:text-4xl">Questions students ask</h2>
          <div className="mt-8 space-y-3">
            {faqs.map(([q, a]) => (
              <details key={q} className="group rounded-2xl border border-border bg-white p-5 open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[#0B1F44]">
                  {q}<ChevronRight className="size-5 text-[#125BC9] transition-transform group-open:rotate-90" aria-hidden="true" />
                </summary>
                <p className="mt-3 text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-20">
          <div className="mx-auto max-w-5xl rounded-[2rem] px-6 py-14 text-center text-white md:py-20" style={{ background: "linear-gradient(135deg,#0B1F44,#125BC9)" }}>
            <h2 className="text-3xl font-extrabold md:text-5xl">Ready to start <span className="text-[#F5B301]">your journey?</span></h2>
            <p className="mx-auto mt-3 max-w-lg text-white/80">Book a free session and leave with a clear plan for your country, course and timeline.</p>
            <Link href="/contact" className="mt-8 inline-block rounded-full bg-[#F5B301] px-8 py-4 font-semibold text-[#0B1F44] transition-transform hover:scale-105">Book free counseling</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}