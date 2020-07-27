import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import axios from 'redaxios'
import queryString from 'query-string'

import { Page } from '../components'

const Debug = (props) => {
  const search = queryString.parse(props.location.search)
  const [data, setData] = useState({})

  const requestData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/members?api_key=${search.api_key}`
      )
      setData(response.data)
    } catch (error) {
      setData(error)
    }
  }

  const resetData = () => {
    setData({})
  }

  return (
    <Page>
      <h2>Debug Page</h2>
      <button onClick={requestData}>Send Request</button>
      <button onClick={resetData}>Reset Data</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Page>
  )
}

Debug.propTypes = {
  location: PropTypes.object,
}

export default withRouter(Debug)
