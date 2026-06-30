import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThumbTop from '@/components/cards/ThumbTop';
import ThumbRight from '@/components/cards/ThumbRight';
import RecentlyNewsCard from '@/components/cards/RecentlyNewsCard';
import { getArticleById, getArticles } from '@/lib/api';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const article = await getArticleById(id);

  return {
    title: article ? article.title : 'Details',
    description:
      'দৈনিক নয়া দিগন্ত - সর্বশেষ বাংলা সংবাদ, রাজনীতি, খেলা, আন্তর্জাতিক ও লাইফস্টাইল',
  };
}

export default async function DetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = await getArticleById(id);

  if (!article) {
    notFound();
  }

  const [related, latestList, recentlyList] = await Promise.all([
    getArticles({ category: article.category, limit: 5 }),
    getArticles({ category: 'trending', limit: 7 }),
    getArticles({ category: 'trending', limit: 11 }).then((a) => a.slice(7, 11)),
  ]);

  const relatedOthers = related.filter((a) => a.id !== article.id).slice(0, 4);
  const sidebarRelated = relatedOthers.slice(0, 3);
  const bottomRelated = relatedOthers[3] ?? relatedOthers[0] ?? article;
  const popularList = [...latestList].reverse();

  const publishedDate = new Date(article.publishedAt).toLocaleDateString('bn-BD', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });

  return (
    <>
      <Header />
      <main>
<section className="mb-lg-4 mb-md-3">
  <div className="container">
    <div className="top-ads d-flex justify-content-center  align-items-center px-lg-0 px-2">
      <img src="/assets/img/main-ads.png" className="img-fluid" alt="img" />
    </div>
    <div className="row">
      <div className="col-lg-9 col-md-12">
        <div className="details-content">
          <h2>{article.categoryLabel}</h2>
          <h3> {article.title}</h3>
          <h5 className="bg-transparent"><a href="#">কম ডেটা ব্যবহার করতে শুধু টেক্সট পড়ুন <i className="fa-solid fa-angle-right" /></a>
          </h5>
          <h4 className="details-subtitle">{article.excerpt}</h4>
          <div className="news-meta-wrapper">
            <div className="news-title">
              <span className="orange-dot" />
              <span>{article.authorName}</span>
            </div>
            <div className="meta-info">
              <span>প্রকাশ : {publishedDate} <i className="fa-solid fa-arrow-right-arrow-left " /></span>
              <span className="updated-time">
                আপডেট : {publishedDate}
              </span>
            </div>
            <hr />
            {/* Social Section */}
            <div className="social-area">
              <div className="social-left">
                <a href="#" className="icon-btn">
                  <i className="fa-brands fa-facebook-f" />
                </a>
                <a href="#" className="icon-btn">
                  <i className="fa-brands fa-x-twitter" />
                </a>
                <a href="#" className="icon-btn">
                  <i className="fa-brands fa-whatsapp" />
                </a>
                <a href="#" className="icon-btn">
                  <i className="fa-brands fa-telegram" />
                </a>
                <a href="#" className="copy-link-btn">
                  <i className="fa-regular fa-copy" />
                  Copy link
                </a>
              </div>
              <div className="social-right">
                <a href="#" className="icon-btn">
                  <i className="fa-solid fa-share" />
                </a>
                <a href="#" className="icon-btn">
                  <i className="fa-solid fa-print" />
                </a>
              </div>
            </div>
            <hr />
          </div>
          <div className="details-news">
            <img src={article.image} className="img-fluid" alt={article.title} />
            <h5>{article.title}</h5>
          </div>
          {/* Social icon */}
          <div className="d-flex justify-content-center align-content-center">
            <div className="follow-wrapper d-flex">
              <div className="follow-btn">
                ফলো করুন:
              </div>
              <div className="social-section d-flex justify-content-evenly align-items-center">
                <a href="#" className="social-link whatsapp">
                  <span className="icon-circle">
                    <i className="fab fa-whatsapp" />
                  </span>
                  নয়া দিগন্ত হোয়াটসঅ্যাপ
                </a>
                <a href="#" className="social-link telegram">
                  <span className="icon-circle">
                    <i className="fab fa-telegram-plane" />
                  </span>
                  নয়া দিগন্ত টেলিগ্রাম
                </a>
              </div>
            </div>
          </div>
          {article.content?.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <div className="top-ads d-flex justify-content-center  align-items-center px-lg-0 px-2">
            <img src="/assets/img/300.png" className="img-fluid" alt="img" />
          </div>
          <div className="top-ads d-flex justify-content-center  align-items-center px-lg-0 px-2">
            <div className="details-more-news">
              <h4><a href="#">এ সংক্রান্ত আরো নিউজ <i className="fa-solid fa-angle-right" /></a>
              </h4>
              {relatedOthers.map((a) => (
                <h5 key={a.id}> <a href={`/details/${a.id}`}>{a.title}</a></h5>
              ))}
            </div>
          </div>
          <div className="top-ads d-flex justify-content-center  align-items-center px-lg-0 px-2">
            <img src="/assets/img/main-ads.png" className="img-fluid" alt="img" />
          </div>
          {/* vedio card */}
          <div className="top-ads d-flex justify-content-center  align-items-center mt-lg-3 mt-md-2 mb-3 mb-md-2">
            <iframe width={560} height={315} src="https://www.youtube.com/embed/ag8PS0oLL_k?si=SxsIJJkYYj0OevuP" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          </div>
          <div className="top-ads d-flex justify-content-center  align-items-center px-lg-0 px-2">
            <img src="/assets/img/main-ads.png" className="img-fluid" alt="img" />
          </div>
        </div>
      </div>
      <div className="col-lg-3 d-lg-block d-md-none d-none">
        <div className="details-right-card">
          <div className="news-details-right">
            <img src="/assets/img/300.png" className="img-fluid" alt="img" />
          </div>
          {sidebarRelated.map((a) => (
            <ThumbTop key={a.id} article={a} shadowNone />
          ))}
          <div className="news-details-right mt-2">
            <img src="/assets/img/300.png" className="img-fluid" alt="img" />
          </div>
        </div>
        {/* poll  */}
        <div className="news-details-poll">
          <ul style={{ paddingLeft: 0, paddingRight: 0 }} className="nav nav-pills mt-lg-2 mt-md-2 mt-3 mb-lg-0 mb-md-0 mb-2 d-flex justify-content-between " id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" aria-selected="true" role="tab">
                সর্বশেষ
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" aria-selected="false" tabIndex={-1} role="tab">
                জনপ্রিয়
              </button>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane pb-0 fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <div className="row justify-content-center">
                {latestList.map((a) => (
                  <ThumbRight key={a.id} article={a} shadowNone />
                ))}
              </div>
            </div>
            <div className="tab-pane fade pb-0" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <div className="row justify-content-center">
                {popularList.map((a) => (
                  <ThumbRight key={a.id} article={a} shadowNone />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="news-card text-center shadow-none news-details-bottom">
          <a href={`/details/${bottomRelated.id}`}><img className="img-fluid" src={bottomRelated.image} alt={bottomRelated.title} /></a>
          <h2> <a href={`/details/${bottomRelated.id}`}> {bottomRelated.title}
            </a>
          </h2>
        </div>
      </div>
    </div>
    <div className="row justify-content-evenly">
      <div className="recently-news-titile">
        <h3>সর্বশেষ</h3>
      </div>
      {recentlyList.map((a) => (
        <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={a.id}>
          <RecentlyNewsCard article={a} />
        </div>
      ))}
    </div>
  </div>
</section>

      </main>
      <Footer />
    </>
  );
}
