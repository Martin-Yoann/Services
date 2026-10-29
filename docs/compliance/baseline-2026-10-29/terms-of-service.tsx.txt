import PageHeader from "@/app/components/PageHeader";

export default function TermsOfServicePage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        subtitle="The terms and conditions governing the use of Happy Global's website and services."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Terms of Service", href: "/terms-of-service" },
        ]}
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="prose prose-slate max-w-none space-y-8 text-sm leading-relaxed" style={{ color: "var(--hg-color-text-secondary)" }}>
            <p className="text-base" style={{ color: "var(--hg-color-text-primary)" }}>
              <strong>Effective Date:</strong> January 1, 2026
            </p>

            <div>
              <h3 className="text-lg font-bold mb-3 hg-heading">1. Acceptance of Terms</h3>
              <p>
                By accessing or using the Happy Global website (happyglobalservice.com) and our
                talent acquisition and advisory services, you agree to be bound by these Terms of
                Service. If you do not agree, please do not use our services.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 hg-heading">2. Services Description</h3>
              <p>
                Happy Global provides executive search, professional recruitment, and talent advisory
                services to client organizations. For candidates, we provide career opportunity matching,
                market intelligence, and interview preparation support. All services are subject to
                separate engagement agreements with clients.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 hg-heading">3. User Obligations</h3>
              <p>As a user of our website or services, you agree to:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Provide accurate and complete information when submitting forms or applications</li>
                <li>Not misrepresent your qualifications, experience, or identity</li>
                <li>Not use our website for any unlawful purpose or in violation of any applicable laws</li>
                <li>Not attempt to gain unauthorized access to our systems or data</li>
                <li>Respect the confidentiality of any information shared during the recruitment process</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 hg-heading">4. Intellectual Property</h3>
              <p>
                All content on this website — including text, graphics, logos, icons, images, and
                software — is the property of Happy Global or its licensors and is protected by
                United States and international intellectual property laws. You may not reproduce,
                distribute, or create derivative works without our prior written consent.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 hg-heading">5. Confidentiality</h3>
              <p>
                Both clients and candidates acknowledge that they may receive confidential
                information during the recruitment process, including but not limited to compensation
                data, business strategies, organizational structures, and candidate profiles. All
                parties agree to maintain strict confidentiality and not disclose such information
                to third parties without prior consent.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 hg-heading">6. Limitation of Liability</h3>
              <p>
                Happy Global acts as an intermediary between client organizations and candidates.
                While we exercise due diligence in our search and assessment processes, we do not
                guarantee placement outcomes, candidate performance, or employment duration. To the
                fullest extent permitted by law, Happy Global shall not be liable for any indirect,
                incidental, or consequential damages arising from the use of our services.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 hg-heading">7. Placement Guarantees</h3>
              <p>
                Our executive search and professional recruitment engagements include placement
                guarantee periods as specified in individual client agreements. If a placed candidate
                voluntarily leaves or is terminated for cause within the guarantee period, we will
                conduct a replacement search at no additional professional fee, subject to the terms
                of the engagement agreement.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 hg-heading">8. Third-Party Links</h3>
              <p>
                Our website may contain links to third-party websites. We are not responsible for
                the content, privacy practices, or terms of such external sites. Access them at
                your own discretion.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 hg-heading">9. Modifications to Terms</h3>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective
                immediately upon posting to this page. Continued use of our services after changes
                constitutes acceptance of the modified Terms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 hg-heading">10. Governing Law</h3>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the
                State of Texas, without regard to its conflict of law principles. Any disputes
                arising under these Terms shall be resolved in the courts of Dallas County, Texas.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 hg-heading">11. Contact</h3>
              <p>
                For questions about these Terms of Service, please contact:
              </p>
              <p className="mt-2">
                <strong>Happy Global</strong><br />
                Email: echo.yang@happyglobalservice.com<br />
                Phone: +1 669 871 3588
              </p>
            </div>

            <p className="text-xs opacity-50 pt-8">
              These terms may be updated periodically. The latest version will always be available on this page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
