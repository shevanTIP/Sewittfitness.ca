/* About section with cycling background images.
 * Replace the four placeholder image paths below with the supplied photography of Chris.
 * The CSS animation handles the fade timing; one timeline, four images.
 */

const aboutImages = [
  "/images/about1.jpg",
  "/images/about2.jpg",
  "/images/coach.jpg",
  "/images/sewitdeadlift.jpeg",
];

export default function About() {
  return (
    <section id="about" className="bg-[--color-onyx] section">
      <div className="container-x">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-[--color-onyx-2] reveal">
            {aboutImages.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Christopher Sewitt training — frame ${i + 1}`}
                loading="lazy"
                className="about-img"
                style={{ animationDelay: `${i * 5}s` }}
              />
            ))}
          </div>

          <div>
            <div className="label-mono text-[--color-gold] mb-5 reveal">
              ABOUT SEWITT FITNESS
            </div>
            <h2 className="h-display text-[32px] md:text-[36px] text-[--color-smoke] mb-7 leading-tight reveal" data-delay="80">
              Built around the coaching relationship, not the session.
            </h2>
            <div className="space-y-5 text-[--color-smoke]/85 text-[16px] md:text-[17px]">
              <p className="reveal" data-delay="160">
                Sewitt Fitness is built around delivering a complete personal
                training experience. From structured programming to clear
                expectations and ongoing accountability, every part of the
                process is designed to support long-term progress.
              </p>
              <p className="reveal" data-delay="240">
                This isn&rsquo;t about quick fixes or isolated sessions.
                It&rsquo;s about working closely with a coach over time,
                removing guesswork, and building consistency until results
                become normal.
              </p>
              <p className="reveal" data-delay="320">
                By training consistently with the same coach, patterns emerge,
                adjustments happen in real time, and the coaching becomes more
                accurate, more accountable, and more effective over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
