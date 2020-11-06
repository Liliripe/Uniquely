import React from 'react'

import Nav from '../Nav'
import { StyledScrollHeader } from './style'

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
        <Nav logo />
      </StyledScrollHeader>
    )
  }
}

export default ScrollHeader
