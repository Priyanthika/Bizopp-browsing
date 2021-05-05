import React from 'react';
import Burger from './Burger';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #8080ff;
  padding: 0 20px;
  background-color: #8080ff;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
    margin-left:200px;
    font-weight: bold;
    font-family: "Monospace";
    font-size: 25px;
  }
`;
 
const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
      BIZZOP
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar;