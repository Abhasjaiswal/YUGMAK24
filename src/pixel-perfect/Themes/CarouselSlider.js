import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CarouselSlider.css';

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 text-white bg-pink-600 p-3 rounded-full cursor-pointer hover:bg-pink-700 transition-transform duration-300 hover:scale-110 z-10"
    onClick={onClick}
  >
    &gt;
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-[-10px] transform -translate-y-1/2 text-white bg-pink-600 p-3 rounded-full cursor-pointer hover:bg-pink-700 transition-transform duration-300 hover:scale-110 z-10"
    onClick={onClick}
  >
    &lt;
  </div>
);

const CarouselSlider = () => {
  const settings = {
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    dots: true,
    infinite: true,
    focusOnSelect: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const images = [
    {
      title: "Environment",
      description: "The environment is our shared home; protecting it ensures a sustainable future for all.",
      url: "https://i.pinimg.com/564x/1f/de/41/1fde41d038a3fe7940d1c6640707bdf7.jpg"
    },
    {
      title: "Innovation",
      description: "Innovation is the driving force behind progress, turning challenges into opportunities and dreams into tangible solutions.",
      url: "https://i.pinimg.com/236x/63/72/f3/6372f37f6f6b0c33d553c4770238cc11.jpg"
    },
    {
      title: "Technology",
      description: "Technology transforms ideas into reality, bridging gaps and shaping the future.",
      url: "https://i.pinimg.com/236x/10/7e/71/107e71dfc9f6547279f124f7493af71f.jpg"
    },
    {
      title: "Tradition",
      description: "Tradition connects us to our past, grounding our values and enriching our present.",
      url: "https://i.pinimg.com/236x/27/f5/10/27f510e49cee636f8dff87f6964899cc.jpg"
    },
    {
      title: "Creativity",
      description: "Creativity is the spark that turns imagination into innovation and ideas into impact.",
      url: "https://i.pinimg.com/236x/47/8d/4f/478d4f22a0d7ab798f4394af7c93cf62.jpg"
    }
  ];

  return (
    <div className="carousel-container w-full max-w-6xl mx-auto  py-10">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">Themes</h1>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide p-4">
            <div className="relative">
              <img
                className="rounded-lg shadow-md hover:shadow-xl transition-transform duration-500 transform "
                src={image.url}
                alt={image.title}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500 text-white rounded-lg">
                <h3 className="text-2xl font-semibold">{image.title}</h3>
                <p className="mt-1 text-md text-white ">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSlider;
