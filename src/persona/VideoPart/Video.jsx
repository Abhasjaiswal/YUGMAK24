import React from 'react'
import "../styles1.css";

const Landing = () => {
  return (
    <main className="main">
              <section className="section-designathon23">
        <div className="container max-w-5xl ml-auto mr-auto ">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <h3 className="fnt-56 fnt-700 clr-darkblue fnt-clash lh-56 text-uppercase">
                Here is a sneak peak of Designathon’23
              </h3>
            </div>
          </div>
          <div className="row d-flex justify-content-center pt-32">
            <div className="col-12 col-md-12 col-lg-12 mx-auto">
              <div className="sec-video">
                <div className="text-center col-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                  <a
                    href="https://www.youtube.com/watch?v=o5qzJV9YGck"
                    data-fancybox=""
                  >
                    <img
                      className="img-fluid lazyloaded"
                      src="https://lollypop.design/wp-content/themes/lollypop/assets/images/designathon2024/designathon2023.png"
                      alt="video"
                      data-ll-status="loaded"
                    />
                    <noscript>
                      &lt;img class="img-fluid lazyloaded lazy"
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                      data-src=https://lollypop.design/wp-content/themes/lollypop/assets/images/designathon2024/designathon2023.png
                      alt=video&gt;
                    </noscript>
                  </a>
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