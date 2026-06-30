import type { Article } from '@/lib/types';

const BANGLA_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

function toBanglaNumber(n: number) {
  return String(n)
    .split('')
    .map((d) => BANGLA_DIGITS[Number(d)])
    .join('');
}

export default function RankedListItem({ article, rank }: { article: Article; rank: number }) {
  return (
    <div className="d-flex align-items-start news-bd">
      <div className="custom-number me-1">{toBanglaNumber(rank)}</div>
      <div className="news-text">
        <a href={`/details/${article.id}`}>{article.title}</a>
      </div>
    </div>
  );
}
