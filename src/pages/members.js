import React from 'react'
import styled from '@xstyled/emotion'

import { Page, MemberCard } from '../components'

import members from '../data/members.json'

const MemberList = styled.section``

const Members = () => {
  return (
    <Page heading="Members">
      <MemberList>
        {members.map((member, index) => {
          return <MemberCard key={index} member={member} />
        })}
      </MemberList>
    </Page>
  )
}

export default Members
