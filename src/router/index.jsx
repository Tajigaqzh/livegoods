import React from "react";
import {createBrowserRouter,RouterProvider,Route} from 'react-router-dom'
import Home from "../pages/Home";
import LifeService from "../pages/LifeService";
import Shop from "../pages/Shop";
import User from "../pages/User";

const router = createBrowserRouter([
	{
        path:'/',
        element:<Home/>
    },
    {
        path:'/shop',
        element:<Shop/>
    },
    {
        path:'/lifeservice',
        element:<LifeService/>
    },
    {
        path:'/user',
        element:<User/>
    }

])
const Routes = ()=>{
    return(
        <RouterProvider router={router}></RouterProvider>
    )
}
export default Routes
