import React from 'react'
import Row from 'react-bootstrap/Row'

import Wrapper from '../../Wrapper'

const Posts = ({ children }) => {
    return (
        <Wrapper>
            <Row>
                {children}
            </Row>
        </Wrapper>
    )
}

export default Posts
