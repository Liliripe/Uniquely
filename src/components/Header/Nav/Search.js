import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { StyledSearch } from './style'

const Search = () => {
    return (
        <a href="/search"><StyledSearch icon={faSearch} /></a>
    )
}

export default Search
