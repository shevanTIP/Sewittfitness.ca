"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What happens in the Free Intro Assessment?",
    a: "We'll assess your goals, current training, and what's realistically needed to reach your outcome. You'll leave with clear next steps. If it's a fit, we'll outline the coaching structure and weekly cadence moving forward.",
  },
  {
    q: "Is the Free Intro Assessment a trial session?",
    a: "It's an assessment and fit check. The goal is clarity, expectations, and a plan. If coaching is a fit, we move forward with structure from there. It is not a workout session.",
  },
  {
    q: "What makes this different from following a program?",
    a: "Programs don't adapt to you in real time. Ongoing coaching does. You get a coach who sees your patterns, adjusts your plan, and keeps you accountable every week. A program gives you a spreadsheet. Coaching gives you a system built around you.",
  },
  {
    q: "Why the commitment?",
    a: "Because the system is designed to work over months, not weeks. The clients who stay consistent long-term see the biggest results. Short commitments produce short results.",
  },
  {
    q: "How much does coaching cost?",
    a: "Pricing is discussed during the Free Intro Assessment once fit has been confirmed on both sides. The intro assessment is where we assess goals and whether ongoing coaching makes sense before any numbers are discussed.",
  },
  {
    q: "Where are sessions held?",
    a: "Sessions are held in-person in the Mississauga and Toronto area. Specific location details are confirmed during the intro assessment.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[--color-onyx-2] section">
      <div className="container-x">
        <div className="text-center mb-12 md:mb-16 reveal">
          <span className="label-mono text-[--color-gold]">FAQ</span>
        </div>

        <div className="max-w-[720px] mx-auto divide-y divide-white/10 border-t border-b border-white/10">
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            const id = `faq-${i}`;
            return (
              <div key={f.q} className="reveal" data-delay={String(40 * i)}>
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={id}
                  className={[
                    "w-full text-left flex items-center justify-between gap-6 py-6",
                    "transition-colors",
                    isOpen ? "text-[--color-brick]" : "text-[--color-smoke] hover:text-[--color-brick]",
                  ].join(" ")}
                >
                  <span className="text-[16px] md:text-[18px] font-bold pr-4">
                    {f.q}
                  </span>
                  <span
                    className={[
                      "shrink-0 inline-block w-5 h-5 relative transition-transform duration-300",
                      isOpen ? "rotate-45" : "rotate-0",
                    ].join(" ")}
                    aria-hidden
                  >
                    <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-current" />
                    <span className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-current" />
                  </span>
                </button>
                <div
                  id={id}
                  role="region"
                  className={[
                    "overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out",
                    isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0",
                  ].join(" ")}
                >
                  <p className="pb-6 pr-10 text-[15px] md:text-[16px] text-[--color-smoke]/80 leading-relaxed">
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
