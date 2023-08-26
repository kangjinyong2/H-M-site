import React from "react";
import { Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
const Login = ({ setLogin }) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    console.log("users");
    setLogin(true);
    navigate("/");
  };
  return (
    <div>
      <Container>
        <Form className="login" onSubmit={(event) => loginUser(event)}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="danger" type="submit">
            로그인
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
