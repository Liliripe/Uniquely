import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Slide from './Slide'
import { StyledCol } from './style'

const ImageSlider = ({  
  id, 
  name,
  featuredimg,
  img2, 
  img3
}) => {
    return (
      <StyledCol xs={12} md={6}>
        <Slider {...settings}>
            {featuredimg ? 
              <Slide
                key={id}
                name={name}
                image={featuredimg}
              />
            : ''}
            {img2 ? 
              <Slide
                key={id}
                name={name}
                image={img2}
              />
            : ''}
            {img3 ? 
              <Slide
                key={id}
                name={name}
                image={img3}
              />
            : ''}
        </Slider>
      </StyledCol>
    )
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      <div>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      <div>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
    </div>
  );
}

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

export default ImageSlider
