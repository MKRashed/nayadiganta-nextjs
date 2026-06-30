import type { Article } from './types';

const CATEGORIES: { key: string; label: string }[] = [
  { key: 'trending', label: 'ট্রেন্ডিং' },
  { key: 'international', label: 'আন্তর্জাতিক' },
  { key: 'world-media', label: 'বিশ্ব মিডিয়া ও বাংলাদেশ' },
  { key: 'election', label: 'নির্বাচন' },
  { key: 'opinion', label: 'মতামত' },
  { key: 'video', label: 'ভিডিও' },
  { key: 'sport', label: 'খেলা' },
  { key: 'politics', label: 'রাজনীতি' },
  { key: 'economy', label: 'অর্থনীতি' },
  { key: 'special-report', label: 'বিশেষ প্রতিবেদন' },
  { key: 'interview', label: 'সাক্ষাৎকার' },
  { key: 'countrywide', label: 'সারাদেশ' },
  { key: 'chittagong', label: 'চট্রগ্রাম খবর' },
  { key: 'law', label: 'আইন ও বিচার' },
  { key: 'crime', label: 'অপরাধ' },
  { key: 'accident', label: 'দূর্ঘটনা' },
  { key: 'education', label: 'শিক্ষাঙ্গান' },
  { key: 'entertainment', label: 'বিনোদন' },
  { key: 'lifestyle', label: 'লাইফস্টাইল' },
  { key: 'feature', label: 'ফিচার' },
  { key: 'literature', label: 'শিল্প ও সাহিত্য' },
  { key: 'religion', label: 'ধর্ম ও দর্শন' },
  { key: 'photo-gallery', label: 'ফটোগ্যালারি' },
  { key: 'digital', label: 'ডিজিটাল' },
  { key: 'reels', label: 'রিলস' },
];

const HEADLINES = [
  'যুদ্ধ চললে ডিজেল-অকটেনে ভর্তুকি লাগবে ৩০ হাজার কোটি টাকা',
  '৪৭তম বিসিএস লিখিত পরীক্ষার ফল প্রকাশ',
  'জুলাইযোদ্ধাদের সুরক্ষা ও দায়মুক্তি দিয়ে সংসদে বিল পাস',
  "ইরান যুদ্ধবিরতি 'ভিক্ষা' চেয়েছিল, তাদের প্রতি 'ক্ষমা' দেখিয়েছেন",
  'ইরানের বিরুদ্ধে অব্যবহৃত অস্ত্র ব্যবহারের সুযোগ রয়েছে',
  'ইরান-যুক্তরাষ্ট্রের মাঝে কীভাবে মধ্যস্থতা করলো পাকিস্তান?',
  'এআই যুগেও পিছিয়ে চাকরির বাজার',
  'বুলবুলের ডাকে সাড়া দিচ্ছে না আইসিসি',
  'জুলাইয়ের তরুণরা নেপালি জেন-জির চেয়ে এগিয়ে',
  "'আসল চুক্তি' না মানা পর্যন্ত একই অবস্থানে থাকবে মার্কিন বাহিনী : ট্রাম্প",
  '৩ মাসের মধ্যে সুপ্রিম কোর্টের স্বাধীন ও পৃথক সচিবালয় প্রতিষ্ঠা করতে হবে',
  'বাংলা বর্ষবরণে ঢাকা বিশ্ববিদ্যালয়ে বৈশাখী শোভাযাত্রা',
  'ইরান ও যুক্তরাষ্ট্রের যুদ্ধবিরতি কোন দেশ বিজয়ী',
  'বিদেশি ঋণে মেগা প্রকল্প ব্যয়ের লাগামছাড়া বৃদ্ধি, ঝুঁকিতে অর্থনীতি',
  'দিনের সব আলোচিত সংবাদ দিগন্ত প্রাইম টাইম',
  'শেষ মুহূর্তে এসে বদলে গেল নিউজিল্যান্ড',
  'মাঠে গড়াচ্ছে ঢাকা প্রিমিয়ার',
  'মুক্তি পেলেন নেপালের সাবেক প্রধানমন্ত্রী ও স্বরাষ্ট্রমন্ত্রী',
  'রাজনীতিবিদদের কথা উল্টা-পাল্টা হলে ওই জাতির খারাপ ছাড়া ভালো কিছু হয় না',
  "লেবাননে হামলা বন্ধে ইইউ'র আহ্বান",
  'ইসলাম মানে শান্তি, আর পাকিস্তান শান্তি স্থাপনকারী : আফ্রিদি',
];

