import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

const AnchorContainer = styled.a``

const Anchor = (props) => {
  return (
    <AnchorContainer
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </AnchorContainer>
  )
}

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default Anchor
