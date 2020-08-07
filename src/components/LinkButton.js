import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'
import { Link } from 'react-router-dom'

const LinkButtonContainer = styled(Link)`
  padding: 10px 15px;
  color: #fff;
  background-color: hsl(145, 63%, 42%);
  border-radius: 5px;
  &:hover {
    background-color: hsl(145, 63%, 47%);
  }
`

const LinkButton = ({ to, children }) => {
  return <LinkButtonContainer to={to}>{children}</LinkButtonContainer>
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default LinkButton
