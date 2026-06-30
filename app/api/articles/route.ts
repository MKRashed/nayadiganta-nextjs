import { NextRequest, NextResponse } from 'next/server';
import { getDemoArticles } from '@/lib/demo-data';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') ?? undefined;
  const limitParam = searchParams.get('limit');
  const limit = limitParam ? Number(limitParam) : undefined;

  const articles = getDemoArticles({ category, limit });

  return NextResponse.json({ data: articles });
}
