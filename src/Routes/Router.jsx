import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Favorites from "../Pages/Favorites";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllReviews from "../Pages/AllReviews";
import ReviewDetails from "../Pages/ReviewDetails";
import MyReviews from "../Pages/MyReviews";
import CreateReview from "../Pages/CreateReview";
import EditReview from "../Pages/EditReview";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <div>Error occurred!</div>,
    hydrateFallbackElement: <div>Loading...</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-reviews",
        element: <AllReviews />,
      },
      {
        path: "/review-details/:id",
        element: <ReviewDetails />,
      },
      {
        path: "/my-reviews",
        element: <MyReviews />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/create-review",
        element: <CreateReview />,
      },
      {
        path: "/edit-review/:id",
        element: <EditReview />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <div>Error occurred!</div>,
    hydrateFallbackElement: <div>Loading...</div>,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);

export default Router;
