import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Wrapper from '../../Wrapper'
import Block from './Block'
import { StyledTitle, StyledSlider } from './style'

const Posts = ({ heading, location, posts }) => {
    return (
        <Wrapper>
            <StyledTitle>{heading}</StyledTitle>

            <StyledSlider {...settings}>
                {posts.map(post => {
                    return post.node.acf.location_name === location ?
                        <Block 
                            key={post.node.slug}
                            title={post.node.title}
                            slug={post.node.slug}
                            image={post.node.featured_media.localFile.childImageSharp.fluid}
                        />
                    : ''}
                )}
            </StyledSlider>
        </Wrapper>
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
  infinite: false,
  centerMode: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 870,
      settings: {
        slidesToShow: 1
      }
    },
  ]
};

export default Posts
