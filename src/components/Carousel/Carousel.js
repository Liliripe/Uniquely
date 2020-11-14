import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Wrapper from '../Wrapper'
import Slide from './Slide'
import { StyledIcon } from './style'

const Carousel = ({ limit }) => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpDestinations(
          filter: {categories: {elemMatch: {slug: { eq: "carousel" }}}}
        ) {
          edges {
            node {
              title
              id
              slug
              excerpt
              categories {
                name
              }
              featured_media {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render = { data => (
      <Wrapper>
        <Slider {...settings}>
          {data.allWordpressWpDestinations.edges.slice(0, `${limit}`).map(destination => (
            <Slide 
              key={destination.node.id} 
              title={destination.node.title}
              slug={destination.node.slug}
              excerpt={destination.node.excerpt}
              image={destination.node.featured_media.localFile.childImageSharp.fluid}
            />
          ))}
        </Slider>
      </Wrapper>
    )}
  />
)

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      <div>
        <StyledIcon icon={faArrowRight} />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      <div>
        <StyledIcon icon={faArrowLeft} />
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
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

export default Carousel
