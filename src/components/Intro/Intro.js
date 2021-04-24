import React, { useEffect } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import { StyledIntro } from './style'

const Intro = ({ align, padding, background }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <StaticQuery
            query={graphql`
                query {
                    wordpressPage(title: {eq: "Home"}) {
                        content
                    }
                }
            `}
            render={data => (
                <StyledIntro>
                    <motion.div
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        variants={{
                            visible: { opacity: 1 },
                            hidden: { opacity: 0 }
                        }}
                        transition={{ duration: 1.3 }}
                        className="intro-wrapper"
                        style={{ textAlign: align, padding: padding, backgroundColor: background }}
                    >
                        <div class="inner-content">
                            <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
                        </div>
                    </motion.div>
                </StyledIntro>
            )}
        />
    )
}

export default Intro
