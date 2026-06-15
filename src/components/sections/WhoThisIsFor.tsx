const yes = [
  "Want real structure and a clear plan, not guesswork",
  "Need accountability that doesn't depend on motivation",
  "Are focused on long-term progress, not a 30-day fix",
  "Are willing to show up consistently, multiple times per week",
  "Want a coach with standards and a defined process",
];

const no = [
  "Are looking for a quick transformation or short-term results",
  "Want casual drop-in sessions with no commitment",
  "Are not ready to invest in a proper coaching relationship",
  "Prefer to follow a generic program on their own",
];

export default function WhoThisIsFor() {
  return (
    <section className="bg-[--color-onyx] section">
      <div className="container-x">
        <div className="text-center mb-12 md:mb-16 reveal">
          <span className="label-mono text-[--color-gold]">IS THIS FOR YOU?</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-0 relative">
          <div className="md:pr-12">
            <h3 className="font-bold text-[22px] text-[--color-smoke] mb-8 reveal">
              Built for people who:
            </h3>
            <ul className="space-y-5">
              {yes.map((item, i) => (
                <li
                  key={item}
                  className="flex gap-4 items-start reveal"
                  data-delay={String(60 * i)}
                >
                  <span
                    className="text-[--color-gold] text-[18px] leading-[1.4] shrink-0 select-none"
                    aria-hidden
                  >
                    +
                  </span>
                  <span className="text-[16px] text-[--color-smoke]/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vertical divider on desktop */}
          <div
            aria-hidden
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[--color-brick]/60"
          />

          <div className="md:pl-12">
            <h3 className="font-bold text-[22px] text-[--color-smoke]/70 mb-8 reveal">
              Not for people who:
            </h3>
            <ul className="space-y-5">
              {no.map((item, i) => (
                <li
                  key={item}
                  className="flex gap-4 items-start reveal"
                  data-delay={String(60 * i)}
                >
                  <span
                    className="text-[--color-brick] text-[18px] leading-[1.4] shrink-0 select-none"
                    aria-hidden
                  >
                    ×
                  </span>
                  <span className="text-[16px] text-[--color-smoke]/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
