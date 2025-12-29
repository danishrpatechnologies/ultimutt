import React from "react";
import Cta from "./cta.tsx";

const PrivacyPolicy = () => {
  return (
    <>
      <Cta />
      <div className="mx-auto max-w-full px-4 py-10 lg:px-[100px] bg-gray-100">
        <div className="max-w-4xl mx-auto">
          {/* PAGE TITLE */}
          <h1 className="text-[32px] lg:text-[48px] font-semibold text-center mb-8">
            Privacy Policy
          </h1>

          {/* INTRO */}
          <section className="mb-6">
            <h2 className="text-[20px] font-semibold mb-2">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy outlines the practices of{" "}
              <strong>Ultimutt petcare private limited</strong>, operating under
              the brand name <strong>Ultimutt Daycare & Pet Resort</strong>,
              regarding the collection, use, and protection of personal
              information through our website.
            </p>
          </section>

          {/* INFORMATION WE COLLECT */}
          <section className="mb-6">
            <h2 className="text-[20px] font-semibold mb-2">
              2. Information We Collect
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                We may collect personal information such as names, addresses,
                phone numbers, and email addresses when voluntarily provided
                during the booking and inquiry process.
              </li>
              <li>
                Non-personal information, including browser type, IP address,
                and technical data, may be collected automatically through
                cookies and similar technologies.
              </li>
            </ul>
          </section>

          {/* USE OF INFORMATION */}
          <section className="mb-6">
            <h2 className="text-[20px] font-semibold mb-2">
              3. Use of Information
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                Personal information is used to provide and improve our
                services, process bookings, and communicate with users.
              </li>
              <li>
                Non-personal information may be used for analytics, website
                improvement, and marketing purposes.
              </li>
            </ul>
          </section>

          {/* SHARING OF INFORMATION */}
          <section className="mb-6">
            <h2 className="text-[20px] font-semibold mb-2">
              4. Sharing of Information
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                We do not sell, trade, or transfer personal information to
                outside parties without user consent or unless required by law.
              </li>
              <li>
                Non-personal information may be shared with third-party service
                providers for analytics and website optimization.
              </li>
            </ul>
          </section>

          {/* SECURITY */}
          <section className="mb-6">
            <h2 className="text-[20px] font-semibold mb-2">5. Security</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                We implement appropriate security measures to protect personal
                information.
              </li>
              <li>
                Users are encouraged to use strong, unique passwords and keep
                login credentials confidential.
              </li>
            </ul>
          </section>

          {/* THIRD-PARTY LINKS */}
          <section className="mb-6">
            <h2 className="text-[20px] font-semibold mb-2">
              6. Third-Party Links
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites. Ultimutt
              petcare private limited is not responsible for the privacy
              practices or content of these external sites.
            </p>
          </section>

          {/* USER RIGHTS */}
          <section className="mb-6">
            <h2 className="text-[20px] font-semibold mb-2">7. User Rights</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                Users have the right to access, correct, or delete their
                personal information.
              </li>
              <li>
                To exercise these rights, users may contact us using the email
                address provided below.
              </li>
            </ul>
          </section>

          {/* CHILDREN’S PRIVACY */}
          <section className="mb-6">
            <h2 className="text-[20px] font-semibold mb-2">
              8. Children’s Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not intended for individuals under the age of 18.
              We do not knowingly collect or maintain personal information from
              children.
            </p>
          </section>

          {/* CHANGES */}
          <section className="mb-6">
            <h2 className="text-[20px] font-semibold mb-2">
              9. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ultimutt petcare private limited reserves the right to update this
              Privacy Policy as necessary. Users will be notified of any
              material changes.
            </p>
          </section>

          {/* CONTACT INFORMATION */}
          <section className="mt-10 border-t pt-6">
            <h2 className="text-[20px] font-semibold mb-2">
              10. Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Ultimutt petcare private limited</strong>
              <br />
              Address: 49/9, 49/26, Revenue Estate, Gurgaon Faridabad Road, Gwal
              Pahari, Gurugram, Haryana, 122003
              <br />
              Email: <span className="font-medium">[Your Contact Email]</span>
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              By using the Ultimutt Daycare & Pet Resort website, you
              acknowledge that you have read, understood, and agree to the terms
              of this Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
