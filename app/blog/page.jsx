import Link from "next/link";
import { Navbar } from "@/components/navbar"; // adjust path if yours differs
import { Footer } from "@/components/footer"; // adjust path if yours differs
import { BlogExplorer } from "@/components/blog/blog-explorer";
import { NewsletterForm } from "@/components/blog/blog-widgets";

export const metadata = {
  title: "Blog | GlobalPath Study",
  description:
    "Scholarship tips, visa guides and country advice for students planning to study abroad.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogExplorer />

        {/* Newsletter */}
        <section className="bg-foreground">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 md:flex-row md:items-center md:justify-between">
            <div className="max-w-md">
              <h2 className="font-heading text-2xl font-bold text-white">
                Get new guides in your inbox
              </h2>
              <p className="mt-2 text-white/70">
                One short email when we publish a new scholarship or visa guide.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </section>

        {/* Counseling CTA */}
        <section className="bg-secondary">
          <div className="mx-auto max-w-6xl px-4 py-14 text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Not sure where to start?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-foreground/70">
              Talk to a counselor about your country, course and budget. The first session is free.
            </p>
            <Link
              href="/contact" // change to your consultation page
              className="mt-6 inline-block rounded-[0.6rem] bg-primary px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Talk to a counselor
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}