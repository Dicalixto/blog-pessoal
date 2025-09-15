import Hero from './components/Hero';
import BlogCard from './components/BlogCard';
import { posts } from './data/posts';

export default function HomePage() {
  return (
    <section>
      <Hero />
      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((p) => (
          <BlogCard key={p.id} post={p} />
        ))}
      </div>
    </section>
  );
}
