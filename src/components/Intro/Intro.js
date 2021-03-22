import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import { StyledIntro } from './style'

const Intro = ({ title, align, padding, background, children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
      if (inView) {
      controls.start("visible");
      }
  }, [controls, inView]);

    return (
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
                    <h2>{title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: children }} />
                </div>
            </motion.div>
        </StyledIntro>
    )
}

export default Intro
