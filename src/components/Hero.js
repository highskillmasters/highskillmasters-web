import React from 'react'
import styled from '@xstyled/emotion'

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HeroImage = styled.img`
  max-width: 200px;
  margin: 50px;
`

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImage
        src="/assets/logos/logo-compact.svg"
        alt="High Skill Masters logo"
      />
      <p>
        High Skill Masters is a global community for highly skilled
        professionals in several countries that aimed to be connected worldwide.
      </p>
    </HeroContainer>
  )
}

export default Hero
