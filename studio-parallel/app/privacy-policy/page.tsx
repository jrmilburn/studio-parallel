"use client";

import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto px-6 py-20 prose prose-neutral">

        {/* Title */}
        <h1 className="text-4xl font-semibold tracking-tight mb-4">
          Privacy Policy
        </h1>

        <p className="text-sm opacity-70 mb-12">
          Last updated: {new Date().toLocaleDateString("en-AU")}
        </p>

        {/* 1. Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p>
            Studio Parallel (“we”, “us”, or “our”) is committed to protecting your
            privacy and complying with the Australian Privacy Principles (APPs)
            under the Privacy Act 1988. This Privacy Policy explains how we collect,
            use, store, and disclose your personal information when you visit our
            website or engage our services.
          </p>
        </section>

        {/* 2. Information we collect */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
          <p className="mb-4">We may collect the following categories of personal information:</p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business name and project details</li>
            <li>Billing and payment information (processed securely)</li>
            <li>Website usage data, analytics, and device information</li>
            <li>Any information you voluntarily submit through forms or emails</li>
          </ul>

          <p className="mt-6">
            We only collect information reasonably necessary to provide our services
            or operate our website effectively.
          </p>
        </section>

        {/* 3. How information is collected */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">3. How We Collect Information</h2>

          <p className="mb-4">We collect personal information in several ways, including:</p>

          <ul className="list-disc pl-6 space-y-1">
            <li>When you submit a form or enquiry on our website</li>
            <li>When you contact us by email or phone</li>
            <li>When you engage Studio Parallel for a project or service</li>
            <li>Automatically through analytics, cookies, and browser data</li>
          </ul>
        </section>

        {/* 4. Use of personal information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">4. How We Use Your Information</h2>

          <p className="mb-4">We may use your personal information to:</p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Provide, operate, and improve our services</li>
            <li>Respond to enquiries and communicate with you</li>
            <li>Send invoices, proposals, or service confirmations</li>
            <li>Personalise and improve your website experience</li>
            <li>Maintain internal business records and compliance</li>
            <li>Conduct analytics, performance monitoring, and security checks</li>
          </ul>

          <p className="mt-6">
            We do <strong>not</strong> sell, rent, or trade your personal information.
          </p>
        </section>

        {/* 5. Disclosure */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">5. Disclosure of Personal Information</h2>

          <p className="mb-4">
            We may share personal information with trusted third-party service
            providers who help us operate our business, including:
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Hosting providers and cloud infrastructure platforms</li>
            <li>Analytics and tracking tools</li>
            <li>Payment processors</li>
            <li>Email and communication services</li>
            <li>Subcontractors assisting with technical delivery</li>
          </ul>

          <p className="mt-6">
            These providers are required to handle your data securely and use it only
            for the purpose for which it was provided.
          </p>
        </section>

        {/* 6. Overseas transfers */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">6. International Data Transfers</h2>
          <p>
            Some service providers may store or process data overseas (including the
            United States, Europe, or Asia). Where this occurs, we take reasonable
            steps to ensure your information is handled in accordance with the
            Australian Privacy Principles.
          </p>
        </section>

        {/* 7. Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">7. Cookies & Tracking</h2>

          <p className="mb-4">We may use cookies, tracking technologies, and analytics tools to:</p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Understand website usage patterns</li>
            <li>Improve performance and user experience</li>
            <li>Monitor security and prevent misuse</li>
          </ul>

          <p className="mt-6">
            You can disable cookies via your browser settings, but some website
            features may not function correctly if you do.
          </p>
        </section>

        {/* 8. Data security */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">8. Data Security</h2>
          <p>
            We take reasonable steps to protect your information from misuse, loss,
            unauthorised access, or disclosure. However, no method of electronic
            transmission or storage is completely secure, and we cannot guarantee
            absolute security.
          </p>
        </section>

        {/* 9. Access & updates */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">9. Accessing or Updating Your Information</h2>
          <p>
            You may request access to, or correction of, the personal information we
            hold about you. Requests can be made using the contact details below, and
            we will respond within a reasonable timeframe.
          </p>
        </section>

        {/* 10. Retention */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">10. Data Retention</h2>
          <p>
            We retain personal information only as long as necessary to fulfil the
            purposes outlined in this policy or to comply with legal, tax, or
            regulatory obligations.
          </p>
        </section>

        {/* 11. Third-party links */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">11. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. These sites are not
            controlled by Studio Parallel, and we are not responsible for their
            privacy practices or content.
          </p>
        </section>

        {/* 12. Children */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">12. Children’s Privacy</h2>
          <p>
            Our website and services are not intended for individuals under 16 years
            of age. We do not knowingly collect personal information from children.
          </p>
        </section>

        {/* 13. Changes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">13. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in
            our practices or legal requirements. Continued use of our website or
            services constitutes acceptance of any updated policy.
          </p>
        </section>

        {/* 14. Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">14. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or would like to request
            access to your data, you can contact us:
            <br />
            <strong>Email:</strong> joe@studioparallel.au <br />
            <strong>Website:</strong>{" "}
            <a href="https://studioparallel.au" target="_blank" rel="noopener noreferrer">
              studioparallel.au
            </a>
          </p>
        </section>

      </div>
    </main>
  );
}
