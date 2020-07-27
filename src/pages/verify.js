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
  const [isLoading, setIsLoading] = useState(true)
  const [isVerified, setIsVerified] = useState(false)

  useEffect(() => {
    const verifyMemberEmail = async () => {
      setIsLoading(false)
      console.log(search.email)
      try {
        await axios.get(
          `${process.env.REACT_APP_API_URL}/members/verify?email=${search.email}&code=${search.code}`
        )
        setIsVerified(true)
      } catch (error) {
        setIsVerified(false)
      }
    }
    if (isLoading) verifyMemberEmail()
  }, [isLoading, isVerified, search])

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
        </VerifyContainer>
      ) : (
        <VerifyContainer>
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
        </VerifyContainer>
      )}
    </Page>
  )
}

Subscribed.propTypes = {
  location: PropTypes.object,
}

export default withRouter(Subscribed)
