import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ images = [] }) {
  const settings = {    
    customPaging: function(i) {
      return (
        <a className="text-white hover:cursor-pointer slick-dot text-xl">
          •
        </a>
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container rounded">
      <style>
        {`
          .slick-dots li {
            margin: 0 5px;
          }

          .slick-dots li a {
            font-size: 25px; /* Tamaño normal */
            transition: all 0.3s ease;
          }

          .slick-dots li.slick-active a {
            font-size: 30px; /* Punto más grande cuando está activo */
          }
        `}
      </style>
      <Slider {...settings}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} className="w-full h-auto object-contain" />
        ))}
      </Slider>
    </div>
  );
}
