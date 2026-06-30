import type { Article } from '@/lib/types';

export default function ThumbLeft({ article }: { article: Article }) {
  return (
    <div className="news-card">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-4">
          <a href={`/details/${article.id}`}><img className="img-fluid" src={article.image} alt={article.title} /></a>
        </div>
        <div className="col-lg-9 col-md-9 col-8">
          <h4> <a href={`/details/${article.id}`}>{article.title}</a></h4>
        </div>
      </div>
    </div>
  );
}
