// src/app/components/BlogCard.tsx
import Link from 'next/link';
import type { Post } from '../data/posts';

export default function BlogCard({ post }: { post: Post }) {
  return (
    <article className="rounded-2xl border border-[--color-border] bg-[--color-card] p-5 shadow-sm hover:shadow-md transition-shadow hover:border-[--color-accent]">
      <header className="mb-2">
        {/* Título com cor forte em ambos os temas */}
        <h3 className="text-xl font-semibold leading-tight text-[--color-foreground]">
          <Link href={`/post/dia-${post.day}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>

        {/* Meta levemente atenuada */}
        <p className="text-xs text-[--color-muted] mt-1">
          Dia {post.day} • {new Date(post.dateISO).toLocaleDateString('pt-BR')}
        </p>
      </header>

      {/* Texto principal com contraste alto */}
      <p className="text-[--color-foreground]/90">{post.excerpt}</p>
    </article>
  );
}
