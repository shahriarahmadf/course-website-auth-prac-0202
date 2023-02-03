import React, { useContext } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

 

const Register = () => {
    // call register function from context
    const {register} = useContext(AuthContext);
    
    const registerSubmit = e => {
        e.preventDefault();
        console.log('register clicked');
        
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value; 
        const phoneNumber = form.phoneNumber.value;

        const oocupation = form.occupation.value; //not required
        const address = form.address.value; //not required

        register(email,password)
        .then(userCredential => {
            // signed in
            const user = userCredential.user;
            console.log(user);
            form.reset();
        })
        .catch(error => console.log(error));

    }
    return (
        <div>
            <h2 className='text-center'>Please Register</h2>
            <div className='d-flex justify-content-center'>
                <Form onSubmit={registerSubmit}>
                    
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="You cannot change later" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Enter your email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="At least 6 digits" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="phoneNumber">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="tel" pattern="^[0-9]*$" placeholder="So that we may contact you" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="occupation">
                        <Form.Label>Occupation (Optional)</Form.Label>
                        <Form.Control type="text" placeholder="What do you do?"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="address">
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
                        Register
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