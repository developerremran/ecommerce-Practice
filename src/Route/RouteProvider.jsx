import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../MainLayout/HomePageLayout";
import Home from "../Pages/Home/Home";
import Error from "../Error/Error";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Blog from "../Pages/Blog/Blog";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminLayout from "../MainLayout/AdminLayout";
import Dashboard from "../Admin/Pages/Dashboard";
import ManageItem from "../Admin/Pages/ManageItem";
import ManageUsers from "../Admin/Pages/ManageUsers";
import AdminDashboard from "../Admin/Pages/AdminDashboard";
import AddItem from "../Admin/Pages/AddItem";

const router = createBrowserRouter([
           {
            path:'/',
            errorElement:<Error></Error>,
            element:<HomePageLayout></HomePageLayout>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/blog',
                    element:<PrivateRoute><Blog></Blog></PrivateRoute>
                },
                {
                    path:'/register',
                    element:<Register></Register>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                }
            ]
           },
           {
            path:'/admin-panel',
            element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
            errorElement:<Error></Error>,
            children:[
               
                {
                    path:'admin-dashboard',
                    element:<AdminDashboard></AdminDashboard>
                },
                {
                    path:'manage-item',
                    element:<ManageItem></ManageItem>
                },
                {
                    path:'manage-user',
                    element:<ManageUsers></ManageUsers>
                },
                {
                    path:'item-add',
                    element:<AddItem></AddItem>
                },
            ]
           }

])

export default router;