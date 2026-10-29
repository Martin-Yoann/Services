import PageHeader from "@/app/components/PageHeader";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy-policy" },
        ]}
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="prose prose-slate max-w-none space-y-8 text-sm leading-relaxed" style={{ color: "var(--hg-color-text-secondary)" }}>
            <p className="text-base" style={{ color: "var(--hg-color-text-primary)" }}>
              <strong>Effective Date:</strong> January 1, 2026
            </p>

            <div>
              <h3 className="text-lg font-bold mb-3 hg-heading">1. Information We Collect</h3>
              <p>
                Happy Global ("we," "our," or "us") collects information you provide directly when you:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Submit a contact form or inquiry through our website</li>
                <li>Apply for a position or submit your resume/CV</li>
                <li>Subscribe to our newsletter or talent alerts</li>
                <li>Communicate with our consultants via email or phone</li>
              </ul>
              <p className="mt-3">
                This information may include your name, email address, phone number, company name,
                job title, work history, education background, compensation details, and any other
                information you voluntarily provide.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 hg-heading">2. How We Use Your Information</h3>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Match candidates with executive and professional opportunities</li>
                <li>Communicate with you about our services and relevant opportunities</li>
                <li>Provide talent advisory, market intelligence, and benchmarking services</li>
                <li>Improve our website and client experience</li>
                <li>Comply with legal obligations and enforce our agreements</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 hg-heading">3. Information Sharing</h3>
              <p>
                We share your information only as necessary to provide our services:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong>With client companies</strong> — when presenting candidates for open positions, only with your prior consent</li>
                <li><strong>With service providers</strong> — trusted third parties who assist in operating our business (hosting, email, analytics) under strict confidentiality agreements</li>
                <li><strong>As required by law</strong> — to comply with legal processes or protect our rights</li>
              </ul>
              <p className="mt-3">We never sell your personal information to third parties.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 hg-heading">4. Data Security</h3>
              <p>
                We implement industry-standard security measures including encryption, access controls,
                and secure data storage to protect your personal information. However, no method of
                electronic transmission or storage is 100% secure.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 hg-heading">5. Data Retention</h3>
              <p>
                We retain candidate profiles and client information for the duration of the business
                relationship and for a reasonable period thereafter to comply with legal obligations.
                You may request deletion of your data at any time by contacting us.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 hg-heading">6. Your Rights</h3>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Withdraw consent at any time (without affecting lawfulness of prior processing)</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, contact us at <strong>echo.yang@happyglobalservice.com</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 hg-heading">7. Cookies</h3>
              <p>
                Our website uses essential cookies to function properly and analytics cookies to
                understand how visitors use our site. You can manage cookie preferences through
                your browser settings. See our cookie banner for more details.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 hg-heading">8. Contact Us</h3>
              <p>
                If you have questions about this Privacy Policy, please contact:
              </p>
              <p className="mt-2">
                <strong>Happy Global</strong><br />
                Email: echo.yang@happyglobalservice.com<br />
                Phone: +1 669 871 3588<br />
                Offices: Dallas, TX • San Jose, CA • Shanghai, CN
              </p>
            </div>

            <p className="text-xs opacity-50 pt-8">
              This policy may be updated periodically. The latest version will always be available on this page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
