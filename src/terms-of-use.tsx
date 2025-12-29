import React from "react";
import Cta from "./cta.tsx";

const TermsAndConditions = () => {
  return (
    <>
      <Cta />
      <div className="mx-auto max-w-full px-4 py-10 lg:px-[100px] bg-gray-100">
        <div className="max-w-4xl mx-auto">
          {/* PAGE TITLE */}
          <h1 className="text-[32px] lg:text-[48px] font-semibold text-center mb-8">
            Terms & Conditions
          </h1>

          {/* INTRODUCTION */}
          <section className="mb-6">
            <h2 className="text-[20px] font-semibold mb-2">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to the Ultimutt Daycare & Pet Resort website, owned and
              operated by <strong>Ultimutt Petcare Private Limited</strong>,
              registered at 49/9, 49/26, Gurgaon Faridabad Road, Gwal Pahari,
              Gurugram, Haryana, 122003.
            </p>
          </section>

          {/* ACCEPTANCE OF TERMS */}
          <section className="mb-6">
            <h2 className="text-[20px] font-semibold mb-2">
              2. Acceptance of Terms
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                By accessing and using the Ultimutt Daycare & Pet Resort
                website, you agree to comply with and be bound by these terms
                and conditions.
              </li>
              <li>
                If you do not agree with any part of these terms, please do not
                use our website.
              </li>
            </ul>
          </section>

          {/* PRIVACY POLICY */}
          <section className="mb-6">
            <h2 className="text-[20px] font-semibold mb-2">
              3. Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our Privacy Policy explains how we collect, use, and protect your
              personal information. By using our website, you consent to the
              practices described in the Privacy Policy.
            </p>
          </section>

          {/* INTELLECTUAL PROPERTY */}
          <section className="mb-6">
            <h2 className="text-[20px] font-semibold mb-2">
              4. Intellectual Property
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                All content on this website, including text, images, logos, and
                designs, is the property of <strong>Snoring Panda LLP</strong>{" "}
                and is protected by applicable copyright and intellectual
                property laws.
              </li>
              <li>
                You may not reproduce, distribute, or use any website content
                without express written permission.
              </li>
            </ul>
          </section>

          {/* BOOKINGS */}
          <section className="mb-6">
            <h2 className="text-[20px] font-semibold mb-2">
              5. Booking and Reservations
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                All bookings and reservations are subject to availability and
                the terms outlined in our Dog Boarding & Daycare Centre Terms &
                Conditions.
              </li>
              <li>
                Users are responsible for providing accurate and up-to-date
                information during the booking process.
              </li>
            </ul>
          </section>

          {/* THIRD PARTY LINKS */}
          <section className="mb-6">
            <h2 className="text-[20px] font-semibold mb-2">
              6. Links to Third-Party Websites
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites for
              convenience. We do not endorse, control, or take responsibility
              for the content or practices of these external websites.
            </p>
          </section>

          {/* LIMITATION OF LIABILITY */}
          <section className="mb-6">
            <h2 className="text-[20px] font-semibold mb-2">
              7. Limitation of Liability
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                Snoring Panda LLP and Ultimutt Daycare & Pet Resort shall not be
                liable for any damages, losses, or injuries resulting from the
                use of our website or services.
              </li>
              <li>
                We make no warranties or representations regarding the accuracy
                or completeness of website content.
              </li>
            </ul>
          </section>

          {/* CHANGES */}
          <section className="mb-6">
            <h2 className="text-[20px] font-semibold mb-2">
              8. Changes to Terms and Website
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                Snoring Panda LLP reserves the right to update, modify, or
                discontinue any part of the website or these terms at any time
                without prior notice.
              </li>
              <li>
                Users are responsible for reviewing the terms regularly to stay
                informed of changes.
              </li>
            </ul>
          </section>

          {/* GOVERNING LAW */}
          <section className="mb-6">
            <h2 className="text-[20px] font-semibold mb-2">9. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These terms and conditions are governed by the laws of India. Any
              disputes arising from the use of this website shall be subject to
              the exclusive jurisdiction of the courts in Gurgaon, Haryana.
            </p>
          </section>

          {/* REFUND POLICY */}
          <section className="mb-6">
            <h2 className="text-[20px] font-semibold mb-2">Refund Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              All bookings are non-cancellable and non-refundable. Amount once
              paid will not be refunded and cannot be used for any other
              services. However, the amount paid may be utilised against the
              same services within the next <strong>90 days</strong> from the
              date of cancellation.
            </p>
          </section>

          {/* CONTACT INFORMATION */}
          <section className="mt-10 border-t pt-6">
            <h2 className="text-[20px] font-semibold mb-2">
              10. Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Ultimutt Daycare & Pet Resort</strong>
              <br />
              (Ultimutt Petcare Private Limited)
              <br />
              Address: 49/9, 49/26, Revenue Estate, Gurgaon Faridabad Road, Gwal
              Pahari, Gurugram, Haryana, 122003
              <br />
              Email: <strong>snoringpandallp@gmail.com</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              By using the Ultimutt Daycare & Pet Resort website, you
              acknowledge that you have read, understood, and agree to abide by
              these terms and conditions.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
