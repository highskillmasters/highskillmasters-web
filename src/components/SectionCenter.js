import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

const SectionCenterContainers = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SectionCenter = (props) => {
  return <SectionCenterContainers>{props.children}</SectionCenterContainers>
}

SectionCenter.propTypes = {
  children: PropTypes.any.isRequired,
}

export default SectionCenter
