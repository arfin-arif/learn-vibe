import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Login.css'
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const [error, setError] = useState()
    const [user, setUser] = useState()
    const { signIn, providerLogin } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider()
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }



    const handleGoogleSigIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)

            })
            .catch(error => console.log(error))
    }

    const handleGitSignIn = () => {
        providerLogin(gitProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (


        <div className='d-flex justify-content-center align-items-center login-container'>
            <div className='log-in'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='' type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='' type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                    <br />
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>

                <p>New to Learn Vibe ?<Link to='/register'> <span className='register-now'>Register Now</span> </Link> </p>
                <div className='pb-5 text-center'>
                    <p>Or Sing Up Using</p>
                    <FaGoogle onClick={handleGoogleSigIn}></FaGoogle>
                    <FaGithub onClick={handleGitSignIn} className='ms-3'></FaGithub>

                </div>

            </div>
        </div>
    );
};

export default Login;