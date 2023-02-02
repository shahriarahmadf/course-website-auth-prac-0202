import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Login = () => {
    return (
        <div>
            <h2 className='text-center'>Please Login</h2>
            <div className='d-flex justify-content-center'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required/>

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <Form.Text >
                        <p className="text-muted mt-2">Don't have an account? Please <Link to='/register'>Register</Link></p>
                    </Form.Text>
                </Form>
            </div>
        </div>
    );
};

export default Login;