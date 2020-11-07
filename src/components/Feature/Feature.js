import React from 'react'

import Grid from './Grid'
import Banner from './Banner'
import {  } from './style'

const Feature = ({ grid, number }) => {
  return (
    <>
      {grid ? (
        <Grid number />
      ) : (
        <Banner />
      )} 
    </>
  )
}

export default Feature
