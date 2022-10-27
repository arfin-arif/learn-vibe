import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Course from "../../Pages/Course/Course";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import GetPremium from "../../Pages/GetPremium/GetPremium";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import ReadMoreCourse from "../../Pages/ReadMoreCourse/ReadMoreCourse";
import Register from "../../Pages/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


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
                loader: () => fetch('https://learn-vive-server.vercel.app/courses')

            },
            {
                path: '/course/premium/:id',
                element: <PrivateRoutes> <GetPremium></GetPremium> </PrivateRoutes>,
                loader: ({ params }) => fetch(`https://learn-vive-server.vercel.app/courses/${params.id}`)
            },

            {
                path: '/courses/:id',
                element: <ReadMoreCourse></ReadMoreCourse>,
                loader: ({ params }) => fetch(`https://learn-vive-server.vercel.app/courses/${params.id}`)
            },

            {
                path: '/category/:id',
                element: <div className=" pt-5 row"><Course ></Course></div>,
                loader: ({ params }) => fetch(`https://learn-vive-server.vercel.app/category/${params.id}`)

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