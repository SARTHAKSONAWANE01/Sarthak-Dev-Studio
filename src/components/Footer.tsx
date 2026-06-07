export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-spacing" style={{ paddingTop: "clamp(40px, 6vw, 80px)" }}>
      <div className="container-studio">
        <div className="divider mb-12" />

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl mb-2">Sarthak Dev Studio</h3>
            <p className="text-sm" style={{ color: "var(--foreground-muted)" }}>
              Full Stack Developer
            </p>
            <p className="text-sm mt-1" style={{ color: "var(--foreground-muted)" }}>
              Building scalable digital products.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              className="font-sans text-xs uppercase tracking-widest mb-4"
              style={{ color: "var(--foreground-muted)" }}
            >
              Links
            </h4>
            <div className="space-y-2">
              {[
                { label: "GitHub", href: "https://github.com/SARTHAKSONAWANE01" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/sarthak-sonawane-0aa583344" },
                { label: "Email", href: "mailto:sonawanesarthak00@gmail.com" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block text-sm hover:opacity-60 transition-opacity"
                  style={{ color: "var(--foreground-secondary)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Currently Building */}
          <div>
            <h4
              className="font-sans text-xs uppercase tracking-widest mb-4"
              style={{ color: "var(--foreground-muted)" }}
            >
              Currently Building
            </h4>
            <div className="space-y-2">
              <p className="text-sm" style={{ color: "var(--foreground-secondary)" }}>
                Grenomart
              </p>
              <p className="text-sm" style={{ color: "var(--foreground-secondary)" }}>
                Portfolio V2
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="divider mt-12 mb-6" />
        <p className="text-xs" style={{ color: "var(--foreground-muted)" }}>
          &copy; {currentYear} Sarthak Dev Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
