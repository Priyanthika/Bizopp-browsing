import React , { useState }from 'react';
import styled from 'styled-components';

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


const Signup = () => {

  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const handleSubmit = e => {
    e.preventDefault();
    console.log(data);
    setData('');
  };

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setData(Object.assign(data, { [name]: value }));
  };

    return (
      <div>
          <Wrapper>
        <Form onSubmit={handleSubmit}>
          <h4>Sign up</h4>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            required
          />
          <Button>Sign up</Button>
        </Form>
      </Wrapper>
      </div>
    )
  }
  
  export default Signup;