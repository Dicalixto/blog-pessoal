import Hero from './components/Hero';
import BlogCard from './components/BlogCard';
import { posts } from './data/posts';

export default function HomePage() {
  return (
    <section>
      <Hero />
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
