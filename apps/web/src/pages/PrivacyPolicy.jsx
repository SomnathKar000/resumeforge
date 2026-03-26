import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="font-body selection:bg-primary selection:text-on-primary"
      style={{ backgroundColor: "#000000", color: "#e5e2e1" }}
    >
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-24">
          <div className="inline-block px-4 py-1 border border-outline-variant rounded-full mb-6">
            <span className="text-[10px] tracking-[0.2em] font-bold text-white uppercase">
              LEGAL DOCUMENTATION
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white font-headline tracking-tighter mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-[#a0a0a0] max-w-2xl mx-auto mb-4">
            We believe your data belongs to you. Here's how we protect it.
          </p>
          <p className="text-sm text-[#666666]">Last updated: March 2026</p>
        </section>

        {/* Main Content Layout */}
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Left Column: Sticky TOC */}
          <aside className="w-full md:w-[220px] sticky top-32 hidden md:block">
            <p className="text-[10px] tracking-[0.15em] font-bold text-[#666666] uppercase mb-6">
              CONTENTS
            </p>
            <nav className="flex flex-col gap-4 border-l border-outline-variant/30 ml-1">
              <a
                className="pl-4 text-white font-semibold text-sm transition-all border-l-2 border-white -ml-[1.5px]"
                href="#overview"
                onClick={(e) => handleScrollTo(e, "overview")}
              >
                1. Overview
              </a>
              <a
                className="pl-4 text-[#a0a0a0] hover:text-white text-sm transition-all border-l-2 border-transparent -ml-[1.5px]"
                href="#collect"
                onClick={(e) => handleScrollTo(e, "collect")}
              >
                2. What We Collect
              </a>
              <a
                className="pl-4 text-[#a0a0a0] hover:text-white text-sm transition-all border-l-2 border-transparent -ml-[1.5px]"
                href="#not-collect"
                onClick={(e) => handleScrollTo(e, "not-collect")}
              >
                3. What We Do Not Collect
              </a>
              <a
                className="pl-4 text-[#a0a0a0] hover:text-white text-sm transition-all border-l-2 border-transparent -ml-[1.5px]"
                href="#usage"
                onClick={(e) => handleScrollTo(e, "usage")}
              >
                4. How We Use Data
              </a>
              <a
                className="pl-4 text-[#a0a0a0] hover:text-white text-sm transition-all border-l-2 border-transparent -ml-[1.5px]"
                href="#third-party"
                onClick={(e) => handleScrollTo(e, "third-party")}
              >
                5. Third-Party Services
              </a>
              <a
                className="pl-4 text-[#a0a0a0] hover:text-white text-sm transition-all border-l-2 border-transparent -ml-[1.5px]"
                href="#cookies"
                onClick={(e) => handleScrollTo(e, "cookies")}
              >
                6. Cookies
              </a>
              <a
                className="pl-4 text-[#a0a0a0] hover:text-white text-sm transition-all border-l-2 border-transparent -ml-[1.5px]"
                href="#rights"
                onClick={(e) => handleScrollTo(e, "rights")}
              >
                7. Your Rights
              </a>
              <a
                className="pl-4 text-[#a0a0a0] hover:text-white text-sm transition-all border-l-2 border-transparent -ml-[1.5px]"
                href="#contact-section"
                onClick={(e) => handleScrollTo(e, "contact-section")}
              >
                8. Contact
              </a>
            </nav>
          </aside>

          {/* Right Column: Content */}
          <div className="flex-1 flex flex-col gap-20">
            {/* 01. Overview */}
            <section className="scroll-mt-32" id="overview">
              <span className="text-sm font-bold text-white block mb-2">
                01.
              </span>
              <h2 className="text-3xl font-bold text-white font-headline mb-6">
                Overview
              </h2>
              <div className="text-[#a0a0a0] leading-relaxed space-y-4 max-w-3xl">
                <p>
                  At ResumeForge, we prioritize the architectural integrity of
                  your personal information. Our privacy framework is built on
                  the principle of minimal data persistence and maximal user
                  agency.
                </p>
                <p>
                  This policy outlines our commitment to transparency and
                  explains how your data is handled when you interact with our
                  platform to build your digital career profile.
                </p>
              </div>
              <div className="h-px w-full bg-[#1f1f1f] mt-16" />
            </section>

            {/* 02. What We Collect */}
            <section className="scroll-mt-32" id="collect">
              <span className="text-sm font-bold text-white block mb-2">
                02.
              </span>
              <h2 className="text-3xl font-bold text-white font-headline mb-8">
                What We Collect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#111111] p-8 rounded-2xl">
                  <span className="material-symbols-outlined text-white mb-4">
                    account_circle
                  </span>
                  <h4 className="text-white font-bold text-lg mb-2">
                    Account Details
                  </h4>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed">
                    Basic profile information including your name, email
                    address, and authentication credentials.
                  </p>
                </div>
                <div className="bg-[#111111] p-8 rounded-2xl">
                  <span className="material-symbols-outlined text-white mb-4">
                    description
                  </span>
                  <h4 className="text-white font-bold text-lg mb-2">
                    Professional History
                  </h4>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed">
                    The work experience, education, and skills you explicitly
                    input into our resume builder.
                  </p>
                </div>
              </div>
              <div className="h-px w-full bg-[#1f1f1f] mt-16" />
            </section>

            {/* 03. What We Do Not Collect */}
            <section className="scroll-mt-32" id="not-collect">
              <span className="text-sm font-bold text-white block mb-2">
                03.
              </span>
              <h2 className="text-3xl font-bold text-white font-headline mb-6">
                What We Do Not Collect
              </h2>
              <div className="text-[#a0a0a0] leading-relaxed max-w-3xl">
                <p>
                  We strictly adhere to a "No Surprise" collection policy. We do
                  not track your browsing history outside our platform, we do
                  not access your contacts, and we never scrape your private
                  messages or social media activity.
                </p>
              </div>
              <div className="h-px w-full bg-[#1f1f1f] mt-16" />
            </section>

            {/* 04. How We Use Data */}
            <section className="scroll-mt-32" id="usage">
              <span className="text-sm font-bold text-white block mb-2">
                04.
              </span>
              <h2 className="text-3xl font-bold text-white font-headline mb-6">
                How We Use Your Data
              </h2>
              <div className="text-[#a0a0a0] leading-relaxed space-y-4 max-w-3xl">
                <p>
                  Your data is used exclusively to provide the core ResumeForge
                  services:
                </p>
                <ul className="list-none space-y-3 pl-4">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Generating dynamic PDF and Web-based resumes.
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Saving your progress for future edits and updates.
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Improving our AI-driven tailoring recommendations.
                  </li>
                </ul>
              </div>
              <div className="h-px w-full bg-[#1f1f1f] mt-16" />
            </section>

            {/* 05. Third-Party Services */}
            <section className="scroll-mt-32" id="third-party">
              <span className="text-sm font-bold text-white block mb-2">
                05.
              </span>
              <h2 className="text-3xl font-bold text-white font-headline mb-8">
                Third-Party Services
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-[#111111] p-8 rounded-2xl flex items-start gap-6">
                  <div className="bg-surface p-3 rounded-xl border border-outline-variant/20">
                    <span className="material-symbols-outlined text-white">
                      cloud_done
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">
                      Infrastructure Partners
                    </h4>
                    <p className="text-[#a0a0a0] text-sm">
                      We use top-tier, encrypted cloud providers to host our
                      databases. Data is encrypted at rest and in transit.
                    </p>
                  </div>
                </div>
                <div className="bg-[#111111] p-8 rounded-2xl flex items-start gap-6">
                  <div className="bg-surface p-3 rounded-xl border border-outline-variant/20">
                    <span className="material-symbols-outlined text-white">
                      payments
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">
                      Payment Processors
                    </h4>
                    <p className="text-[#a0a0a0] text-sm">
                      All financial transactions are handled via Stripe. We
                      never store your full credit card details on our servers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-px w-full bg-[#1f1f1f] mt-16" />
            </section>

            {/* 06. Cookies */}
            <section className="scroll-mt-32" id="cookies">
              <span className="text-sm font-bold text-white block mb-2">
                06.
              </span>
              <h2 className="text-3xl font-bold text-white font-headline mb-6">
                Cookies
              </h2>
              <div className="text-[#a0a0a0] leading-relaxed max-w-3xl">
                <p>
                  We use essential cookies to maintain your session and
                  security. Functional cookies help us remember your
                  preferences, like your favorite template or dark mode
                  settings. We do not use third-party tracking cookies for
                  advertising purposes.
                </p>
              </div>
              <div className="h-px w-full bg-[#1f1f1f] mt-16" />
            </section>

            {/* 07. Your Rights */}
            <section className="scroll-mt-32" id="rights">
              <span className="text-sm font-bold text-white block mb-2">
                07.
              </span>
              <h2 className="text-3xl font-bold text-white font-headline mb-6">
                Your Rights
              </h2>
              <div className="text-[#a0a0a0] leading-relaxed space-y-4 max-w-3xl">
                <p>
                  Under global data protection laws (GDPR/CCPA), you have the
                  absolute right to:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-3 p-4 bg-[#111111] rounded-xl border border-white/5">
                    <span className="material-symbols-outlined text-white scale-75">
                      download
                    </span>
                    <span className="text-sm text-white font-medium">
                      Data Portability
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-[#111111] rounded-xl border border-white/5">
                    <span className="material-symbols-outlined text-white scale-75">
                      delete_forever
                    </span>
                    <span className="text-sm text-white font-medium">
                      Right to Erasure
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-px w-full bg-[#1f1f1f] mt-16" />
            </section>

            {/* 08. Contact */}
            <section className="scroll-mt-32" id="contact-section">
              <span className="text-sm font-bold text-white block mb-2">
                08.
              </span>
              <h2 className="text-3xl font-bold text-white font-headline mb-8">
                Contact
              </h2>
              <div className="bg-[#111111] p-10 rounded-2xl border border-white/5 flex flex-col items-center text-center max-w-lg">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-white text-3xl">
                    mail
                  </span>
                </div>
                <h4 className="text-white font-bold text-xl mb-2">
                  Have questions?
                </h4>
                <p className="text-[#a0a0a0] mb-6">
                  Our legal team is available to clarify any aspect of our
                  privacy practices.
                </p>
                <a
                  className="text-white font-bold text-lg hover:text-primary transition-colors underline underline-offset-8"
                  href="mailto:support@resumeforge.com"
                >
                  support@resumeforge.com
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0e0e0e] w-full py-12 px-6 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-lg font-bold text-white font-headline">
              ResumeForge
            </div>
            <p className="font-body text-sm tracking-wide text-[#c7c4d8]">
              © 2024 ResumeForge. Built for Digital Architects.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            <Link
              className="text-white underline font-body text-sm tracking-wide opacity-100 hover:opacity-80 transition-all"
              to="/privacy"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-[#c7c4d8] font-body text-sm tracking-wide hover:text-[#c2c1ff] transition-all"
              to="/terms"
            >
              Terms of Service
            </Link>
            <a
              className="text-[#c7c4d8] font-body text-sm tracking-wide hover:text-[#c2c1ff] transition-all"
              href="#"
            >
              Cookie Policy
            </a>
            <Link
              className="text-[#c7c4d8] font-body text-sm tracking-wide hover:text-[#c2c1ff] transition-all"
              to="/support"
            >
              Support
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
