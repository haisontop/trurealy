import React from "react";
import { Suspense, lazy, ElementType } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
import AboutConsumer from "../pages/about/AboutConsumer";
import FaqConsumer from "../pages/faq/FaqConsumer";
import GivingBack from "../pages/giving-back/GivingBack";
import AgentHome from "../pages/home/AgentHome";
import Home from "../pages/home/Home";
import HomeConsumer from "../pages/home/HomeConsumer";
import Itp from "../pages/itp/Itp";
import SocialfeedConsumer from "../pages/socialfeed/SocialFeedConsumer";
import TestimonialConsumer from "../pages/testimonial/TestimonialConsumer";

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
        { path: "testimonial", element: <TestimonialConsumer /> },
        { path: "faq", element: <FaqConsumer /> },
        { path: "socialfeeds", element: <SocialfeedConsumer /> },
        { path: 'givingback', element: <GivingBack /> },
        { path: "itp", element: <Itp />}
      ],
    },
    {
      path: "/agent",
      children: [{ path: "home", element: <AgentHome /> }],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
