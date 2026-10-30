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
}