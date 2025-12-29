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
// import Privacy from "./privacy-policy.tsx";

export default function Homepage() {
  return (
    <>
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

      {/* <Privacy /> */}
    </>
  );
}
