import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CATEGORY_COLOR,
  POSTS,
  formatDate,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/posts";
import { CALENDLY_URL } from "@/lib/site";
import PostCard from "@/components/blog/PostCard";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found — Sewitt Fitness" };
  return {
    title: `${post.title} — Coaching Insights — Sewitt Fitness`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <>
      <article>
        {/* Header */}
        <header className="bg-[--color-onyx] pt-32 md:pt-36 pb-12">
          <div className="container-x max-w-[820px]">
            <Link
              href="/coaching-insights"
              className="inline-block text-[--color-brick] text-[13px] font-bold mb-8 hover:opacity-80"
            >
              ← Coaching Insights
            </Link>
            <div
              className="label-mono-sm mb-5"
              style={{ color: CATEGORY_COLOR[post.category] }}
            >
              {post.category.toUpperCase()}
            </div>
            <h1 className="h-display text-[40px] md:text-[48px] text-[--color-smoke] leading-[1.05] mb-6">
              {post.title}
            </h1>
            <div className="text-[14px] text-[--color-smoke]/55">
              By Chris Sewitt · {formatDate(post.date)} · {post.readTime}
            </div>
          </div>
        </header>

        {/* Hero image */}
        <div className="bg-[--color-onyx-2]">
          <div className="container-x">
            <div className="relative w-full overflow-hidden bg-[--color-onyx]" style={{ maxHeight: 480 }}>
              <img
                src={post.image}
                alt=""
                className="w-full h-full object-cover"
                style={{ maxHeight: 480 }}
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="bg-[--color-onyx]">
          <div className="container-x py-16 md:py-24">
            <div className="max-w-[680px] mx-auto space-y-6 text-[--color-smoke]/90 text-[17px] md:text-[18px] leading-[1.7]">
              {post.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* End-of-post CTA */}
      <section className="bg-[--color-brick]">
        <div className="container-x py-16 md:py-20 text-center">
          <h2 className="h-display text-[32px] md:text-[40px] text-[--color-smoke] mb-4">
            Want this applied to your training?
          </h2>
          <p className="text-[16px] text-[--color-smoke]/85 max-w-[560px] mx-auto mb-8">
            Book a Free Intro Assessment. We&rsquo;ll talk through your goals
            and outline whether ongoing coaching is the right fit.
          </p>
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

      {/* More posts */}
      {related.length > 0 && (
        <section className="bg-[--color-onyx-2] section">
          <div className="container-x">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="label-mono text-[--color-gold]">
                  MORE POSTS
                </span>
                <h2 className="h-display text-[28px] md:text-[32px] text-[--color-smoke] mt-4">
                  Keep reading
                </h2>
              </div>
              <Link
                href="/coaching-insights"
                className="hidden md:inline text-[13px] uppercase tracking-[0.12em] text-[--color-smoke]/70 hover:text-[--color-brick]"
              >
                All posts →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
