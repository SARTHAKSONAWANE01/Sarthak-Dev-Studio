import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center py-24">
        <div className="container-studio text-center max-w-2xl">
          <div className="font-serif text-[120px] md:text-[180px] leading-none mb-4" style={{ color: "var(--foreground)" }}>
            404
          </div>
          <h1 className="text-2xl md:text-3xl font-serif mb-6">
            Page not found.
          </h1>
          <p className="text-lg md:text-xl mb-12" style={{ color: "var(--foreground-secondary)" }}>
            The page you are looking for doesn&rsquo;t exist or has been moved.
          </p>
          <Link href="/" className="btn-primary">
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
