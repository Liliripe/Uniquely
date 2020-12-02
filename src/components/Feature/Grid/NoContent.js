import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import { 
  StyledRow,
  StyledCol, 
  StyledText, 
  StyledSmallTitle,
  StyledSubtitle, 
  StyledBackground,
  StyledLink
} from './style'

const NoContent = ({ xs, md }) => {
    const data = useStaticQuery(graphql`
        query {
            AboutImg: file(relativePath: { eq: "about-us.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            ContactImg: file(relativePath: { eq: "contact-us.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 850) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
        controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <StyledRow>
            <StyledCol xs={xs} md={md} className="small-col">
                <StyledText>
                    <StyledSubtitle>Uniquely</StyledSubtitle>
                    <StyledLink 
                        fade 
                        to="/about-us"
                        alt="About Us"
                    >
                        <StyledSmallTitle>About Us</StyledSmallTitle>
                    </StyledLink>
                </StyledText>
            </StyledCol>

            <StyledCol xs={xs} md={md} className="small-col">
                <motion.div
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={{
                        visible: { opacity: 1 },
                        hidden: { opacity: 0 }
                    }}
                    transition={{ duration: 1.3 }}
                >
                    <StyledLink 
                        fade 
                        to="about-us"
                        alt="About Us"
                    >
                        <StyledBackground
                            Tag="div"
                            fluid={data.AboutImg.childImageSharp.fluid}
                        />
                    </StyledLink>
                </motion.div>
            </StyledCol>

            <StyledCol xs={xs} md={md} className="small-col">
                <motion.div
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={{
                        visible: { opacity: 1 },
                        hidden: { opacity: 0 }
                    }}
                    transition={{ duration: 1.3 }}
                >
                    <StyledLink 
                        fade 
                        to="/contact-us"
                        alt="Contact Us"
                    >
                        <StyledBackground
                            Tag="div"
                            fluid={data.ContactImg.childImageSharp.fluid}
                        />
                    </StyledLink>
                </motion.div>
            </StyledCol>

            <StyledCol xs={xs} md={md} className="small-col">
                <StyledText>
                    <StyledSubtitle>Questions?</StyledSubtitle>
                    <StyledLink 
                        fade 
                        to="/contact-us"
                        alt="Contact Us"
                    >
                        <StyledSmallTitle>Contact Us</StyledSmallTitle>
                    </StyledLink>
                </StyledText>
            </StyledCol>
        </StyledRow>
    )
}

export default NoContent
