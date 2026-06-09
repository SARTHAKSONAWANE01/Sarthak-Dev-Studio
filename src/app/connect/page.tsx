"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import { toast } from "@/hooks/use-toast";

const engagementOptions = [
  {
    type: "Full-Time Engineering",
    details: "Open to joining fast-paced technical startup teams or product-driven software firms focusing on React, Next.js, and Node ecosystems."
  },
  {
    type: "MVP Development",
    details: "Partnering with founders to plan, model, design, and deploy version 1.0 of their product within 4–6 week sprints."
  },
  {
    type: "Technical Consultation",
    details: "Reviewing backend APIs, code sanitization schemes, schema setups, or performance bottlenecks for existing web applications."
  }
];

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("sonawanesarthak00@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
      <main className="pt-28 md:pt-36 pb-24">
        <div className="container-studio">
          {/* Header */}
          <div className="max-w-4xl mb-16 md:mb-24">
            <RevealOnScroll>
              <div className="section-index">Connect</div>
              <h1 className="text-display mb-8">
                Let&rsquo;s talk
                <br />
                <span className="text-editorial">shop.</span>
              </h1>
              <p
                className="text-xl md:text-2xl leading-relaxed"
                style={{ color: "var(--foreground-secondary)" }}
              >
                Reach out to schedule a consultation, discuss team roles, or request a technical review of your project.
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-20">
            {/* Left Col - Engagement options */}
            <div className="lg:col-span-5 space-y-12">
              <RevealOnScroll delay={0.1}>
                <div>
                  <h2 className="text-2xl font-serif mb-6">How we can partner</h2>
                  <div className="space-y-6">
                    {engagementOptions.map((opt) => (
                      <div key={opt.type} className="border-l border-foreground/10 pl-4 py-1">
                        <h3 className="text-sm font-mono uppercase tracking-wider text-foreground mb-1">
                          {opt.type}
                        </h3>
                        <p className="text-xs leading-relaxed" style={{ color: "var(--foreground-secondary)" }}>
                          {opt.details}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-foreground-muted mb-2">
                      Direct Email
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium">sonawanesarthak00@gmail.com</span>
                      <button
                        onClick={handleCopy}
                        className="px-2 py-0.5 text-3xs uppercase tracking-widest border border-foreground/10 hover:border-foreground/30 rounded bg-background transition-colors text-foreground-muted"
                      >
                        {copied ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-foreground-muted mb-2">
                      Profiles
                    </h3>
                    <div className="flex gap-4 text-xs font-mono tracking-widest uppercase">
                      <a
                        href="https://github.com/SARTHAKSONAWANE01"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground-secondary transition-colors"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://www.linkedin.com/in/sarthak-sonawane-0aa583344"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground-secondary transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Col - Contact Form */}
            <div className="lg:col-span-7">
              <RevealOnScroll delay={0.3}>
                <div className="border border-foreground/5 p-8 md:p-10 bg-foreground/[0.01]">
                  <h2 className="text-2xl font-serif mb-6">Send an Inquiry</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-3xs font-mono uppercase tracking-widest text-foreground-muted mb-2">
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
                        className="text-sm py-2 px-3 bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-3xs font-mono uppercase tracking-widest text-foreground-muted mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@example.com"
                        className="text-sm py-2 px-3 bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-3xs font-mono uppercase tracking-widest text-foreground-muted mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Detail your inquiry, requirements, or schedule preferences..."
                        rows={5}
                        className="text-sm py-2 px-3 bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full py-2.5 text-xs tracking-widest"
                    >
                      {isSubmitting ? "Sending..." : "Submit Inquiry"}
                    </button>
                  </form>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
