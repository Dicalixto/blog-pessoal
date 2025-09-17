import { notFound } from 'next/navigation';
import { posts } from '../../../data/posts';
import { ParsedUrlQuery } from 'querystring';

// Define the expected type for the params
interface PostPageParams extends ParsedUrlQuery {
  slug: string;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: `dia-${p.day}` }));
}

export default function PostPage({ params }: { params: PostPageParams }) {
  const post = posts.find((p) => `dia-${p.day}` === params.slug);
  if (!post) return notFound();
  return (
    <article className="max-w-3xl">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-slate-500 mb-8">
        Dia {post.day} • {new Date(post.dateISO).toLocaleDateString('pt-BR')}
      </p>
      <p className="text-lg leading-relaxed text-slate-800">{post.content}</p>
    </article>
  );
}
