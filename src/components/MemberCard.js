import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

import { Anchor } from './index'

const MemberCardContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: #fff;
  border-top: 2px solid #27ae60;
  h4,
  h5 {
    margin: 0;
  }
  h5 {
    color: #999;
  }
  ul,
  li {
    margin: 0;
  }
`

const MemberLinkList = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  li {
    margin-right: 10px;
  }
`

const MemberCard = ({ member }) => {
  return (
    <MemberCardContainer>
      <h4>{member.name}</h4>
      {member.role && <h5>{member.role}</h5>}
      {member.links && (
        <MemberLinkList>
          {member.links.map((link, index) => {
            return (
              <li key={index}>
                <Anchor href={link.url}>{link.title}</Anchor>
              </li>
            )
          })}
        </MemberLinkList>
      )}
    </MemberCardContainer>
  )
}

MemberCard.propTypes = {
  member: PropTypes.object.isRequired,
}

export default MemberCard
