import type { Article } from '@/lib/types';

export default function RecentlyNewsCard({ article }: { article: Article }) {
  return (
    <div className="recently-news-card">
      <a href={`/details/${article.id}`}><img src={article.image} className="img-fluid" alt={article.title} /></a>
      <h4> <a href={`/details/${article.id}`}>{article.title}</a> </h4>
    </div>
  );
}
