import type { Metadata } from "next";
import LegalShell from "../legal-shell";

export const metadata: Metadata = {
  title: "Terms of Service | PatientTrac Limited",
  description: "Terms governing use of the PatientTrac Limited corporate website.",
};

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Terms of Service"
      summary="These terms govern access to and use of the PatientTrac Limited corporate website."
    >
      <section>
        <h2>1. About these terms</h2>
        <p>
          These Terms of Service apply when you access or use the website operated
          by PatientTrac Limited at patienttracltd.com (the “Site”). By using the
          Site, you agree to these terms. If you do not agree, please do not use
          the Site.
        </p>
      </section>

      <section>
        <h2>2. Information only</h2>
        <p>
          The Site provides general corporate information about PatientTrac
          Limited and its financial consulting and corporate development
          services. Site content is not investment, financial, legal, tax,
          accounting, or other professional advice and should not be relied on as
          such. You should obtain advice appropriate to your circumstances before
          making a decision.
        </p>
        <p>
          Nothing on the Site is an offer, solicitation, recommendation, or
          invitation to buy, sell, subscribe for, or otherwise transact in any
          security, investment, or financial product.
        </p>
      </section>

      <section>
        <h2>3. Permitted use</h2>
        <p>You may use the Site only for lawful purposes. You must not:</p>
        <ul>
          <li>attempt to gain unauthorised access to the Site, its systems, or connected infrastructure;</li>
          <li>introduce malware, harmful code, or technology intended to disrupt the Site;</li>
          <li>use automated means to overload, scrape, or interfere with the Site except as permitted by law;</li>
          <li>misrepresent your identity or affiliation with PatientTrac Limited; or</li>
          <li>use Site content in a misleading, unlawful, or infringing manner.</li>
        </ul>
      </section>

      <section>
        <h2>4. Intellectual property</h2>
        <p>
          The Site and its content, including text, design, graphics, logos, and
          other materials, are owned by or licensed to PatientTrac Limited and are
          protected by applicable intellectual property laws. You may view and
          print reasonable extracts for your own internal, non-commercial use.
          No other rights are granted without prior written permission.
        </p>
      </section>

      <section>
        <h2>5. Third-party links</h2>
        <p>
          The Site may link to third-party websites or services. Those resources
          are provided for convenience only. PatientTrac Limited does not control
          and is not responsible for their content, availability, security, or
          privacy practices.
        </p>
      </section>

      <section>
        <h2>6. Availability and accuracy</h2>
        <p>
          We aim to keep Site information accurate and current but do not
          guarantee that all content is complete, error-free, or continuously
          available. We may update, suspend, or withdraw all or part of the Site
          without notice.
        </p>
      </section>

      <section>
        <h2>7. Liability</h2>
        <p>
          To the fullest extent permitted by law, PatientTrac Limited will not be
          liable for indirect or consequential loss, loss of profit, revenue,
          opportunity, goodwill, or data arising from use of, or inability to use,
          the Site or reliance on its content.
        </p>
        <p>
          Nothing in these terms excludes or limits liability for fraud or
          fraudulent misrepresentation, death or personal injury caused by
          negligence, or any other liability that cannot lawfully be excluded or
          limited.
        </p>
      </section>

      <section>
        <h2>8. Privacy</h2>
        <p>
          Our <a href="/privacy">Privacy Policy</a> explains how we handle personal
          information associated with the Site and communications sent to us.
        </p>
      </section>

      <section>
        <h2>9. Changes</h2>
        <p>
          We may revise these terms from time to time. Updated terms take effect
          when posted on the Site, with the effective date shown above. Continued
          use after an update constitutes acceptance of the revised terms.
        </p>
      </section>

      <section>
        <h2>10. Governing law</h2>
        <p>
          These terms and any non-contractual obligations arising from them are
          governed by the laws of England and Wales. The courts of England and
          Wales have exclusive jurisdiction, subject to any mandatory rights that
          apply under local law.
        </p>
      </section>

      <section>
        <h2>11. Contact</h2>
        <p>
          Questions about these terms may be sent to
          <a href="mailto:legal@patienttracltd.com"> legal@patienttracltd.com</a> or
          to our Corporate Headquarters at 1 Gracechurch Street, 5th Floor,
          London, England EC3V 0DD.
        </p>
      </section>
    </LegalShell>
  );
}
