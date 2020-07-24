import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'
import renderHTML from 'react-render-html'

import { AnchorButton } from '../components'

const EventCardContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: #fff;
  border-top: 2px solid #27ae60;
  h4,
  h5,
  h6 {
    margin: 10px 0;
  }
  h5 {
    color: #999;
  }
  p {
    margin: 0;
    margin-top: 20px;
  }
`

const EventCard = ({ event }) => {
  return (
    <EventCardContainer>
      <h4>{event.title}</h4>
      <h5>
        {event.date} · {event.time.start}–{event.time.end} (
        {event.time.timezone})
      </h5>
      <p>
        <AnchorButton href={event.url}>Join Event</AnchorButton>
      </p>
      <p>{renderHTML(event.description)}</p>
    </EventCardContainer>
  )
}

EventCard.propTypes = {
  event: PropTypes.object.isRequired,
}

export default EventCard
