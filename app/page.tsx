import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThumbRight from '@/components/cards/ThumbRight';
import ThumbLeft from '@/components/cards/ThumbLeft';
import ThumbTop from '@/components/cards/ThumbTop';
import TextOnly from '@/components/cards/TextOnly';
import RankedListItem from '@/components/cards/RankedListItem';
import AvatarCard from '@/components/cards/AvatarCard';
import NewsItem from '@/components/cards/NewsItem';
import { getArticles } from '@/lib/api';

export default async function Home() {
  const [
    heroSide,
    heroMiddle1,
    heroMiddleGrid,
    heroMiddle2,
    international1,
    international2,
    internationalRight,
    worldMedia,
    worldMediaRanked,
    election,
    opinion,
    videoRight,
    sport,
    politicsThumb,
    politicsRight,
    finance,
    specialReportLeft,
    specialReportRight,
    interviewList,
    nationwideLeft,
    nationwideRight,
    chittagong,
    law,
    crime,
    accident,
    education,
    entertainmentMain,
    entertainmentGrid,
    lifestyleMain,
    lifestyleGrid,
    feature,
    literature,
    religion,
  ] = await Promise.all([
    getArticles({ category: 'trending', limit: 3 }),
    getArticles({ category: 'trending', limit: 6 }).then((a) => a.slice(3, 6)),
    getArticles({ category: 'trending', limit: 10 }).then((a) => a.slice(6, 10)),
    getArticles({ category: 'trending', limit: 13 }).then((a) => a.slice(10, 13)),
    getArticles({ category: 'international', limit: 16 }).then((a) => a.slice(0, 2)),
    getArticles({ category: 'international', limit: 16 }).then((a) => a.slice(2, 4)),
    getArticles({ category: 'international', limit: 16 }).then((a) => a.slice(4, 7)),
    getArticles({ category: 'world-media', limit: 8 }).then((a) => a.slice(0, 2)),
    getArticles({ category: 'world-media', limit: 8 }).then((a) => a.slice(2, 6)),
    getArticles({ category: 'election', limit: 6 }),
    getArticles({ category: 'opinion', limit: 5 }),
    getArticles({ category: 'video', limit: 5 }),
    getArticles({ category: 'sport', limit: 4 }),
    getArticles({ category: 'politics', limit: 16 }).then((a) => a.slice(0, 2)),
    getArticles({ category: 'politics', limit: 16 }).then((a) => a.slice(2, 5)),
    getArticles({ category: 'economy', limit: 4 }),
    getArticles({ category: 'special-report', limit: 4 }).then((a) => a.slice(0, 1)),
    getArticles({ category: 'special-report', limit: 4 }).then((a) => a.slice(1, 4)),
    getArticles({ category: 'interview', limit: 3 }),
    getArticles({ category: 'countrywide', limit: 8 }).then((a) => a.slice(0, 2)),
    getArticles({ category: 'countrywide', limit: 8 }).then((a) => a.slice(2, 5)),
    getArticles({ category: 'chittagong', limit: 1 }),
    getArticles({ category: 'law', limit: 3 }),
    getArticles({ category: 'crime', limit: 3 }),
    getArticles({ category: 'accident', limit: 3 }),
    getArticles({ category: 'education', limit: 3 }),
    getArticles({ category: 'entertainment', limit: 5 }).then((a) => a.slice(0, 1)),
    getArticles({ category: 'entertainment', limit: 5 }).then((a) => a.slice(1, 5)),
    getArticles({ category: 'lifestyle', limit: 5 }).then((a) => a.slice(0, 1)),
    getArticles({ category: 'lifestyle', limit: 5 }).then((a) => a.slice(1, 5)),
    getArticles({ category: 'feature', limit: 2 }),
    getArticles({ category: 'literature', limit: 2 }),
    getArticles({ category: 'religion', limit: 2 }),
  ]);

  return (
    <>
      <Header />
      <main>
  <section className="hero-section pb-lg-5 pb-md-4 pb-3 mb-md-2 ">
    <div className="container">
      <div className="top-ads d-flex justify-content-center  align-items-center px-lg-0 px-2">
        <img src="/assets/img/main-ads.png" className="img-fluid" alt="img" />
      </div>
      <div className="col-lg-7 mx-auto">
        <div className="tranding-news">
          <ul className="nav justify-content-lg-between justify-content-md-between justify-content-sm-between justify-content-between flex-wrap">
            <li className="nav-item">
              <h3><a className="nav-link active" href="#">ট্রেন্ডিং</a></h3>
            </li>
            <li className="nav-item">
              <h3><a className="nav-link" href="#">যুক্তরাষ্ট্র-ইরান সংঘাত</a></h3>
            </li>
            <li className="nav-item">
              <h3> <a className="nav-link" href="#">সম্পদ</a></h3>
            </li>
            <li className="nav-item">
              <h3><a className="nav-link" href="#">বাংলা নববর্ষ</a></h3>
            </li>
            <li className="nav-item">
              <h3><a className="nav-link" href="#">জুলাই সনদ</a></h3>
            </li>
            <li className="nav-item">
              <h3> <a className="nav-link" href="#">গণভোট</a></h3>
            </li>
            <li className="nav-item">
              <h3><a className="nav-link" href="#">সাক্ষাৎকার</a></h3>
            </li>
          </ul>
        </div>
        <div className="notice-text">
          <h3><a href="#">বিজ্ঞাপনমুক্ত নয়। দিগন্ত পড়তে ক্লিক করুন এখানে &gt;&gt; </a></h3>
        </div>
      </div>
      <div className="row  mt-lg-4 mt-md-2 mt-1">
        <div className="col-lg-9">
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <div className="row hero-top">
                <div className="col-lg-5 ">
                  <div className="hero-content">
                    <h2> প্রধানমন্ত্রীর সাথে বৈঠক </h2>
                    <h3> <a href="#"> জুলাইযোদ্ধাদের সুরক্ষা ও দায়মুক্তি দিয়ে সংসদে বিল
                        পাস</a></h3>
                    <p> জুলাই গণঅভ্যুত্থানে অংশগ্রহণকারীদের সুরক্ষা ও দায় নির্ধারণের লক্ষ্যে
                      জাতীয় ।
                      সংসদে জুলাই গণঅভ্যুত্থান (সুরক্ষা ও দায় নির্ধারণ) আইন ।</p>
                  </div>
                </div>
                <div className="col-lg-7 hero-img">
                  <img src="/assets/img/Herocontent.png" className="img-fluid" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              {heroSide.map((a, i) => (
                <ThumbRight key={a.id} article={a} border0={i === heroSide.length - 1} />
              ))}
            </div>
          </div>
          <div className="hero-middle-card">
            <div className="row justify-content-between">
              {heroMiddle1.map((a) => (
                <div className="col-lg-4 col-md-6 ps-lg-0" key={a.id}>
                  <ThumbRight article={a} />
                </div>
              ))}
            </div>
          </div>
          <div className="hero-middle">
            <div className="hero-content-card">
              <div className="row">
                {heroMiddleGrid.map((a) => (
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6" key={a.id}>
                    <ThumbTop article={a} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hero-middle-card border-0 pt-0">
            <div className="row justify-content-between">
              {heroMiddle2.map((a) => (
                <div className="col-lg-4 col-md-6 ps-lg-0" key={a.id}>
                  <ThumbRight article={a} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="right-ads">
            <img src="/assets/img/top-post.webp" className="img-fluid mt-lg-0 mt-3" alt="img" />
            <div className="d-lg-block d-md-flex d-flex gap-md-2 gap-2">
              <div className="div">
                <img src="/assets/img/ads-right.jpg" className="img-fluid mt-3" alt="img" />
              </div>
              <div className="div">
                <img src="/assets/img/ads-right.jpg" className="img-fluid mt-3" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* international Part */}
  <section className="international pb-lg-2 pb-md-2 pb-2  mb-lg-3 mb-md-2 ">
    <div className="container">
      <div className="top-ads d-flex justify-content-center  align-items-center px-lg-0 px-2">
        <img src="/assets/img/main-ads.png" className="img-fluid" alt="img" />
      </div>
      <div className="international-section">
        <div className="row">
          <div className="col-lg-9 col-md-12 col-12">
            <div className="news-section-line px-0 py-0">
              <div className="d-flex align-items-center">
                <div className="news-title-more">
                  <div className="nav-link">
                    <h2><a href=""> আন্তর্জাতিক </a></h2>
                  </div>
                </div>
                <div className="news-line" />
                <a href="#" className="more-link fw-bold">
                  আরো <span className="arrow"> <i className="fa-solid fa-angle-right" /> </span>
                </a>
              </div>
            </div>
            <div className="row mt-lg-3 mt-md-3 mt-2">
              <div className="col-lg-6 col-md-6">
                <div className="row">
                  {international1.map((a, i) => (
                    <div className="col-lg-6 col-md-6 col-6" key={a.id}>
                      <ThumbTop article={a} />
                      <TextOnly article={international2[i] ?? a} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="international-right-card">
                  {internationalRight.map((a, i) => (
                    <ThumbRight key={a.id} article={a} border0={i === internationalRight.length - 1} />
                  ))}
                </div>
              </div>
            </div>
            <div className="tranding-news mt-3 mb-lg-0 mb-3">
              <ul className="nav justify-content-lg-between justify-content-md-between justify-content-between flex-wrap">
                <li className="nav-item">
                  <h2><a className="nav-link " href="#">এশিয়া</a></h2>
                </li>
                <li className="nav-item">
                  <h2> <a className="nav-link active" href="#">দক্ষিণ এশিয়া </a></h2>
                </li>
                <li className="nav-item">
                  <h2><a className="nav-link" href="#">মধ্যপ্রাচ্য </a></h2>
                </li>
                <li className="nav-item">
                  <h2><a className="nav-link" href="#">আমেরিকা </a></h2>
                </li>
                <li className="nav-item">
                  <h2><a className="nav-link" href="#"> ইউরোপ </a></h2>
                </li>
                <li className="nav-item">
                  <h2><a className="nav-link" href="#">আফ্রিকা </a></h2>
                </li>
                <li className="nav-item">
                  <h2><a className="nav-link" href="#">ওশেনিয়া </a></h2>
                </li>
                <li className="nav-item">
                  <h2><a className="nav-link" href="#">অ্যান্টার্কটিকা </a></h2>
                </li>
              </ul>
            </div>
          </div>
          {/* Bangladesh and world Media */}
          <div className=" col-lg-3 col-md-12">
            <div className="news-section-line">
              <div className="d-flex align-items-center">
                <div className="news-title-more">
                  <div className="nav-link">
                    <h2><a href=""> বিশ্ব মিডিয়া ও বাংলাদেশ </a></h2>
                  </div>
                </div>
                <div className="news-line" />
                <a href="#" className="more-link fw-bold"> আরো <span className="arrow"> <i className="fa-solid fa-angle-right" /> </span>
                </a>
              </div>
            </div>
            <div className="row mt-lg-3 mt-md-1 mt-1">
              <div className="bangladesh-media">
                <div className="row">
                  {worldMedia.map((a) => (
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6" key={a.id}>
                      <div className="news-card">
                        <a href={`/details/${a.id}`}><img className="img-fluid" src={a.image} alt={a.title} /></a>
                        <h3> <a href={`/details/${a.id}`}>{a.title}</a>
                        </h3>
                      </div>
                    </div>
                  ))}
                  <ul className="nav nav-pills mt-lg-1 mt-md-1 mt-3 mb-lg-0 mb-md-0 mb-2 " id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button">
                        সর্বশেষ
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button">
                        জনপ্রিয়
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane pb-0 fade show active" id="pills-home">
                      <div className="row justify-content-center">
                        <div className="shadow-sm rounded">
                          {worldMediaRanked.map((a, i) => (
                            <RankedListItem key={a.id} article={a} rank={i + 1} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade pb-0" id="pills-profile">
                      <div className="row justify-content-center">
                        <div className="shadow-sm rounded">
                          {[...worldMediaRanked].reverse().map((a, i) => (
                            <RankedListItem key={a.id} article={a} rank={i + 1} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* election and opinion */}
  <section>
    <div className="container">
      <div className="top-ads d-flex justify-content-center  align-items-center px-lg-0 px-2">
        <img src="/assets/img/main-ads.png" className="img-fluid" alt="img" />
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="news-section-line px-0 py-lg-2 py-1">
            <div className="d-flex align-items-center">
              <div className="news-title-more">
                <div className="nav-link">
                  <h2><a href=""> নির্বাচন </a></h2>
                </div>
              </div>
              <div className="news-line" />
              <a href="#" className="more-link fw-bold">
                আরো <span className="arrow"> <i className="fa-solid fa-angle-right" /> </span>
              </a>
            </div>
          </div>
          <div className="row election-card pt-2">
            {election.map((a) => (
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-lg-1 mb-md-1 mb-1" key={a.id}>
                <ThumbTop article={a} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="news-section-line px-0 py-2">
            <div className="d-flex align-items-center">
              <div className="news-title-more">
                <div className="nav-link">
                  <h2><a href=""> মতামত </a></h2>
                </div>
              </div>
              <div className="news-line" />
              <a href="#" className="more-link fw-bold">
                আরো <span className="arrow"> <i className="fa-solid fa-angle-right" /> </span>
              </a>
            </div>
          </div>
          <div className="opinion-card">
            {opinion.map((a) => (
              <AvatarCard key={a.id} article={a} />
            ))}
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="election-right mt-lg-5 mt-md-4 mt-3 pt-lg-3 ">
            <img src="/assets/img/demo.jpg" className="img-fluid" alt="img" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*video*/}
  <section className="video mt-3 pt-3 pb-3">
    <div className="container">
      <div className="news-section-line px-0 py-2">
        <div className="d-flex align-items-center">
          <div className="news-title-more text-white">
            <div className="nav-link ">
              <h2><a href=""> ভিডিও </a></h2>
            </div>
          </div>
          <div className="news-line video-line" />
          <a href="#" className="more-link fw-bold">
            আরো <span className="arrow"> <i className="fa-solid fa-angle-right" /> </span>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="video-tranding-news">
            <ul className="nav justify-content-lg-between justify-content-md-center justify-content-center flex-wrap">
              <li className="nav-item">
                <a className="nav-link active" href="#">সাক্ষাৎকার</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#"> প্রাইম টাইম </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> গ্লোবাল ভিউজ </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">দিগন্ত বিশ্লেষণ </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> দিগন্ত ওয়ার্ল্ড </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">স্পেশাল টক </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">টপ নিউজ </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">দিগন্ত ডকুমেন্টারি </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">পডকাস্ট </a>
              </li>
            </ul>
          </div>
          <div className="video-content mt-lg-2 mt-mb-2 mt-2 mb-lg-0 mb-md-4 mb-sm-2 mb-2">
            <div className="video-item">
              <div className="video-icon">
                <img className="img-fluid" src="/assets/img/youtube.png" alt="img" />
              </div>
              <a href="#"><img className="img-fluid" src="/assets/img/ads-right.jpg" alt="News" /></a>
              <h4 className="mt-2"><a href="#">
                  রাজনীতিবিদদের কথা উল্টা-পাল্টা হলে ওই জাতির খারাপ
                  ছাড়া ভালো কিছু হয় না </a></h4>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="video-right-card">
            {videoRight.map((a) => (
              <ThumbLeft key={a.id} article={a} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Sport  Part*/}
  <section>
    <div className="container">
      <div className="top-ads d-flex justify-content-center  align-items-center px-lg-0 px-2 mt-lg-4">
        <img src="/assets/img/main-ads.png" className="img-fluid" alt="img" />
      </div>
      <div className="row g-3">
        <div className="col-lg-9">
          <div className="news-section-line px-0 py-3">
            <div className="d-flex align-items-center">
              <div className="news-title-more">
                <div className="nav-link">
                  <h2><a href=""> খেলা </a></h2>
                </div>
              </div>
              <div className="news-line" />
              <a href="#" className="more-link fw-bold">
                আরো <span className="arrow"> <i className="fa-solid fa-angle-right" /> </span>
              </a>
            </div>
          </div>
          <div className="sport-content">
            <div className="row m-0">
              <div className="col-lg-4 col-md-12 col-sm-12 col-12 mb-lg-1 mb-md-1 mb-2">
                <div className="row">
                  <div className="news-card text-center sport">
                    <a href={`/details/${sport[0].id}`}><img className="img-fluid" src={sport[0].image} alt={sport[0].title} /></a>
                    <h3> <a href={`/details/${sport[0].id}`}>
                        {sport[0].title}</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="sport-right-item">
                  <div className="row">
                    {sport.slice(1).map((a) => (
                      <div className="col-lg-4 col-md-6 col-sm-4 col-6 mb-lg-1 mb-md-1 mb-2" key={a.id}>
                        <ThumbTop article={a} />
                        <TextOnly article={a} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-12   mt-lg-0 mt-4">
          <div className="d-flex justify-content-center mt-lg-5">
            <img src="/assets/img/ads-right.jpg" className="img-fluid" alt="img" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Political  Part*/}
  <section className="political">
    <div className="container">
      <div className="top-ads d-flex justify-content-center  align-items-center px-lg-0 px-2 mt-lg-4">
        <img src="/assets/img/main-ads.png" className="img-fluid" alt="img" />
      </div>
      <div className="row">
        <div className="col-lg-9 col-md-12">
          <div className="news-section-line px-0 py-2">
            <div className="d-flex align-items-center">
              <div className="news-title-more">
                <div className="nav-link">
                  <h2><a href=""> রাজনীতি </a></h2>
                </div>
              </div>
              <div className="news-line" />
              <a href="#" className="more-link fw-bold">
                আরো <span className="arrow"> <i className="fa-solid fa-angle-right" /> </span>
              </a>
            </div>
          </div>
          <div className="tranding-news mt-3">
            <ul className="nav justify-content-lg-between justify-content-md-between justify-content-center flex-wrap">
              <li className="nav-item">
                <h3> <a className="nav-link" href="#">বিএনপি</a></h3>
              </li>
              <li className="nav-item">
                <h3><a className="nav-link active" href="#">জামায়াতে ইসলামী</a></h3>
              </li>
              <li className="nav-item">
                <h3><a className="nav-link" href="#">এনসিপি</a></h3>
              </li>
              <li className="nav-item">
                <h3> <a className="nav-link" href="#">আওয়ামী লীগ</a></h3>
              </li>
              <li className="nav-item">
                <h3> <a className="nav-link" href="#">খেলাফত মজলিস</a></h3>
              </li>
              <li className="nav-item">
                <h3><a className="nav-link" href="#">ইসলামী আন্দোলন</a></h3>
              </li>
              <li className="nav-item">
                <h3><a className="nav-link" href="#">গণঅধিকার পরিষদ</a></h3>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="political-card-left">
                <div className="row">
                  {politicsThumb.map((a) => (
                    <div className="col-lg-6 col-md-6 col-6" key={a.id}>
                      <ThumbTop article={a} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="international-right-card">
                {politicsRight.map((a) => (
                  <ThumbRight key={a.id} article={a} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12">
          <div className="news-section-line px-0 py-2 mt-lg-0 mt-3">
            <div className="d-flex align-items-center">
              <div className="news-title-more">
                <div className="nav-link">
                  <h2><a href=""> অর্থনীতি </a></h2>
                </div>
              </div>
              <div className="news-line" />
              <a href="#" className="more-link fw-bold">
                আরো <span className="arrow"> <i className="fa-solid fa-angle-right" /> </span>
              </a>
            </div>
          </div>
          <div className="finance-section">
            {finance.map((a) => (
              <div className="news-card" key={a.id}>
                <div className="row">
                  <div className="col-lg-7 col-md-9 col-8">
                    <h4> <a href={`/details/${a.id}`}>{a.title}</a>
                    </h4>
                  </div>
                  <div className="col-lg-5 col-md-3 col-4">
                    <a href={`/details/${a.id}`}><img src={a.image} alt={a.title} className="img-fluid" /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Tranding , Reals , Online jorip Slider  Part*/}
  <section className="mt-5 reals-section py-lg-4 py-md-3 py-0">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="online-poll mx-auto">
            <h2 className="poll-heading">
              <a href="#"> ট্রেন্ডিং</a>
            </h2>
            <div className="poll-slider tranding-slider">
              <div id="pollCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval={3000}>
                <div className="carousel-inner">
                  {/* Slide 1 */}
                  <div className="carousel-item active">
                    <div className="poll-content overflow-hidden">
                      <video className="w-100" controls>
                        <source src="/assets/img/videoplayback.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="poll-content overflow-hidden">
                      <video className="w-100" controls>
                        <source src="/assets/img/videoplayback.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev custom-btn" type="button" data-bs-target="#pollCarousel" data-bs-slide="prev">
                  ◀
                </button>
                <button className="carousel-control-next custom-btn" type="button" data-bs-target="#pollCarousel" data-bs-slide="next">
                  ▶
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 ">
          <div className="online-poll mx-auto">
            <h2 className="poll-heading">
              <a href="#"> রিলস</a>
            </h2>
            <div className="poll-slider tranding-slider">
              <div id="pollCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval={3000}>
                <div className="carousel-inner">
                  {/* Slide 1 */}
                  <div className="carousel-item active">
                    <div className="poll-content overflow-hidden">
                      <video className="w-100" controls>
                        <source src="/assets/img/videoplayback.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="poll-content overflow-hidden">
                      <video className="w-100" controls>
                        <source src="/assets/img/videoplayback.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev custom-btn" type="button" data-bs-target="#pollCarousel" data-bs-slide="prev">
                  ◀
                </button>
                <button className="carousel-control-next custom-btn" type="button" data-bs-target="#pollCarousel" data-bs-slide="next">
                  ▶
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-md-2 mt-2">
          <div className="online-poll mx-auto">
            <h2 className="poll-heading">
              <a href="#"> দিগন্ত এক্সপ্লেইন</a>
            </h2>
            <div className="poll-slider expalin-card">
              <div className="news-card text-center sport shadow-none p-0 m-0 mt-1">
                <a href="#"><img className="img-fluid" src="/assets/img/demo.jpg" alt="img" /></a>
                <h3 className="mt-2 pb-4 pt-3"> <a href="#">
                    শেষ মুহূর্তে এসে বদলে গেল </a>
                </h3>
              </div>
              <div>
                <img src="/assets/img/demo.jpg" className="img-fluid mt-4 pb-3" alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-md-2 mt-2">
          <div className="online-poll">
            <h2 className="poll-heading">
              <a href="#"> অনলাইন জরিপ </a>
            </h2>
            <div className="poll-slider">
              <div id="pollCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval={3000}>
                <div className="carousel-inner">
                  {/* Slide 1 */}
                  <div className="carousel-item active">
                    <div className="poll-content">
                      <div className="poll-img">
                        <img src="/assets/img/demo.jpg" className="img-fluid" alt="img" />
                      </div>
                      <h3 className="poll-text">
                        রাষ্ট্রপতিকে সরিয়ে নতুন রাষ্ট্রপতি নির্বাচনের দাবি জানিয়েছেন
                        বিএনপির ভাইস চেয়ারম্যান বরকত উল্লাহ বুলু।
                      </h3>
                      <div className="question">
                        আপনি কি তার এই দাবির সাথে একমত?
                      </div>
                      <div className="vote-area">
                        <button>হ্যাঁ</button>
                        <button>না</button>
                      </div>
                      <p>মতামত জানান কমেন্টে</p>
                    </div>
                  </div>
                  {/* Slide 2 */}
                  <div className="carousel-item">
                    <div className="poll-content">
                      <div className="poll-img">
                        <img src="/assets/img/demo.jpg" className="img-fluid" alt="img" />
                      </div>
                      <h3 className="poll-text">
                        জাতীয় নির্বাচনের আগে রাজনৈতিক দলগুলোর মধ্যে
                        সংলাপ হওয়া প্রয়োজন বলে মনে করেন কি?
                      </h3>
                      <div className="question">
                        আপনি কি সংলাপের পক্ষে?
                      </div>
                      <div className="vote-area">
                        <button>হ্যাঁ</button>
                        <button>না</button>
                      </div>
                      <p>মতামত জানান কমেন্টে</p>
                    </div>
                  </div>
                  {/* Slide 3 */}
                  <div className="carousel-item">
                    <div className="poll-content">
                      <div className="poll-img">
                        <img src="/assets/img/demo.jpg" className="img-fluid" alt="img" />
                      </div>
                      <h3 className="poll-text">
                        দেশের উন্নয়নের জন্য স্থানীয় সরকারকে আরও ক্ষমতা
                        দেওয়া উচিত বলে মনে করেন কি?
                      </h3>
                      <div className="question">
                        আপনার মতামত কী?
                      </div>
                      <div className="vote-area">
                        <button>হ্যাঁ</button>
                        <button>না</button>
                      </div>
                      <p>মতামত জানান কমেন্টে</p>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev custom-btn" type="button" data-bs-target="#pollCarousel" data-bs-slide="prev">
                  ◀
                </button>
                <button className="carousel-control-next custom-btn" type="button" data-bs-target="#pollCarousel" data-bs-slide="next">
                  ▶
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Special report*/}
  <section>
    <div className="container">
      <div className="top-ads d-flex justify-content-center  align-items-center px-lg-0 px-2 mt-lg-4">
        <img src="/assets/img/main-ads.png" className="img-fluid" alt="img" />
      </div>
      <div className="special-content">
        <div className="row">
          <div className="col-lg-9 col-md-12">
            <div className="news-section-line px-0 py-3">
              <div className="d-flex align-items-center">
                <div className="news-title-more">
                  <div className="nav-link">
                    <h2><a href=""> বিশেষ প্রতিবেদন </a></h2>
                  </div>
                </div>
                <div className="news-line" />
                <a href="#" className="more-link fw-bold">
                  আরো <span className="arrow"> <i className="fa-solid fa-angle-right" /> </span>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="news-card shadow-none special-item border-0">
                  <a href={`/details/${specialReportLeft[0].id}`}><img className="img-fluid" src={specialReportLeft[0].image} alt={specialReportLeft[0].title} /></a>
                  <h3> <a href={`/details/${specialReportLeft[0].id}`}> {specialReportLeft[0].title}
                    </a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="international-right-card">
                  {specialReportRight.map((a) => (
                    <ThumbRight key={a.id} article={a} shadowNone />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="news-section-line px-0 py-3 mt-lg-0 mt-2">
              <div className="d-flex align-items-center">
                <div className="news-title-more">
                  <div className="nav-link">
                    <h2><a href=""> সাক্ষাৎকার </a></h2>
                  </div>
                </div>
                <div className="news-line" />
                <a href="#" className="more-link fw-bold">
                  আরো <span className="arrow"> <i className="fa-solid fa-angle-right" /> </span>
                </a>
              </div>
            </div>
            <div className="interview">
              {interviewList.map((a) => (
                <div className="news-card shadow-none" key={a.id}>
                  <div className="row">
                    <div className="col-lg-7 col-md-9 col-8 ">
                      <h4> <a href={`/details/${a.id}`}>{a.title}</a>
                      </h4>
                    </div>
                    <div className="col-lg-5 col-md-3 col-4">
                      <a href={`/details/${a.id}`}><img className="img-fluid" src={a.image} alt={a.title} /></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Nationwide report*/}
  <section className="mt-lg-4 mt-md-3 mt-2 mb-lg-1 mb-md-1 mb-2">
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <div className="news-section-line px-0 py-3">
            <div className="d-flex align-items-center">
              <div className="news-title-more">
                <div className="nav-link">
                  <h2><a href=""> সারাদেশ </a></h2>
                </div>
              </div>
              <div className="news-line" />
              <a href="#" className="more-link fw-bold">
                আরো <span className="arrow"> <i className="fa-solid fa-angle-right" /> </span>
              </a>
            </div>
          </div>
          <div className="nationwide-searching mt-lg-2 mt-1 mb-lg-3 mb-md-2 mb-1">
            <div className="row d-flex justify-content-between align-items-center text-center ">
              <div className="col-xxl-3 col-lg-3 col-md-3 col-12">
                <select>
                  <option value="">বিভাগ </option>
                  <option value="">বিভাগ</option>
                </select>
              </div>
              <div className="col-xxl-3 col-lg-3  col-md-3 col-12">
                <select>
                  <option value="">জেলা</option>
                  <option value="">জেলা</option>
                </select>
              </div>
              <div className="col-xxl-3 col-lg-3 col-md-3 col-12">
                <select>
                  <option value="">উপজেলা</option>
                  <option value="">উপজেলা</option>
                </select>
              </div>
              <div className="col-xxl-3 col-lg-3 col-md-3 col-12">
                <button className="btn btn-primary nationwide-button"><i className="fa-solid fa-magnifying-glass" />খুঁজুন</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="nationwide-left-card">
                <div className="row">
                  {nationwideLeft.map((a) => (
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6" key={a.id}>
                      <ThumbTop article={a} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="international-right-card">
                {nationwideRight.map((a) => (
                  <div className="news-card" key={a.id}>
                    <div className="row">
                      <div className="col-lg-9 col-md-9 col-9">
                        <h4> <a href={`/details/${a.id}`}>{a.title}
                          </a>
                        </h4>
                      </div>
                      <div className="col-lg-3 col-md-3 col-3">
                        <a href={`/details/${a.id}`}><img className="img-fluid" src={a.image} alt={a.title} /></a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="chittagong-card">
            <div className="news-section-line px-0 py-3 mt-lg-0 mt-2">
              <div className="d-flex align-items-center">
                <div className="news-title-more">
                  <div className="nav-link">
                    <h2><a href=""> চট্রগ্রাম খবর </a></h2>
                  </div>
                </div>
                <div className="news-line" />
                <a href="#" className="more-link fw-bold">
                  আরো <span className="arrow"> <i className="fa-solid fa-angle-right" /> </span>
                </a>
              </div>
            </div>
            <div className="news-card shadow-none chittagong bg-transparent border-0">
              <a href={`/details/${chittagong[0].id}`}><img className="img-fluid" src={chittagong[0].image} alt={chittagong[0].title} /></a>
              <h3> <a href={`/details/${chittagong[0].id}`}> {chittagong[0].title} </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* law */}
  <section className="law">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="news-section-line px-0 py-3">
            <div className="d-flex align-items-center mb-lg-2 mb-1">
              <div className="news-title-more">
                <div className="nav-link">
                  <h2><a href=""> আইন ও বিচার </a></h2>
                </div>
              </div>
              <div className="news-line" />
              <a href="#" className="more-link fw-bold">
                আরো <span className="arrow"> <i className="fa-solid fa-angle-right" /> </span>
              </a>
            </div>
          </div>
          <div className="law-news-container">
            {law.map((a, i) => (
              <NewsItem key={a.id} article={a} showImage={i === 0} />
            ))}
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="news-section-line px-0 py-3">
            <div className="d-flex align-items-center mb-lg-2 mb-1">
              <div className="news-title-more">
                <div className="nav-link">
                  <h2><a href=""> অপরাধ </a></h2>
                </div>
              </div>
              <div className="news-line" />
              <a href="#" className="more-link fw-bold">
                আরো <span className="arrow"> <i className="fa-solid fa-angle-right" /> </span>
              </a>
            </div>
          </div>
          <div className="law-news-container border-md-0">
            {crime.map((a, i) => (
              <NewsItem key={a.id} article={a} showImage={i === 0} />
            ))}
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="news-section-line px-0 py-3">
            <div className="d-flex align-items-center mb-lg-2 mb-1">
              <div className="news-title-more">
                <div className="nav-link">
                  <h2><a href=""> দূর্ঘটনা </a></h2>
                </div>
              </div>
              <div className="news-line" />
              <a href="#" className="more-link fw-bold">
                আরো <span className="arrow"> <i className="fa-solid fa-angle-right" /> </span>
              </a>
            </div>
          </div>
          <div className="law-news-container">
            {accident.map((a, i) => (
              <NewsItem key={a.id} article={a} showImage={i === 0} />
            ))}
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="news-section-line px-0 py-3">
            <div className="d-flex align-items-center mb-lg-2 mb-1">
              <div className="news-title-more">
                <div className="nav-link">
                  <h2><a href=""> শিক্ষাঙ্গান </a></h2>
                </div>
              </div>
              <div className="news-line" />
              <a href="#" className="more-link fw-bold">
                আরো <span className="arrow"> <i className="fa-solid fa-angle-right" /> </span>
              </a>
            </div>
          </div>
          <div className="law-news-container border-0">
            {education.map((a, i) => (
              <NewsItem key={a.id} article={a} showImage={i === 0} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* entertainment */}
  <section className="entertainment">
    <div className="container">
      <div className="news-section-line px-0 py-3">
        <div className="d-flex align-items-center">
          <div className="news-title-more">
            <div className="nav-link">
              <h2><a href=""> বিনোদন </a></h2>
            </div>
          </div>
          <div className="news-line" />
          <a href="#" className="more-link fw-bold">
            আরো <span className="arrow"> <i className="fa-solid fa-angle-right" /> </span>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="news-card shadow-none bg-transparent entertainment-left-card">
            <a href={`/details/${entertainmentMain[0].id}`}><img className="img-fluid" src={entertainmentMain[0].image} alt={entertainmentMain[0].title} /></a>
            <h3> <a href={`/details/${entertainmentMain[0].id}`}> {entertainmentMain[0].title} </a>
            </h3>
            <p className="pt-2">{entertainmentMain[0].excerpt}
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="entertainment-card">
            <div className="row">
              {entertainmentGrid.map((a) => (
                <div className="col-lg-6 col-md-6 col-sm-6 col-6" key={a.id}>
                  <div className="news-card shadow-none  bg-transparent">
                    <a href={`/details/${a.id}`}><img className="img-fluid" src={a.image} alt={a.title} /></a>
                    <h3> <a href={`/details/${a.id}`}> {a.title} </a>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* lifestyle*/}
  <section className="lifestyle">
    <div className="container">
      <div className="news-section-line px-0 py-3">
        <div className="d-flex align-items-center">
          <div className="news-title-more">
            <div className="nav-link">
              <h2><a href=""> লাইফস্টাইল </a></h2>
            </div>
          </div>
          <div className="news-line" />
          <a href="#" className="more-link fw-bold">
            আরো <span className="arrow"> <i className="fa-solid fa-angle-right" /> </span>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="news-card shadow-none bg-transparent entertainment-left-card">
            <a href={`/details/${lifestyleMain[0].id}`}><img className="img-fluid" src={lifestyleMain[0].image} alt={lifestyleMain[0].title} /></a>
            <h3> <a href={`/details/${lifestyleMain[0].id}`}> {lifestyleMain[0].title} </a>
            </h3>
            <p className="pt-2"> {lifestyleMain[0].excerpt}
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="entertainment-card">
            <div className="row">
              {lifestyleGrid.map((a) => (
                <div className="col-lg-6 col-md-6 col-sm-6 col-6" key={a.id}>
                  <div className="news-card shadow-none  bg-transparent">
                    <a href={`/details/${a.id}`}><img className="img-fluid" src={a.image} alt={a.title} /></a>
                    <h3> <a href={`/details/${a.id}`}> {a.title} </a>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Art and Literature */}
  <section className="mt-lg-4 mt-md-3 mt-sm-2 mt-2">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12 ">
          <div className="news-section-line px-0 py-3">
            <div className="d-flex align-items-center">
              <div className="news-title-more">
                <div className="nav-link">
                  <h2><a href=""> ফিচার </a></h2>
                </div>
              </div>
              <div className="news-line" />
              <a href="#" className="more-link fw-bold">
                আরো <span className="arrow"> <i className="fa-solid fa-angle-right" /> </span>
              </a>
            </div>
          </div>
          <div className="art-news-container">
            {feature.map((a, i) => (
              <NewsItem key={a.id} article={a} showImage={i === 0} />
            ))}
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 ">
          <div className="news-section-line px-0 py-3">
            <div className="d-flex align-items-center">
              <div className="news-title-more">
                <div className="nav-link">
                  <h2><a href=""> শিল্প ও সাহিত্য </a></h2>
                </div>
              </div>
              <div className="news-line" />
              <a href="#" className="more-link fw-bold">
                আরো <span className="arrow"> <i className="fa-solid fa-angle-right" /> </span>
              </a>
            </div>
          </div>
          <div className="art-news-container">
            {literature.map((a, i) => (
              <NewsItem key={a.id} article={a} showImage={i === 0} />
            ))}
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 ">
          <div className="news-section-line px-0 py-3">
            <div className="d-flex align-items-center">
              <div className="news-title-more">
                <div className="nav-link">
                  <h2><a href=""> ধর্ম ও দর্শন </a></h2>
                </div>
              </div>
              <div className="news-line" />
              <a href="#" className="more-link fw-bold">
                আরো <span className="arrow"> <i className="fa-solid fa-angle-right" /> </span>
              </a>
            </div>
          </div>
          <div className="art-news-container">
            {religion.map((a, i) => (
              <NewsItem key={a.id} article={a} showImage={i === 0} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Photogallery */}
  <section className="mb-lg-5 mb-md-3 mb-sm-2 mb-2">
    <div className="container">
      <div className="news-section-line px-0 py-2">
        <div className="d-flex align-items-center">
          <div className="news-title-more">
            <div className="nav-link">
              <h2><a href=""> ফটোগ্যালারি </a></h2>
            </div>
          </div>
          <div className="news-line" />
          <a href="#" className="more-link fw-bold">
            আরো <span className="arrow"> <i className="fa-solid fa-angle-right" /> </span>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5 col-md-12">
          <div className="video-content mt-lg-2 mt-mb-2 mt-2 mb-lg-0 mb-md-4 mb-4">
            <div className="Photogallery-item">
              <div className="Photogallery-title">
                <h4 className="mt-1"><a href="#"> <i className="fa-solid fa-circle" />
                    রাজনীতিবিদদের কথা উল্টা-পাল্টা হলে ওই জাতির </a></h4>
              </div>
              <a href="#"><img className="img-fluid" src="/assets/img/Fhotogalri.png" alt="News" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-12">
          <div className="Photogallery-card">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                <div className="video-content mt-lg-2 mt-mb-2 mt-2 mb-lg-0 mb-md-4 mb-4">
                  <div className="Photogallery-item">
                    <div className="Photogallery-title">
                      <h4 className="mt-1 ps-2"><a href="#"> <i className="fa-solid fa-circle" />
                          রাজনীতিবিদদের কথা উল্টা-পাল্টা । </a>
                      </h4>
                    </div>
                    <a href="#"><img className="img-fluid" src="/assets/img/ads-right.jpg" alt="News" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                <div className="video-content mt-lg-2 mt-mb-2 mt-2 mb-lg-0 mb-md-4 mb-4">
                  <div className="Photogallery-item">
                    <div className="Photogallery-title">
                      <h4 className="mt-1 ps-2"><a href="#"> <i className="fa-solid fa-circle" />
                          রাজনীতিবিদদের কথা উল্টা-পাল্টা । </a>
                      </h4>
                    </div>
                    <a href="#"><img className="img-fluid" src="/assets/img/ads-right.jpg" alt="News" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                <div className="video-content mt-lg-2 mt-mb-2 mt-2 mb-lg-0 mb-md-4 mb-4">
                  <div className="Photogallery-item">
                    <div className="Photogallery-title">
                      <h4 className="mt-1 ps-2"><a href="#"> <i className="fa-solid fa-circle" />
                          রাজনীতিবিদদের কথা উল্টা-পাল্টা । </a>
                      </h4>
                    </div>
                    <a href="#"><img className="img-fluid" src="/assets/img/ads-right.jpg" alt="News" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                <div className="video-content mt-lg-4 mt-mb-2 mt-2 mb-lg-0 mb-md-4 mb-4">
                  <div className="Photogallery-item">
                    <div className="Photogallery-title">
                      <h4 className="mt-1 ps-2"><a href="#"> <i className="fa-solid fa-circle" />
                          রাজনীতিবিদদের কথা উল্টা-পাল্টা । </a>
                      </h4>
                    </div>
                    <a href="#"><img className="img-fluid" src="/assets/img/ads-right.jpg" alt="News" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                <div className="video-content mt-lg-4 mt-mb-2 mt-2 mb-lg-0 mb-md-4 mb-4">
                  <div className="Photogallery-item">
                    <div className="Photogallery-title">
                      <h4 className="mt-1 ps-2"><a href="#"> <i className="fa-solid fa-circle" />
                          রাজনীতিবিদদের কথা উল্টা-পাল্টা । </a>
                      </h4>
                    </div>
                    <a href="#"><img className="img-fluid" src="/assets/img/ads-right.jpg" alt="News" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                <div className="video-content mt-lg-4 mt-mb-2 mt-2 mb-lg-0 mb-md-4 mb-4">
                  <div className="Photogallery-item">
                    <div className="Photogallery-title">
                      <h4 className="mt-1 ps-2"><a href="#"> <i className="fa-solid fa-circle" />
                          রাজনীতিবিদদের কথা উল্টা-পাল্টা । </a>
                      </h4>
                    </div>
                    <a href="#"><img className="img-fluid" src="/assets/img/ads-right.jpg" alt="News" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      </main>
      <Footer />
    </>
  );
}
