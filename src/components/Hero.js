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

const HeroText = styled.p`
  text-align: center;
`

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImage
        src="/assets/logos/logo-compact.svg"
        alt="High Skill Masters logo"
      />
      <HeroText>Global community for highly skilled professionals</HeroText>
    </HeroContainer>
  )
}

export default Hero
