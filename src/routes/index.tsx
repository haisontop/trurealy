import React from "react";
// import { Suspense, lazy, ElementType } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
import About from "../pages/about/About";
import AgentDirectory from "../pages/agent directory/AgentDirectory";
import Buy from "../pages/buy/Buy";
import Faq from "../pages/faq/Faq";
import GivingBack from "../pages/giving-back/GivingBack";
import AgentHome from "../pages/home/AgentHome";
import Home from "../pages/home/Home";
import HomeConsumer from "../pages/home/HomeConsumer";
import Itp from "../pages/itp/Itp";
import LeaderShip from "../pages/leader-ship/LeaderShip";
import Socialfeed from "../pages/socialfeed/SocialFeed";
import Testimonial from "../pages/testimonial/Testimonial";

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
        { path: "about", element: <About /> },
        { path: "testimonial", element: <Testimonial /> },
        { path: "faq", element: <Faq /> },
        { path: "socialfeeds", element: <Socialfeed /> },
        { path: 'givingback', element: <GivingBack /> },
        { path: "itp", element: <Itp /> },
        { path: "leadership", element: <LeaderShip /> },
        { path: "agentdirectory", element: <AgentDirectory /> },
        { path: "buy", element: <Buy /> }
      ],
    },
    {
      path: "/agent",
      children: [{ path: "home", element: <AgentHome /> }],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
