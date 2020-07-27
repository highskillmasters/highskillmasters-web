import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, Redirect } from 'react-router-dom'
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
  const email = search.email.replace(/ /g, '+')

  return (
    <Page heading="Email Subscribed">
      {!email ? (
        <Redirect to="/" />
      ) : (
        <SubscribedContainer>
          <p>
            Your email <ImportantText>{email}</ImportantText> is now subscribed.
          </p>
          <p>
            Please confirm by clicking the link in the verification email, it
            should look like this:
          </p>
          <img
            src="/assets/images/preview-email-verification.png"
            alt="Email Verification Preview"
          />
          <p>
            We have to verify before sending other information emails to you.
          </p>
          <p>
            If you have not receive the email, please wait for several seconds
            for it to arrive.
          </p>
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
