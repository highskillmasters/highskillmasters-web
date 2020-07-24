import React from 'react'

import { Page, Hero, SectionCenter, SubscribeForm } from '../components'

const Home = () => {
  return (
    <Page>
      <Hero />

      <SectionCenter>
        <h3>Subscribe for Event Updates:</h3>
        <SubscribeForm></SubscribeForm>
      </SectionCenter>
    </Page>
  )
}

export default Home
