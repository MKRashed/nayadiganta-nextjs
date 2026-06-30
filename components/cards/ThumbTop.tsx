import type { Article } from '@/lib/types';

export default function ThumbTop({
  article,
  excerpt,
  shadowNone,
}: {
  article: Article;
  excerpt?: boolean;
  shadowNone?: boolean;
}) {
  return (
    <div className={`news-card text-center${shadowNone ? ' shadow-none' : ''}`}>
      <a href={`/details/${article.id}`}><img className="img-fluid" src={article.image} alt={article.title} /></a>
      <h3> <a href={`/details/${article.id}`}>{article.title}</a></h3>
      {excerpt && article.excerpt ? <p>{article.excerpt}</p> : null}
    </div>
  );
}
