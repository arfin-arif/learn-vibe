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


        <div className='d-flex justify-content-center align-items-center'>
            <div className=''>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='' type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
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

                <p>New to Learn Vibe <Link to='/register'>Register Now</Link> </p>
                <p>Or Sing Up Using</p>
                <div className='pb-5'>
                    <FaGoogle onClick={handleGoogleSigIn}></FaGoogle>
                    <FaGithub onClick={handleGitSignIn} className='ms-3'></FaGithub>
                    {/* <ButtonGroup vertical>
                    <Button  variant='outline-primary' > Login With Google  </Button>
                    <Button variant='outline-dark'> Login With GitHub </Button>

                </ButtonGroup> */}
                </div>

            </div>
        </div>
    );
};

export default Login;