import { TRUST_STATS } from "@/lib/site";

export default function TrustBar() {
  return (
    <section className="bg-[--color-onyx-2] border-t border-white/5">
      <div className="container-x py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
          {TRUST_STATS.map((s) => (
            <div key={s.label} className="reveal">
              <div className="h-display text-[36px] md:text-[40px] text-[--color-smoke]">
                {s.value}
              </div>
              <div className="label-mono mt-3 text-[--color-gold]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
