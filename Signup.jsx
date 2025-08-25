import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

  function Signup() {
    const[email,setEmail] = useState("");
    const[password , setPassword] = useState("");
    const[username,setUsername] = useState("");
    const navigate = useNavigate();



    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = {
            username : username,
            email : email,
            password : password,

        };
        console.log(formData);
        try{
            const response = await axios.post("http://localhost:5000/signup",formData);
            if(response.status === 201){
              navigate('/signin')
                console.log(response.data.message);
            }else{
                console.error("failed to signup")
            }
            }catch(err){
                console.error(err);
            }
        }
  return (
      <Row className="justify-content-md-center">
        <Col md="4">
          <h2 className="text-center">Sign up</h2>
          <Form onSubmit={handleSubmit}>

          <Form.Group controlId="formBasicUsername">
              <Form.Label>username</Form.Label>
              <Form.Control
                type="text"
                placeholder=" enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>


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
           
             Already user <br/>
             <Link to ='/signin'>Signin</Link>
            <Button variant="primary" type="submit" className="w-100">
              Sign up
            </Button>
          </Form>
        </Col>
      </Row>
  )
 }

export default Signup
