import type { Article } from './types';
import { getDemoArticles, getDemoArticleById } from './demo-data';

// Set NEXT_PUBLIC_API_BASE_URL (e.g. https://api.example.com/v1) to switch from
// the built-in demo data to a real backend. Both must return the same JSON shape
// as app/api/articles/route.ts and app/api/articles/[id]/route.ts:
//   GET {base}/articles?category=&limit=  -> { data: Article[] }
//   GET {base}/articles/:id                -> { data: Article }
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getArticles(params?: { category?: string; limit?: number }): Promise<Article[]> {
  if (!API_BASE_URL) {
    return getDemoArticles(params);
  }

  const url = new URL(`${API_BASE_URL}/articles`);
  if (params?.category) url.searchParams.set('category', params.category);
  if (params?.limit) url.searchParams.set('limit', String(params.limit));

  const res = await fetch(url.toString(), { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`Failed to fetch articles: ${res.status}`);
  const json = await res.json();
  return json.data as Article[];
}

export async function getArticleById(id: string): Promise<Article | undefined> {
  if (!API_BASE_URL) {
    return getDemoArticleById(id);
  }

  const res = await fetch(`${API_BASE_URL}/articles/${id}`, { next: { revalidate: 60 } });
  if (res.status === 404) return undefined;
  if (!res.ok) throw new Error(`Failed to fetch article ${id}: ${res.status}`);
  const json = await res.json();
  return json.data as Article;
}
