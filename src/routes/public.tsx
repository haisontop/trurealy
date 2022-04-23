import { Navigate, useRoutes } from "react-router-dom";
import About from "../pages/About/About";
import Buy from "../pages/Buy/Buy";
import AgentDirectory from "../pages/AgentDirectory/AgentDirectory";
import Faq from "../pages/Faq/Faq";
import GivingBack from "../pages/GivingBack/GivingBack";
import Itp from "../pages/Itp/Itp";
import LeaderShip from "../pages/LeaderShip/LeaderShip";
import Sell from "../pages/Sell/Sell";
import Testimonial from "../pages/Testimonial/Testimonial";
import Rent from "../pages/Rent/Rent";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Form from "../pages/Agent/SignUpForm/Form";
import ConsumerHome from "../pages/Home/ConsumerHome";
import BuildingBloxPodcast from "../pages/BuildingBloxPodcast/BuildingBloxPodcast";
import AgentFaq from "../pages/Faq/AgentFaq";
import PrelicenseNCTemplets from "../pages/PrelicenseNCTemplets/PrelicenseNCTemplets";
import PaymentThankYouPage from "../pages/Agent/PaymentForm/paymentThankYouPage";
import AgentHome from "../pages/Home/AgentHome";
import BuyHome from "../pages/BuyHome/BuyHome";
import AboutAgent from "../pages/Agent/AboutAgent/AboutAgent";
import InThePress from "../pages/InThePress/InThePress";
import BlogLanding from "../pages/Blog/BlogLanding";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import CookiePolicy from "../pages/CookiePolicy/CookiePolicy";
import TermsOfService from "../pages/TermsOfService/TermsOfService";
import DMCAnotice from "../pages/DMCAnotice/DMCAnotice";
import AccessibilityStatement from "../pages/AccessibilityStatement/AccessibilityStatement";
import FairHousingStatement from "../pages/FairHousingStatement/FairHousingStatement";
import MLScomplianceStatements from "../pages/MLScomplianceStatements/MLScomplianceStatements";
import ListingTasks from "../pages/ListingTasks/ListingTasks";
import SocialFeeds from "../pages/SocialFeeds/SocialFeeds";
import Commercial from "../pages/Commercial/Commercial";
import RefundPolicy from "../pages/RefundPolicy/RefundPolicy";
import Locations from "../pages/Locations/Locations";
import TruInvestForm from "../pages/TruInvestForm/TruInvestForm";
import License from "../pages/License/License";

export default function PublicRoutes() {
    return useRoutes([
        {
            path: "/",
            children: [{ element: <Home />, index: true }],
        },
        { path: "building-blox-podcast", element: <BuildingBloxPodcast /> },
        { path: "social-feeds", element: <SocialFeeds /> },
        { path: "in-the-press", element: <InThePress /> },
        { path: "blog", element: <BlogLanding /> },
        { path: "privacy-policy", element: <PrivacyPolicy /> },
        { path: "refund-policy", element: <RefundPolicy /> },
        { path: "cookie-policy", element: <CookiePolicy /> },
        { path: "terms-of-service", element: <TermsOfService /> },
        { path: "DMCA-notice", element: <DMCAnotice /> },
        { path: "locations", element: <Locations /> },
        { path: "tru-invest-form", element: <TruInvestForm /> },
        { path: "license", element: <License /> },
        {
            path: "accessibility-statement",
            element: <AccessibilityStatement />,
        },
        { path: "fair-housing-statement", element: <FairHousingStatement /> },
        {
            path: "MLS-compliance-statements",
            element: <MLScomplianceStatements />,
        },
        { path: "buynew", element: <BuyHome /> },
        { path: "listing-tasks", element: <ListingTasks /> },
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
            ],
        },
        {
            path: "/agent",
            children: [
                { path: "home", element: <AgentHome /> },
                { path: "", element: <Form /> },
                { path: "thankyou", element: <PaymentThankYouPage /> },

                { path: "about", element: <AboutAgent /> },
                { path: "faq", element: <AgentFaq /> },
                { path: "prelicense", element: <PrelicenseNCTemplets /> },
                {
                    path: "testimonial",
                    element: <Testimonial bgTheme="dark" />,
                },
            ],
        },
        { path: "/commercial", element: <Commercial /> },
        { path: "*", element: <Navigate to="/404" replace /> },
    ]);
}
