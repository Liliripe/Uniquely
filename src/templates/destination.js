import React from 'react'
import Helmet from 'react-helmet'

export const DestinationPostTemplate = () => {
  return (
    <div>
      TEST PAGE
    </div>
  )
}

const DestinationPost = () => {
  return (
    <>
      <Helmet title={`Test | Destinations`} />
      <DestinationPostTemplate />
    </>
  )
}
export default DestinationPost
