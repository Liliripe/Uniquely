import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import Grid from './Grid'
import Copyright from './Copyright'
import { StyledFooter } from './style'

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
      if (inView) {
      controls.start("visible");
      }
  }, [controls, inView]);

  return (
    <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 }
        }}
        transition={{ duration: 1.3 }}
        style={{ width: '100%' }}
    >
      <StyledFooter>
        <Grid />
        <Copyright />
      </StyledFooter>
    </motion.div>
  )
}

export default Footer
