import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import axios from 'redaxios'
import styled from '@xstyled/emotion'

const SubscribeFormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

const FieldSet = styled.div`
  display: flex;
`

const InputField = styled.input`
  font-size: 1em;
  padding: 10px;
  border: 2px solid #999;
  border-radius: 2px;
  max-width: 400px;
  @media (min-width: 420px) {
    min-width: 260px;
  }
`

const SubmitButton = styled.input`
  cursor: pointer;
  border: none;
  background-color: hsl(145, 63%, 42%);
  color: #fff;
  margin-left: 10px;
  padding: 10px 20px;
  border-radius: 2px;
  font-size: 1em;
  &:hover {
    background-color: hsl(145, 63%, 47%);
  }
`

const SubscribeForm = (props) => {
  const defaultMember = {
    email: '',
  }
  const defaultMessage = ''

  const [member, setMember] = useState(defaultMember)
  const [message, setMessage] = useState(defaultMessage)

  const changeEmail = (event) => {
    setMember({
      email: event.target.value,
    })
  }

  const subscribeMember = async (event) => {
    event.preventDefault()

    if (member.email !== '') {
      try {
        await axios.post(
          `${process.env.REACT_APP_API_URL}/members/subscribe`,
          member
        )
        setMessage(`${member.email} is successfully subscribed!`)
        setMember({ email: '' })
        props.history.push(`/subscribed?email=${member.email}`)
      } catch (error) {
        if (error.status === 409) {
          setMessage(`${member.email} is already subscribed`)
        } else {
          setMessage('Sorry, something went wrong. Please try again.')
        }
      }
    } else {
      setMessage('Please enter your email first.')
    }
  }

  return (
    <SubscribeFormContainer onSubmit={subscribeMember}>
      <FieldSet>
        <InputField
          value={member.email}
          type="email"
          placeholder="you@website.com"
          onChange={changeEmail}
        />
        <SubmitButton type="submit" value="Subscribe" />
      </FieldSet>

      {message && <p>{message}</p>}
    </SubscribeFormContainer>
  )
}

SubscribeForm.propTypes = {
  history: PropTypes.object,
}

export default withRouter(SubscribeForm)
