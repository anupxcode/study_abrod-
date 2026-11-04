"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ArrowUpRight, Plus } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const contactCards = [
  { icon: Mail, title: "Email us", value: "hello@globalpathstudy.com", note: "Reply within 24 hours", href: "mailto:hello@globalpathstudy.com", tilt: "-rotate-1" },
  { icon: Phone, title: "Call / WhatsApp", value: "+880 1700 000000", note: "Sat - Thu, 10am - 7pm", href: "tel:+8801700000000", tilt: "rotate-1" },
  { icon: MapPin, title: "Visit office", value: "Mohammadpur, Dhaka", note: "Free walk-in counseling", href: "#map", tilt: "rotate-1" },
  { icon: Clock, title: "Office hours", value: "10:00 AM - 7:00 PM", note: "Friday closed", href: "#form", tilt: "-rotate-1" },
];

const countries = ["UK", "USA", "Canada", "Australia", "Germany", "Not sure yet"];
const levels = ["Bachelor", "Master", "PhD", "Diploma"];

const faqs = [
  { q: "Counseling te ki kono fee lagbe?", a: "Na. Prothom counseling session ekdom free. Apni shudhu apnar goal ar budget niye ashben." },
  { q: "Kon country amar jonno best?", a: "Apnar result, budget ar subject dekhe amra 2-3 ta realistic option suggest kori." },
  { q: "Visa process e ki help pawa jabe?", a: "Hya, document checklist theke interview preparation porjonto shob step e pashe thaki." },
];

