import React from 'react'
import styled from '@xstyled/emotion'

import { Anchor } from '../components'
import socials from '../data/socials.json'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 20px;
  p {
    font-size: 0.8em;
    color: #aaa;
    margin: 0;
  }
`

const SocialList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
`

const SocialItem = styled.li`
  margin: 0 10px;
  img {
    height: 30px;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <SocialList>
        {socials.map(({ name, url, iconUrl }, index) => {
          return (
            <SocialItem key={index}>
              <Anchor href={url}>
                <img src={iconUrl} alt={name} />
              </Anchor>
            </SocialItem>
          )
        })}
      </SocialList>

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
