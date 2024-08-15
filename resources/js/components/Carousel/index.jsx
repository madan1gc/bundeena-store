import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = ({ sliderContent, style, slidesToShow }) => {
  var sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <div className={`slider-container ${style}`}>
      <Slider {...sliderSettings}>
        {sliderContent.map((content, index) => (
          <div className="slider-content" key={index}>
            <div className="text">
              <h2>{content.title}</h2>
              <p>{content.description}</p>
              {content.buttonText && <a className="button secondary-button" href={content.link}>{content.buttonText}</a>}
            </div>
            <div className="image">
              <img src={content.image} alt={content.title} />
            </div>
          </div>
        ))}
      </Slider>
    </div>

  );
};

export default Carousel;
