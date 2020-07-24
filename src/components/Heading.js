import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

const HeadingContainer = styled.h1`
  font-family: 'Caveat', cursive;
  margin-bottom: 50px;
`

const Heading = (props) => {
  return <HeadingContainer>{props.children}</HeadingContainer>
}

Heading.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Heading
