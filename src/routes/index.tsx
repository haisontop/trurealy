import React from "react";
import { Suspense, lazy, ElementType } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
import AboutConsumer from "../pages/about/AboutConsumer";
import Home from "../pages/home/Home";
import HomeConsumer from "../pages/home/HomeConsumer";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      children: [{ element: <Home />, index: true }],
    },
    {
      path: "/consumer",
      children: [
        { path: "home", element: <HomeConsumer /> },
        { path: "about", element: <AboutConsumer /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
