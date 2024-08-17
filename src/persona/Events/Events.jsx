import React from 'react'
import "../styles1.css";

const Landing = () => {
  return (
    <main className="main">
        <section className="section-event  text-left py-20 bg-gray-100">
        <div className="container mx-auto max-w-5xl">
          <div className="row bg-white rounded-lg shadow-lg p-10 flex flex-col lg:flex-row justify-center mx-auto">
            <div className="col-12 lg:w-1/2 px-0 flex flex-col">
              <div className="row justify-center mx-auto sticky top-0">
                <div className="col-12 text-left lg:w-1/2">
                  <h3 className="text-4xl font-bold leading-tight text-darkblue uppercase mb-0">
                    Event Details
                  </h3>
                  <p className="text-darkblue opacity-70 mt-4">
                    Unlock all the details about Designathon right here, right
                    now! It's a must-know, so don't even think about skipping
                    it!
                  </p>
                </div>
                <div className="img-event mt-6">
                  <img
                    className="hidden sm:block lazyloaded"
                    src="https://lollypop.design/wp-content/themes/lollypop/assets/images/designathon2024/event-vector.svg"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 lg:w-1/2 px-0 flex flex-col">
              <div className="row mx-auto">
                <div className="col-12 lg:w-4/5">
                  <h3 className="text-xl font-semibold text-orange uppercase">
                    01
                  </h3>
                  <div className="border-b border-gray-300 my-2"></div>
                  <h3 className="text-2xl font-semibold text-darkblue capitalize">
                    Registration Process
                  </h3>
                  <p className="text-darkblue opacity-70 mt-4">
                    Limited seats, big dreams! Stay tuned for that email
                    confirmation if you are the chosen one. Registrations start
                    on 8th April and close on 14th April.
                  </p>
                </div>
              </div>
              <div className="row mx-auto pt-14">
                <div className="col-12 lg:w-4/5">
                  <h3 className="text-xl font-semibold text-orange uppercase">
                    02
                  </h3>
                  <div className="border-b border-gray-300 my-2"></div>
                  <h3 className="text-2xl font-semibold text-darkblue capitalize">
                    Date and Time
                  </h3>
                  <p className="text-darkblue opacity-70 mt-4">
                    Mark your calendars for Designathon happening on the 3rd-4th
                    of May, 2024. Buckle up for a non-stop 24-hour ride through
                    the world of design!
                  </p>
                </div>
              </div>
              <div className="row mx-auto pt-14">
                <div className="col-12 lg:w-4/5">
                  <h3 className="text-xl font-semibold text-orange uppercase">
                    03
                  </h3>
                  <div className="border-b border-gray-300 my-2"></div>
                  <h3 className="text-2xl font-semibold text-darkblue capitalize">
                    Pricing Details
                  </h3>
                  <p className="text-darkblue opacity-70 mt-4">
                    Snag your spot at the biggest design event of the country at
                    just INR 699 within the first three days of registering.
                    After that, you'll need to pay INR 999.
                  </p>
                </div>
              </div>
              <div className="row mx-auto pt-14">
                <div className="col-12 lg:w-4/5">
                  <h3 className="text-xl font-semibold text-orange uppercase">
                    04
                  </h3>
                  <div className="border-b border-gray-300 my-2"></div>
                  <h3 className="text-2xl font-semibold text-darkblue capitalize">
                    Location Preference
                  </h3>
                  <p className="text-darkblue opacity-70 mt-4">
                    When registering, simply pick the city you'd like to
                    participate in. If your preferred city choice is full,
                    you'll be assigned to another location.
                  </p>
                </div>
              </div>
              <div className="row mx-auto pt-14">
                <div className="col-12 lg:w-4/5">
                  <h3 className="text-xl font-semibold text-orange uppercase">
                    05
                  </h3>
                  <div className="border-b border-gray-300 my-2"></div>
                  <h3 className="text-2xl font-semibold text-darkblue capitalize">
                    Team Allocation
                  </h3>
                  <p className="text-darkblue opacity-70 mt-4">
                    You will be allotted your team and the problem statement on
                    the 3rd of May, when you arrive at the venue.
                  </p>
                </div>
              </div>
              <div className="row mx-auto pt-14">
                <div className="col-12 lg:w-4/5">
                  <h3 className="text-xl font-semibold text-orange uppercase">
                    06
                  </h3>
                  <div className="border-b border-gray-300 my-2"></div>
                  <h3 className="text-2xl font-semibold text-darkblue capitalize">
                    Awards
                  </h3>
                  <p className="text-darkblue opacity-70 mt-4">
                    The award ceremony will take place after the final
                    presentation to the jury members on the 4th of May.
                  </p>
                </div>
              </div>
              <div className="row mx-auto pt-14">
                <div className="col-12 lg:w-4/5 text-center">
                  <div className="border-b border-gray-300 my-2"></div>
                  <h3 className="text-2xl font-semibold text-darkblue capitalize">
                    So what are you waiting for?
                  </h3>
                  <a
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe4ApRD0fT8a7LPNYxRqbC2w_n8UQooH3bLM0AQCO7CAZtN5Q/viewform"
                    className="block bg-orange-500 text-white uppercase text-lg py-3 px-6 mt-6 rounded hover:bg-orange-600 transition"
                  >
                    Registration Closed!
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