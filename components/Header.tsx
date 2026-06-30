'use client';

export default function Header() {
  return (
<>
  <section className="top-header">
    <div className="container">
      <div className="top-ads d-flex justify-content-center  align-items-center px-lg-0 px-2">
        <img src="/assets/img/main-ads.png" className="img-fluid" alt="img" />
      </div>
      <div className="row justify-content-between">
        {/* Left */}
        <div className="col-lg-3 d-flex flex-column justify-content-end">
          <div className="top-dates">
            <div className="date-text">
              <i className="bi bi-calendar3" />
              বুধবার, ৭ এপ্রিল, ২০২৬, ২৫ চৈত্র, ১৪৩২ বঙ্গাব্দ
            </div>
            <div className="quick-links">
              <a href="#">বাংলা</a> |
              <a href="#">ই-পেপার</a> |
              <a href="#">আর্কাইভ</a>
            </div>
          </div>
        </div>
        {/* Center Logo */}
        <div className="col-lg-6 text-center my-0 my-lg-0">
          <div className="main-logo d-md-none d-lg-block d-sm-none d-none">
            <h1><a href="/"><img id="btn-dark" src="/assets/img/logo.png" alt="Logo" className="img-fluid" /></a></h1>
            <h1><a href="/"><img id="btn-light" src="/assets/img/ND-logo-white.png" alt="Logo" className="img-fluid d-none" /></a></h1>
            <h3>সত্যের সঙ্গে প্রতিদিন</h3>
          </div>
        </div>
        {/* Right Banner */}
        <div className="col-lg-3 d-lg-block d-md-none d-none">
          <div className="right-slider d-flex justify-content-end">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval={3000}>
              <div className=" carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
              </div>
              <div className="carousel-inner hidden">
                <div className="carousel-item active">
                  <div className="slider-image-text d-flex justify-content-end">
                    <h3 className="d-flex align-items-center">স্বাধীন বিচারব্যবস্থা</h3>
                    <img src="/assets/img/top-menu-slider.jpg" className="d-block " alt="img" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="slider-image-text d-flex justify-content-end">
                    <h3 className="d-flex align-items-center">বাজেটে নতুন চমক</h3>
                    <img src="/assets/img/top-menu-slider.jpg" className="d-block " alt="img" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="slider-image-text d-flex justify-content-end">
                    <h3 className="d-flex align-items-center">ঢাকা জেলা চ্যাম্পিয়ন</h3>
                    <img src="/assets/img/top-menu-slider.jpg" className="d-block " alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Navigation */}
  <section className="navbar-area sticky-top">
    <div className="container">
      {/* mobile Menu */}
      <div className="d-lg-none">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-10 col-sm-10 col-10 my-0 my-lg-0">
            <div className="main-logo">
              <h1><a href="/"><img src="/assets/img/logo.png" alt="Logo" className="img-fluid logo-light" /></a>
              </h1>
              <h1><a href="/"><img id="btn-light" src="/assets/img/ND-logo-white.png" alt="Logo" className="img-fluid d-none logo-dark" /></a></h1>
            </div>
          </div>
          <div className="col-md-1 col-sm-1 col-1 my-0 my-lg-0">
            <div className="mobile-search d-flex justify-content-end align-items-center">
              <a href="#"><i className="fa-solid fa-magnifying-glass" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div className="col-lg-9 col-md-9 col-sm-9 col-9">
          <nav className=" navbar static-top">
            <div className="custom-navbar">
              <div className="nav-arrow" id="scrollLeftBtn">
              </div>
              <div className="scrollable-menu" id="menuContainer">
                <ul className="d-flex list-unstyled">
                  <li> <a href="#" className="nav-link-item"> হোম </a></li>
                  <li> <a href="#" className="nav-link-item">সর্বশেষ</a></li>
                  <li> <a href="#" className="nav-link-item"> বাংলাদেশ </a></li>
                  <li> <a href="#" className="nav-link-item"> রাজনীতি </a></li>
                  <li> <a href="#" className="nav-link-item"> বিশ্ব </a></li>
                  <li> <a href="#" className="nav-link-item"> বাণিজ্য </a></li>
                  <li> <a href="#" className="nav-link-item"> মতামত </a></li>
                  <li> <a href="#" className="nav-link-item"> খেলা </a></li>
                  <li> <a href="#" className="nav-link-item"> বিনোদন </a></li>
                  <li> <a href="#" className="nav-link-item"> চাকরি </a></li>
                  <li> <a href="#" className="nav-link-item"> বিজ্ঞান ও প্রযুক্তি </a></li>
                  <li> <a href="#" className="nav-link-item"> জীবনযাপন </a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* Navigation Right Part */}
        <div className="col-lg-3 col-md-3 col-sm-3 col-3 d-flex d-flex align-items-center gap-1 justify-content-end">
          <div className=" left-tools d-flex justify-content-center align-content-center">
            <button id="theme-toggle" className="btn">
              <i id="theme-icon" className="fa-solid fa-moon theme-btn" />
            </button>
          </div>
          <div className="right-tools d-flex gap-1 ">
            <a href="#" className="social-icon facebook">
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a href="#" className="social-icon youtube">
              <i className="fa-brands fa-youtube" />
            </a>
            <a href="#" className="social-icon twitter">
              <i className="fa-brands fa-x-twitter" />
            </a>
          </div>
          <div className="icon-btn d-flex justify-content-center align-items-center mega-toggle" data-bs-toggle="modal" data-bs-target="#myModal">
            <i className="fa-solid fa-bars" />
          </div>
          <div className="icon-btn d-flex justify-content-center align-items-center search-btn">
            <a href="#"><i className="fa-solid fa-magnifying-glass" /></a>
          </div>
        </div>
      </div>
    </div>
    {/* Modal body */}
    <div className="modal" id="myModal">
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <div className="container">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-lg-11 col-md-11 col-sm-11 col-11">
                  <div className="barnd-logo-modal">
                    <img src="/assets/img/logo.png" className="logo-light" alt="img" />
                    <img src="/assets/img/ND-logo-white.png" className="logo-dark d-none" alt="img" />
                  </div>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                  <button type="button" className="btn-close" data-bs-dismiss="modal">
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal body */}
          <div className="modal-body">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="mega-card">
                    <div className="mega-menu-nav">
                      <ul className="d-flex gap-4 flex-wrap">
                        <li className="nav-item"> <a className="nav-link active " href="#">বাংলাদেশ</a>
                        </li>
                        <li className="nav-item"> <a className="nav-link" href="#">লাইফস্টাইল</a> </li>
                        <li className="nav-item"> <a className="nav-link" href="#">রাজনীতি</a> </li>
                        <li className="nav-item"> <a className="nav-link" href="#">মতামত</a> </li>
                        <li className="nav-item"> <a className="nav-link" href="#">সারাদেশ</a> </li>
                        <li className="nav-item"> <a className="nav-link" href="#">ফটো</a> </li>
                        <li className="nav-item"> <a className="nav-link" href="#">আইন ও বিচার</a> </li>
                        <li className="nav-item"> <a className="nav-link" href="#">আন্তর্জাতিক</a> </li>
                      </ul>
                    </div>
                    <div className="mega-menu-list">
                      <ul className="d-flex list-unstyled flex-wrap">
                        <li><a className="nav-link d-flex justify-content-between" href="#">
                            <span>রাজধানী</span>
                            <i className="fa-solid fa-chevron-down dropdown-icon" /></a></li>
                        <li><a className="nav-link" href="#"><i className="fa-solid fa-chevron-right" /></a></li>
                        <li><a className="nav-link" href="#">জেলা</a></li>
                        <li><a className="nav-link" href="#">করোনাভাইরাস</a></li>
                        <li><a className="nav-link" href="#">পরিবেশ</a></li>
                        <li><a className="nav-link" href="#">অপরাধ</a></li>
                        <li><a className="nav-link" href="#">রাজধানী</a></li>
                      </ul>
                    </div>
                    <div className="mega-menu-list">
                      <ul className="d-flex list-unstyled flex-wrap">
                        <li><a className="nav-link d-flex justify-content-between" href="#">
                            <span>রাজধানী</span>
                            <i className="fa-solid fa-chevron-down dropdown-icon" /></a></li>
                        <li><a className="nav-link" href="#"><i className="fa-solid fa-chevron-right" /></a></li>
                        <li><a className="nav-link" href="#">জেলা</a></li>
                        <li><a className="nav-link" href="#">করোনাভাইরাস</a></li>
                        <li><a className="nav-link" href="#">পরিবেশ</a></li>
                        <li><a className="nav-link" href="#">অপরাধ</a></li>
                        <li><a className="nav-link" href="#">রাজধানী</a></li>
                      </ul>
                    </div>
                    <div className="mega-menu-list">
                      <ul className="d-flex list-unstyled flex-wrap">
                        <li><a className="nav-link d-flex justify-content-between" href="#">
                            <span>রাজধানী</span>
                            <i className="fa-solid fa-chevron-down dropdown-icon" /></a></li>
                        <li><a className="nav-link" href="#"><i className="fa-solid fa-chevron-right" /></a></li>
                        <li><a className="nav-link" href="#">জেলা</a></li>
                        <li><a className="nav-link" href="#">করোনাভাইরাস</a></li>
                        <li><a className="nav-link" href="#">পরিবেশ</a></li>
                        <li><a className="nav-link" href="#">অপরাধ</a></li>
                        <li><a className="nav-link" href="#">রাজধানী</a></li>
                      </ul>
                    </div>
                    <div className="mega-menu-list">
                      <ul className="d-flex list-unstyled flex-wrap">
                        <li><a className="nav-link d-flex justify-content-between" href="#">
                            <span>রাজধানী</span>
                            <i className="fa-solid fa-chevron-down dropdown-icon" /></a></li>
                        <li><a className="nav-link" href="#"><i className="fa-solid fa-chevron-right" /></a></li>
                        <li><a className="nav-link" href="#">জেলা</a></li>
                        <li><a className="nav-link" href="#">করোনাভাইরাস</a></li>
                        <li><a className="nav-link" href="#">পরিবেশ</a></li>
                        <li><a className="nav-link" href="#">অপরাধ</a></li>
                        <li><a className="nav-link" href="#">রাজধানী</a></li>
                      </ul>
                    </div>
                    <div className="mega-menu-list">
                      <ul className="d-flex list-unstyled flex-wrap">
                        <li><a className="nav-link d-flex justify-content-between" href="#">
                            <span>রাজধানী</span>
                            <i className="fa-solid fa-chevron-down dropdown-icon" /></a></li>
                        <li><a className="nav-link" href="#"><i className="fa-solid fa-chevron-right" /></a></li>
                        <li><a className="nav-link" href="#">জেলা</a></li>
                        <li><a className="nav-link" href="#">করোনাভাইরাস</a></li>
                        <li><a className="nav-link" href="#">পরিবেশ</a></li>
                        <li><a className="nav-link" href="#">অপরাধ</a></li>
                        <li><a className="nav-link" href="#">রাজধানী</a></li>
                      </ul>
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
  {/* Home top Section */}
</>
  );
}
