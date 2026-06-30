import type { Article } from '@/lib/types';

export default function AvatarCard({ article }: { article: Article }) {
  return (
    <div className="news-card">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-2 col-3 ">
          <a href={`/details/${article.id}`}>
            <img className="rounded-circle object-fit-cover " src={article.authorAvatar ?? article.image} alt={article.title} style={{ height: 55, width: 55 }} />
          </a>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-10 col-9 pt-lg-2 pt-md-2 pt-sm-2 pt-0 ">
          <h4> <a href={`/details/${article.id}`}>{article.title}</a></h4>
        </div>
      </div>
    </div>
  );
}
