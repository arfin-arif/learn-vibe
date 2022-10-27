import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-center mb-0'>Welcome to Learn Vibe Blog</h2>
            <div className='container '>
                <h5>Q. What is cors?</h5>
                <p>CORS is a node. js package for providing a Connect/Express middleware that can be used to enable CORS with various options.</p>
                <h5>Q. Why are you using `firebase`? What other options do you have to implement authentication?</h5>
                <p>The Firebase Database allows us to build applications where we can implement user login registration and hold user data for later usage without creating our own database.
                    There are many other options for handling Authentication but the most popular are Auth0, MongoDB, Passport, and Okta.
                </p>
                <h5>Q. How does the private route work?</h5>
                <p>Private Routes or Protected Routes in React Router require a user to be authorized to visit a particular route.
                    The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return URL passed in the location state property</p>
                <h5>Q. What is Node? How does Node work?</h5>
                <p className='mb-0'>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser.
                    Javascript was always a client-side language until node.js. Node enables us to use Javascript on the server side. Node. js runs on chrome v8 engine which converts javascript code into machine code this now means we can have consistent language on both ends which could not be done before Node.</p>
            </div>
        </div>
    );
};

export default Blog;