import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import { motion } from 'framer-motion'

import Header from '../components/Header'
import Footer from '../components/Footer'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="siteContent">
        <motion.div
          className="load-wrapper"
          animate={{ display: 'none' }}
          transition={{ 
              ease: "easeOut", 
              duration: 2,
              delay: 2.5,
            }}
        >
          <motion.div 
            className="load-overlay"
            animate={{ opacity: 0 }}
            transition={{ 
              ease: "easeOut", 
              duration: 2,
              delay: 0.5,
            }}
          />
        </motion.div>
        <Header />
        {children}
        <Footer />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
