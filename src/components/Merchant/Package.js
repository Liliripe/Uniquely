import React from 'react'
import Row from 'react-bootstrap/Row'

import Breadcrumbs from '../Destination/Breadcrumbs'
import Wrapper from '../Wrapper'
import Title from '../Title'
import Block from './Block'

const Package = ({ banner, products }) => {
    return (
        <>
            <Breadcrumbs
                title="Merchant Signup"
                banner={banner}
            />

            <Wrapper>
                <Title
                    title="Select a Package" 
                    subtitle="Signup Options" 
                    align="center"
                    padding="0 0 50px"
                />

                <Row>
                    {products.map(product =>
                        <Block 
                            key={product.node.slug}
                            title={product.node.name}
                            slug={`https://madebyrossi.com/client/wordpress/product/${product.node.slug}`}
                            price={product.node.price}
                            description={product.node.description}
                        />
                    )}
                </Row>
            </Wrapper>
        </>
    )
}

export default Package
