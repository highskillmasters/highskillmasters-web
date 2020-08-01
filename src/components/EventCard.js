import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'
import renderHTML from 'react-render-html'

import { AnchorButton, Card } from '../components'

const EventCardContainer = styled(Card)`
  margin: 20px 0;
  padding: 20px;
  h4,
  h5,
  h6 {
    margin: 10px 0;
  }
  h5 {
    font-size: 1em;
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
      {event.url && (
        <p>
          <AnchorButton href={event.url}>See Details</AnchorButton>
        </p>
      )}
      {event.description && <div>{renderHTML(event.description)}</div>}
    </EventCardContainer>
  )
}

EventCard.propTypes = {
  event: PropTypes.object.isRequired,
}

export default EventCard
