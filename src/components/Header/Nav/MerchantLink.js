import React from 'react'
import { faUser } from '@fortawesome/free-regular-svg-icons'

import { StyledMerchantLink, StyledUserIcon } from './style'

const MerchantLink = () => {
    return (
        <StyledMerchantLink fade className="merchant-link" to="/merchant-signup">
            <StyledUserIcon icon={faUser} />
            <span>Merchant Signup</span>
        </StyledMerchantLink>
    )
}

export default MerchantLink
