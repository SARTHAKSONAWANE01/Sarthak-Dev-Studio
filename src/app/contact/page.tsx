"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import { toast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent.",
          description: "Thank you. I'll get back to you shortly.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: result.error || "Something went wrong.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "A network error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32 pb-24">
        <div className="container-studio">
          {/* Header */}
          <div className="max-w-4xl mb-16 md:mb-24">
            <RevealOnScroll>
              <div className="section-index">Contact</div>
              <h1 className="text-display mb-8">
                Start a<br />
                <span className="text-editorial">conversation.</span>
              </h1>
              <p
                className="text-xl md:text-2xl leading-relaxed max-w-2xl"
                style={{ color: "var(--foreground-secondary)" }}
              >
                Whether you have a project in mind, a question about my work, or
                just want to say hello, I&rsquo;m always open to discussing new
                ideas.
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid md:grid-cols-12 gap-12 md:gap-24">
            {/* Left Column - Contact Details */}
            <div className="md:col-span-5">
              <RevealOnScroll delay={0.1}>
                <div className="space-y-12">
                  <div>
                    <h3
                      className="font-sans text-xs uppercase tracking-widest mb-4"
                      style={{ color: "var(--foreground-muted)" }}
                    >
                      Email
                    </h3>
                    <a
                      href="mailto:sonawanesarthak00@gmail.com"
                      className="text-lg md:text-xl font-medium hover:opacity-60 transition-opacity"
                    >
                      sonawanesarthak00@gmail.com
                    </a>
                  </div>

                  <div>
                    <h3
                      className="font-sans text-xs uppercase tracking-widest mb-4"
                      style={{ color: "var(--foreground-muted)" }}
                    >
                      Social
                    </h3>
                    <div className="space-y-2">
                      <a
                        href="https://github.com/SARTHAKSONAWANE01"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-lg font-medium hover:opacity-60 transition-opacity"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://www.linkedin.com/in/sarthak-sonawane-0aa583344"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-lg font-medium hover:opacity-60 transition-opacity"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Column - Form */}
            <div className="md:col-span-7">
              <RevealOnScroll delay={0.2}>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-sans text-xs uppercase tracking-widest mb-2"
                      style={{ color: "var(--foreground-secondary)" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-sans text-xs uppercase tracking-widest mb-2"
                      style={{ color: "var(--foreground-secondary)" }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-sans text-xs uppercase tracking-widest mb-2"
                      style={{ color: "var(--foreground-secondary)" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project..."
                      rows={6}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full md:w-auto mt-4"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
