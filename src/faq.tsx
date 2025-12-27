import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do I book a service?",
    a: "You can easily book through our mobile app or website by selecting your preferred service, date, and time.",
  },
  {
    q: "Do you provide emergency support?",
    a: "Yes, we offer emergency support depending on availability. Please contact our support team immediately.",
  },
  {
    q: "Can I track my pet during service?",
    a: "Yes, real-time tracking is available through our app for selected services.",
  },
  {
    q: "What if my pet has medical conditions?",
    a: "Please inform us during booking so our team can take proper care and precautions.",
  },
  {
    q: "How do you ensure my pet’s safety?",
    a: "All caregivers are trained professionals, and we follow strict safety protocols.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#F6EE9A] py-16 px-4">
      <div className="mx-auto max-w-[1100px] flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-2 w-full text-center">
          <h2 className="md:text-[48px] sm:text-[32px] text-[28px] font-semibold">
            Frequently Asked Questions
          </h2>
          <span className="md:text-[26px] sm:text-[18px] text-[16px] font-medium text-black/70">
            Quick answers to the most common questions from pet parents.
          </span>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
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
                  <div className="px-6 pt-3 border-t-1 border-t-[#AFAFAF] md:text-[16px] sm:text-[14px] pt-3 text-[#454545] leading-relaxed">
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
