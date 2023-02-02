import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useContext } from 'react';
import 

const Register = () => {
    // call context
    const {} = useContext(register)

    return (
        <div>
            <h2 className='text-center'>Please Register</h2>
            <div className='d-flex justify-content-center'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="At least 6 digits" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMobileNumber">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="tel" placeholder="So that we may contact you" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMobileNumber">
                        <Form.Label>Occupation (Optional)</Form.Label>
                        <Form.Control type="text" placeholder="What do you do?"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMobileNumber">
                        <Form.Label>Address (Optional)</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Select Division</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Barishal">Barishal</option>
                            <option value="Sylhet">Sylhet</option>
                            <option value="Chittagong">Chittagong</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Rajshahi">Rajshahi</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Mymensingh">Mymensingh</option>
                            <option value="Foreign">Outside Bangladesh</option>
                        </Form.Select>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Register``
                    </Button>
                    <Form.Text >
                        <p className="text-muted mt-2">Already have an account? Please <Link to='/login'>Login</Link></p>
                    </Form.Text>
                </Form>
            </div>
        </div>
    );
};

export default Register;