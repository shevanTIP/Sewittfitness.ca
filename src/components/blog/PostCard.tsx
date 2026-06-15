import Link from "next/link";
import type { Post } from "@/lib/posts";
import { CATEGORY_COLOR, formatDate } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/coaching-insights/${post.slug}`}
      className="group block bg-white rounded-lg overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.14)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-[--color-onyx-2]">
        <img
          src={post.image}
          alt=""
          className="w-full h-full object-cover transition-opacity duration-200 group-hover:opacity-90"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
      </div>
      <div className="p-6">
        <div
          className="label-mono-sm mb-3"
          style={{ color: CATEGORY_COLOR[post.category] }}
        >
          {post.category.toUpperCase()}
        </div>
        <h3 className="text-[18px] font-bold text-[--color-onyx] leading-snug mb-3">
          {post.title}
        </h3>
        <p className="text-[14px] text-[#444] leading-relaxed mb-5 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[12px] text-[#888]">
            {formatDate(post.date)} · {post.readTime}
          </span>
          <span className="text-[--color-brick] font-bold text-[13px]">
            Read Post →
          </span>
        </div>
      </div>
    </Link>
  );
}
