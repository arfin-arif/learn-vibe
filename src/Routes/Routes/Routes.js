import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Course from "../../Pages/Course/Course";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import ReadMoreCourse from "../../Pages/ReadMoreCourse/ReadMoreCourse";
import Register from "../../Pages/Register/Register";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')

            },
            {
                path: '/courses/:id',
                element: <ReadMoreCourse></ReadMoreCourse>,
                loader: (params) => fetch(`http://localhost:5000/courses/${params.id}`)
            },

            {
                path: '/category/:id',
                element: <div className="container">

                    <Course></Course> </div>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },



        ]

    },
    {
        path: '*',
        element: <div className="text-center mt-5"> <h4>404! <br /> This Page Is Not Found</h4> </div>
    }
])