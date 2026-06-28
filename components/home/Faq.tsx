"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

export default function Faq() {
  const [open, setOpen] = useState(0);

  const faqData = [
    {
      question: "What other services are you compatible with?",
      answer:
        "There are many variations of passages available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      question: "I have a technical i need resolved, who do i email?",
      answer:
        "Please contact our technical support team for assistance regarding any issue.",
    },
    {
      question: "What other services are you compatible with?",
      answer:
        "Our platform integrates with multiple online learning systems and services.",
    },
    {
      question: "What other services are you compatible with?",
      answer:
        "We provide support for various educational platforms and tools.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-500 mt-5 max-w-xl mx-auto">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border rounded overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className={`w-full flex justify-between items-center px-6 py-5 text-left font-medium ${
                  open === index
                    ? "bg-blue-50 text-gray-900"
                    : "bg-white"
                }`}
              >
                {item.question}

                {open === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>

              {open === index && (
                <div className="px-6 py-5 text-gray-500 leading-8">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Companies */}
        <div className="mt-28 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Trusted by over 800+ companies
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            <Image
              src="/coursera.png"
              alt="Coursera"
              width={120}
              height={40}
            />

            <Image
              src="/udemy.png"
              alt="Udemy"
              width={120}
              height={40}
            />

            <Image
              src="/fedex.png"
              alt="FedEx"
              width={120}
              height={40}
            />

            <Image
              src="/education.png"
              alt="Education"
              width={120}
              height={40}
            />

            <Image
              src="/elecom.png"
              alt="Elecom"
              width={120}
              height={40}
            />

            <Image
              src="/indeed.png"
              alt="Indeed"
              width={120}
              height={40}
            />
          </div>
        </div>
      </div>
    </section>
  );
}