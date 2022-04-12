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
              { path: 'givingback', element: <GivingBack /> },
              { path: "itp", element: <Itp /> },
              { path: "leadership", element: <LeaderShip /> },
              { path: "agentdirectory", element: <AgentDirectory /> },
              { path: "buy", element: <Buy /> },
              { path: "sell", element: <Sell />},
              { path: "rent", element: <Rent /> },
              { path: "contact", element: <Contact /> },
            ],
          },
        {
            path: "/agent",
            children: [{ path: "home", element: <AgentHome /> }],
        },
        { path: "*", element: <Navigate to="/404" replace /> },
    ]);
}