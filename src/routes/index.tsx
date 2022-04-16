import React from "react";
// import { Suspense, lazy, ElementType } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
import About from "../pages/About/About";
import Buy from "../pages/Buy/Buy";
import AgentDirectory from "../pages/AgentDirectory/AgentDirectory";
import Faq from "../pages/Faq/Faq";
import GivingBack from "../pages/GivingBack/GivingBack";
import LeaderShip from "../pages/LeaderShip/LeaderShip";
import Sell from "../pages/Sell/Sell";
import Socialfeed from "../pages/SocialFeed/SocialFeed";
import Testimonial from "../pages/Testimonial/Testimonial";
import Rent from "../pages/Rent/Rent";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import HomeConsumer from "../pages/Home/HomeConsumer";
import AgentHome from "../pages/Home/AgentHome";
import Itp from "../pages/Itp/Itp";
import Agent from "../pages/Agent/Agent";
import Agent1 from "../pages/Agent/Steps/step1";
import Agent2 from "../pages/Agent/Steps/step2";
import Agent3 from "../pages/Agent/Steps/step3";
import Agent4 from "../pages/Agent/Steps/step4";
import Agent5 from "../pages/Agent/Steps/step5";
import Agent6 from "../pages/Agent/Steps/step6";
import Agent7 from "../pages/Agent/Steps/step7";

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
                { path: "givingback", element: <GivingBack /> },
                { path: "itp", element: <Itp /> },
                { path: "leadership", element: <LeaderShip /> },
                { path: "agentdirectory", element: <AgentDirectory /> },
                { path: "buy", element: <Buy /> },
                { path: "sell", element: <Sell /> },
                { path: "rent", element: <Rent /> },
                { path: "contact", element: <Contact /> },
            ],
        },
        {
            path: "/agent",
            children: [
                { path: "home", element: <AgentHome /> },
                { path: "", element: <Agent /> },
                { path: "agent1", element: <Agent1 /> },
                { path: "agent2", element: <Agent2 /> },
                { path: "agent3", element: <Agent3 /> },
                { path: "agent4", element: <Agent4 /> },
                { path: "agent5", element: <Agent5 /> },
                { path: "agent6", element: <Agent6 /> },
                { path: "agent7", element: <Agent7 /> },
            ],
        },
        { path: "*", element: <Navigate to="/404" replace /> },
    ]);
}
