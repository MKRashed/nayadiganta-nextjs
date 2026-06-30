import type { Article } from '@/lib/types';

export default function TextOnly({ article }: { article: Article }) {
  return (
    <div className="text-card mt-lg-4 mt-md-3 mt-sm-2 mt-2 text-center">
      <h4> <a href={`/details/${article.id}`}>{article.title}</a></h4>
    </div>
  );
}
