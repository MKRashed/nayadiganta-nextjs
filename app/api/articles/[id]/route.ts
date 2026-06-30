import { NextRequest, NextResponse } from 'next/server';
import { getDemoArticleById } from '@/lib/demo-data';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const article = getDemoArticleById(id);

  if (!article) {
    return NextResponse.json({ error: 'Article not found' }, { status: 404 });
  }

  return NextResponse.json({ data: article });
}
