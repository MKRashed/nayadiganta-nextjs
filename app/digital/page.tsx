import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThumbLeft from '@/components/cards/ThumbLeft';
import { getArticles } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Digital (দৈনিক নয়া দিগন্ত) : Most Popular Bangla Newspaper',
  description:
    'দৈনিক নয়া দিগন্ত - সর্বশেষ বাংলা সংবাদ, রাজনীতি, খেলা, আন্তর্জাতিক ও লাইফস্টাইল',
};

export default async function DigitalPage() {
  const digitalRight = await getArticles({ category: 'digital', limit: 5 });

  return (
    <>
      <Header />
      <main>
  <section className="hero-section digital-hero pb-lg-5 ">
    <div className="container">
      <div className="top-ads d-flex justify-content-center  align-items-center px-lg-0 px-2">
        <img src="/assets/img/main-ads.png" className="img-fluid" alt="img" />
      </div>
      <div className="row  mt-lg-4 mt-md-2 mt-1">
        <div className="col-lg-9">
          <div className="row hero-top">
            <div className="col-lg-4">
              <div className="hero-content">
                <div className="live-icon">
                  <img src="/assets/img/live-icon.png" width="80px" height="50px" alt="img" />
                </div>
                <h2> <a href="#"> জুলাইযোদ্ধাদের সুরক্ষা ও দায়মুক্তি দিয়ে সংসদে বিল
                    পাস</a></h2>
                <p> বিশ্বকাপ খেলতে যুক্তরাষ্ট্রে পৌঁছে শিকাগো বিমানবন্দরে প্রায় সাত ঘণ্টা আটক ও
                  জিজ্ঞাসাবাদের মুখে পড়েন ইরাকের তারকা ফুটবলার আইমেন হুসেইন। রয়টর্সের এক
                  প্রতিবেদনে বলা হয়েছে Gবিশ্বকাপ খেলতে যুক্তরাষ্ট্রে পৌঁছে শিকাগো বিমানবন্দরে
                  প্রায় সাত ঘণ্টা আটক ও জিজ্ঞাসাবাদের মুখে পড়েন ইরাকের তারকা ফুটবলার আইমেন হুসেইন।
                </p>
              </div>
            </div>
            <div className="col-lg-8 hero-img">
              <img src="/assets/img/Digital-banner.jpg" className="img-fluid" alt="img" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 mt-lg-0 mt-2">
          <div className="right-ads">
            <img src="/assets/img/ads-right.jpg" className="img-fluid" alt="img" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Digital   */}
  <section className="digital mt-lg-0 mt-md-2 mt-2 pt-2 bg-transparent">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="digital-card mt-lg-2 mt-mb-2 mt-2 mb-lg-0 mb-md-4 mb-4">
            <div className="digital-item">
              <div className="digital-icon">
                <img className="img-fluid" src="/assets/img/youtube.png" alt="img" />
              </div>
              <a href="#"><img className="img-fluid" src="/assets/img/ads-right.jpg" alt="News" /></a>
              <h4 className="mt-2 "><a href="#">
                  রাজনীতিবিদদের কথা উল্টা-পাল্টা হলে ওই জাতির খারাপ
                  ছাড়া ভালো কিছু হয় না </a></h4>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="video-right-card">
            {digitalRight.map((a) => (
              <ThumbLeft key={a.id} article={a} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* the interview */}
  <section>
    <div className="container">
      <div className="top-ads d-flex justify-content-center  align-items-center px-lg-0 px-2 mt-lg-4">
        <img src="/assets/img/main-ads.png" className="img-fluid" alt="img" />
      </div>
      <div className="news-section-line px-0 py-2 mb-2">
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
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 mt-lg-0 mt-md-2 mt-2">
          <div className="">
            <a href="#"><img src="/assets/img/ads-right.jpg" className="img-fluid" alt="img" /></a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 mt-lg-0 mt-md-2 mt-2">
          <div className="">
            <a href="#"><img src="/assets/img/ads-right.jpg" className="img-fluid" alt="img" /></a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 mt-lg-0 mt-md-2 mt-2">
          <div className="">
            <a href="#"><img src="/assets/img/ads-right.jpg" className="img-fluid" alt="img" /></a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 mt-lg-0 mt-md-2 mt-2">
          <div className="">
            <a href="#"><img src="/assets/img/ads-right.jpg" className="img-fluid" alt="img" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* prime card */}
  <section className="prime mt-lg-3 mt-md-2 mt-1 pb-lg-4 pb-md-2 pb-1">
    <div className="container">
      <div className="prime-section ">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-lg-0 mt-md-2 mt-2">
            <div className="online-poll">
              <h3 className="poll-heading">
                <a href="#"> প্রাইম টাইম </a>
              </h3>
              <div className="mt-lg-2 ">
                <a href="#"><img src="/assets/img/demo.jpg" className="img-fluid" alt="img" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-lg-0 mt-md-2 mt-2">
            <div className="online-poll">
              <h3 className="poll-heading">
                <a href="#">দিগন্ত ওয়ার্ল্ড </a>
              </h3>
              <div className="mt-lg-2 ">
                <a href="#"><img src="/assets/img/demo.jpg" className="img-fluid" alt="img" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-lg-0 mt-md-2 mt-2">
            <div className="online-poll">
              <h3 className="poll-heading">
                <a href="#"> গ্লোবাল ভিউজ </a>
              </h3>
              <div className="mt-lg-2 ">
                <a href="#"><img src="/assets/img/demo.jpg" className="img-fluid" alt="img" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-lg-0 mt-md-2 mt-2">
            <div className="online-poll">
              <h3 className="poll-heading">
                <a href="#"> দিগন্ত বিশ্লেষণ </a>
              </h3>
              <div className="mt-lg-2 ">
                <a href="#"><img src="/assets/img/demo.jpg" className="img-fluid" alt="img" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*  Reals   Part*/}
  <section className="mt-lg-3 mt-md-2">
    <div className="container">
      <div className="news-section-line px-0 py-2 mb-2">
        <div className="d-flex align-items-center">
          <div className="news-title-more">
            <div className="nav-link">
              <h2><a href=""> রিলস </a></h2>
            </div>
          </div>
          <div className="news-line" />
          <a href="#" className="more-link fw-bold">
            আরো <span className="arrow"> <i className="fa-solid fa-angle-right" /> </span>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="online-poll mx-auto reals-card">
            <div className="poll-slider tranding-slider">
              <div id="pollCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval={3000}>
                <div className="carousel-inner">
                  {/* Slide 1 */}
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-12 gap-2">
                        <div className="poll-content overflow-hidden">
                          <video className="w-100" controls>
                            <source src="/assets/img/videoplayback.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-12 gap-2">
                        <div className="poll-content overflow-hidden">
                          <video className="w-100" controls>
                            <source src="/assets/img/videoplayback.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-12 gap-2">
                        <div className="poll-content overflow-hidden">
                          <video className="w-100" controls>
                            <source src="/assets/img/videoplayback.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-12 gap-2">
                        <div className="poll-content overflow-hidden">
                          <video className="w-100" controls>
                            <source src="/assets/img/videoplayback.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-12 gap-2">
                        <div className="poll-content overflow-hidden">
                          <video className="w-100" controls>
                            <source src="/assets/img/videoplayback.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-12 gap-2">
                        <div className="poll-content overflow-hidden">
                          <video className="w-100" controls>
                            <source src="/assets/img/videoplayback.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-12 gap-2">
                        <div className="poll-content overflow-hidden">
                          <video className="w-100" controls>
                            <source src="/assets/img/videoplayback.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-12 gap-2">
                        <div className="poll-content overflow-hidden">
                          <video className="w-100" controls>
                            <source src="/assets/img/videoplayback.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-12 gap-2">
                        <div className="poll-content overflow-hidden">
                          <video className="w-100" controls>
                            <source src="/assets/img/videoplayback.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-12 gap-2">
                        <div className="poll-content overflow-hidden">
                          <video className="w-100" controls>
                            <source src="/assets/img/videoplayback.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-12 gap-2">
                        <div className="poll-content overflow-hidden">
                          <video className="w-100" controls>
                            <source src="/assets/img/videoplayback.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-12 gap-2">
                        <div className="poll-content overflow-hidden">
                          <video className="w-100" controls>
                            <source src="/assets/img/videoplayback.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-12 gap-2">
                        <div className="poll-content overflow-hidden">
                          <video className="w-100" controls>
                            <source src="/assets/img/videoplayback.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-12 gap-2">
                        <div className="poll-content overflow-hidden">
                          <video className="w-100" controls>
                            <source src="/assets/img/videoplayback.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-12 gap-2">
                        <div className="poll-content overflow-hidden">
                          <video className="w-100" controls>
                            <source src="/assets/img/videoplayback.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-12 gap-2">
                        <div className="poll-content overflow-hidden">
                          <video className="w-100" controls>
                            <source src="/assets/img/videoplayback.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
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
    </div></section>
  {/* Special report    */}
  <section>
    <div className="container">
      <div className="top-ads d-flex justify-content-center  align-items-center px-lg-0 px-2 mt-lg-4 mb-lg-3 mb-md-2 mb-1">
        <img src="/assets/img/main-ads.png" className="img-fluid" alt="img" />
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 mt-lg-0 mt-md-2 mt-2">
          <div className="">
            <a href="#"><img src="/assets/img/digital2.png" className="img-fluid" alt="img" /></a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 mt-lg-0 mt-md-2 mt-2">
          <div className="">
            <a href="#"><img src="/assets/img/digital2.png" className="img-fluid" alt="img" /></a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 mt-lg-0 mt-md-2 mt-2">
          <div className="">
            <a href="#"><img src="/assets/img/digital2.png" className="img-fluid" alt="img" /></a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 mt-lg-0 mt-md-2 mt-2">
          <div className="">
            <a href="#"><img src="/assets/img/digital2.png" className="img-fluid" alt="img" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="prime mt-lg-3 mt-md-2 mt-1 pb-lg-4 pb-md-2 pb-1">
    <div className="container">
      <div className="prime-section">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-lg-0 mt-md-2 mt-2">
            <div className="online-poll">
              <h3 className="poll-heading">
                <a href="#"> রাজনীতি </a>
              </h3>
              <div className="mt-lg-2 ">
                <a href="#"><img src="/assets/img/demo.jpg" className="img-fluid" alt="img" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-lg-0 mt-md-2 mt-2">
            <div className="online-poll">
              <h3 className="poll-heading">
                <a href="#"> স্পোর্টস </a>
              </h3>
              <div className="mt-lg-2 ">
                <a href="#"><img src="/assets/img/demo.jpg" className="img-fluid" alt="img" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-lg-0 mt-md-2 mt-2">
            <div className="online-poll">
              <h3 className="poll-heading">
                <a href="#"> সংসদ </a>
              </h3>
              <div className="mt-lg-2 ">
                <a href="#"><img src="/assets/img/demo.jpg" className="img-fluid" alt="img" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-lg-0 mt-md-2 mt-2">
            <div className="online-poll">
              <h3 className="poll-heading">
                <a href="#"> দিগন্ত এক্সপ্লেইনার </a>
              </h3>
              <div className="mt-lg-2 ">
                <a href="#"><img src="/assets/img/demo.jpg" className="img-fluid" alt="img" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Digital Bootom */}
  <section className="prime mt-lg-3 mt-md-2 mt-1 mb-lg-5 mb-md-3 mb-2 pb-lg-4 pb-md-2 pb-1">
    <div className="container">
      <div className="prime-section ">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-lg-0 mt-md-2 mt-2">
            <div className="online-poll">
              <h3 className="poll-heading">
                <a href="#"> তাফসিরুল কুরআন </a>
              </h3>
              <div className="mt-lg-2 ">
                <a href="#"><img src="/assets/img/quran.png" className="img-fluid" alt="img" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-lg-0 mt-md-2 mt-2">
            <div className="online-poll">
              <h3 className="poll-heading">
                <a href="#"> কিরায়াতে কালামুল্লাহ </a>
              </h3>
              <div className="mt-lg-2 ">
                <a href="#"><img src="/assets/img/quran.png" className="img-fluid" alt="img" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-lg-0 mt-md-2 mt-2">
            <div className="online-poll">
              <h3 className="poll-heading">
                <a href="#"> দারসুল হাদিস </a>
              </h3>
              <div className="mt-lg-2 ">
                <a href="#"><img src="/assets/img/quran.png" className="img-fluid" alt="img" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-lg-0 mt-md-2 mt-2">
            <div className="online-poll">
              <h3 className="poll-heading">
                <a href="#"> মাসআলা মাসায়েল </a>
              </h3>
              <div className="mt-lg-2 ">
                <a href="#"><img src="/assets/img/quran.png" className="img-fluid" alt="img" /></a>
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
