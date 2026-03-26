import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsOfService() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="font-body text-on-surface"
      style={{ backgroundColor: "#000000" }}
    >
      <Navbar variant="full" />
      <main className="pt-32 pb-20 px-6 max-w-[1200px] mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] mb-6 uppercase">
            LEGAL DOCUMENTATION
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-white mb-6 tracking-tighter">
            Terms of Service
          </h1>
          <p className="text-lg text-[#a0a0a0] max-w-2xl mx-auto mb-4">
            Please read these terms carefully before using ResumeForge. By
            accessing our platform, you agree to be bound by these legal
            conditions.
          </p>
          <div className="text-primary/60 text-sm font-medium">
            Last updated March 2026
          </div>
        </section>

        {/* Two Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-16">
          {/* Left Column: Sticky Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-8">
              <div>
                <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6">
                  CONTENTS
                </h3>
                <nav className="flex flex-col gap-y-4 text-sm tracking-wide">
                  <a
                    className="text-primary font-bold border-l-2 border-primary pl-4 transition-all hover:text-white"
                    href="#intro"
                    onClick={(e) => handleScrollTo(e, "intro")}
                  >
                    1. Introduction
                  </a>
                  <a
                    className="text-[#c7c4d8] border-l border-transparent pl-4 hover:text-white hover:border-[#c7c4d8] transition-all"
                    href="#accounts"
                    onClick={(e) => handleScrollTo(e, "accounts")}
                  >
                    2. User Accounts
                  </a>
                  <a
                    className="text-[#c7c4d8] border-l border-transparent pl-4 hover:text-white hover:border-[#c7c4d8] transition-all"
                    href="#use"
                    onClick={(e) => handleScrollTo(e, "use")}
                  >
                    3. Acceptable Use
                  </a>
                  <a
                    className="text-[#c7c4d8] border-l border-transparent pl-4 hover:text-white hover:border-[#c7c4d8] transition-all"
                    href="#ip"
                    onClick={(e) => handleScrollTo(e, "ip")}
                  >
                    4. Intellectual Property
                  </a>
                  <a
                    className="text-[#c7c4d8] border-l border-transparent pl-4 hover:text-white hover:border-[#c7c4d8] transition-all"
                    href="#privacy"
                    onClick={(e) => handleScrollTo(e, "privacy")}
                  >
                    5. Data Privacy
                  </a>
                  <a
                    className="text-[#c7c4d8] border-l border-transparent pl-4 hover:text-white hover:border-[#c7c4d8] transition-all"
                    href="#termination"
                    onClick={(e) => handleScrollTo(e, "termination")}
                  >
                    6. Termination
                  </a>
                  <a
                    className="text-[#c7c4d8] border-l border-transparent pl-4 hover:text-white hover:border-[#c7c4d8] transition-all"
                    href="#liability"
                    onClick={(e) => handleScrollTo(e, "liability")}
                  >
                    7. Liability
                  </a>
                  <a
                    className="text-[#c7c4d8] border-l border-transparent pl-4 hover:text-white hover:border-[#c7c4d8] transition-all"
                    href="#contact"
                    onClick={(e) => handleScrollTo(e, "contact")}
                  >
                    8. Contact Us
                  </a>
                </nav>
              </div>
              {/* Small Contact Card */}
              <div className="bg-[#111111] p-5 rounded-xl border border-white/5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-primary">
                    mail
                  </span>
                  <span className="text-white font-bold text-xs uppercase tracking-tight">
                    Legal Dept
                  </span>
                </div>
                <p className="text-[11px] text-[#a0a0a0] leading-relaxed mb-3">
                  Questions regarding our terms? Reach out directly.
                </p>
                <a
                  className="text-primary text-xs font-semibold hover:underline"
                  href="mailto:legal@resumeforge.com"
                >
                  legal@resumeforge.com
                </a>
              </div>
            </div>
          </aside>

          {/* Right Column: Main Content */}
          <div className="space-y-12">
            {/* 01. Introduction */}
            <section className="scroll-mt-32" id="intro">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-primary/40 font-headline font-bold text-2xl">
                  01
                </span>
                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">
                  Introduction
                </h2>
              </div>
              <div className="bg-[#111111] p-8 rounded-xl border border-white/5 space-y-4">
                <p className="text-[#a0a0a0] leading-relaxed">
                  Welcome to ResumeForge. These Terms of Service ("Terms")
                  govern your access to and use of ResumeForge's website,
                  services, and applications (the "Service"). By using the
                  Service, you agree to be bound by these Terms.
                </p>
                <p className="text-[#a0a0a0] leading-relaxed">
                  If you are using the Service on behalf of an organization, you
                  are agreeing to these Terms for that organization and
                  promising that you have the authority to bind that
                  organization to these terms.
                </p>
              </div>
            </section>

            {/* 02. User Accounts */}
            <section className="scroll-mt-32" id="accounts">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-primary/40 font-headline font-bold text-2xl">
                  02
                </span>
                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">
                  User Accounts
                </h2>
              </div>
              <div className="bg-[#111111] p-8 rounded-xl border border-white/5">
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      person
                    </span>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[#a0a0a0] leading-relaxed">
                      To access certain features of the Service, you must
                      register for an account. When you register for an account,
                      you may be required to provide us with some information
                      about yourself, such as your name, email address, or other
                      contact information.
                    </p>
                    <ul className="list-none space-y-3">
                      <li className="flex items-start gap-3 text-sm text-[#a0a0a0]">
                        <span
                          className="material-symbols-outlined text-secondary text-lg"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          check_circle
                        </span>
                        You are responsible for safeguarding your password.
                      </li>
                      <li className="flex items-start gap-3 text-sm text-[#a0a0a0]">
                        <span
                          className="material-symbols-outlined text-secondary text-lg"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          check_circle
                        </span>
                        You must provide accurate and complete information.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 03. Acceptable Use */}
            <section className="scroll-mt-32" id="use">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-primary/40 font-headline font-bold text-2xl">
                  03
                </span>
                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">
                  Acceptable Use
                </h2>
              </div>
              <div className="bg-[#111111] p-8 rounded-xl border border-white/5">
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      gavel
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="text-white font-bold text-sm">
                        Prohibited Activities
                      </h4>
                      <p className="text-[#a0a0a0] text-sm leading-relaxed">
                        You agree not to misuse the ResumeForge services or help
                        anyone else do so. This includes attempting to access
                        non-public areas of the Service or our systems.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-bold text-sm">
                        Content Standards
                      </h4>
                      <p className="text-[#a0a0a0] text-sm leading-relaxed">
                        You may not upload content that is defamatory, obscene,
                        harassing, or otherwise violates the rights of third
                        parties.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 04. Intellectual Property */}
            <section className="scroll-mt-32" id="ip">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-primary/40 font-headline font-bold text-2xl">
                  04
                </span>
                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">
                  Intellectual Property
                </h2>
              </div>
              <div className="bg-[#111111] p-8 rounded-xl border border-white/5 space-y-4">
                <p className="text-[#a0a0a0] leading-relaxed">
                  The Service and its original content (excluding content
                  provided by users), features, and functionality are and will
                  remain the exclusive property of ResumeForge and its
                  licensors.
                </p>
                <div className="p-4 bg-white/5 rounded-lg border-l-4 border-primary">
                  <p className="text-sm text-on-surface-variant italic">
                    "Your resumes belong to you. We provide the tools; you
                    provide the brilliance."
                  </p>
                </div>
              </div>
            </section>

            {/* 05. Data Privacy */}
            <section className="scroll-mt-32" id="privacy">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-primary/40 font-headline font-bold text-2xl">
                  05
                </span>
                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">
                  Data Privacy
                </h2>
              </div>
              <div className="bg-[#111111] p-8 rounded-xl border border-white/5">
                <p className="text-[#a0a0a0] leading-relaxed mb-6">
                  Your privacy is important to us. Please review our Privacy
                  Policy, which is incorporated into these Terms, to understand
                  how we collect, use, and share your personal information.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl text-center">
                    <span className="material-symbols-outlined text-secondary block mb-2">
                      lock
                    </span>
                    <span className="text-[10px] text-white font-bold uppercase tracking-wider">
                      Encryption
                    </span>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl text-center">
                    <span className="material-symbols-outlined text-secondary block mb-2">
                      security
                    </span>
                    <span className="text-[10px] text-white font-bold uppercase tracking-wider">
                      Secure Storage
                    </span>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl text-center">
                    <span className="material-symbols-outlined text-secondary block mb-2">
                      visibility_off
                    </span>
                    <span className="text-[10px] text-white font-bold uppercase tracking-wider">
                      Private Drafts
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* 06. Termination */}
            <section className="scroll-mt-32" id="termination">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-primary/40 font-headline font-bold text-2xl">
                  06
                </span>
                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">
                  Termination
                </h2>
              </div>
              <div className="bg-[#111111] p-8 rounded-xl border border-white/5">
                <div className="flex items-start gap-6">
                  <div className="bg-tertiary/10 p-3 rounded-xl">
                    <span className="material-symbols-outlined text-tertiary text-3xl">
                      cancel_schedule_send
                    </span>
                  </div>
                  <p className="text-[#a0a0a0] leading-relaxed">
                    We may terminate or suspend your account and bar access to
                    the Service immediately, without prior notice or liability,
                    under our sole discretion, for any reason whatsoever and
                    without limitation, including but not limited to a breach of
                    the Terms.
                  </p>
                </div>
              </div>
            </section>

            {/* 07. Liability */}
            <section className="scroll-mt-32" id="liability">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-primary/40 font-headline font-bold text-2xl">
                  07
                </span>
                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">
                  Liability
                </h2>
              </div>
              <div className="bg-[#111111] p-8 rounded-xl border border-white/5">
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      warning
                    </span>
                  </div>
                  <p className="text-[#a0a0a0] leading-relaxed">
                    In no event shall ResumeForge, nor its directors, employees,
                    partners, agents, suppliers, or affiliates, be liable for
                    any indirect, incidental, special, consequential or punitive
                    damages, including without limitation, loss of profits,
                    data, use, goodwill, or other intangible losses.
                  </p>
                </div>
              </div>
            </section>

            {/* 08. Contact Us */}
            <section className="scroll-mt-32" id="contact">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-primary/40 font-headline font-bold text-2xl">
                  08
                </span>
                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">
                  Contact Us
                </h2>
              </div>
              <div className="bg-[#111111] p-8 rounded-xl border border-white/5 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    help_center
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Have further questions?
                </h3>
                <p className="text-[#a0a0a0] mb-8 max-w-md">
                  Our legal and support teams are here to help you navigate our
                  service guidelines.
                </p>
                <a
                  className="bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-primary transition-colors"
                  href="mailto:legal@resumeforge.com"
                >
                  legal@resumeforge.com
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
