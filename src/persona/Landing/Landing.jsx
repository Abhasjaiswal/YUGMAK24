import React from 'react'
import "../styles1.css";
import Logo from "../bg.png"

const Landing = () => {
  return (
    <main className="main">
      <section className="sec-banner ml-auto mr-auto pt-lg-7 position-relative">
        <div className="row langual mx-0">
          <a href="https://lollypop.design">
            <img
              className="img-fluid logo-img lazyloaded"
              src="https://lollypop.design/wp-content/themes/lollypop/assets/images/designathon2024/llp.svg"
              alt="logo"
              data-ll-status="loaded"
            />
            <noscript>
              &lt;img class="img-fluid logo-img lazy"
              src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
              data-src=https://lollypop.design/wp-content/themes/lollypop/assets/images/designathon2024/llp.svg
              alt=logo&gt;
            </noscript>
          </a>
        </div>
        <div className="container max-w-5xl     ml-auto mr-auto">
          <div className="row  d-flex justify-content-center">
            <div className="col-10 col-lg-5 text-center mt-3 px-0">
              <img
                className="img-fluid logo-fix lazyloaded"
                src={Logo}
                alt="logo"
                data-ll-status="loaded"
              />
              <noscript>
                &lt;img class="img-fluid logo-fix lazy"
                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                data-src=https://lollypop.design/wp-content/themes/lollypop/assets/images/designathon2024/logo_designathon24.png
                alt=logo&gt;
              </noscript>
            </div>
            
            <div className="col-12 text-center d-flex justify-content-center mt-title">
              <h3 className="col-12 col-lg-7 fnt-700 fnt-title text-uppercase clr-yellow-brown mb-0">
                <h2 className="clr-white py-4">PRESENTS</h2>
                The <span className="clr-orange">ULTIMATE</span> Design
                Hackathon is back!
              </h3>
            </div>
            <div className="col-12 text-center d-flex justify-content-center mt-content">
              <p className="text-lg col-12 col-lg-7 clr-white fnt-400 fnt-switzer fnt-content mb-0 op-80">
              Unleash your creativity in our 24-hour design hackathon! Collaborate, innovate, and tackle real-world challenges in a single day.
              </p>
            </div>
            <div className="col-8 col-lg-3 text-center d-flex justify-content-center mt-btn" />
            <div className="row d-flex justify-content-center pt-56">
              <div className="col-12 col-lg-7">
                <div className="row">
                  <div className="col-4 d-flex flex-column text-lg-center text-start">
                    <p className="clr-orange text-uppercase fnt-banner-14 fnt-600 fnt-switzer lh-0 mb-2">
                      Date
                    </p>
                    <p className="clr-white fnt-banner-20 fnt-700 fnt-switzer txt-flex-mobile">
                      3rd - 4th{" "}
                      <span className="text-uppercase fnt-sm-14">May</span>
                    </p>
                    <div className="v-line" />
                  </div>
                  <div className="col-4 d-flex flex-column text-lg-center text-start">
                    <p className="clr-orange text-uppercase fnt-banner-14 fnt-600 lh-0 fnt-switzer mb-2">
                      Duration
                    </p>
                    <p className="clr-white text-uppercase fnt-banner-20 fnt-700 fnt-switzer banner_duration">
                      24
                      <span className="fnt-sm-14">Hours</span>
                    </p>
                    <div className="v-line" />
                  </div>
                  <div className="col-4 d-flex flex-column text-lg-center text-start">
                    <p className="clr-orange text-uppercase fnt-banner-14 fnt-600 lh-0 fnt-switzer mb-2">
                      Designers
                    </p>
                    <p className="clr-white text-uppercase fnt-banner-20 fnt-700 fnt-switzer">
                      200+ <span className="fnt-sm-14">Participants</span>
                    </p>
                    <div className="v-line" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="top-banner">
  <div className="top-line">
    {[...Array(8)].map((_, index) => (
      <div className="leftToRight" key={index}>
        {[...Array(8)].map((_, innerIndex) => (
          <div className="top-item-text" key={innerIndex}>
            <img
              className={`img-fluid d-sm-block d-md-block d-lg-block img-top-line ${innerIndex >= 8 ? 'd-sm-bloc' : 'lazyloaded'}`}
              src="https://lollypop.design/wp-content/themes/lollypop/assets/images/designathon2024/check_top.svg"
              alt="logo"
              data-ll-status={innerIndex < 8 ? "loaded" : undefined}
            />
            <noscript>
              <img
                className={`img-fluid d-sm-block d-md-block d-lg-block img-top-line ${innerIndex >= 8 ? 'd-sm-bloc' : 'lazy'}`}
                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                data-src="https://lollypop.design/wp-content/themes/lollypop/assets/images/designathon2024/check_top.svg"
                alt="logo"
              />
            </noscript>
            <span className="text-top-line">
            Registrations Opening Soon!
            </span>
          </div>
        ))}
      </div>
    ))}
    <div className="leftToRight" style={{ marginLeft: 32 }}>
      {[...Array(8)].map((_, index) => (
        <div className="top-item-text" key={index + 8}>
          <img
            className="img-fluid d-sm-bloc d-md-block d-lg-block img-top-line"
            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
            alt="logo"
            data-lazy-src="https://lollypop.design/wp-content/themes/lollypop/assets/images/designathon2024/check_top.svg"
          />
          <noscript>
            <img
              className="img-fluid d-sm-bloc d-md-block d-lg-block img-top-line lazy"
              src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
              data-src="https://lollypop.design/wp-content/themes/lollypop/assets/images/designathon2024/check_top.svg"
              alt="logo"
            />
          </noscript>
          <span className="text-top-line">
            Registrations Opening Soon!
          </span>
        </div>
      ))}
    </div>
  </div>
</div>
    </main>
  );
};
export default Landing;