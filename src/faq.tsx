import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What boarding options does Ultimutt offer and where are they located?",
    a: (
      <div className="space-y-2">
        <p>
          <strong>
            Ultimutt offers premium dog boarding at two Gurgaon locations:
          </strong>
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Gwal Pahari</strong> – resort-style boarding for all breeds
          </li>
          <li>
            <strong>Galleria Market</strong> – a 5-star, indoor boarding
            facility exclusively for small breeds
          </li>
        </ul>
        <p>
          Both are professionally managed with structured routines and
          personalised care.
        </p>
      </div>
    ),
  },
  {
    q: "Are caretakers available round the clock at the boarding facilities?",
    a: (
      <p>
        Yes. <strong>Dedicated caretakers are present</strong>
        <strong>24×7</strong> at both our boarding locations to ensure constant
        supervision, comfort, and safety of all pets.
      </p>
    ),
  },
  {
    q: "Will I receive updates about my pet during boarding?",
    a: (
      <p>
        Absolutely. Pet parents receive{" "}
        <strong>10+ photo and video updates</strong> during the stay, shared
        regularly so you can stay connected and stress-free while your pet is
        with us.
      </p>
    ),
  },
  {
    q: "Do you provide pick-up and drop services for boarding?",
    a: (
      <p>
        Yes, we offer <strong>doorstep pick-up and drop services</strong> for
        boarding bookings at both Gwal Pahari and Galleria, subject to location
        and availability.
      </p>
    ),
  },
  {
    q: "What is included in Ultimutt’s grooming at home service?",
    a: (
      <div className="space-y-2">
        <p>
          Our grooming at home includes bathing, drying with professional
          dryers, trimming, de-shedding, nail clipping, ear cleaning, and
          styling. Services are performed by trained groomers using pet-safe
          products, ensuring comfort even during winters.
        </p>
      </div>
    ),
  },
  {
    q: "How is grooming at Ultimutt’s spa different from regular pet salons?",
    a: (
      <p>
        Ultimutt’s grooming spa offers a{" "}
        <strong>calm, hygienic, and professionally managed environment</strong>{" "}
        with trained in-house groomers, premium pet-safe products, and
        individual attention. We follow structured grooming protocols to ensure
        your pet feels relaxed, safe, and well cared for throughout the session.
      </p>
    ),
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#F6EE9A]">
      <div className="mx-auto flex flex-col max-w-full items-start justify-between py-12 md:px-[100px] px-[20px]">
        {/* Header */}
        <div className="flex flex-col gap-2 w-full text-center mb-8">
          <h2 className="md:text-[48px] sm:text-[32px] text-[28px] font-semibold">
            Frequently Asked Questions
          </h2>
          <span className="md:text-[26px] sm:text-[18px] text-[16px] font-medium text-black/70">
            Quick answers to the most common questions from pet parents.
          </span>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 w-full">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-xl border border-black/10 bg-white shadow-sm pb-3"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 pb-3 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="md:text-[20px] sm:text-[18px] text-[#252525] font-semibold">
                      {index + 1}.
                    </span>
                    <span className="md:text-[20px] sm:text-[18px] text-[#252525] font-semibold">
                      {item.q}
                    </span>
                  </div>

                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pt-3 border-t-1 border-t-[#AFAFAF] md:text-[16px] sm:text-[14px] text-[#454545] leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
