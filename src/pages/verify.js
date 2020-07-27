import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'
import queryString from 'query-string'

import { Page } from '../components'

const SubscribedContainer = styled.section``

const ImportantText = styled.span`
  font-weight: 600;
  color: #27ae60;
`

const Subscribed = (props) => {
  const search = queryString.parse(props.location.search)

  return (
    <Page heading="Email Verified">
      {!search.email && !search.code ? (
        <Redirect to="/" />
      ) : (
        <SubscribedContainer>
          <p>
            Congratulations! Your email{' '}
            <ImportantText>{search.email}</ImportantText> is now verified.
          </p>
          <p>You should also receive the confirmation email:</p>
          <img
            src="/assets/images/preview-email-verified.png"
            alt="Email Verified Preview"
          />
          <p>Thank you!</p>
        </SubscribedContainer>
      )}
    </Page>
  )
}

Subscribed.propTypes = {
  location: PropTypes.object,
}

export default withRouter(Subscribed)
