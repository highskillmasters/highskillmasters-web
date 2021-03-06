import React from 'react'
import styled from '@xstyled/emotion'

import { Page, EventCard } from '../components'

import events from '../data/events.json'

const EventList = styled.section``

const Events = () => {
  return (
    <Page heading="HSM Events">
      <EventList>
        {events.reverse().map((event, index) => {
          return <EventCard key={index} event={event} />
        })}
      </EventList>
    </Page>
  )
}

export default Events
