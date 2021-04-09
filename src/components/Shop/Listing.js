import React from 'react'
import Row from 'react-bootstrap/Row'

import Breadcrumbs from '../Destination/Breadcrumbs'
import Wrapper from '../Wrapper'
import Block from './Block'

const Listing = ({ banner, products }) => {
    return (
        <>
            <Breadcrumbs
                title="Shop All Products"
                banner={banner}
            />

            <Wrapper>
                <Row>
                    {products.map(product => {
                        return product.node.categories[0].name !== 'Merchant' ? 
                            <Block 
                                key={product.node.slug}
                                title={product.node.name}
                                slug={`https://madebyrossi.com/client/wordpress/product/${product.node.slug}`}
                                price={product.node.price}
                                category={product.node.categories[0].name}
                                image={product.node.images[0].localFile.childImageSharp.fixed}
                            />
                        : ''
                    })}
                </Row>
            </Wrapper>
        </>
    )
}

export default Listing
