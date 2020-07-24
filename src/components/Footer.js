import React from 'react'
import styled from '@xstyled/emotion'

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  p {
    font-size: 0.8em;
    color: #aaa;
    margin: 0;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <p>Copyright 2020 High Skill Masters</p>
    </FooterContainer>
  )
}

export default Footer
