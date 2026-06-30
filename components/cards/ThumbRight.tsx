import type { Article } from '@/lib/types';

export default function ThumbRight({
  article,
  border0,
  shadowNone,
}: {
  article: Article;
  border0?: boolean;
  shadowNone?: boolean;
}) {
  return (
    <div className={`news-card${border0 ? ' border-0' : ''}${shadowNone ? ' shadow-none' : ''}`}>
      <div className="row">
        <div className="col-lg-8 col-md-7 col-8">
          <h4> <a href={`/details/${article.id}`}>{article.title}</a></h4>
        </div>
        <div className="col-lg-4 col-md-5 col-4">
          <a href={`/details/${article.id}`}><img className="img-fluid" src={article.image} alt={article.title} /></a>
        </div>
      </div>
    </div>
  );
}
