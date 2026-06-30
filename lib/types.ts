export interface Article {
  id: string;
  slug: string;
  category: string;
  categoryLabel: string;
  title: string;
  kicker?: string;
  excerpt?: string;
  content?: string[];
  image: string;
  authorName?: string;
  authorAvatar?: string;
  publishedAt: string;
  updatedAt?: string;
}
