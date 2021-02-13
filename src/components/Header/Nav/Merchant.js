import React from 'react'
import { faUser } from '@fortawesome/free-regular-svg-icons'

import { StyledMerchantCol, StyledMerchantLink, StyledUserIcon } from './style'

const Merchant = ({ width }) => {
    return (
        <StyledMerchantCol md={width}>
            <StyledMerchantLink fade className="merchant-link" to="/merchant">
                <StyledUserIcon icon={faUser} />
                <span>Merchant Signup</span>
            </StyledMerchantLink>
        </StyledMerchantCol>
    )
}

export default Merchant
