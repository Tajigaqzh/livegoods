import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ErrorPage from "../pages/error/404";
import Home from "../pages/Home";
import LifeService from "../pages/LifeService";
import Shop from "../pages/Shop";
import User from "../pages/User";

import BottomNav from "../component/BoottomNav";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/shop",
		element: <Shop />,
	},
	{
		path: "/lifeservice",
		element: <LifeService />,
	},
	{
		path: "/user",
		element: <User />,
	},
]);
const Routes = () => {
	return (
		<div>
			<RouterProvider router={router}></RouterProvider>
			<BottomNav />
		</div>
	);
};
export default Routes;
