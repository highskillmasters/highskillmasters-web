import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'
import queryString from 'query-string'
import axios from 'redaxios'

import { Page } from '../components'

const VerifyContainer = styled.section``

const ImportantText = styled.span`
  font-weight: 600;
  color: #27ae60;
`

const Subscribed = (props) => {
  const search = queryString.parse(props.location.search)
  const email = search.email.replace(/ /g, '+')
  const code = search.code

  const [isLoading, setIsLoading] = useState(true)
  const [isVerified, setIsVerified] = useState(false)

  useEffect(() => {
    const verifyMemberEmail = async () => {
      setIsLoading(false)
      try {
        console.log(
          `${process.env.REACT_APP_API_URL}/members/verify?email=${email}&code=${code}`
        )
        await axios.get(
          `${process.env.REACT_APP_API_URL}/members/verify?email=${email}&code=${code}`
        )
        setIsVerified(true)
      } catch (error) {
        setIsVerified(false)
      }
    }
    if (isLoading) verifyMemberEmail()
  }, [isLoading, isVerified, email, code])

  return (
    <Page heading={!isVerified ? 'Verify Email Failed' : 'Email Verified'}>
      {isLoading && !isVerified ? (
        <VerifyContainer>
          <p>Verifying your email...</p>
        </VerifyContainer>
      ) : !isLoading && !isVerified ? (
        <VerifyContainer>
          <p>
            Your email or verification code are invalid. You also might already
            verified.
          </p>
          <p>You might check the confirmation email:</p>
          <img
            src="/assets/images/preview-email-verified.png"
            alt="Email Verified Preview"
          />
          <p>Thank you!</p>
        </VerifyContainer>
      ) : (
        <VerifyContainer>
          <p>
            Congratulations! Your email <ImportantText>{email}</ImportantText>{' '}
            is now verified.
          </p>
          <p>You should also receive the confirmation email:</p>
          <img
            src="/assets/images/preview-email-verified.png"
            alt="Email Verified Preview"
          />
          <p>Thank you!</p>
        </VerifyContainer>
      )}
    </Page>
  )
}

Subscribed.propTypes = {
  location: PropTypes.object,
}

export default withRouter(Subscribed)
