import React from 'react'
import Row from 'react-bootstrap/Row'

import Breadcrumbs from '../Destination/Breadcrumbs'
import Wrapper from '../Wrapper'
import Title from '../Title'
import Block from './Block'

const Package = ({ products }) => {
    return (
        <>
            <Breadcrumbs
                title="Merchant Signup"
                banner="https://madebyrossi.com/client/wordpress/wp-content/uploads/2020/11/santorini.jpg"
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
                            slug={`/${product.node.slug}`}
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
