import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';


const Login = () => {
    // call login function from context
    const {login} = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        console.log('Login Clicked');

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        login(email,password)
        .then(userCredential => {
            const user = userCredential.user;
            console.log(user);
            form.reset();
        })
    }
    return (
        <div>
            <h2 className='text-center'>Please Login</h2>
            <div className='d-flex justify-content-center'>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Enter email" required/>

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="At least 6 digits" required/>
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