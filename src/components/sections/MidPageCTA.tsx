import { CALENDLY_URL } from "@/lib/site";

export default function MidPageCTA() {
  return (
    <section
      className="relative bg-[--color-brick] overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(193,18,31,0.88), rgba(193,18,31,0.88)), url('/images/cta.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="container-x py-20 md:py-24 text-center">
        <h2 className="h-display text-[36px] md:text-[40px] text-[--color-smoke] mb-4 reveal">
          Ready to start?
        </h2>
        <p className="text-[16px] text-[--color-smoke]/85 max-w-[560px] mx-auto mb-8 reveal" data-delay="80">
          Book your Free Intro Assessment. It&rsquo;s structured, it&rsquo;s
          free, and it&rsquo;s the first step.
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost reveal"
          data-delay="160"
        >
          Book Free Intro Session
        </a>
      </div>
    </section>
  );
}