const IMAGES = [
  '/assets/img/demo.jpg',
  '/assets/img/demo2.jpg',
  '/assets/img/ads-right.jpg',
  '/assets/img/list.jpg',
  '/assets/img/sport.png',
  '/assets/img/lifestyle.png',
  '/assets/img/quran.png',
  '/assets/img/tareq.png',
  '/assets/img/digital2.png',
  '/assets/img/Digital-banner.jpg',
  '/assets/img/03.png',
  '/assets/img/20.png',
];

const AVATAR = '/assets/img/man-image.png';

const CONTENT_PARAGRAPHS = [
  'কৃষি, শিল্প ও জ্বালানি খাতে বিনিয়োগে জোর, টেকসই উন্নয়নের আশাবাদ ব্যক্ত করেছেন প্রাণ-আরএফএল গ্রুপের চেয়ারম্যান ও সিইও আহসান খান চৌধুরী। সোমবার সচিবালয়ে অনুষ্ঠিত প্রায় তিন ঘণ্টাব্যাপী বৈঠক শেষে তিনি সাংবাদিকদের এসব কথা বলেন।',
  'তিনি জানান, বৈঠকে দেশের কৃষি, শিল্প এবং সামগ্রিক অর্থনৈতিক উন্নয়ন নিয়ে বিস্তারিত আলোচনা হয়েছে। বিশেষ করে উত্তরবঙ্গসহ দেশের প্রত্যন্ত অঞ্চলে কৃষি ও শিল্পের বিকাশ, কৃষি উৎপাদন বৃদ্ধি এবং কৃষিভিত্তিক শিল্প সম্প্রসারণের বিষয়টি গুরুত্ব পায়।',
  'তিনি বলেন, আমরা চাই বাংলাদেশে কৃষিতে একটি বিপ্লব ঘটুক। উৎপাদন বাড়ুক এবং ব্যবসায়িক পরিবেশ আরো সহজ ও গতিশীল হোক। বৈঠকে কৃষি জোনিংয়ের বিষয়টিও উঠে আসে।',
  'জ্বালানি সঙ্কট মোকাবেলায় সৌরবিদ্যুৎ (সোলার) ব্যবহারের ওপর গুরুত্ব দেয়া হয়। এ বিষয়ে ইতিবাচক মনোভাব দেখিয়ে বিনিয়োগ আরো উৎসাহিত করার কথা বলা হয়েছে।',
];

function pad(n: number) {
  return String(n).padStart(3, '0');
}

function buildArticles(): Article[] {
  const articles: Article[] = [];
  let counter = 1;

  const COUNT_OVERRIDES: Record<string, number> = {
    trending: 24,
    international: 16,
    politics: 16,
  };

  for (let c = 0; c < CATEGORIES.length; c++) {
    const { key, label } = CATEGORIES[c];
    const perCategory = COUNT_OVERRIDES[key] ?? 8;

    for (let i = 0; i < perCategory; i++) {
      const id = `art-${pad(counter)}`;
      const headline = HEADLINES[(c * 3 + i) % HEADLINES.length];
      const image = IMAGES[(c + i) % IMAGES.length];
      const day = (counter % 28) + 1;

      articles.push({
        id,
        slug: `${key}-${i + 1}`,
        category: key,
        categoryLabel: label,
        title: headline,
        excerpt: CONTENT_PARAGRAPHS[i % CONTENT_PARAGRAPHS.length].slice(0, 120) + '...',
        content: CONTENT_PARAGRAPHS,
        image,
        authorName: 'নয়া দিগন্ত অনলাইন',
        authorAvatar: AVATAR,
        publishedAt: `2026-04-${String(day).padStart(2, '0')}T10:00:00.000Z`,
      });

      counter++;
    }
  }

  return articles;
}

export const DEMO_ARTICLES: Article[] = buildArticles();

export function getDemoArticles(params?: { category?: string; limit?: number }): Article[] {
  let result = DEMO_ARTICLES;
  if (params?.category) {
    result = result.filter((a) => a.category === params.category);
  }
  if (params?.limit) {
    result = result.slice(0, params.limit);
  }
  return result;
}

export function getDemoArticleById(id: string): Article | undefined {
  return DEMO_ARTICLES.find((a) => a.id === id);
}
