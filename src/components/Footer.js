import React from 'react'
import styled from '@xstyled/emotion'

import { Anchor } from '../components'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <p>
        <small>
          <Anchor href="https://github.com/highskillmasters">
            This platform is still in under heavy development
          </Anchor>
        </small>
      </p>
    </FooterContainer>
  )
}

export default Footer
