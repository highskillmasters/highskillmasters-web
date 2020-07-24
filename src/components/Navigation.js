import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@xstyled/emotion'

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: center;
  margin: 10px;
`

const NavigationIcon = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
  img {
    width: 30px;
  }
`

const NavigationList = styled.ul`
  display: flex;
  padding: 0;
  list-style-type: none;
  li {
    margin: 0 10px;
    a:hover {
      color: #5e5e5e;
      border-bottom: 2px solid #4a4a4a;
    }
  }
`

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationIcon>
        <Link to="/">
          <img src="/assets/icons/icon-compact.svg" alt="Icon" />
        </Link>
      </NavigationIcon>

      <NavigationList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/members">Members</Link>
        </li>
      </NavigationList>
    </NavigationContainer>
  )
}

export default Navigation
