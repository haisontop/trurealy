import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import About from "../pages/About/About";
import Buy from "../pages/Buy/Buy";
import AgentDirectory from "../pages/AgentDirectory/AgentDirectory";
import Faq from "../pages/Faq/Faq";
import GivingBack from "../pages/GivingBack/GivingBack";
import LeaderShip from "../pages/LeaderShip/LeaderShip";
import Sell from "../pages/Sell/Sell";
import Testimonial from "../pages/Testimonial/Testimonial";
import Rent from "../pages/Rent/Rent";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import HomeConsumer from "../pages/Home/HomeConsumer";
import AgentHome from "../pages/Home/AgentHome";
import Itp from "../pages/Itp/Itp";
import Agent from "../pages/Agent/Agent";
import ConsumerHome from "../pages/Home/ConsumerHome";
import Form from "../pages/Agent/SignUpForm/Form";
import BuildingBloxPodcast from "../pages/BuildingBloxPodcast/BuildingBloxPodcast";
import BuyHome from "../pages/BuyHome/BuyHome";

export default function Router() {
    return useRoutes([
        {
            path: "/",
            children: [{ element: <Home />, index: true }],
        },
        { path: "BuildingBloxPodcast", element: <BuildingBloxPodcast /> },
        { path: "buynew", element: <BuyHome /> },
        {
            path: "/consumer",
            children: [
                { path: "home", element: <HomeConsumer /> },
                { path: "about", element: <About /> },
                { path: "testimonial", element: <Testimonial /> },
                { path: "faq", element: <Faq /> },
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
                { path: "", element: <Form  /> },
            ],
        },
        { path: "*", element: <Navigate to="/404" replace /> },
    ]);
}
