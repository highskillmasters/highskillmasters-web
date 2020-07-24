import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

import { Heading, Navigation, Footer } from './index'

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Content = styled.div`
  flex: 1;
  padding: 10px;
`

const Page = (props) => {
  return (
    <PageContainer>
      <Navigation />

      <Content>
        {props.heading && <Heading>{props.heading}</Heading>}

        {props.children}
      </Content>

      <Footer />
    </PageContainer>
  )
}

Page.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.any.isRequired,
}

export default Page
