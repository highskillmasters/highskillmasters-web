import React, { useState } from 'react'
import axios from 'redaxios'

import { Page } from '../components'

const Debug = () => {
  const defaultSubscriber = {
    email: 'name@example.com',
  }
  const [subscriber, setSubsriber] = useState(defaultSubscriber)

  const requestData = async () => {
    const response = await axios.get(process.env.REACT_APP_API_URL)
    setSubsriber(response.data)
  }

  const resetData = () => {
    setSubsriber(defaultSubscriber)
  }

  return (
    <Page>
      <h2>Debug Page</h2>
      <button onClick={requestData}>Send Request</button>
      <button onClick={resetData}>Reset Data</button>
      <pre>{JSON.stringify(subscriber, null, 2)}</pre>
    </Page>
  )
}

export default Debug
