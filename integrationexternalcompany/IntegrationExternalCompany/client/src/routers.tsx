import {createBrowserRouter } from "react-router-dom";
import { Home } from "./components/home/home";
import { Login } from "./components/login/login";
import { Users } from "./components/users/users";
import { Header } from "./components/header/header";

export const router = createBrowserRouter(
  [
  {
    path: "/",
    element:  <Header />,
    children: [
      {
        path: "/home",
        element: <Home /> ,
      },
      {
        path: "/users",
        element:  <Users />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
]);