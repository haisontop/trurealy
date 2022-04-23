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
import AgentHome from "../pages/Home/AgentHome";
import Itp from "../pages/Itp/Itp";
import Agent from "../pages/Agent/Agent";
import ConsumerHome from "../pages/Home/ConsumerHome";
import Form from "../pages/Agent/SignUpForm/Form";
import BuildingBloxPodcast from "../pages/BuildingBloxPodcast/BuildingBloxPodcast";
import ContactUs from "../pages/Agent/Contact/ContactUs";
import BuyHome from "../pages/BuyHome/BuyHome";
import CookiesPolicy from "../pages/CookiesPolicy/CookiesPolicy";
import DMCAnotice from "../pages/DMCAnotice/DMCAnotice";
import FairHousingStatement from "../pages/FairHousingStatement/FairHousingStatement";
import InvestWithTru from "../pages/InvestWithTru/InvestWithTru";
import PrivacyPloicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import RefundPolicy from "../pages/RefundPolicy/RefundPolicy";
import SocialFeeds from "../pages/SocialFeeds/SocialFeeds";
import Tech from "../pages/Tech/Tech";

export default function Router() {
    return useRoutes([
        {
            path: "/",
            children: [{ element: <Home />, index: true }],
        },
        { path: "BuildingBloxPodcast", element: <BuildingBloxPodcast /> },
        { path: "buynew", element: <BuyHome /> },
        { path: "cookiepolicy", element: <CookiesPolicy /> },
        { path: "dmcanotice", element: <DMCAnotice /> },
        { path: "fairhousingstatement", element: <FairHousingStatement /> },
        { path: "investwithtru", element: <InvestWithTru /> },
        { path: "privacypolicy", element: <PrivacyPloicy /> },
        { path: "refundpolicy", element: <RefundPolicy /> },
        { path: "tech", element: <Tech /> },
        {
            path: "/consumer",
            children: [
                { path: "home", element: <ConsumerHome /> },
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
                { path: "socialfeeds", element: <SocialFeeds /> },
            ],
        },
        {
            path: "/agent",
            children: [
                { path: "home", element: <AgentHome /> },
                { path: "", element: <Form /> },
            ],
        },
        { path: "*", element: <Navigate to="/404" replace /> },
    ]);
}
