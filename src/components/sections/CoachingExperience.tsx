"use client";

import { useState } from "react";

type Tab = {
  label: string;
  description: string;
  videoSrc?: string;
};

const tabs: Tab[] = [
  {
    label: "STRUCTURE",
    description:
      "Clients at Sewitt Fitness don't just show up for a workout. They work closely with the same coach multiple times per week, building a coaching relationship that allows for real adjustments, accountability, and long-term progress.",
    videoSrc: "/videos/clip1.mov",
  },
  {
    label: "ACCOUNTABILITY",
    description:
      "A structured plan built around you, not around trends. Accountability that doesn't rely on motivation — it's built into the process.",
    videoSrc: "/videos/clip2.mov",
  },
  {
    label: "PROGRESSION",
    description:
      "You don't need more motivation. You need a system and someone who keeps you accountable to it. When you train consistently with the same coach, patterns show up, adjustments happen in real time, and progress compounds.",
    videoSrc: "/videos/clip4.mp4",
  },
];

export default function CoachingExperience() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section
      id="coaching-experience"
      className="bg-[--color-cream] text-[--color-onyx] section"
    >
      <div className="container-x">
        <div className="text-center mb-12 md:mb-16 reveal">
          <span className="label-mono text-[--color-onyx]/50">
            COACHING EXPERIENCE
          </span>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 reveal">
          {tabs.map((t, i) => {
            const isActive = i === active;
            return (
              <button
                key={t.label}
                type="button"
                onClick={() => setActive(i)}
                className={[
                  "label-mono px-5 py-3 transition-all border",
                  isActive
                    ? "bg-[--color-brick] text-[--color-smoke] border-[--color-brick]"
                    : "bg-transparent text-[--color-onyx] border-[--color-onyx]/30 hover:border-[--color-onyx]",
                ].join(" ")}
                aria-pressed={isActive}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Video stage */}
        <div className="mx-auto max-w-[960px] reveal">
          <div className="aspect-video bg-[--color-onyx] rounded-md overflow-hidden flex items-center justify-center relative">
            {tab.videoSrc ? (
              <video
                key={tab.videoSrc}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                src={tab.videoSrc}
              />
            ) : (
              <div className="text-center text-[--color-smoke]/60 px-6">
                <div className="label-mono text-[--color-gold] mb-3">
                  Video {active + 1} — {tab.label}
                </div>
                <div className="text-[14px]">
                  Placeholder — replace with the &ldquo;{tab.label.toLowerCase()}&rdquo; clip
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <div className="label-mono-sm text-[--color-brick] mb-3">
              {tab.label}
            </div>
            <p className="text-[16px] md:text-[17px] text-[#333333] max-w-[760px] mx-auto">
              {tab.description}
            </p>
          </div>

          <div className="mt-12 text-center">
            <a href="#how-it-works" className="btn btn-primary">
              See How Coaching Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
