
import React from "react";
import {createBrowserRouter } from "react-router-dom";
import { Home } from "./components/home/home";
import { Login } from "./components/login/login";
import { Users } from "./components/users/users";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/users",
    element: <Users />,
  },
]);