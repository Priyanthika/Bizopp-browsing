import React , { useState } from 'react';
import styled from 'styled-components';
import DataService from '../../services/service';
import axios from "axios";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
  h4{
    color: blue;
    padding: 1.3rem;
    font-size: 30px;
  }
`;

const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: dodgerblue;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: blue;
  }
`;


const Login = () => {
  const loginState = {
    email: "",
    password: ""
  };

  const [loginData, setLoginData] = useState(loginState);
  const handleSubmit = e => {
    e.preventDefault();
    var data = {
      email: loginData.email,
      password: loginData.password
    };
    // axios
    //   .post("http://18.189.20.28/pilotrun/public/index.php/api/login", data)
    //   .then(res => {
    //       console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
    if(data.email=="" || data.password==""){
      alert("Please Insert Email and password!")
        // Swal.fire('Oops...', 'Please Insert Email and password!', 'error')
    }else {
    axios({
      method: "post",
      url: `http://ec2-18-189-20-28.us-east-2.compute.amazonaws.com/pilotrun/public/index.php/api/users/login`,
      data: loginData,
      headers: {"content-type": "application/json"},
    })
    .then(response => {
      console.log(response.data);
      localStorage.setItem('status', response.data.data.status);
      localStorage.setItem('token', response.data.data.token);
      window.location.href = "/"
    })
    .catch(err => {
      console.log(err);
      alert(err)
    })
  }

    console.log(data.email);
  };

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  // const saveData = () => {
  //   var data = {
  //     email: loginData.email,
  //     password: loginData.password
  //   };

  //   DataService.login(data)
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

    return (
      <div>
          <Wrapper>
        <Form onSubmit={handleSubmit}>
          <h4>Login</h4>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            
            onChange={handleChange}
            
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            
            onChange={handleChange}
            
          />
          <Button>Login</Button>
        </Form>
      </Wrapper>
      </div>
    )
  }
  
  export default Login;