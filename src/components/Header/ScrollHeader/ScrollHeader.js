import React from 'react'
import { bool, func } from 'prop-types'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Wrapper from '../../Wrapper'
import Logo from '../Logo'
import Menu from '../Nav/Menu'
import Merchant from '../Nav/Merchant'
import { StyledScrollHeader, StyledWrapper } from './style'

class ScrollHeader extends React.Component {
  componentDidMount() {
    var scrollpos = window.scrollY
    var header = document.querySelector('.scroll-header')

    function add_class_on_scroll() {
      header.classList.add('header-active')
    }
    function remove_class_on_scroll() {
      header.classList.remove('header-active')
    }

    window.addEventListener('scroll', function() {
      scrollpos = window.scrollY

      if (scrollpos > 100) {
        add_class_on_scroll()
      } else {
        remove_class_on_scroll()
      }
    })
  }

  render() {
    return (
      <StyledScrollHeader className="scroll-header">
        <Container fluid>
            <Row>
                <Wrapper>
                    <StyledWrapper>
                        <Col md={1}>
                            <Logo align="left" width="120px" padding="0" />
                        </Col>
                        <Col md={6}>
                            <Menu open={this.props.open} setOpen={this.props.setOpen} />
                        </Col>
                        <Col md={4} className="ml-auto">
                            <Merchant />
                        </Col>
                    </StyledWrapper>
                </Wrapper>
            </Row>
        </Container>
      </StyledScrollHeader>
    )
  }
}

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default ScrollHeader

