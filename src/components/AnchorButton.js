import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

const AnchorButtonContainer = styled.a`
  padding: 10px;
  color: #fff;
  background-color: #27ae60;
  border-radius: 5px;
`

const AnchorButton = (props) => {
  return (
    <AnchorButtonContainer
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </AnchorButtonContainer>
  )
}

AnchorButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default AnchorButton
