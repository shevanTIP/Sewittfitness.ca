import type { Metadata } from "next";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/site";
import { CATEGORY_COLOR, POSTS, formatDate } from "@/lib/posts";
import PostGrid from "@/components/blog/PostGrid";

export const metadata: Metadata = {
  title: "Coaching Insights — Sewitt Fitness",
  description:
    "Training thoughts, honest advice, and coaching notes from Christopher Sewitt.",
};

export default function CoachingInsightsPage() {
  const featured = POSTS.find((p) => p.featured) ?? POSTS[0];
  const rest = POSTS.filter((p) => p.slug !== featured.slug);

  return (
    <>
      {/* Hero bar */}
      <section className="bg-[--color-onyx] pt-32 md:pt-36 pb-16 md:pb-20">
        <div className="container-x text-center">
          <span className="label-mono text-[--color-gold]">COACHING INSIGHTS</span>
          <h1 className="mt-6 text-[28px] md:text-[36px] font-bold text-[--color-smoke] max-w-[720px] mx-auto leading-tight">
            Training thoughts, honest advice, and coaching notes from Chris.
          </h1>
        </div>
      </section>

      {/* Featured post */}
      <section className="bg-[--color-onyx-2]">
        <div className="container-x py-12 md:py-16">
          <Link
            href={`/coaching-insights/${featured.slug}`}
            className="block group rounded-md overflow-hidden bg-[--color-onyx-3]"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-[16/10] md:aspect-auto bg-[--color-onyx]">
                <img
                  src={featured.image}
                  alt=""
                  className="w-full h-full object-cover transition-opacity duration-200 group-hover:opacity-90"
                  loading="eager"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div
                  className="label-mono-sm mb-4"
                  style={{ color: CATEGORY_COLOR[featured.category] }}
                >
                  {featured.category.toUpperCase()}
                </div>
                <h2 className="text-[28px] md:text-[32px] font-bold text-[--color-smoke] leading-tight mb-5">
                  {featured.title}
                </h2>
                <p className="text-[16px] text-[--color-smoke]/75 mb-6">
                  {featured.excerpt}
                </p>
                <div className="text-[13px] text-[--color-smoke]/50 mb-7">
                  By Chris Sewitt · {formatDate(featured.date)} · {featured.readTime}
                </div>
                <span className="btn btn-primary self-start">Read Post</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Filter + grid */}
      <PostGrid posts={rest} />

      {/* Pre-footer in-page CTA so blog shoppers see one without scrolling to footer */}
      <section className="bg-[--color-brick]">
        <div className="container-x py-16 text-center">
          <h3 className="h-display text-[28px] md:text-[32px] text-[--color-smoke] mb-4">
            Got a question? Bring it to the intro.
          </h3>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Book Free Intro Session
          </a>
        </div>
      </section>
    </>
  );
}
