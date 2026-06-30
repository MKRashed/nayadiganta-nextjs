import type { Article } from '@/lib/types';

export default function NewsItem({ article, showImage = true }: { article: Article; showImage?: boolean }) {
  return (
    <div className="news-item">
      {showImage ? <img src={article.image} className="img-fluid" alt="News Image" /> : null}
      <h3 className="news-title"><a href={`/details/${article.id}`}>{article.title}</a></h3>
    </div>
  );
}
