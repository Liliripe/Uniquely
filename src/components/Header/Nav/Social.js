import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { SocialCol, SocialLinks } from './style'

const social = ({ width }) => {
    return (
        <SocialCol md={width}>
            <SocialLinks>
                <a href="#" target="blank">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" target="blank">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" target="blank">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </SocialLinks>
        </SocialCol>
    )
}

export default social
