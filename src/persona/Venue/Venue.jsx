import React from 'react';
import '../styles1.css';

const Cities = () => {
  return (
    <div className="cities-container">
      <div className="heading">
        <div className="heading-text">
          <span className="heading-overlay"></span>
          <h1>VENUE</h1>
        </div>
        <p>
          Designathon returns with a bang, hitting the City of Dreams, Mumbai for the very first time this year! Mumbai and Bengaluru, get ready for a creative storm!
        </p>
      </div>
      <div className="row d-flex justify-content-center pt-56">
            <div className="col-12 col-md-5 col-lg-5 d-flex flex-column pt-32 px-auto pe-3">
              <div className="city-bengaluru">
                <div className="city-info">
                  <h3 className="fnt-32 fnt-700 clr-orange">देहरादून</h3>
                  <p className="fnt-llp mb-2 mb-lg-3 mt-2 op-80 clr-darkblue">
                    The city of love and dreams
                  </p>
                  <h3 className="pb-98 fnt-city fnt-600 fnt-clash clr-darkblue">
                    Dehradun
                  </h3>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Cities;
