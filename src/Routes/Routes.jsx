import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import ContactUs from "../pages/ContactUs/ContactUs";
import JobPosterHome from "../pages/JobPoster/JobPosterHome";
import AddJob from "../pages/AddJob/AddJob";
import Dashboard from "../Layout/Dashboard";
import DashboardHome from "../pages/DashboardHome/DashboardHome";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import ApplyJob from "../pages/ApplyJob/ApplyJob";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path:'about',
                element:<About></About>
            },
            {
                path:'contact',
                element:<ContactUs></ContactUs>
            },
            {
                path:'job-poster',
                element:<JobPosterHome></JobPosterHome>
            },
            {
                path:'signIn',
                element:<SignIn></SignIn>
            },
            {
                path:'signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'applyJob',
                element:<PrivateRoute><ApplyJob></ApplyJob></PrivateRoute>
            },
            
            
        ],

    },
    {
        path: '/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'home',
                element:<DashboardHome></DashboardHome>
            },
            {
                path:'addJob',
                element:<AddJob></AddJob>
            },
            
            
            
            
        ]
    },
]);