import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Breadcrumbs from '../components/Category/Breadcrumbs'
import Navigation from '../components/Category/Navigation'
import NavItem from '../components/Category/Navigation/Item'
import CategoryList from '../components/Category/Posts'
import CategoryBlock from '../components/Category/Posts/Block'

const Category = ({ data, pageContext }) => {
  const { title: siteTitle } = data.site.siteMetadata
  const { name: category } = pageContext
  const thisCat = data.wordpressCategory
  const allCat = data.allWordpressCategory.edges

  return (
    <>
      <Helmet title={`${category} | ${siteTitle}`} />

      <Breadcrumbs 
        title={thisCat.name}
        image={thisCat.acf.featured_image.localFile.childImageSharp.fluid.src}
      />
  
      <Navigation category={category}>
        {allCat.map(cat => {
          return cat.node.name == 'Carousel' ? '' : 
          cat.node.name == 'Featured' ? '' :
          cat.node.name == 'Popular' ? '' :
          cat.node.name == 'Destinations' ? '' :
          cat.node.name == 'Uncategorized' ? '' :
            <NavItem 
              category={category}
              name={cat.node.name}
              slug={`/categories/${cat.node.slug}`}
              key={cat.node.id}
            />
          }
        )}
      </Navigation>

      <CategoryList>
        {allCat.map(cat => {
          return cat.node.name == 'Carousel' ? '' : 
          cat.node.name == 'Featured' ? '' :
          cat.node.name == 'Popular' ? '' :
          cat.node.name == 'Destinations' ? '' :
          cat.node.name == 'Uncategorized' ? '' :
            <CategoryBlock
              name={cat.node.name}
              key={cat.node.id}
              slug={`/categories/${cat.node.slug}`}
              image={cat.node.acf.featured_image.localFile.childImageSharp.fluid}
            />
          }
        )}
      </CategoryList>
    </>
  )
}

export default Category

export const pageQuery = graphql`
  query CategoryPage($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    wordpressCategory(slug: {eq: $slug}) {
      name
      acf {
        featured_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920) {
                src
              }
            }
          }
        }
      }
    }
    allWordpressCategory {
      edges {
        node {
          name
          id
          slug
          acf {
            featured_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1920) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
