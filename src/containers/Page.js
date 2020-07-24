import React from 'react'
import PropTypes from 'prop-types'

import Navigation from '../components/Navigation'

const Page = (props) => {
  return (
    <div>
      <Navigation></Navigation>

      {props.children}
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Page
