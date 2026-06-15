const items = [
  {
    q: "How fast will I see results?",
    a: "Progress depends on consistency. Most clients start feeling stronger within weeks. Visible change follows over time. The goal is results that last, not a quick spike.",
  },
  {
    q: "What makes this different from a gym program?",
    a: "Programs don't adapt to you in real time. Ongoing coaching does. You get structure, real-time adjustments, and accountability built over time with the same coach every session.",
  },
  {
    q: "Why do I need to commit long-term?",
    a: "Because the system is designed to work over months, not weeks. The clients who stay consistent long enough see the biggest results. Short stints produce short results.",
  },
  {
    q: "What actually happens at the intro assessment?",
    a: "We'll assess your goals, current training, and what's realistically needed to reach your outcome. You'll leave with clear next steps. If it's a fit, we'll outline the coaching structure and weekly cadence moving forward.",
  },
];

export default function Objections() {
  return (
    <section className="bg-[--color-onyx-2] section">
      <div className="container-x">
        <div className="text-center mb-12 md:mb-16 reveal">
          <span className="label-mono text-[--color-gold]">COMMON QUESTIONS</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-7 max-w-[1080px] mx-auto">
          {items.map((it, i) => (
            <div
              key={it.q}
              className="bg-[--color-onyx-3] rounded-md border-l-[3px] border-[--color-brick] p-7 md:p-8 reveal"
              data-delay={String(60 * i)}
            >
              <h3 className="text-[18px] font-bold text-[--color-smoke] mb-3">
                {it.q}
              </h3>
              <p className="text-[16px] text-[--color-smoke]/80 leading-relaxed">
                {it.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
