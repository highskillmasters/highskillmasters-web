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
    <Page heading="Email Subscribed">
      {search.email === '' ? (
        <Redirect to="/" />
      ) : (
        <SubscribedContainer>
          <p>
            Your email <ImportantText>{search.email}</ImportantText> is now
            subscribed. Please check the verification email in the inbox.
          </p>
          <p>It should look like this:</p>
          <img
            src="/assets/images/preview-email-verification.png"
            alt="Email Verification Preview"
          />
          <p>After you clicked the link, you will get a confirmation email:</p>
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
