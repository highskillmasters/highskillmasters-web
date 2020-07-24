import React from 'react'
import styled from '@xstyled/emotion'

const SubscribeFormContainer = styled.form`
  display: flex;
`

const InputField = styled.input`
  font-size: 1em;
  padding: 10px;
  border-radius: 2px;
  min-width: 300px;
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
  return (
    <SubscribeFormContainer>
      <InputField type="email" placeholder="you@website.com" />
      <SubmitButton type="submit" value="Subscribe" />
    </SubscribeFormContainer>
  )
}

export default SubscribeForm
