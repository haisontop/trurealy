import { Navigate, useRoutes } from "react-router-dom";
import { Home as AgentHome } from "../pages/Agent/Home";
import About from "../pages/About/About";
import Buy from "../pages/Buy/Buy";
import AgentDirectory from "../pages/AgentDirectory/AgentDirectory";
import Faq from "../pages/Faq/Faq";
import GivingBack from "../pages/GivingBack/GivingBack";
import Itp from "../pages/Itp/Itp";
import LeaderShip from "../pages/LeaderShip/LeaderShip";
import Sell from "../pages/Sell/Sell";
import Socialfeed from "../pages/SocialFeed/SocialFeed";
import Testimonial from "../pages/Testimonial/Testimonial";
import Rent from "../pages/Rent/Rent";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import HomeConsumer from "../pages/Home/HomeConsumer";
import Agent from "../pages/Agent/Agent";
import Agent1 from "../pages/Agent/Steps/step1";
import Agent2 from "../pages/Agent/Steps/step2";
import Agent3 from "../pages/Agent/Steps/step3";
import Agent4 from "../pages/Agent/Steps/step4";
import Agent5 from "../pages/Agent/Steps/step5";
import Agent6 from "../pages/Agent/Steps/step6";
import Agent7 from "../pages/Agent/Steps/step7";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import RefundPolicy from "../pages/RefundPolicy/RefundPolicy";
import CookiePolicy from "../pages/CookiePolicy/CookiePolicy";
import InThePress from "../pages/InThePress/InThePress";
import ListingTasks from "../pages/ListingTasks/ListingTasks";
import SocialFeeds from "../pages/SocialFeeds/SocialFeeds";
import BlogLanding from "../pages/Blog/BlogLanding";
import TermsOfService from "../pages/TermsOfService/TermsOfService";
import DMCAnotice from "../pages/DMCAnotice/DMCAnotice";
import AccessibilityStatement from "../pages/AccessibilityStatement/AccessibilityStatement";
import FairHousingStatement from "../pages/FairHousingStatement/FairHousingStatement";
import MLScomplianceStatements from "../pages/MLScomplianceStatements/MLScomplianceStatements";
import BuildingBloxPodcast from "../pages/BuildingBloxPodcast/BuildingBloxPodcast";
import Locations from "../pages/Locations/Locations";
import AgentFaq from "../pages/Faq/AgentFaq";
import PrelicenseNCTemplets from "../pages/PrelicenseNCTemplets/PrelicenseNCTemplets";

export default function PublicRoutes() {
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
                { path: "step1", element: <Agent1 /> },
                { path: "step2", element: <Agent2 /> },
                { path: "step3", element: <Agent3 /> },
                { path: "step4", element: <Agent4 /> },
                { path: "step5", element: <Agent5 /> },
                { path: "step6", element: <Agent6 /> },
                { path: "step7", element: <Agent7 /> },
                { path: "about", element: <About /> },
                { path: "faq" , element: <AgentFaq />},
                { path: "prelicense", element: <PrelicenseNCTemplets />}
            ],
        },
        { path: "privacy-policy", element: <PrivacyPolicy /> },
        { path: "refund-policy", element: <RefundPolicy /> },
        { path: "cookie-policy", element: <CookiePolicy /> },
        { path: "in-the-press", element: <InThePress /> },
        { path: "listing-tasks", element: <ListingTasks /> },
        { path: "social-feeds", element: <SocialFeeds /> },
        { path: "blog", element: <BlogLanding /> },
        { path: "terms-of-service", element: <TermsOfService /> },
        { path: "DMCA-notice", element: <DMCAnotice /> },
        {
            path: "accessibility-statement",
            element: <AccessibilityStatement />,
        },
        { path: "fair-housing-statement", element: <FairHousingStatement /> },
        {
            path: "MLS-compliance-statements",
            element: <MLScomplianceStatements />,
        },
        { path: "building-blox-podcast", element: <BuildingBloxPodcast /> },
        { path: "locations", element: <Locations /> },

        { path: "*", element: <Navigate to="/404" replace /> },
    ]);
}
