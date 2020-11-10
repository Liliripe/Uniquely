import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { StyledSearch } from './style'

const Search = () => {
    return (
        <StyledSearch>
            <a href="/search">
                <FontAwesomeIcon icon={faSearch} />
                <span>Search</span>
            </a>
        </StyledSearch>
    )
}

export default Search
