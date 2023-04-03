import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccept] = useState(false);
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email)

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
            })
            .catch(e => {
                console.log(e)
                setError(e.message)
            })
    };

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch((error) => { console.log(error) })
    }

    // check box terms and conditions
    const handleAccepted = (event) => {
        setAccept(event.target.checked)
    }



    return (
        <div className='d-flex m-5 justify-content-center align-items-center login-container  '>
            <div style={{ width: '24rem' }} className='log-in border  border-dark w-full' >
                <h3 className='text-center'>Register</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Your Full Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photoURL' placeholder="Photo URL" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            onClick={handleAccepted}
                            label={<>Accept <Link to='/terms'>Terms And Conditions</Link> </>} />
                    </Form.Group>
                    <div className='text-center'>

                        <Button variant="primary" type="submit" disabled={!accepted}>
                            Register
                        </Button>
                    </div>

                    <br />
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                    <p>Already have an Account ?<Link to='/login' ><span className='register-now'>Log In</span></Link> </p>
                </Form>
            </div>
        </div>
    );
};

export default Register;