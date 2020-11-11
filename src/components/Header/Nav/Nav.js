import React from 'react'
import { bool, func } from 'prop-types'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Wrapper from '../../Wrapper'
import Social from './Social'
import Menu from './Menu'
import Merchant from './Merchant'
import { StyledNav } from './style'

const Nav = ({ open, setOpen }) => {
    return (
        <Wrapper>
          	<Container fluid>
                  <Row>
                        <StyledNav>
                            <Social width="3" />
                            <Menu width="6" align="center" open={open} setOpen={setOpen} />
                            <Merchant width="3" />
                        </StyledNav>
                    </Row>
              </Container>
        </Wrapper>
    )
}

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Nav
