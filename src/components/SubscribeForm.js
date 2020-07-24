import React, { useState } from 'react'
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
  min-width: 300px;
  border: 2px solid #999;
  border-radius: 2px;
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

const SubscribeForm = () => {
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
        await axios.post(`${process.env.REACT_APP_API_URL}/subscribe`, member)
        setMessage(`${member.email} is successfully subscribed!`)
        setMember({ email: '' })
      } catch (error) {
        setMessage('Sorry, something went wrong. Please try again.')
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

export default SubscribeForm
