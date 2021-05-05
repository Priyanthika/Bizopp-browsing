import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    color: #fff;
    span{
      color: #fff;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

// const Login = () => {
  // const loginState = {
  //   email: "",
  //   password: ""
  // };

const RightNav = ({ open }) => {
    return (
      <Ul open={open}>
        <li><Link to={`/login`}><span>LOGIN</span></Link></li>
        <li><Link to={`/signup`}><span>SIGN UP</span></Link></li>
      </Ul>
    )
  }

export default RightNav;
