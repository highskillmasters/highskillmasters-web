import React from 'react'
import styled from '@xstyled/emotion'

import { Page, Anchor } from '../components'

const ProfessionList = styled.ul`
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
`

const About = () => {
  return (
    <Page heading="About Us">
      <p>
        Join our events, gather, and network with like-minded professionals:
      </p>
      <ProfessionList>
        <li>business owners</li>
        <li>entrepreneurs</li>
        <li>infopreneurs</li>
        <li>executives</li>
        <li>educators</li>
        <li>teachers</li>
        <li>mentors</li>
        <li>coaches</li>
        <li>advisors</li>
        <li>engineers</li>
        <li>programmers</li>
        <li>developers</li>
        <li>designers</li>
        <li>digital marketers</li>
        <li>writers</li>
        <li>authors</li>
        <li>consultants</li>
        <li>creators</li>
        <li>technologists</li>
        <li>makers</li>
        <li>inventors</li>
        <li>photographers</li>
        <li>videographers</li>
        <li>podcasters</li>
        <li>influencers</li>
        <li>scientists</li>
        <li>researchers,</li>
        <li>speakers</li>
        <li>organizers</li>
        <li>closers</li>
        <li>recruiters</li>
        <li>travelers</li>
        <li>nomads</li>
        <li>investors</li>
        <li>your fancy professions!</li>
      </ProfessionList>
      <p>Previously we were on Meetup.com groups:</p>
      <ul>
        <li>
          <Anchor href="https://meetup.com/highskillmasters-indonesia">
            Indonesia
          </Anchor>
        </li>
        <li>
          <Anchor href="https://meetup.com/highskillmasters-malaysia">
            Malaysia
          </Anchor>
        </li>
        <li>
          <Anchor href="https://meetup.com/highskillmasters-singapore">
            Singapore
          </Anchor>
        </li>
      </ul>
    </Page>
  )
}

export default About
