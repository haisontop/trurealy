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
  import HomeConsumer from "../pages/Home/HomeConsumer";
  import BuildingBloxPodcast from "../pages/BuildingBloxPodcast/BuildingBloxPodcast";
  import AgentFaq from "../pages/Faq/AgentFaq";
  import PrelicenseNCTemplets from "../pages/PrelicenseNCTemplets/PrelicenseNCTemplets";
  import PaymentThankYouPage from "../pages/Agent/PaymentForm/paymentThankYouPage";
  import AgentHome from "../pages/Home/AgentHome";
  import BuyHome from "../pages/BuyHome/BuyHome";
import Commercial from "../pages/Commercial/Commercial";

  export default function PublicRoutes() {
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
                  { path: "", element: <Form /> },
                  { path: "thankyou", element: <PaymentThankYouPage /> },

                  { path: "about", element: <About /> },
                  { path: "faq", element: <AgentFaq /> },
                  { path: "prelicense", element: <PrelicenseNCTemplets /> },
                  {
                      path: "testimonial",
                      element: <Testimonial bgTheme="dark" />,
                  },
              ],
          },
          {
              path: "/commercial",
              element: <Commercial />
          },
          { path: "*", element: <Navigate to="/404" replace /> },
      ]);
  }
