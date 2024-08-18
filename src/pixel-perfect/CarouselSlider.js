import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CarouselSlider.css';

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow arrow-right hover:scale-110 transition-transform duration-500" onClick={onClick}>
      &gt;
    </div>
  );
}

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow arrow-left hover:scale-110 transition-transform duration-500" onClick={onClick}>
      &lt;
    </div>
  );
}

const CarouselSlider = ({ title }) => {
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
    <div className="carousel-container ">
      <div className='text-6xl md:text-6xl font-bold text-center mb-10 font-clash-grotesk'>
        <h1>Themes</h1>
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide transition-transform duration-700 transform hover:scale-105">
            <img className="image-zoom" src={image.url} alt={image.title} />
            <div className="caption transition-opacity duration-700 transform translate-y-4 opacity-100 hover:translate-y-0 overflow-x-hidden">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSlider;
