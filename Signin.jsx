

import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom'
import './Signin.css';

function Signin() {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = {
            email:email,
            password:password,

        }; 
        console.log(formData);
        try{
            const response = await axios.post("http://localhost:5000/signin",formData);
            if(response.status === 200){
              navigate("/");
              console.log(response.data.message);
            }
            else if(response.status === 404){
                console.log(response.data.message);
            }
            else{
                console.error("failed to signin")
            }
            }catch(err){
                console.error(err.message);
            }
        }


  return (
    <Row className="justify-content-md-center">
      <Col md="4">
        <h2 className="text-center">Sign In</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group><br/>
         new user <br/>
         <Link to='/'>Signup</Link>

          <Button variant="primary" type="submit" className="w-100">
            Sign in
          </Button>
        </Form>
      </Col>
    </Row>
)
}
  

export default Signin
