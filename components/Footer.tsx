export default function Footer() {
  return (
<footer>
  <div className="container">
    <div className="row">
      <div className="newsletter-box d-flex mb-3 mx-lg-0 mx-md-0 mx-2">
        <div className="input-area">
          <i className="fa-solid fa-envelope" />
          <input type="email" placeholder="Your email" />
        </div>
        <button className="subscribe-btn">
          সাবস্ক্রাইব
        </button>
      </div>
      <div className="footer-logo-icon justify-content-between align-items-center">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-4 col-12">
            <a href=""> <img src="/assets/img/logo.png" width={140} height={20} className=" mx-2 mx-lg-0 mx-md-0 logo-light" alt="img" />
            </a><a href=""> <img src="/assets/img/ND-logo-white.png" width={140} height={20} className=" mx-2 mx-lg-0 mx-md-0 logo-dark d-none" alt="img" />
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
            <div className="d-flex items-center justify-content-lg-end footer-extra-links mt-lg-2 mt-3">
              <ul className="d-flex gap-lg-3 gap-md-2 gap-sm-1 align-items-center ">
                <li><a href="#" title="ই-পেপার">ই-পেপার</a></li>
                <li><a href="#" title="অন্য এক দিগন্ত">অন্য এক দিগন্ত</a></li>
              </ul>
            </div>
          </div>
          <div className=" col-lg-2 col-md-2 col-sm-2 col-12">
            <div className="footer-socail-icon d-flex justify-content-between justify-content-lg-end">
              <ul className=" d-flex gap-lg-4 gap-md-1 gap-1 mt-lg-2 mt-3">
                <li className="nav-item"> <a className="nav-link" href="#">
                    <i className="fa-brands fa-facebook" /></a>
                </li>
                <li className="nav-item"> <a className="nav-link" href="#">
                    <i className="fa-brands fa-youtube" /></a>
                </li>
                <li className="nav-item"> <a className="nav-link" href="#">
                    <i className="fa-brands fa-tiktok" /></a>
                </li>
                <li className="nav-item"> <a className="nav-link" href="#">
                    <i className="fa-brands fa-whatsapp" /></a>
                </li>
                <li className="nav-item"> <a className="nav-link" href="#">
                    <i className="fa-brands fa-telegram" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* footer email and link  */}
      <div className="d-flex justify-content-between mt-lg-4 mt-2 pb-lg-5 pb-md-3 pb-2 editor-main">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-12 ps-lg-0 ps-md-0 ps-2">
            <div className="editor">
              <p><b>সম্পাদক:</b> সালাহউদ্দিন মুহাম্মদ বাবর<br /><b>প্রকাশক:</b> শামসুল
                হুদা, এফসিএ<br /><b>স্বত্বাধিকারী:</b> দিগন্ত মিডিয়া কর্পোরেশন লিমিটেড এর পক্ষে
                শিব্বির
                মাহমুদ<br /><b>অনলাইন নিবন্ধন নম্বর:</b> ২০</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mt-md-0 mt-sm-3 mt-2">
            <div className=" text-lg-center editor-link">
              <ul>
                <li><a href="#">নয়া দিগন্ত সম্পর্কে</a></li>
                <li><a href="#"> মূল্যবোধ ও নীতিমালা </a></li>
                <li><a href="#">বিজ্ঞাপন</a></li>
                <li><a href="#">সার্কুলেশন</a></li>
                <li><a href="#">যোগাযোগ</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 ps-md-0 mt-md-4 mt-lg-0 mt-3">
            <div className="footer-rapport">
              <p><b>সম্পাদক:</b> <br /> ১ আর. কে মিশন রোড, মতিঝিল,
                ঢাকা-১২০৩<br />ফোন: ০২-৪১০৫৪৫০৫-১০ (পিএবিএক্স), ০২-৪১০৫৪৫১২ (বিজ্ঞাপন),
                ০২-৪১০৫৪৫১১
                (সার্কুলেশন)<br />ইমেইল:
                <a href="mailto:news@nayadiganta.com">news@nayadiganta.com</a> | <br /> <a href="mailto:nayadigantabd@gmail.com">nayadigantabd@gmail.com</a> | <a href="mailto:mktnd@yahoo.com">mktnd@yahoo.com</a> (বিজ্ঞাপন)
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex copyright-text">
          <p>সকল স্বত্ব
            সংরক্ষিত। ২০২৬ © দৈনিক নয়া দিগন্ত </p>
          <ul className="d-lg-flex d-md-flex gap-4 ms-4  d-sm-block">
            <li><a href="#">আর্কাইভ</a></li>
            <li><a href="#"> ব্যবহারের শর্তাবলী ও নীতিমালা</a></li>
            <li><a href="#">গোপনীয়তা নীতি</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
}
