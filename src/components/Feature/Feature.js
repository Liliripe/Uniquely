import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Wrapper from '../Wrapper'
import Grid from './Grid'
import Banner from './Banner'
import {  } from './style'

const Feature = ({ grid, number }) => {
  return (
    <Wrapper>
      <Container fluid>
        <Row>
          {grid ? (
            <Grid number />
          ) : (
            <Banner />
          )} 
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Feature