export default function ContactPage() {
  const [country, setCountry] = useState("UK");
  const [level, setLevel] = useState("Master");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const spot = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // TODO: replace with fetch("/api/contact", { method: "POST", body: JSON.stringify({ ...form, country, level }) })
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  const field =
    "peer w-full rounded-xl border-2 border-[#E4EAF3] bg-white px-4 pt-6 pb-2 text-[#0B1F44] outline-none transition-all duration-300 placeholder-transparent hover:border-[#125BC9]/40 hover:shadow-[0_8px_24px_-8px_rgba(18,91,201,0.25)] focus:border-[#125BC9] focus:shadow-[0_0_0_4px_rgba(18,91,201,0.12),0_12px_30px_-10px_rgba(18,91,201,0.4)]";
  const label =
    "pointer-events-none absolute left-4 top-4 origin-left text-sm text-[#0B1F44]/50 transition-all duration-300 peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#125BC9] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[11px]";

  return (
    <>
      <style>{`
        @keyframes gp-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-18px) } }
        @keyframes gp-spin { to { transform: rotate(360deg) } }
        @keyframes gp-pop { 0% { transform: scale(.6); opacity: 0 } 100% { transform: scale(1); opacity: 1 } }
        @keyframes gp-marquee { to { transform: translateX(-50%) } }
        @media (prefers-reduced-motion: reduce) { .gp-anim { animation: none !important } }
      `}</style>

      <Navbar />

      <main className="overflow-x-hidden bg-[#F7F9FC]">
        {/* HERO */}
        <section className="relative bg-[#0B1F44] px-6 pb-40 pt-24 text-white">
          <div className="gp-anim absolute left-[8%] top-16 h-40 w-40 rounded-full bg-[#125BC9]/40 blur-3xl" style={{ animation: "gp-float 7s ease-in-out infinite" }} />
          <div className="gp-anim absolute right-[10%] top-28 h-52 w-52 rounded-full bg-[#F5B301]/20 blur-3xl" style={{ animation: "gp-float 9s ease-in-out infinite reverse" }} />
          <div className="gp-anim absolute right-[18%] top-20 h-24 w-24 rounded-full border-2 border-dashed border-[#F5B301]/60" style={{ animation: "gp-spin 18s linear infinite" }} />

          <div className="relative mx-auto max-w-4xl text-center">
            <span className="inline-block -rotate-2 rounded-full bg-[#F5B301] px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#0B1F44] shadow-[4px_4px_0_0_#ffffff] transition-all hover:rotate-2 hover:shadow-[6px_6px_0_0_#ffffff]">
              Let's talk
            </span>
            <h1 className="font-heading mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Your dream campus is <span className="relative inline-block text-[#F5B301]">one message<span className="absolute -bottom-1 left-0 h-1 w-full rounded bg-[#F5B301]/50" /></span> away
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-white/70">
              Country, university, visa - jei prosno thak, amader counselor ra apnake clear plan dibe. Free.
            </p>
          </div>
        </section>

        {/* CONTACT CARDS (overlap hero) */}
        <section className="relative z-10 mx-auto -mt-24 grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map(({ icon: Icon, title, value, note, href, tilt }) => (
            <a
              key={title}
              href={href}
              className={`group relative block rounded-2xl border-2 border-[#0B1F44] bg-white p-6 shadow-[6px_6px_0_0_#0B1F44] transition-all duration-300 ease-out hover:-translate-x-1 hover:-translate-y-2 hover:rotate-0 hover:shadow-[12px_12px_0_0_#F5B301] ${tilt}`}
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[#EAF2FF] text-[#125BC9] transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-[#125BC9] group-hover:text-white group-hover:shadow-[0_10px_25px_-5px_rgba(18,91,201,0.6)]">
                <Icon size={22} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0B1F44]/50">{title}</p>
              <p className="font-heading mt-1 break-words text-base font-bold text-[#0B1F44]">{value}</p>
              <p className="mt-1 text-sm text-[#0B1F44]/60">{note}</p>
              <ArrowUpRight className="absolute right-4 top-4 text-[#0B1F44]/20 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#125BC9]" size={20} />
            </a>
          ))}
        </section>

        {/* FORM + SIDE */}
        <section id="form" className="mx-auto mt-20 grid max-w-6xl gap-10 px-6 lg:grid-cols-5">
          {/* Form card with cursor spotlight */}
          <div
            onMouseMove={spot}
            className="group/card relative overflow-hidden rounded-3xl border border-[#E4EAF3] bg-white p-8 shadow-[0_30px_70px_-25px_rgba(11,31,68,0.35)] transition-shadow duration-500 hover:shadow-[0_40px_90px_-25px_rgba(18,91,201,0.5)] lg:col-span-3"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
              style={{ background: "radial-gradient(420px circle at var(--x,50%) var(--y,50%), rgba(18,91,201,0.10), transparent 60%)" }}
            />
            <div className="relative">
              {sent ? (
                <div className="py-16 text-center" style={{ animation: "gp-pop .5s ease-out" }}>
                  <CheckCircle2 className="mx-auto text-[#125BC9]" size={64} />
                  <h2 className="font-heading mt-4 text-2xl font-bold text-[#0B1F44]">Message sent, {form.name || "friend"}!</h2>
                  <p className="mt-2 text-[#0B1F44]/60">24 ghontar moddhe amader counselor apnar sathe jogajog korbe.</p>
                  <button onClick={() => setSent(false)} className="mt-6 rounded-full border-2 border-[#0B1F44] px-6 py-2 font-semibold text-[#0B1F44] shadow-[4px_4px_0_0_#0B1F44] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#F5B301]">
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-[#0B1F44]">Get free counseling</h2>
                    <p className="text-sm text-[#0B1F44]/60">Form fill koro, baki ta amra dekhbo.</p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="relative">
                      <input required placeholder="Name" className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                      <span className={label}>Full name</span>
                    </div>
                    <div className="relative">
                      <input required type="email" placeholder="Email" className={field} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                      <span className={label}>Email address</span>
                    </div>
                  </div>
                  <div className="relative">
                    <input placeholder="Phone" className={field} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    <span className={label}>Phone / WhatsApp</span>
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-semibold text-[#0B1F44]">Desired country</p>
                    <div className="flex flex-wrap gap-2">
                      {countries.map((c) => (
                        <button
                          type="button"
                          key={c}
                          onClick={() => setCountry(c)}
                          className={`rounded-full border-2 px-4 py-1.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                            country === c
                              ? "border-[#125BC9] bg-[#125BC9] text-white shadow-[0_8px_20px_-6px_rgba(18,91,201,0.7)]"
                              : "border-[#E4EAF3] bg-white text-[#0B1F44] hover:border-[#125BC9] hover:shadow-[0_8px_18px_-8px_rgba(18,91,201,0.5)]"
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-semibold text-[#0B1F44]">Study level</p>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {levels.map((l) => (
                        <button
                          type="button"
                          key={l}
                          onClick={() => setLevel(l)}
                          className={`rounded-xl border-2 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                            level === l
                              ? "border-[#0B1F44] bg-[#F5B301] text-[#0B1F44] shadow-[4px_4px_0_0_#0B1F44]"
                              : "border-[#E4EAF3] hover:border-[#0B1F44] hover:shadow-[4px_4px_0_0_#0B1F44]/30"
                          }`}
                        >
                          {l}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <textarea rows={4} placeholder="Message" className={`${field} resize-none`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                    <span className={label}>Tell us about your plan</span>
                  </div>

                  <button
                    disabled={loading}
                    className="group/btn relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#125BC9] py-4 font-bold text-white shadow-[0_14px_30px_-10px_rgba(18,91,201,0.8)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-10px_rgba(18,91,201,0.9)] active:translate-y-0 disabled:opacity-70"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                    <span className="relative flex items-center gap-2">
                      {loading ? "Sending..." : "Send message"}
                      <Send size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Side: FAQ */}
          <aside className="space-y-4 lg:col-span-2">
            <h3 className="font-heading text-xl font-bold text-[#0B1F44]">Quick answers</h3>
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-[#E4EAF3] bg-white p-5 shadow-[0_4px_14px_-6px_rgba(11,31,68,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-[#125BC9]/40 hover:shadow-[0_20px_40px_-15px_rgba(18,91,201,0.4)] open:border-[#125BC9] open:shadow-[0_20px_40px_-15px_rgba(18,91,201,0.4)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-[#0B1F44]">
                  {f.q}
                  <Plus size={18} className="shrink-0 text-[#125BC9] transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[#0B1F44]/70">{f.a}</p>
              </details>
            ))}

            <div
              id="map"
              className="group relative overflow-hidden rounded-2xl bg-[#0B1F44] p-6 text-white shadow-[8px_8px_0_0_#F5B301] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#125BC9]"
            >
              <MapPin className="gp-anim mb-3 text-[#F5B301]" style={{ animation: "gp-float 3s ease-in-out infinite" }} />
              <p className="font-heading text-lg font-bold">Walk in, say hi</p>
              <p className="mt-1 text-sm text-white/70">Mohammadpur, Dhaka - 1207. Coffee amader taraf theke.</p>
            </div>
          </aside>
        </section>

        {/* MARQUEE */}
        <section className="mt-24 overflow-hidden border-y-2 border-[#0B1F44] bg-[#F5B301] py-4">
          <div className="gp-anim flex w-max gap-10 whitespace-nowrap font-heading text-xl font-extrabold uppercase text-[#0B1F44]" style={{ animation: "gp-marquee 25s linear infinite" }}>
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-10">
                {["UK", "USA", "Canada", "Australia", "Germany", "Free counseling", "Visa support", "Scholarship guide"].map((t) => (
                  <span key={t + i}>{t} ✦</span>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}