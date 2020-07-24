import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

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
`

const MemberCard = ({ member }) => {
  return (
    <MemberCardContainer>
      <h4>{member.name}</h4>
      {member.role && <h5>{member.role}</h5>}
    </MemberCardContainer>
  )
}

MemberCard.propTypes = {
  member: PropTypes.object.isRequired,
}

export default MemberCard
