import React from 'react'

import { Page, Hero, SectionCenter, SubscribeForm } from '../components'

const Home = () => {
  return (
    <Page>
      <Hero />

      <SectionCenter>
        <h6>Subscribe for Event Updates:</h6>
        <SubscribeForm></SubscribeForm>
      </SectionCenter>
    </Page>
  )
}

export default Home
