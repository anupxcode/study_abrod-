"use client";

import { useState } from "react";
import { Check, Link2, Facebook, Linkedin, Twitter } from "lucide-react";

export function ShareButtons({ title }) {
  const [copied, setCopied] = useState(false);

  const openShare = (base) => {
    const url = encodeURIComponent(window.location.href);
    window.open(base(url, encodeURIComponent(title)), "_blank", "noopener,noreferrer");
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked, ignore */
    }
  };

  const btn =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-secondary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

  return (
    <div className="flex items-center gap-2" aria-label="Share this article">
      <button type="button" onClick={copyLink} className={btn} aria-label="Copy link">
        {copied ? <Check className="h-4 w-4 text-primary" /> : <Link2 className="h-4 w-4" />}
      </button>
      <button
        type="button"
        className={btn}
        aria-label="Share on Facebook"
        onClick={() => openShare((u) => `https://www.facebook.com/sharer/sharer.php?u=${u}`)}
      >
        <Facebook className="h-4 w-4" />
      </button>
      <button
        type="button"
        className={btn}
        aria-label="Share on LinkedIn"
        onClick={() => openShare((u) => `https://www.linkedin.com/sharing/share-offsite/?url=${u}`)}
      >
        <Linkedin className="h-4 w-4" />
      </button>
      <button
        type="button"
        className={btn}
        aria-label="Share on X"
        onClick={() => openShare((u, t) => `https://twitter.com/intent/tweet?url=${u}&text=${t}`)}
      >
        <Twitter className="h-4 w-4" />
      </button>
      <span className="sr-only" role="status">
        {copied ? "Link copied" : ""}
      </span>
    </div>
  );
}

const inputClass =
  "h-11 w-full rounded-[0.6rem] border border-border bg-background px-3 text-sm text-foreground placeholder:text-foreground/50 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary";

export function MiniConsultForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div role="status" className="rounded-[0.9rem] bg-secondary p-5">
        <p className="font-heading text-lg font-semibold text-foreground">Request received</p>
        <p className="mt-1 text-sm text-foreground/70">
          A counselor will contact you within one working day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: send to your API route later
        setSent(true);
      }}
      className="space-y-3"
    >
      <div>
        <label htmlFor="bc-name" className="sr-only">
          Full name
        </label>
        <input id="bc-name" required placeholder="Full name" className={inputClass} />
      </div>
      <div>
        <label htmlFor="bc-email" className="sr-only">
          Email address
        </label>
        <input id="bc-email" type="email" required placeholder="Email address" className={inputClass} />
      </div>
      <div>
        <label htmlFor="bc-country" className="sr-only">
          Preferred country
        </label>
        <select id="bc-country" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            Preferred country
          </option>
          <option>United Kingdom</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Australia</option>
          <option>Germany</option>
        </select>
      </div>
      <button
        type="submit"
        className="h-11 w-full rounded-[0.6rem] bg-accent font-semibold text-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      >
        Book free consultation
      </button>
    </form>
  );
}

export function NewsletterForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p role="status" className="font-medium text-white">
        You are subscribed. Watch your inbox for the next guide.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: connect to your email service later
        setDone(true);
      }}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="nl-email" className="sr-only">
        Email address
      </label>
      <input
        id="nl-email"
        type="email"
        required
        placeholder="you@example.com"
        className="h-12 flex-1 rounded-[0.6rem] border border-white/20 bg-white/10 px-4 text-white placeholder:text-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      />
      <button
        type="submit"
        className="h-12 rounded-[0.6rem] bg-accent px-6 font-semibold text-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      >
        Subscribe
      </button>
    </form>
  );
}