import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Header from "./header.tsx";
import Cta from "./cta.tsx";
import Home from "./home.tsx";
import Feature from "./feature.tsx";
import Importance from "./importance.tsx";
import Facilites from "./facilities.tsx";
import Why from "./why-ultimutt.tsx";
import Testimonial from "./testimonial.tsx";
import Team from "./team.tsx";
import Faq from "./faq.tsx";
import Footer from "./footer.tsx";
import PopularSearches from "./popular-searches.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <Cta />
    <Home />
    <Importance />
    <Feature />
    <Facilites />
    <Why />
    <Testimonial />
    <Team />
    <Faq />
    <PopularSearches />
    <Footer />
    <App />
  </StrictMode>
);
