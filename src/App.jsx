import { Button } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Aboutconsumer from "./pages/about/AboutConsumer";
import Faqconsumer from "./pages/faq/FaqConsumer";
import Home from "./pages/Home/Home";
import Homecosumer from "./pages/Home/HomeCosumer";
import Testimonialconsumer from "./pages/testimonial/TestimonialConsumer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/consumer/home" element={<Homecosumer />} />
          <Route path="/consumer/about" element={<Aboutconsumer />} />
          <Route path="/consumer/testimonial" element={<Testimonialconsumer />} />
          <Route path="/consumer/faq" element={<Faqconsumer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
