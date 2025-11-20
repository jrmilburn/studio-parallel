"use client";

import React from "react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto px-6 py-20 prose prose-neutral">

        {/* Title */}
        <h1 className="text-4xl font-semibold tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-sm opacity-70 mb-12">
          Last updated: {new Date().toLocaleDateString("en-AU")}
        </p>

        {/* 1. About */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">1. About Studio Parallel</h2>
          <p>
            Studio Parallel (“we”, “us”, or “our”) provides software development,
            integrations, UX/UI, automation, technical consulting, and related
            digital services (“Services”). By accessing our website or using our
            Services, you agree to these Terms of Service (“Terms”).
          </p>
        </section>

        {/* 2. Engagement & Scope */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">2. Engagement and Scope of Work</h2>

          <p className="mb-4">Before starting any project, we will provide a written proposal outlining:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Deliverables</li>
            <li>Pricing</li>
            <li>Timelines</li>
            <li>Engagement terms</li>
          </ul>

          <p className="mt-6">
            A project begins once the client accepts the proposal in writing or provides payment.
          </p>

          <p>
            Any changes to the agreed scope may affect pricing, timelines, or deliverables and must be approved in writing.
          </p>
        </section>

        {/* 3. Payment Terms */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">3. Payment Terms</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Invoices are due within 7 days unless otherwise stated.</li>
            <li>Deposits may be required before work begins and are generally non-refundable.</li>
            <li>Late or unpaid invoices may result in:
              <ul className="list-circle pl-6 mt-1 space-y-1">
                <li>Paused work</li>
                <li>Delayed delivery</li>
                <li>Additional fees</li>
                <li>Termination of services</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* 4. Delivery */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">4. Delivery of Services</h2>
          <p className="mb-4">Delivery timelines are estimates and may change due to:</p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Client responsiveness</li>
            <li>Scope changes</li>
            <li>Technical limitations</li>
            <li>Third-party or vendor dependencies</li>
          </ul>

          <p className="mt-6">
            Clients agree to provide timely access, information, and feedback required for project completion.
          </p>
        </section>

        {/* 5. Intellectual Property */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">5. Intellectual Property</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              All work produced by Studio Parallel remains our property until all invoices are paid in full.
            </li>
            <li>
              Upon full payment, clients receive rights to use the completed deliverables for their business purposes.
            </li>
            <li>
              We retain ownership of:
              <ul className="list-circle pl-6 mt-1 space-y-1">
                <li>Internal tools</li>
                <li>Reusable components</li>
                <li>Proprietary code</li>
                <li>Development frameworks</li>
              </ul>
            </li>
            <li>
              We may showcase non-confidential work in our portfolio unless the client requests otherwise in writing.
            </li>
          </ul>
        </section>

        {/* 6. Confidentiality */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">6. Confidentiality</h2>
          <p>
            Both parties must keep confidential any business, technical, or operational information shared during a
            project. This obligation continues after the project ends.
          </p>
        </section>

        {/* 7. Warranties & Disclaimers */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">7. Warranties & Disclaimers</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We do not guarantee outcomes such as revenue, leads, sales, or user growth.</li>
            <li>Software development carries inherent risks and relies on external vendors, APIs, and services.</li>
            <li>We are not responsible for:
              <ul className="list-circle pl-6 mt-1 space-y-1">
                <li>Vendor or API outages</li>
                <li>Changes to third-party systems</li>
                <li>Data loss outside our control</li>
                <li>Security breaches caused by third-party providers</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* 8. Liability */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Studio Parallel is not liable for indirect, incidental, or
            consequential damages. Our total liability is limited to the fees paid in the 3 months preceding any claim.
          </p>
        </section>

        {/* 9. Termination */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">9. Termination</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Clients may terminate a project at any time with written notice.</li>
            <li>Fees for completed work up to the termination date must be paid.</li>
            <li>We may terminate a project due to:
              <ul className="list-circle pl-6 mt-1 space-y-1">
                <li>Non-payment</li>
                <li>Unreasonable behaviour</li>
                <li>Misuse of deliverables</li>
                <li>Project becoming unviable</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* 10. Refunds */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">10. Refund Policy</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>No refunds are provided for completed work.</li>
            <li>Retainer periods and time-based services are non-refundable.</li>
            <li>Deposits are non-refundable unless explicitly stated otherwise.</li>
            <li>Digital deliverables cannot be refunded once delivered.</li>
          </ul>
        </section>

        {/* 11. Website Use */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">11. Website Use</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You agree not to scrape, reverse-engineer, or interfere with the website.</li>
            <li>You must not attempt unauthorised access or misuse interactive features.</li>
          </ul>
        </section>

        {/* 12. Privacy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">12. Privacy</h2>
          <p>
            Our Privacy Policy explains how we collect, store, and manage your personal information. By using our
            website or services, you agree to the terms of that policy.
          </p>
        </section>

        {/* 13. Governing Law */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">13. Governing Law</h2>
          <p>
            These Terms are governed by the laws of Queensland, Australia. Any disputes will be handled through
            mediation or the courts of Queensland.
          </p>
        </section>

        {/* 14. Updates */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">14. Updates to These Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of our website or services constitutes acceptance
            of the revised Terms.
          </p>
        </section>

        {/* 15. Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">15. Contact</h2>
          <p>
            For questions regarding these Terms, contact us:
            <br />
            <strong>Email:</strong> joe@studioparallel.au
            <br />
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
