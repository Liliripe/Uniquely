import React from 'react'
import { bool } from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { StyledMenu, StyledLink } from './style'

const Menu = ({ open }) => (
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
                        <li className="nav-item">
                            <StyledLink
                                className="nav-link active"
                                to={prop.url}
                                alt={prop.title}
                            >
                                {prop.title}
                            </StyledLink>
                        </li>
                    )
                }
            )}
        </StyledMenu>
    )}
  />
)

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu
