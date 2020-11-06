import React from 'react'
import { faUser } from '@fortawesome/free-regular-svg-icons'

import { StyledMerchantLink, StyledUserIcon } from './style'

const MerchantLink = () => {
    return (
        <StyledMerchantLink to="/">
            <StyledUserIcon icon={faUser} />
            <span>Merchant Signup</span>
        </StyledMerchantLink>
    )
}

export default MerchantLink
