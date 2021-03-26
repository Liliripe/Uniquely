import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { StyledCol, StyledImg, Info, Title, Price } from './style'

const Block = ( {
    key,
    title,
    slug,
    price,
    category,
    image
}) => {

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
        controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <StyledCol xs={12} md={6} lg={4} xl={3} key={key}>
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
                <AniLink fade to={slug}>
                    <StyledImg fluid={image} />
                </AniLink>
                <Info>
                    <AniLink fade to={slug}>
                        <Title>{title}</Title>
                    </AniLink>
                    <Price>${price}</Price>
                </Info>
            </motion.div>
        </StyledCol>
    )
}

export default Block
