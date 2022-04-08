import React from "react";
import { Suspense, lazy, ElementType } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
import AboutConsumer from "../pages/about/AboutConsumer";
import FaqConsumer from "../pages/faq/FaqConsumer";
import Home from "../pages/Home/Home";
import HomeConsumer from "../pages/Home/HomeConsumer";
import SocialfeedConsumer from "../pages/socialfeed/SocialFeedConsumer";
import Testimonialconsumer from "../pages/testimonial/TestimonialConsumer";

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
        { path: "testimonial", element: <Testimonialconsumer /> },
        { path: "faq", element: <FaqConsumer /> },
        { path: "socialfeeds", element: <SocialfeedConsumer /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
