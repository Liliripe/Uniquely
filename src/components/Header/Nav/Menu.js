import React from 'react'
import { bool, func } from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { StyledMenu, StyledLink, StyledClose } from './style'

const Menu = ({ open, setOpen }) => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpApiMenusMenusItems(filter: {slug: {eq: "primary"}}) {
            edges{
                node {
                    slug
                    name
                    items {
                        title
                        url
                        object_slug
                    }
                }
            }
        }
      }
    `}
    render={data => (
        <StyledMenu open={open}>
            {data &&
            data.allWordpressWpApiMenusMenusItems &&
            data.allWordpressWpApiMenusMenusItems.edges &&
            data.allWordpressWpApiMenusMenusItems.edges[0] &&
            data.allWordpressWpApiMenusMenusItems.edges[0].node &&
            data.allWordpressWpApiMenusMenusItems.edges[0].node.items &&
            data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
                prop => {
                    return (
                        <li className="menu-item">
                            <StyledLink
                                className="menu-link active"
                                to={prop.url}
                                alt={prop.title}
                            >
                                {prop.title}
                            </StyledLink>
                        </li>
                    )
                }
            )}
            <StyledClose icon={faTimes} open={open} onClick={() => setOpen(!open)} />
        </StyledMenu>
    )}
  />
)

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Menu
