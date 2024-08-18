import React from 'react'
import "../styles1.css";
const Landing = () => {
  return (
    <main className="main">
        <section className="section-participate">
        <div className="container max-w-5xl ml-auto mr-auto">
          <div className="row d-flex justify-content-center">
            <div className="col-12 text-center">
              <h3 className="fnt-56 fnt-700 clr-darkblue fnt-clash lh-56 text-uppercase mb-0">
                Why Participate?
              </h3>
            </div>
          </div>
          <div className="row d-flex justify-content-center pt-56">
            <div className="col-12 col-md-12 col-lg-12 mx-auto">
              <div className="participate-wrapper">
                <div className="participate-item">
                  <img
                    className="img-fluid lazyloaded"
                    src="https://lollypop.design/wp-content/themes/lollypop/assets/images/designathon2024/budding.png"
                    alt="logo"
                    data-ll-status="loaded"
                  />
                  <noscript>
                    &lt;img class="img-fluid lazy"
                    src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                    data-src=https://lollypop.design/wp-content/themes/lollypop/assets/images/designathon2024/budding.png
                    alt=logo&gt;
                  </noscript>
                  <div className="participate-content">
                    <p className="fnt-32 fnt-600 clr-white participate-title">
                      Collaborate &amp; network with{" "}
                      <span className="clr-orange">budding designers</span>
                    </p>
                    <p className="fnt-sm-14 clr-white lh-20 participate-title-sub">
                      Ready to design your destiny? Team up with some of the
                      coolest talents, spark collaboration, and scheme to rule
                      the design industry together!
                    </p>
                  </div>
                  <div className="participate-bg" />
                </div>
                <div className="participate-item">
                  <img
                    className="img-fluid lazyloaded"
                    src="https://lollypop.design/wp-content/themes/lollypop/assets/images/designathon2024/prize.png"
                    style={{ backgroundColor: "#011517" }}
                    alt="logo"
                    data-ll-status="loaded"
                  />
                  <noscript>
                    &lt;img class="img-fluid lazy"
                    src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                    data-src=https://lollypop.design/wp-content/themes/lollypop/assets/images/designathon2024/prize.png
                    style="background-color: #011517;" alt=logo&gt;
                  </noscript>
                  <div className="participate-content">
                    <p className="fnt-32 fnt-600 clr-white participate-title">
                      Win cash prizes of up to{" "}
                      <span className="clr-orange">Rs. 3,00,000 </span>
                    </p>
                    <p className="fnt-sm-14 clr-white lh-20 participate-title-sub">
                      Win cash prizes up to Rs. 3,00,000! Team up, compete
                      against other teams, make your mark and seize exciting
                      rewards!
                    </p>
                  </div>
                  <div className="participate-bg" />
                </div>
                <div className="participate-item">
                  <img
                    className="img-fluid lazyloaded"
                    src="https://lollypop.design/wp-content/themes/lollypop/assets/images/designathon2024/pioneer.png"
                    alt="logo"
                    data-ll-status="loaded"
                  />
                  <noscript>
                    &lt;img class="img-fluid lazy"
                    src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                    data-src=https://lollypop.design/wp-content/themes/lollypop/assets/images/designathon2024/pioneer.png
                    alt=logo&gt;
                  </noscript>
                  <div className="participate-content">
                    <p className="fnt-32 fnt-600 clr-white participate-title">
                      Get mentored by top{" "}
                      <span className="clr-orange">industry pioneers!</span>
                    </p>
                    <p className="fnt-sm-14 clr-white lh-20 participate-title-sub">
                      Cater to your curiosity and discover how the design
                      industry works in the real world, chat with the top
                      leaders, and lay the groundwork for your dream career.
                    </p>
                  </div>
                  <div className="participate-bg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Landing;