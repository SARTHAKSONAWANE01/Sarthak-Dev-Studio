import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkGrid from "@/components/WorkGrid";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by Sarthak Sonawane — full-stack products, client work, and experimental builds.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32 pb-24">
        <WorkGrid initialProjects={projects} />
      </main>
      <Footer />
    </>
  );
}
